import { User } from '@/users/model/users.model';
import { Vendor } from '@/vendors/model/vendors.model';

interface systemUsers {
  user: typeof User;
  vendor: typeof Vendor;
}

export type users = InstanceType<systemUsers[keyof systemUsers]>;
