import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Vendor } from './model/vendors.model';
import { VendorModelAction } from './model/vendors.model-action';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { LocationsService } from '@modules/locations/locations.service';
import { VendorLocationsService } from '@modules/vendor_locations/vendor_locations.service';
import * as SYS_MSG from '@modules/common/system-message';
import { SERVICE_CHARGE } from '@modules/common/constants';
import { VendorRegisterDto } from './dto/vendor.dto';

@Injectable()
export class VendorsService {
  constructor(
    private vendorModelAction: VendorModelAction,
    private config: ConfigService,
  ) {}

  async registerVendor(registerDto: VendorRegisterDto): Promise<Vendor> {
    const vendorExist = await this.getVendorByEmail(registerDto.email);

    if (vendorExist) {
      throw new BadRequestException(SYS_MSG.VENDOR_ALREADY_EXIST);
    }

    const subAccountCode = await this.createSubaccount(
      registerDto.businessName,
      registerDto.bankCode,
      registerDto.accountNumber,
    );

    const payload = {
      ...registerDto,
      subaccount: subAccountCode?.data?.data?.subaccount_code,
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

  getVendorByEmail(email: string) {
    return this.vendorModelAction.get({
      getRecordIdentifierOption: { email },
    });
  }

  getVendorByChatId(chatId: number) {
    return this.vendorModelAction.get({
      getRecordIdentifierOption: { chatId },
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

  async changeAvailabilityStatus(chatId: number) {
    const vendorExist = await this.getVendorByChatId(chatId);

    if (!vendorExist) {
      throw new NotFoundException(SYS_MSG.VENDOR_NOT_FOUND);
    }

    const payload = {
      isActive: !vendorExist.isActive,
    };

    await this.vendorModelAction.update({
      identifierOptions: { chatId },
      updatePayload: payload,
      transactionOption: {
        useTransaction: false,
      },
    });

    const updatedVendor = await this.getVendorByChatId(chatId);

    return {
      data: updatedVendor,
      message: SYS_MSG.VENDOR_AVAILABILITY_UPDATED,
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
