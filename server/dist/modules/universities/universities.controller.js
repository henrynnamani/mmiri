"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversitiesController = void 0;
const common_1 = require("@nestjs/common");
const universities_service_1 = require("./universities.service");
const universities_dto_1 = require("./dto/universities.dto");
const universities_doc_1 = require("./doc/universities.doc");
let UniversitiesController = class UniversitiesController {
    universitiesService;
    constructor(universitiesService) {
        this.universitiesService = universitiesService;
    }
    createUniversity(universityDto) {
        return this.universitiesService.createUniversity(universityDto);
    }
};
exports.UniversitiesController = UniversitiesController;
__decorate([
    (0, common_1.Post)(''),
    (0, universities_doc_1.UniversitiesDoc)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [universities_dto_1.UniversityDto]),
    __metadata("design:returntype", void 0)
], UniversitiesController.prototype, "createUniversity", null);
exports.UniversitiesController = UniversitiesController = __decorate([
    (0, common_1.Controller)('universities'),
    __metadata("design:paramtypes", [universities_service_1.UniversitiesService])
], UniversitiesController);
//# sourceMappingURL=universities.controller.js.map