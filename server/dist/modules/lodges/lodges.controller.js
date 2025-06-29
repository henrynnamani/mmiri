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
exports.LodgesController = void 0;
const common_1 = require("@nestjs/common");
const lodges_service_1 = require("./lodges.service");
const lodges_dto_1 = require("./dto/lodges.dto");
const lodges_doc_1 = require("./docs/lodges.doc");
let LodgesController = class LodgesController {
    lodgesService;
    constructor(lodgesService) {
        this.lodgesService = lodgesService;
    }
    addLodge(lodgeDto) {
        return this.lodgesService.createLodge(lodgeDto);
    }
    getLodgeVendors(lodgeId, page, limit) {
        return this.lodgesService.getLodgeVendors(lodgeId, page, limit);
    }
};
exports.LodgesController = LodgesController;
__decorate([
    (0, common_1.Post)(),
    (0, lodges_doc_1.CreateLodgeDoc)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lodges_dto_1.LodgeDto]),
    __metadata("design:returntype", void 0)
], LodgesController.prototype, "addLodge", null);
__decorate([
    (0, common_1.Get)(':id/vendors'),
    (0, lodges_doc_1.GetLodgeVendorsDoc)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", void 0)
], LodgesController.prototype, "getLodgeVendors", null);
exports.LodgesController = LodgesController = __decorate([
    (0, common_1.Controller)('lodges'),
    __metadata("design:paramtypes", [lodges_service_1.LodgesService])
], LodgesController);
//# sourceMappingURL=lodges.controller.js.map