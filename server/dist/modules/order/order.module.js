"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const order_model_action_1 = require("./model/order.model-action");
const users_service_1 = require("../users/users.service");
const typeorm_1 = require("@nestjs/typeorm");
const order_model_1 = require("./model/order.model");
const vendors_module_1 = require("../vendors/vendors.module");
const users_model_action_1 = require("../users/model/users.model-action");
const users_model_1 = require("../users/model/users.model");
const lodge_price_service_1 = require("../lodge_price/lodge_price.service");
const lodge_price_model_action_1 = require("../lodge_price/model/lodge_price.model-action");
const lodges_module_1 = require("../lodges/lodges.module");
const locations_module_1 = require("../locations/locations.module");
const lodge_price_model_1 = require("../lodge_price/model/lodge_price.model");
const telegram_module_1 = require("../telegram/telegram.module");
const payment_module_1 = require("../payment/payment.module");
const order_controller_1 = require("./order.controller");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([order_model_1.Order, users_model_1.User, lodge_price_model_1.LodgePrice]),
            lodges_module_1.LodgesModule,
            locations_module_1.LocationsModule,
            (0, common_1.forwardRef)(() => vendors_module_1.VendorsModule),
            (0, common_1.forwardRef)(() => telegram_module_1.TelegramModule),
            (0, common_1.forwardRef)(() => payment_module_1.PaymentModule),
        ],
        controllers: [order_controller_1.OrderController],
        providers: [
            order_service_1.OrderService,
            order_model_action_1.OrderModelAction,
            users_service_1.UsersService,
            users_model_action_1.UsersModelAction,
            lodge_price_service_1.LodgePriceService,
            lodge_price_model_action_1.LodgePriceModelAction,
        ],
        exports: [order_service_1.OrderService, order_model_action_1.OrderModelAction],
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map