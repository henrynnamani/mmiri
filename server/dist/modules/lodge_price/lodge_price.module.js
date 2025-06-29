"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LodgePriceModule = void 0;
const common_1 = require("@nestjs/common");
const lodge_price_service_1 = require("./lodge_price.service");
const vendors_module_1 = require("../vendors/vendors.module");
const lodges_module_1 = require("../lodges/lodges.module");
const lodge_price_model_action_1 = require("./model/lodge_price.model-action");
const typeorm_1 = require("@nestjs/typeorm");
const lodge_price_model_1 = require("./model/lodge_price.model");
const locations_module_1 = require("../locations/locations.module");
const universities_module_1 = require("../universities/universities.module");
let LodgePriceModule = class LodgePriceModule {
};
exports.LodgePriceModule = LodgePriceModule;
exports.LodgePriceModule = LodgePriceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([lodge_price_model_1.LodgePrice]),
            lodges_module_1.LodgesModule,
            (0, common_1.forwardRef)(() => vendors_module_1.VendorsModule),
            locations_module_1.LocationsModule,
            universities_module_1.UniversitiesModule,
        ],
        providers: [lodge_price_service_1.LodgePriceService, lodge_price_model_action_1.LodgePriceModelAction],
        exports: [lodge_price_service_1.LodgePriceService, lodge_price_model_action_1.LodgePriceModelAction],
    })
], LodgePriceModule);
//# sourceMappingURL=lodge_price.module.js.map