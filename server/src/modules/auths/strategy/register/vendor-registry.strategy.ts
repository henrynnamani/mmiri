import { RegisterStrategy } from './register-interface.strategy';
import { RegisterDto } from '../../dto/auths.dto';
import { Injectable } from '@nestjs/common';
import { VendorsService } from '@modules/vendors/vendors.service';
import { Vendor } from '@modules/vendors/model/vendors.model';

@Injectable()
export class VendorRegistryStrategy implements RegisterStrategy {
  constructor(private readonly vendorService: VendorsService) {}

  supports(role: string): boolean {
    return role === 'vendor';
  }

  register(registerDto: RegisterDto): Promise<Vendor> {
    return this.vendorService.registerVendor(registerDto);
  }
}
