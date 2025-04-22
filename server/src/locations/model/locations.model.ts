import { BaseEntity } from '@/common/base-entity.model';
import { Lodge } from '@/lodges/model/lodges.model';
import { University } from '@/universities/model/universities.model';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('locations')
export class Location extends BaseEntity {
  @ManyToOne(() => University, (university) => university.locations)
  university: University;

  @Column()
  name: string;

  @OneToMany(() => Lodge, (lodge) => lodge.location)
  lodges: Lodge[];
}
