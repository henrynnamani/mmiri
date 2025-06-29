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
exports.LodgePriceModelAction = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
const base_model_action_1 = require("../../common/base-model.action");
const lodge_price_model_1 = require("./lodge_price.model");
let LodgePriceModelAction = class LodgePriceModelAction extends base_model_action_1.AbstractModelAction {
    constructor(repository) {
        super(repository, lodge_price_model_1.LodgePrice);
    }
    async findAvailableVendorsByLodge(lodgeId) {
        const lodgePrices = await this.repository
            .createQueryBuilder('lodge_price')
            .innerJoinAndSelect('lodge_price.vendor', 'vendor')
            .innerJoinAndSelect('lodge_price.lodge', 'lodge')
            .leftJoin('orders', 'order', 'order.vendor_id = vendor.id')
            .where('lodge.id = :lodgeId', { lodgeId })
            .andWhere('vendor.isActive = true')
            .groupBy('lodge_price.id')
            .addGroupBy('vendor.id')
            .addGroupBy('lodge.id')
            .having('COUNT(order.id) < 10')
            .getMany();
        const response = lodgePrices.map((lp) => lp.vendor);
        return response;
    }
};
exports.LodgePriceModelAction = LodgePriceModelAction;
exports.LodgePriceModelAction = LodgePriceModelAction = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lodge_price_model_1.LodgePrice)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LodgePriceModelAction);
//# sourceMappingURL=lodge_price.model-action.js.map