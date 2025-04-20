import { Module } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './model/vendors.model';
import { VendorModelAction } from './model/vendors.model-action';

@Module({
  imports: [TypeOrmModule.forFeature([Vendor])],
  controllers: [VendorsController],
  providers: [VendorsService, VendorModelAction],
  exports: [VendorsService],
})
export class VendorsModule {}
