import { BaseEntity } from '@/common/base-entity.model';
import { Lodge } from '@/lodges/model/lodges.model';
import { University } from '@/universities/model/universities.model';
import { VendorLocation } from '@/vendor_locations/model/vendor_locations.model';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('locations')
export class Location extends BaseEntity {
  @ManyToOne(() => University, (university) => university.locations)
  university: University;

  @Column()
  name: string;

  @OneToMany(() => VendorLocation, (vendorLocation) => vendorLocation.location)
  vendors: VendorLocation[];

  @OneToMany(() => Lodge, (lodge) => lodge.location)
  lodges: Lodge[];
}
