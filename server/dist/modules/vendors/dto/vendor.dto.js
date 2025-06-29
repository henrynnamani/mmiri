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
exports.VendorRegisterDto = void 0;
const enums_1 = require("../../common/enums");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class VendorRegisterDto {
    email;
    chatId;
    businessName;
    bankCode;
    accountNumber;
    role;
    phoneNumber;
}
exports.VendorRegisterDto = VendorRegisterDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email address of the user',
        example: 'hoyx0101@gmail.com',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], VendorRegisterDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User password',
        example: 'Password123!',
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], VendorRegisterDto.prototype, "chatId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Business name of the user',
        example: 'Nike',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VendorRegisterDto.prototype, "businessName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Bank code of the user',
        example: '058',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VendorRegisterDto.prototype, "bankCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Account number of the user',
        example: '0123456789',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VendorRegisterDto.prototype, "accountNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Role of the user',
        example: 'user',
        required: false,
    }),
    (0, class_validator_1.IsEnum)(enums_1.Role, { message: 'Role must be one of: user, vendor' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VendorRegisterDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Phone number of the user',
        example: '+2348123456789',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^\+234\d{10}$/, {
        message: 'Phone number must be a valid Nigerian number starting with +234',
    }),
    __metadata("design:type", String)
], VendorRegisterDto.prototype, "phoneNumber", void 0);
//# sourceMappingURL=vendor.dto.js.map