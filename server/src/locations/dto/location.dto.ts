import { IsArray, IsString, IsUUID } from 'class-validator';

export class LocationDto {
  @IsArray()
  locations: string[];

  @IsString()
  @IsUUID('all')
  universityId: string;
}
