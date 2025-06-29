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
exports.Location = void 0;
const base_entity_model_1 = require("../../common/base-entity.model");
const lodges_model_1 = require("../../lodges/model/lodges.model");
const universities_model_1 = require("../../universities/model/universities.model");
const vendor_locations_model_1 = require("../../vendor_locations/model/vendor_locations.model");
const typeorm_1 = require("typeorm");
let Location = class Location extends base_entity_model_1.BaseEntity {
    university;
    name;
    vendors;
    lodges;
    price;
};
exports.Location = Location;
__decorate([
    (0, typeorm_1.ManyToOne)(() => universities_model_1.University, (university) => university.locations),
    __metadata("design:type", universities_model_1.University)
], Location.prototype, "university", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Location.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vendor_locations_model_1.VendorLocation, (vendorLocation) => vendorLocation.location),
    __metadata("design:type", Array)
], Location.prototype, "vendors", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lodges_model_1.Lodge, (lodge) => lodge.location),
    __metadata("design:type", Array)
], Location.prototype, "lodges", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Location.prototype, "price", void 0);
exports.Location = Location = __decorate([
    (0, typeorm_1.Entity)('locations')
], Location);
//# sourceMappingURL=locations.model.js.map