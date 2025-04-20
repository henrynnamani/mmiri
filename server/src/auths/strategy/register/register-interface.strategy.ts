import { User } from '@/users/model/users.model';
import { RegisterDto } from '../../dto/auths.dto';
import { Vendor } from '@/vendors/model/vendors.model';

export interface RegisterStrategy {
  supports(role: string): boolean;
  register(registerDto: RegisterDto): Promise<User | Vendor>;
}
