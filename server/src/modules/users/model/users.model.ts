import { BaseEntity } from '@modules/common/base-entity.model';
import { Role } from '@modules/common/enums';
import { Lodge } from '@modules/lodges/model/lodges.model';
import { Order } from '@modules/order/model/order.model';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  @ManyToOne(() => Lodge, (lodge) => lodge.id)
  @JoinColumn({ name: 'lodge_id' })
  lodge: Lodge;

  @Column({ name: 'lodge_id', nullable: true })
  lodgeId: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
