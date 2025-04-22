import { BaseEntity } from '@/common/base-entity.model';
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { Vendor } from '@/vendors/model/vendors.model';
import { Location } from '@/locations/model/locations.model';

@Entity('lodges')
export class Lodge extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => Location, (location) => location.lodges)
  location: Location;

  @ManyToMany(() => Vendor, (vendor) => vendor.lodges)
  vendors: Vendor[];
}
