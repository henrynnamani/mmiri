import { LoginDto, RegisterDto } from '@/auths/dto/auths.dto';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Vendor } from './model/vendors.model';
import { VendorModelAction } from './model/vendors.model-action';
import * as SYS_MSG from '@/common/system-message';
import { hashPassword, verifyPassword } from '@/common/utils/auth';
import { LocationsService } from '@/locations/locations.service';
import { VendorLocationsService } from '@/vendor_locations/vendor_locations.service';
import { ConfigService } from '@nestjs/config';
import { SERVICE_CHARGE } from '@/common/constants';
import axios from 'axios';

@Injectable()
export class VendorsService {
  constructor(
    private vendorModelAction: VendorModelAction,
    private locationsService: LocationsService,
    private vendorLocationService: VendorLocationsService,
    private config: ConfigService,
  ) {}

  async registerVendor(registerDto: RegisterDto): Promise<Vendor> {
    const vendorExist = await this.getVendorByEmail(registerDto.email);

    if (vendorExist) {
      throw new BadRequestException(SYS_MSG.VENDOR_ALREADY_EXIST);
    }

    const hashedPassword = await hashPassword(registerDto.password);

    const subAccountCode = await this.createSubaccount(
      registerDto.businessName,
      registerDto.bankCode,
      registerDto.accountNumber,
    );

    const payload = {
      ...registerDto,
      subaccount: subAccountCode?.data?.data?.subaccount_code,
      password: hashedPassword,
    };

    await this.vendorModelAction.create({
      createPayload: payload,
      transactionOptions: {
        useTransaction: false,
      },
    });

    const createdVendor = await this.vendorModelAction.get({
      getRecordIdentifierOption: { email: payload.email },
    });

    if (!createdVendor) {
      throw new InternalServerErrorException(SYS_MSG.VENDOR_NOT_CREATED);
    }

    return createdVendor;
  }

  async verifyVendor(loginDto: LoginDto): Promise<Vendor> {
    const vendorExist = await this.getVendorByEmail(loginDto.email);

    if (!vendorExist) {
      throw new NotFoundException(SYS_MSG.VENDOR_NOT_FOUND);
    }

    const isPasswordValid = await verifyPassword(
      loginDto.password,
      vendorExist.password,
    );

    if (!isPasswordValid) {
      throw new BadRequestException(SYS_MSG.INVALID_VENDOR_CREDENTIALS);
    }

    return vendorExist;
  }

  getVendorByEmail(email: string) {
    return this.vendorModelAction.get({
      getRecordIdentifierOption: { email },
    });
  }

  getVendorById(id: string) {
    return this.vendorModelAction.get({
      getRecordIdentifierOption: { id },
    });
  }

  getAllVendors() {
    return this.vendorModelAction.list({
      pagination: {
        page: 1,
        limit: 10,
      },
      queryOption: {
        available: true,
      },
    });
  }

  async changeAvailabilityStatus(vendorId: string) {
    const vendorExist = await this.getVendorById(vendorId);

    if (!vendorExist) {
      throw new NotFoundException(SYS_MSG.VENDOR_NOT_FOUND);
    }

    const payload = {
      available: !vendorExist.available,
    };

    await this.vendorModelAction.update({
      identifierOptions: { id: vendorId },
      updatePayload: payload,
      transactionOption: {
        useTransaction: false,
      },
    });

    const updatedVendor = await this.getVendorById(vendorId);

    return {
      data: updatedVendor,
      message: SYS_MSG.VENDOR_AVAILABILITY_UPDATED,
    };
  }

  async addServingLocation(vendorId: string, locationId: string) {
    const vendorExist = await this.getVendorById(vendorId);

    if (!vendorExist) {
      throw new NotFoundException(SYS_MSG.VENDOR_NOT_FOUND);
    }

    const locationExist =
      await this.locationsService.findLocationById(locationId);

    if (!locationExist) {
      throw new NotFoundException(SYS_MSG.LOCATION_NOT_FOUND);
    }

    const response = await this.vendorLocationService.addServingLocation(
      vendorExist,
      locationExist,
    );

    if (!response) {
      throw new InternalServerErrorException(
        SYS_MSG.VENDOR_FAILED_LOCATION_UPDATE,
      );
    }

    return {
      message: SYS_MSG.VENDOR_SERVING_LOCATION_UPDATED,
      data: response,
    };
  }

  async createSubaccount(
    businessName: string,
    bankCode: string,
    accountNumber: string,
  ) {
    const url = `${this.config.get<string>('paystack.baseUrl')}/subaccount`;

    const payload = {
      business_name: businessName,
      bank_code: bankCode,
      account_number: accountNumber,
      percentage_charge: SERVICE_CHARGE,
    };

    const headers = {
      Authorization: `Bearer ${this.config.get<string>('paystack.secretKey')}`,
      'Content-Type': 'application/json',
    };

    const response = await axios.post(`${url}`, payload, {
      headers,
    });

    return response;
  }
}
