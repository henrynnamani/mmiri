import { VendorsService } from '@modules/vendors/vendors.service';
import { Injectable } from '@nestjs/common';
import { LoginStrategy } from './login-interface.strategy';
import { LoginDto } from '@modules/auths/dto/auths.dto';
import { User } from '@modules/users/model/users.model';
import { Vendor } from '@modules/vendors/model/vendors.model';

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
