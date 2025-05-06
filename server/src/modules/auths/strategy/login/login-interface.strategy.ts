import { LoginDto } from '@modules/auths/dto/auths.dto';
import { User } from '@modules/users/model/users.model';
import { Vendor } from '@modules/vendors/model/vendors.model';

export interface LoginStrategy {
  supports(role: string): boolean;
  login(loginDto: LoginDto): Promise<User | Vendor>;
}
