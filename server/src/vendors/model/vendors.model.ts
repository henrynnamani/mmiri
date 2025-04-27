import { BaseEntity } from '@/common/base-entity.model';
import { Role } from '@/common/enums';
import { LodgePrice } from '@/lodge_price/model/lodge_price.model';
import { Order } from '@/order/model/order.model';
import { VendorLocation } from '@/vendor_locations/model/vendor_locations.model';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('vendors')
export class Vendor extends BaseEntity {
  @Column({ nullable: false })
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: string;

  @Column({ default: true })
  available: boolean;

  @Column({ nullable: true })
  businessName: string;

  @Column({ nullable: true })
  bankCode: string;

  @Column({ nullable: true })
  accountNumber: string;

  @Column({ nullable: true })
  subaccount: string;

  @Column({ default: false })
  isActive: boolean;

  @Column({ type: 'enum', enum: Role, default: Role.VENDOR })
  role: Role;

  @OneToMany(() => VendorLocation, (vendorLocation) => vendorLocation.location)
  locations: VendorLocation[];

  @OneToMany(() => LodgePrice, (lodge_price) => lodge_price.lodge)
  lodges: LodgePrice[];

  @OneToMany(() => Order, (order) => order.vendor)
  orders: Order[];
}
