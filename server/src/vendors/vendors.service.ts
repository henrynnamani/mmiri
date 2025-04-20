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

@Injectable()
export class VendorsService {
  constructor(private vendorModelAction: VendorModelAction) {}

  async registerVendor(registerDto: RegisterDto): Promise<Vendor> {
    const vendorExist = await this.getVendorByEmail(registerDto.email);

    if (vendorExist) {
      throw new BadRequestException(SYS_MSG.VENDOR_ALREADY_EXIST);
    }

    const hashedPassword = await hashPassword(registerDto.password);

    const payload = {
      ...registerDto,
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

  getVendorsByLocation() {}

  getVendorsByLodge() {}

  changeAvailabilityStatus() {}
}
