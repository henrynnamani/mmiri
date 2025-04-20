import { VendorsService } from '@/vendors/vendors.service';
import { Injectable } from '@nestjs/common';
import { LoginStrategy } from './login-interface.strategy';
import { LoginDto } from '@/auths/dto/auths.dto';
import { User } from '@/users/model/users.model';
import { Vendor } from '@/vendors/model/vendors.model';

@Injectable()
export class VendorLoginStrategy implements LoginStrategy {
  constructor(private readonly vendorService: VendorsService) {}

  supports(role: string): boolean {
    return role === 'vendor';
  }

  login(loginDto: LoginDto): Promise<User | Vendor> {
    return this.vendorService.verifyVendor(loginDto);
  }
}
