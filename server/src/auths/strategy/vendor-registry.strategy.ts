import { VendorsService } from '@/vendors/vendors.service';
import { RegisterStrategy } from './register-interface.strategy';
import { RegisterDto } from '../dto/auths.dto';
import { Vendor } from '@/vendors/model/vendors.model';
import { Injectable } from '@nestjs/common';

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
