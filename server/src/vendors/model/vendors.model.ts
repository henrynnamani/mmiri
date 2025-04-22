import { BaseEntity } from '@/common/base-entity.model';
import { Lodge } from '@/lodges/model/lodges.model';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity('vendors')
export class Vendor extends BaseEntity {
  @Column({ nullable: false })
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: string;

  @ManyToMany(() => Lodge, (lodge) => lodge.vendors)
  lodges: Lodge[];
}
