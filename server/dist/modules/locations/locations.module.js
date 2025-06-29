"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsModule = void 0;
const common_1 = require("@nestjs/common");
const locations_service_1 = require("./locations.service");
const locations_controller_1 = require("./locations.controller");
const typeorm_1 = require("@nestjs/typeorm");
const universities_module_1 = require("../universities/universities.module");
const universities_service_1 = require("../universities/universities.service");
const locations_model_action_1 = require("./model/locations.model-action");
const locations_model_1 = require("./model/locations.model");
let LocationsModule = class LocationsModule {
};
exports.LocationsModule = LocationsModule;
exports.LocationsModule = LocationsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([locations_model_1.Location]), universities_module_1.UniversitiesModule],
        controllers: [locations_controller_1.LocationsController],
        providers: [locations_service_1.LocationsService, locations_model_action_1.LocationModelAction, universities_service_1.UniversitiesService],
        exports: [locations_service_1.LocationsService, locations_model_action_1.LocationModelAction],
    })
], LocationsModule);
//# sourceMappingURL=locations.module.js.map