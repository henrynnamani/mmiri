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
exports.UniversitiesBadRequestDto = exports.UniversitiesSuccesssDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const SYS_MSG = __importStar(require("../../common/system-message"));
class UniversitiesSuccesssDto {
    success;
    message;
    data;
}
exports.UniversitiesSuccesssDto = UniversitiesSuccesssDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], UniversitiesSuccesssDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'University created successfully' }),
    __metadata("design:type", String)
], UniversitiesSuccesssDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            name: 'University of Ibadan',
            id: 'a29f1112-9a27-4839-bcca-c74c578042e0',
            createdAt: '2025-04-28T06:47:35.998Z',
            updatedAt: '2025-04-28T06:47:35.998Z',
        },
    }),
    __metadata("design:type", Object)
], UniversitiesSuccesssDto.prototype, "data", void 0);
class UniversitiesBadRequestDto {
    success;
    message;
}
exports.UniversitiesBadRequestDto = UniversitiesBadRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: false }),
    __metadata("design:type", Boolean)
], UniversitiesBadRequestDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.UNIVERSITY_CREATION_FAILED }),
    __metadata("design:type", String)
], UniversitiesBadRequestDto.prototype, "message", void 0);
//# sourceMappingURL=response.doc.js.map