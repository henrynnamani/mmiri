import { BaseEntity } from '@modules/common/base-entity.model';
import { OrderStatus } from '@modules/common/enums';
import { Payment } from '@modules/payment/model/payment.model';
import { User } from '@modules/users/model/users.model';
import { Vendor } from '@modules/vendors/model/vendors.model';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

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

  @Column({ name: 'vendor_id', nullable: true })
  vendorId: string;

  @Column()
  noOfGallons: number;

  @Column({ nullable: true })
  roomNumber: string;

  @Column({ enum: OrderStatus, default: OrderStatus.PENDING })
  status: OrderStatus;

  @OneToMany(() => Payment, (payment) => payment.order)
  payments: Payment[];
}
