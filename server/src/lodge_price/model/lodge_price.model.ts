import { BaseEntity } from '@/common/base-entity.model';
import { Lodge } from '@/lodges/model/lodges.model';
import { Vendor } from '@/vendors/model/vendors.model';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('lodge_price')
export class LodgePrice extends BaseEntity {
  @ManyToOne(() => Vendor, (vendor) => vendor.lodges)
  @JoinColumn()
  vendor: Vendor;

  @ManyToOne(() => Lodge, (lodge) => lodge.vendors)
  @JoinColumn()
  lodge: Lodge;

  @Column({ nullable: false })
  price: number;
}
