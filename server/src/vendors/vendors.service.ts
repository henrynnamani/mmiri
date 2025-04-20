import { RegisterDto } from '@/auths/dto/auths.dto';
import { Injectable } from '@nestjs/common';
import { Vendor } from './model/vendors.model';
import { VendorModelAction } from './model/vendors.model-action';
import * as SYS_MSG from '@/common/system-message';
import { hashPassword } from '@/common/utils/auth';

@Injectable()
export class VendorsService {
  constructor(private vendorModelAction: VendorModelAction) {}

  async registerVendor(registerDto: RegisterDto): Promise<Vendor> {
    const vendorExist = await this.getVendorByEmail(registerDto.email);

    if (vendorExist) {
      throw new Error(SYS_MSG.VENDOR_ALREADY_EXIST);
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
      throw new Error(SYS_MSG.VENDOR_NOT_CREATED);
    }

    return createdVendor;
  }

  verifyVendor() {
    // Implementation to verify vendor
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
