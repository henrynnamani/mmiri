import { BaseEntity } from '@/common/base-entity.model';
import { Location } from '@/locations/model/locations.model';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('universities')
export class University extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => Location, (location) => location.university)
  locations: Location[];
}
