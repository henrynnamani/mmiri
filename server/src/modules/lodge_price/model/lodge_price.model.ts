import { BaseEntity } from '@modules/common/base-entity.model';
import { Lodge } from '@modules/lodges/model/lodges.model';
import { Vendor } from '@modules/vendors/model/vendors.model';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('lodge_price')
export class LodgePrice extends BaseEntity {
  @ManyToOne(() => Vendor, (vendor) => vendor.lodges)
  @JoinColumn({ name: 'vendorId' })
  vendor: Vendor;

  @Column()
  vendorId: string;

  @ManyToOne(() => Lodge, (lodge) => lodge.vendors)
  @JoinColumn({ name: 'lodgeId' })
  lodge: Lodge;

  @Column()
  lodgeId: string;
  // @Column({ nullable: false })
  // price: number;
}
