import { BaseEntity } from '@/common/base-entity.model';
import { Column, Entity, OneToMany } from 'typeorm';
import { Location } from './locations.model';

@Entity('universities')
export class University extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => Location, (location) => location.university)
  locations: Location[];
}
