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
exports.InitiatePaymentFailureDto = exports.InitiatePaymentSuccessDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class InitiatePaymentSuccessDto {
    data;
    message;
    success;
}
exports.InitiatePaymentSuccessDto = InitiatePaymentSuccessDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            authorization_url: 'https://checkout.paystack.com/tijzfw4nth0lq0i',
            access_code: 'tijzfw4nth0lq0i',
            reference: '359p0j1qo3',
        },
    }),
    __metadata("design:type", Object)
], InitiatePaymentSuccessDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Payment initiated successfully',
        description: 'A message indicating the status of the payment initiation',
    }),
    __metadata("design:type", String)
], InitiatePaymentSuccessDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
        example: true,
        description: 'A boolean indicating the success of the payment initiation',
    }),
    __metadata("design:type", Boolean)
], InitiatePaymentSuccessDto.prototype, "success", void 0);
class InitiatePaymentFailureDto {
    message;
    success;
}
exports.InitiatePaymentFailureDto = InitiatePaymentFailureDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Error initiating payment',
        description: 'A message indicating the failure of the payment initiation',
    }),
    __metadata("design:type", String)
], InitiatePaymentFailureDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
        example: false,
        description: 'A boolean indicating the failure of the payment initiation',
    }),
    __metadata("design:type", Boolean)
], InitiatePaymentFailureDto.prototype, "success", void 0);
//# sourceMappingURL=response.doc.js.map