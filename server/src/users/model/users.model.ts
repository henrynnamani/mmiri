import { BaseEntity } from '@/common/base-entity.model';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: string;
}
