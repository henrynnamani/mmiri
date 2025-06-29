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
exports.User = void 0;
const base_entity_model_1 = require("../../common/base-entity.model");
const enums_1 = require("../../common/enums");
const lodges_model_1 = require("../../lodges/model/lodges.model");
const order_model_1 = require("../../order/model/order.model");
const typeorm_1 = require("typeorm");
let User = class User extends base_entity_model_1.BaseEntity {
    email;
    password;
    phoneNumber;
    role;
    lodge;
    lodgeId;
    orders;
};
exports.User = User;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enums_1.Role, default: enums_1.Role.USER }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lodges_model_1.Lodge, (lodge) => lodge.id),
    (0, typeorm_1.JoinColumn)({ name: 'lodge_id' }),
    __metadata("design:type", lodges_model_1.Lodge)
], User.prototype, "lodge", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lodge_id', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "lodgeId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_model_1.Order, (order) => order.user),
    __metadata("design:type", Array)
], User.prototype, "orders", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
//# sourceMappingURL=users.model.js.map