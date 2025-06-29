"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorLocationsModule = void 0;
const common_1 = require("@nestjs/common");
const vendor_locations_service_1 = require("./vendor_locations.service");
const typeorm_1 = require("@nestjs/typeorm");
const vendor_locations_model_1 = require("./model/vendor_locations.model");
const vendor_locations_model_action_1 = require("./model/vendor_locations.model-action");
const locations_service_1 = require("../locations/locations.service");
const vendors_module_1 = require("../vendors/vendors.module");
const locations_model_action_1 = require("../locations/model/locations.model-action");
const locations_model_1 = require("../locations/model/locations.model");
const universities_module_1 = require("../universities/universities.module");
let VendorLocationsModule = class VendorLocationsModule {
};
exports.VendorLocationsModule = VendorLocationsModule;
exports.VendorLocationsModule = VendorLocationsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([vendor_locations_model_1.VendorLocation, locations_model_1.Location]),
            vendors_module_1.VendorsModule,
            universities_module_1.UniversitiesModule,
        ],
        providers: [
            vendor_locations_service_1.VendorLocationsService,
            vendor_locations_model_action_1.VendorLocationModelAction,
            locations_service_1.LocationsService,
            locations_model_action_1.LocationModelAction,
        ],
    })
], VendorLocationsModule);
//# sourceMappingURL=vendor_locations.module.js.map