"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LodgesModule = void 0;
const common_1 = require("@nestjs/common");
const lodges_service_1 = require("./lodges.service");
const lodges_controller_1 = require("./lodges.controller");
const lodges_model_1 = require("./model/lodges.model");
const typeorm_1 = require("@nestjs/typeorm");
const locations_module_1 = require("../locations/locations.module");
const lodge_price_model_1 = require("../lodge_price/model/lodge_price.model");
const lodges_mode_action_1 = require("./model/lodges.mode-action");
const lodge_price_model_action_1 = require("../lodge_price/model/lodge_price.model-action");
let LodgesModule = class LodgesModule {
};
exports.LodgesModule = LodgesModule;
exports.LodgesModule = LodgesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lodges_model_1.Lodge, lodge_price_model_1.LodgePrice]), locations_module_1.LocationsModule],
        controllers: [lodges_controller_1.LodgesController],
        providers: [lodges_service_1.LodgesService, lodges_mode_action_1.LodgeModelAction, lodge_price_model_action_1.LodgePriceModelAction],
        exports: [lodges_service_1.LodgesService],
    })
], LodgesModule);
//# sourceMappingURL=lodges.module.js.map