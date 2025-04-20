import { BaseEntity } from '@/common/base-entity.model';
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { Location } from './locations.model';
import { Vendor } from '@/vendors/model/vendors.model';

@Entity('lodges')
export class Lodge extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => Location, (location) => location.lodges)
  location: Location;

  @ManyToMany(() => Vendor, (vendor) => vendor.lodges)
  vendors: Vendor[];
}
