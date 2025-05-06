import { BaseEntity } from '@modules/common/base-entity.model';
import { Lodge } from '@modules/lodges/model/lodges.model';
import { University } from '@modules/universities/model/universities.model';
import { VendorLocation } from '@modules/vendor_locations/model/vendor_locations.model';
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
