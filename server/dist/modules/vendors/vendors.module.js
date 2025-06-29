"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsModule = void 0;
const common_1 = require("@nestjs/common");
const vendors_service_1 = require("./vendors.service");
const vendors_controller_1 = require("./vendors.controller");
const typeorm_1 = require("@nestjs/typeorm");
const vendors_model_1 = require("./model/vendors.model");
const vendors_model_action_1 = require("./model/vendors.model-action");
const vendor_locations_model_1 = require("../vendor_locations/model/vendor_locations.model");
const order_model_1 = require("../order/model/order.model");
const users_model_1 = require("../users/model/users.model");
const lodge_price_model_1 = require("../lodge_price/model/lodge_price.model");
const lodges_model_1 = require("../lodges/model/lodges.model");
const locations_module_1 = require("../locations/locations.module");
const vendor_locations_service_1 = require("../vendor_locations/vendor_locations.service");
const vendor_locations_model_action_1 = require("../vendor_locations/model/vendor_locations.model-action");
const order_service_1 = require("../order/order.service");
const order_model_action_1 = require("../order/model/order.model-action");
const users_service_1 = require("../users/users.service");
const lodge_price_service_1 = require("../lodge_price/lodge_price.service");
const users_model_action_1 = require("../users/model/users.model-action");
const lodges_service_1 = require("../lodges/lodges.service");
const lodge_price_model_action_1 = require("../lodge_price/model/lodge_price.model-action");
const lodges_mode_action_1 = require("../lodges/model/lodges.mode-action");
const telegram_module_1 = require("../telegram/telegram.module");
const payment_module_1 = require("../payment/payment.module");
let VendorsModule = class VendorsModule {
};
exports.VendorsModule = VendorsModule;
exports.VendorsModule = VendorsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                vendors_model_1.Vendor,
                vendor_locations_model_1.VendorLocation,
                order_model_1.Order,
                users_model_1.User,
                lodge_price_model_1.LodgePrice,
                lodges_model_1.Lodge,
            ]),
            locations_module_1.LocationsModule,
            (0, common_1.forwardRef)(() => telegram_module_1.TelegramModule),
            (0, common_1.forwardRef)(() => payment_module_1.PaymentModule)
        ],
        controllers: [vendors_controller_1.VendorsController],
        providers: [
            vendors_service_1.VendorsService,
            vendors_model_action_1.VendorModelAction,
            vendor_locations_service_1.VendorLocationsService,
            vendor_locations_model_action_1.VendorLocationModelAction,
            order_service_1.OrderService,
            order_model_action_1.OrderModelAction,
            users_service_1.UsersService,
            lodge_price_service_1.LodgePriceService,
            users_model_action_1.UsersModelAction,
            lodges_service_1.LodgesService,
            lodge_price_model_action_1.LodgePriceModelAction,
            lodges_mode_action_1.LodgeModelAction,
        ],
        exports: [vendors_service_1.VendorsService, vendors_model_action_1.VendorModelAction, vendor_locations_service_1.VendorLocationsService],
    })
], VendorsModule);
//# sourceMappingURL=vendors.module.js.map