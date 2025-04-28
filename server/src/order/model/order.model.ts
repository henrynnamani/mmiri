import { BaseEntity } from '@/common/base-entity.model';
import { OrderStatus } from '@/common/enums';
import { User } from '@/users/model/users.model';
import { Vendor } from '@/vendors/model/vendors.model';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('orders')
export class Order extends BaseEntity {
  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(() => Vendor, (vendor) => vendor.orders)
  @JoinColumn({ name: 'vendor_id' })
  vendor: Vendor;

  @Column({ name: 'vendor_id' })
  vendorId: string;

  @Column()
  noOfGallons: number;

  @Column()
  amountPayed: number;

  @Column({ enum: OrderStatus, default: OrderStatus.PENDING })
  status: OrderStatus;

  @Column({ default: false })
  paymentStatus: boolean;

  @Column({ nullable: true })
  paymentReference: string;
}
