"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSuccessResponseDto = exports.LoginBadRequestResponse = exports.NotFoundResponseDto = exports.BadRequestResponseDto = exports.RegistrationSuccessResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const SYS_MSG = __importStar(require("../../common/system-message"));
class RegistrationSuccessResponseDto {
    success;
    message;
    data;
}
exports.RegistrationSuccessResponseDto = RegistrationSuccessResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], RegistrationSuccessResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.REGISTRATION_SUCCESSFUL }),
    __metadata("design:type", String)
], RegistrationSuccessResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            user: {
                id: 'f7cccdda-f2e0-4dd3-9c18-2255725bd343',
                createdAt: '2025-04-27T15:38:42.161Z',
                updatedAt: '2025-04-27T15:38:42.161Z',
                email: 'bejoyful@gmail.com',
                phoneNumber: '+2347052899465',
                available: true,
                businessName: 'Hassan',
                bankCode: '999992',
                accountNumber: '7052899465',
                subaccount: 'ACCT_u7bujbu8c2weuib',
                isActive: false,
                role: 'vendor',
            },
            access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmN2NjY2RkYS1mMmUwLTRkZDMtOWMxOC0yMjU1NzI1YmQzNDMiLCJpYXQiOjE3NDU3NzE5MjMsImV4cCI6MTc0NTc3NTUyM30.DAO6D91VowLXi3SHVPWUOMw80SKmvBBusbsiFWR_Lg0',
        },
    }),
    __metadata("design:type", Object)
], RegistrationSuccessResponseDto.prototype, "data", void 0);
class BadRequestResponseDto {
    success;
    message;
}
exports.BadRequestResponseDto = BadRequestResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: false }),
    __metadata("design:type", Boolean)
], BadRequestResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.USER_ALREADY_EXIST }),
    __metadata("design:type", String)
], BadRequestResponseDto.prototype, "message", void 0);
class NotFoundResponseDto {
    success;
    message;
}
exports.NotFoundResponseDto = NotFoundResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: false }),
    __metadata("design:type", Boolean)
], NotFoundResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.USER_NOT_FOUND }),
    __metadata("design:type", String)
], NotFoundResponseDto.prototype, "message", void 0);
class LoginBadRequestResponse {
    success;
    message;
}
exports.LoginBadRequestResponse = LoginBadRequestResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: false }),
    __metadata("design:type", Boolean)
], LoginBadRequestResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.INVALID_CREDENTIALS }),
    __metadata("design:type", String)
], LoginBadRequestResponse.prototype, "message", void 0);
class LoginSuccessResponseDto {
    success;
    message;
    data;
}
exports.LoginSuccessResponseDto = LoginSuccessResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], LoginSuccessResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Login successful' }),
    __metadata("design:type", String)
], LoginSuccessResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            user: {
                id: 'f7cccdda-f2e0-4dd3-9c18-2255725bd343',
                createdAt: '2025-04-27T15:38:42.161Z',
                updatedAt: '2025-04-27T15:38:42.161Z',
                email: 'bejoyful@gmail.com',
                phoneNumber: '+2347052899465',
                available: true,
                businessName: 'Hassan',
                bankCode: '999992',
                accountNumber: '7052899465',
                subaccount: 'ACCT_u7bujbu8c2weuib',
                isActive: false,
                role: 'vendor',
            },
            access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmN2NjY2RkYS1mMmUwLTRkZDMtOWMxOC0yMjU1NzI1YmQzNDMiLCJpYXQiOjE3NDU3NzE5MjMsImV4cCI6MTc0NTc3NTUyM30.DAO6D91VowLXi3SHVPWUOMw80SKmvBBusbsiFWR_Lg0',
        },
    }),
    __metadata("design:type", Object)
], LoginSuccessResponseDto.prototype, "data", void 0);
//# sourceMappingURL=response.docs.js.map