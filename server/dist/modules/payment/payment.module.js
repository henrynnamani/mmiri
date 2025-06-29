"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModule = void 0;
const common_1 = require("@nestjs/common");
const payment_service_1 = require("./payment.service");
const payment_controller_1 = require("./payment.controller");
const typeorm_1 = require("@nestjs/typeorm");
const order_model_1 = require("../order/model/order.model");
const order_module_1 = require("../order/order.module");
const lodges_service_1 = require("../lodges/lodges.service");
const users_module_1 = require("../users/users.module");
const lodges_mode_action_1 = require("../lodges/model/lodges.mode-action");
const locations_module_1 = require("../locations/locations.module");
const lodges_model_1 = require("../lodges/model/lodges.model");
const vendors_module_1 = require("../vendors/vendors.module");
const lodge_price_model_action_1 = require("../lodge_price/model/lodge_price.model-action");
const lodge_price_model_1 = require("../lodge_price/model/lodge_price.model");
const payment_model_action_1 = require("./model/payment.model-action");
const payment_model_1 = require("./model/payment.model");
const telegram_module_1 = require("../telegram/telegram.module");
let PaymentModule = class PaymentModule {
};
exports.PaymentModule = PaymentModule;
exports.PaymentModule = PaymentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([order_model_1.Order, lodges_model_1.Lodge, lodge_price_model_1.LodgePrice, payment_model_1.Payment]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            locations_module_1.LocationsModule,
            (0, common_1.forwardRef)(() => vendors_module_1.VendorsModule),
            (0, common_1.forwardRef)(() => order_module_1.OrderModule),
            telegram_module_1.TelegramModule,
        ],
        controllers: [payment_controller_1.PaystackController],
        providers: [
            payment_service_1.PaymentService,
            lodges_service_1.LodgesService,
            lodges_mode_action_1.LodgeModelAction,
            lodge_price_model_action_1.LodgePriceModelAction,
            payment_model_action_1.PaymentModelAction,
        ],
        exports: [payment_service_1.PaymentService, payment_model_action_1.PaymentModelAction],
    })
], PaymentModule);
//# sourceMappingURL=payment.module.js.map