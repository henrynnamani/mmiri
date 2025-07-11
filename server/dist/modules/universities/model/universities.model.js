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
exports.University = void 0;
const base_entity_model_1 = require("../../common/base-entity.model");
const locations_model_1 = require("../../locations/model/locations.model");
const typeorm_1 = require("typeorm");
let University = class University extends base_entity_model_1.BaseEntity {
    name;
    locations;
};
exports.University = University;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], University.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => locations_model_1.Location, (location) => location.university),
    __metadata("design:type", Array)
], University.prototype, "locations", void 0);
exports.University = University = __decorate([
    (0, typeorm_1.Entity)('universities')
], University);
//# sourceMappingURL=universities.model.js.map