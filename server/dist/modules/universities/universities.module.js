"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversitiesModule = void 0;
const common_1 = require("@nestjs/common");
const universities_service_1 = require("./universities.service");
const universities_controller_1 = require("./universities.controller");
const typeorm_1 = require("@nestjs/typeorm");
const universities_model_1 = require("./model/universities.model");
const universities_model_action_1 = require("./model/universities.model-action");
let UniversitiesModule = class UniversitiesModule {
};
exports.UniversitiesModule = UniversitiesModule;
exports.UniversitiesModule = UniversitiesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([universities_model_1.University])],
        controllers: [universities_controller_1.UniversitiesController],
        providers: [universities_service_1.UniversitiesService, universities_model_action_1.UniversityModelAction],
        exports: [universities_service_1.UniversitiesService, universities_model_action_1.UniversityModelAction],
    })
], UniversitiesModule);
//# sourceMappingURL=universities.module.js.map