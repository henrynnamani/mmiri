import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { dataSource } from 'database/datasource';
import { AuthsModule } from './auths/auths.module';
import { authConfig } from 'config/auth.config';
import { JwtModule } from '@nestjs/jwt';
import { VendorsModule } from './vendors/vendors.module';
import { LocationsModule } from './locations/locations.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationGuard } from './auths/guards/authentication.guard';
import { TokenService } from './common/token.service';
import { LodgesModule } from './lodges/lodges.module';
import { UniversitiesModule } from './universities/universities.module';

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
      load: [authConfig],
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
