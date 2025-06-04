import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { authConfig } from './config/auth.config';
import { UsersModule } from './modules/users/users.module';
import { CommonModule } from './modules/common/common.module';
import { AuthsModule } from './modules/auths/auths.module';
import { VendorsModule } from './modules/vendors/vendors.module';
import { LocationsModule } from './modules/locations/locations.module';
import { LodgesModule } from './modules/lodges/lodges.module';
import { UniversitiesModule } from './modules/universities/universities.module';
import { LodgePriceModule } from './modules/lodge_price/lodge_price.module';
import { OrderModule } from './modules/order/order.module';
import { VendorLocationsModule } from './modules/vendor_locations/vendor_locations.module';
import { PaymentModule } from './modules/payment/payment.module';
import { TokenService } from './modules/common/token.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationGuard } from './modules/auths/guards/authentication.guard';
import { dataSource } from '@database/datasource';
import { paymentConfig } from '@config/payment.config';
import { TelegramModule } from '@modules/telegram/telegram.module';
import { telegramConfig } from '@config/telegram.config';

@Module({
  imports: [
    JwtModule.registerAsync({
      global: true,
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('jwt.secret'),
        signOptions: {
          expiresIn: config.get<string>('jwt.expiry'),
        },
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [authConfig, paymentConfig, telegramConfig],
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...dataSource.options,
      }),
      dataSourceFactory: async () => {
        if (dataSource.isInitialized) {
          return dataSource;
        } else {
          return dataSource.initialize();
        }
      },
    }),
    UsersModule,
    CommonModule,
    AuthsModule,
    VendorsModule,
    LocationsModule,
    LodgesModule,
    UniversitiesModule,
    LodgePriceModule,
    OrderModule,
    VendorLocationsModule,
    PaymentModule,
    TelegramModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    TokenService,
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
  ],
})
export class AppModule {}
