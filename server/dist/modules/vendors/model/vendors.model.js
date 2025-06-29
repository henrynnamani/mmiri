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
exports.Vendor = void 0;
const base_entity_model_1 = require("../../common/base-entity.model");
const enums_1 = require("../../common/enums");
const lodge_price_model_1 = require("../../lodge_price/model/lodge_price.model");
const order_model_1 = require("../../order/model/order.model");
const vendor_locations_model_1 = require("../../vendor_locations/model/vendor_locations.model");
const typeorm_1 = require("typeorm");
let Vendor = class Vendor extends base_entity_model_1.BaseEntity {
    email;
    chatId;
    phoneNumber;
    available;
    businessName;
    bankCode;
    accountNumber;
    subaccount;
    isActive;
    role;
    locations;
    lodges;
    orders;
};
exports.Vendor = Vendor;
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Vendor.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Vendor.prototype, "chatId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vendor.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Vendor.prototype, "available", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Vendor.prototype, "businessName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Vendor.prototype, "bankCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Vendor.prototype, "accountNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Vendor.prototype, "subaccount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Vendor.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enums_1.Role, default: enums_1.Role.VENDOR }),
    __metadata("design:type", String)
], Vendor.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vendor_locations_model_1.VendorLocation, (vendorLocation) => vendorLocation.location),
    __metadata("design:type", Array)
], Vendor.prototype, "locations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lodge_price_model_1.LodgePrice, (lodge_price) => lodge_price.lodge),
    __metadata("design:type", Array)
], Vendor.prototype, "lodges", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_model_1.Order, (order) => order.vendor),
    __metadata("design:type", Array)
], Vendor.prototype, "orders", void 0);
exports.Vendor = Vendor = __decorate([
    (0, typeorm_1.Entity)('vendors')
], Vendor);
//# sourceMappingURL=vendors.model.js.map