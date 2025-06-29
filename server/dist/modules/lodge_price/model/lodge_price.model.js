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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LodgePrice = void 0;
const base_entity_model_1 = require("../../common/base-entity.model");
const lodges_model_1 = require("../../lodges/model/lodges.model");
const vendors_model_1 = require("../../vendors/model/vendors.model");
const typeorm_1 = require("typeorm");
let LodgePrice = class LodgePrice extends base_entity_model_1.BaseEntity {
    vendor;
    vendorId;
    lodge;
    lodgeId;
};
exports.LodgePrice = LodgePrice;
__decorate([
    (0, typeorm_1.ManyToOne)(() => vendors_model_1.Vendor, (vendor) => vendor.lodges),
    (0, typeorm_1.JoinColumn)({ name: 'vendorId' }),
    __metadata("design:type", vendors_model_1.Vendor)
], LodgePrice.prototype, "vendor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LodgePrice.prototype, "vendorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lodges_model_1.Lodge, (lodge) => lodge.vendors),
    (0, typeorm_1.JoinColumn)({ name: 'lodgeId' }),
    __metadata("design:type", lodges_model_1.Lodge)
], LodgePrice.prototype, "lodge", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LodgePrice.prototype, "lodgeId", void 0);
exports.LodgePrice = LodgePrice = __decorate([
    (0, typeorm_1.Entity)('lodge_price')
], LodgePrice);
//# sourceMappingURL=lodge_price.model.js.map