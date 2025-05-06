import { User } from '@modules/users/model/users.model';
import { Vendor } from '@modules/vendors/model/vendors.model';

interface systemUsers {
  user: typeof User;
  vendor: typeof Vendor;
}

export type users = InstanceType<systemUsers[keyof systemUsers]>;
