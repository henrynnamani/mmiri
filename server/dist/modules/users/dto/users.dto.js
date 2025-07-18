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
exports.UserDto = void 0;
const class_validator_1 = require("class-validator");
class UserDto {
    email;
    password;
    phoneNumber;
    lodgeId;
}
exports.UserDto = UserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsStrongPassword)({
        minLength: 8,
        minNumbers: 1,
        minLowercase: 1,
        minSymbols: 1,
    }),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\+234\d{10}$/, {
        message: 'Phone number must be a valid Nigerian number starting with +234',
    }),
    __metadata("design:type", String)
], UserDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUUID)('all'),
    __metadata("design:type", String)
], UserDto.prototype, "lodgeId", void 0);
//# sourceMappingURL=users.dto.js.map