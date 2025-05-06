import { BaseEntity } from '@modules/common/base-entity.model';
import { Location } from '@modules/locations/model/locations.model';
import { Vendor } from '@modules/vendors/model/vendors.model';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('vendor_locations')
export class VendorLocation extends BaseEntity {
  @ManyToOne(() => Vendor, (vendor) => vendor.locations)
  @JoinColumn({ name: 'vendor_id' })
  vendor: Vendor;

  @Column({ name: 'vendor_id' })
  vendorId: string;

  @ManyToOne(() => Location, (location) => location.vendors)
  @JoinColumn({ name: 'location_id' })
  location: Location;

  @Column({ name: 'location_id' })
  locationId: string;
}
