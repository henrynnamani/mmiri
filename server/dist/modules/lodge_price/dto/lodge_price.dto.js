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
exports.UpdateChargeDto = exports.LodgePriceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class LodgePriceDto {
    chatId;
    lodgeId;
}
exports.LodgePriceDto = LodgePriceDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Vendor ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsUUID)('all'),
    __metadata("design:type", Number)
], LodgePriceDto.prototype, "chatId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lodge ID',
        example: '123e4567-e89b-12d3-a456-426614174000',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], LodgePriceDto.prototype, "lodgeId", void 0);
class UpdateChargeDto {
    price;
}
exports.UpdateChargeDto = UpdateChargeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Price',
        example: 65,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateChargeDto.prototype, "price", void 0);
//# sourceMappingURL=lodge_price.dto.js.map