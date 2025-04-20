import { BaseEntity } from '@/common/base-entity.model';
import { Lodge } from '@/locations/model/lodges.model';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @OneToOne(() => Lodge)
  lodge: Lodge;
}
