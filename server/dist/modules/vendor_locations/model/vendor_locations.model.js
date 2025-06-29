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
exports.VendorLocation = void 0;
const base_entity_model_1 = require("../../common/base-entity.model");
const locations_model_1 = require("../../locations/model/locations.model");
const vendors_model_1 = require("../../vendors/model/vendors.model");
const typeorm_1 = require("typeorm");
let VendorLocation = class VendorLocation extends base_entity_model_1.BaseEntity {
    vendor;
    vendorId;
    location;
    locationId;
};
exports.VendorLocation = VendorLocation;
__decorate([
    (0, typeorm_1.ManyToOne)(() => vendors_model_1.Vendor, (vendor) => vendor.locations),
    (0, typeorm_1.JoinColumn)({ name: 'vendor_id' }),
    __metadata("design:type", vendors_model_1.Vendor)
], VendorLocation.prototype, "vendor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'vendor_id' }),
    __metadata("design:type", String)
], VendorLocation.prototype, "vendorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => locations_model_1.Location, (location) => location.vendors),
    (0, typeorm_1.JoinColumn)({ name: 'location_id' }),
    __metadata("design:type", locations_model_1.Location)
], VendorLocation.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'location_id' }),
    __metadata("design:type", String)
], VendorLocation.prototype, "locationId", void 0);
exports.VendorLocation = VendorLocation = __decorate([
    (0, typeorm_1.Entity)('vendor_locations')
], VendorLocation);
//# sourceMappingURL=vendor_locations.model.js.map