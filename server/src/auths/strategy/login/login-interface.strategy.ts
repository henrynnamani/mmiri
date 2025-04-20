import { LoginDto } from '@/auths/dto/auths.dto';
import { User } from '@/users/model/users.model';
import { Vendor } from '@/vendors/model/vendors.model';

export interface LoginStrategy {
  supports(role: string): boolean;
  login(loginDto: LoginDto): Promise<User | Vendor>;
}
