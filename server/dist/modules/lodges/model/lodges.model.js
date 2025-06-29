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
exports.Lodge = void 0;
const base_entity_model_1 = require("../../common/base-entity.model");
const typeorm_1 = require("typeorm");
const locations_model_1 = require("../../locations/model/locations.model");
const lodge_price_model_1 = require("../../lodge_price/model/lodge_price.model");
let Lodge = class Lodge extends base_entity_model_1.BaseEntity {
    name;
    location;
    vendors;
};
exports.Lodge = Lodge;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lodge.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => locations_model_1.Location, (location) => location.lodges),
    __metadata("design:type", locations_model_1.Location)
], Lodge.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lodge_price_model_1.LodgePrice, (lodge_price) => lodge_price.vendor),
    __metadata("design:type", Array)
], Lodge.prototype, "vendors", void 0);
exports.Lodge = Lodge = __decorate([
    (0, typeorm_1.Entity)('lodges')
], Lodge);
//# sourceMappingURL=lodges.model.js.map