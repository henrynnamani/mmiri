import { BaseEntity } from '@/common/base-entity.model';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Lodge } from './lodges.model';
import { University } from './university.model';

@Entity('locations')
export class Location extends BaseEntity {
  @ManyToOne(() => University, (university) => university.locations)
  university: University;

  @Column()
  name: string;

  @OneToMany(() => Lodge, (lodge) => lodge.location)
  lodges: Lodge[];
}
