"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const auth_config_1 = require("./config/auth.config");
const users_module_1 = require("./modules/users/users.module");
const common_module_1 = require("./modules/common/common.module");
const auths_module_1 = require("./modules/auths/auths.module");
const vendors_module_1 = require("./modules/vendors/vendors.module");
const locations_module_1 = require("./modules/locations/locations.module");
const lodges_module_1 = require("./modules/lodges/lodges.module");
const universities_module_1 = require("./modules/universities/universities.module");
const lodge_price_module_1 = require("./modules/lodge_price/lodge_price.module");
const order_module_1 = require("./modules/order/order.module");
const vendor_locations_module_1 = require("./modules/vendor_locations/vendor_locations.module");
const payment_module_1 = require("./modules/payment/payment.module");
const token_service_1 = require("./modules/common/token.service");
const core_1 = require("@nestjs/core");
const authentication_guard_1 = require("./modules/auths/guards/authentication.guard");
const datasource_1 = require("./database/datasource");
const payment_config_1 = require("./config/payment.config");
const telegram_module_1 = require("./modules/telegram/telegram.module");
const telegram_config_1 = require("./config/telegram.config");
const queue_config_1 = require("./config/queue.config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                global: true,
                useFactory: (config) => ({
                    secret: config.get('jwt.secret'),
                    signOptions: {
                        expiresIn: config.get('jwt.expiry'),
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [auth_config_1.authConfig, payment_config_1.paymentConfig, telegram_config_1.telegramConfig, queue_config_1.queueConfig],
                cache: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => ({
                    ...datasource_1.dataSource.options,
                }),
                dataSourceFactory: async () => {
                    if (datasource_1.dataSource.isInitialized) {
                        return datasource_1.dataSource;
                    }
                    else {
                        return datasource_1.dataSource.initialize();
                    }
                },
            }),
            users_module_1.UsersModule,
            common_module_1.CommonModule,
            auths_module_1.AuthsModule,
            vendors_module_1.VendorsModule,
            locations_module_1.LocationsModule,
            lodges_module_1.LodgesModule,
            universities_module_1.UniversitiesModule,
            lodge_price_module_1.LodgePriceModule,
            order_module_1.OrderModule,
            vendor_locations_module_1.VendorLocationsModule,
            payment_module_1.PaymentModule,
            telegram_module_1.TelegramModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            token_service_1.TokenService,
            {
                provide: core_1.APP_GUARD,
                useClass: authentication_guard_1.AuthenticationGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map