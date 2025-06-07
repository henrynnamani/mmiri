import { BaseEntity } from '@modules/common/base-entity.model';
import { OrderStatus } from '@modules/common/enums';
import { Order } from '@modules/order/model/order.model';
import { User } from '@modules/users/model/users.model';
import { Vendor } from '@modules/vendors/model/vendors.model';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity('payments')
export class Payment extends BaseEntity {
  @ManyToOne(() => Order, (order) => order.payments)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column({ name: 'user_id' })
  orderId: string;

  @Column()
  amount: number;

  @Column({ default: false })
  status: boolean;

  @Column({ nullable: true })
  reference: string;
}
