import { BaseEntity } from '@modules/common/base-entity.model';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Location } from '@modules/locations/model/locations.model';
import { LodgePrice } from '@modules/lodge_price/model/lodge_price.model';

@Entity('lodges')
export class Lodge extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => Location, (location) => location.lodges)
  location: Location;

  @OneToMany(() => LodgePrice, (lodge_price) => lodge_price.vendor)
  vendors: LodgePrice[];
}
