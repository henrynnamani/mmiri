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
exports.LodgeUnauthorizedDto = exports.LodgeNotFoundDto = exports.GetLodgeVendorsDto = exports.CreateLodgeSuccessDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const SYS_MSG = __importStar(require("../../common/system-message"));
class CreateLodgeSuccessDto {
    success;
    message;
    data;
}
exports.CreateLodgeSuccessDto = CreateLodgeSuccessDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], CreateLodgeSuccessDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.LODGE_CREATED_SUCCESSFULLY }),
    __metadata("design:type", String)
], CreateLodgeSuccessDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '',
        example: [
            {
                name: 'Obosi',
                location: {
                    id: 'bbc7f774-d4d0-4592-938b-270f2bdedca1',
                    createdAt: '2025-04-21T23:12:46.705Z',
                    updatedAt: '2025-04-21T23:12:46.705Z',
                    name: 'Hilltop',
                },
                id: '42fd3f5a-78e9-4e73-8718-9d7386a66728',
                createdAt: '2025-04-28T07:12:11.394Z',
                updatedAt: '2025-04-28T07:12:11.394Z',
            },
            {
                name: 'Akachukwu',
                location: {
                    id: 'bbc7f774-d4d0-4592-938b-270f2bdedca1',
                    createdAt: '2025-04-21T23:12:46.705Z',
                    updatedAt: '2025-04-21T23:12:46.705Z',
                    name: 'Hilltop',
                },
                id: '1f226e45-e260-4ff6-9b62-c6eba8f764cb',
                createdAt: '2025-04-28T07:12:11.394Z',
                updatedAt: '2025-04-28T07:12:11.394Z',
            },
        ],
    }),
    __metadata("design:type", Object)
], CreateLodgeSuccessDto.prototype, "data", void 0);
class GetLodgeVendorsDto {
    message;
    success;
    data;
}
exports.GetLodgeVendorsDto = GetLodgeVendorsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'List of lodge vendors' }),
    __metadata("design:type", String)
], GetLodgeVendorsDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], GetLodgeVendorsDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            payload: [
                {
                    id: '6fb9d2fb-5438-49ee-a7b1-6be63d81e380',
                    createdAt: '2025-04-26T09:24:50.961Z',
                    updatedAt: '2025-04-26T09:24:50.961Z',
                    vendor: {
                        id: 'cf70c4b7-3c5e-4d96-b6e3-54cc14768e87',
                        createdAt: '2025-04-23T16:31:08.993Z',
                        updatedAt: '2025-04-24T07:53:36.449Z',
                        email: 'hassan@gmail.com',
                        phoneNumber: '+2347052899465',
                        available: true,
                        businessName: null,
                        bankCode: null,
                        accountNumber: null,
                        subaccount: null,
                        isActive: false,
                        role: 'vendor',
                    },
                    vendorId: 'cf70c4b7-3c5e-4d96-b6e3-54cc14768e87',
                    lodgeId: 'f2b3b726-5262-405a-a47d-54767a21cf2c',
                    price: 200,
                },
                {
                    id: 'f14ed663-7b96-4842-ad4a-9aedd3df08e8',
                    createdAt: '2025-04-26T16:01:47.779Z',
                    updatedAt: '2025-04-26T16:01:47.779Z',
                    vendor: {
                        id: '2782dafe-50b1-4dce-b932-3f509662ee2d',
                        createdAt: '2025-04-26T15:49:37.694Z',
                        updatedAt: '2025-04-27T17:19:10.954Z',
                        email: 'bose@gmail.com',
                        phoneNumber: '+2347052899465',
                        available: false,
                        businessName: 'Hassan',
                        bankCode: '999992',
                        accountNumber: '7052899465',
                        subaccount: 'ACCT_41eq8zlg86xgbxt',
                        isActive: true,
                        role: 'vendor',
                    },
                    vendorId: '2782dafe-50b1-4dce-b932-3f509662ee2d',
                    lodgeId: 'f2b3b726-5262-405a-a47d-54767a21cf2c',
                    price: 180,
                },
                {
                    id: '3abf0353-fd1b-4180-ab92-57bcb2068ef6',
                    createdAt: '2025-04-27T12:31:55.432Z',
                    updatedAt: '2025-04-27T12:31:55.432Z',
                    vendor: {
                        id: '2782dafe-50b1-4dce-b932-3f509662ee2d',
                        createdAt: '2025-04-26T15:49:37.694Z',
                        updatedAt: '2025-04-27T17:19:10.954Z',
                        email: 'bose@gmail.com',
                        phoneNumber: '+2347052899465',
                        available: false,
                        businessName: 'Hassan',
                        bankCode: '999992',
                        accountNumber: '7052899465',
                        subaccount: 'ACCT_41eq8zlg86xgbxt',
                        isActive: true,
                        role: 'vendor',
                    },
                    vendorId: '2782dafe-50b1-4dce-b932-3f509662ee2d',
                    lodgeId: 'f2b3b726-5262-405a-a47d-54767a21cf2c',
                    price: 100,
                },
            ],
            paginationMeta: {
                total: 3,
                limit: 10,
                page: 1,
                totalPages: 1,
                hasNext: false,
                hasPrevious: false,
            },
        },
    }),
    __metadata("design:type", Object)
], GetLodgeVendorsDto.prototype, "data", void 0);
class LodgeNotFoundDto {
    message;
    success;
}
exports.LodgeNotFoundDto = LodgeNotFoundDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.LOCATION_NOT_FOUND }),
    __metadata("design:type", String)
], LodgeNotFoundDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: false }),
    __metadata("design:type", Boolean)
], LodgeNotFoundDto.prototype, "success", void 0);
class LodgeUnauthorizedDto {
    message;
    success;
}
exports.LodgeUnauthorizedDto = LodgeUnauthorizedDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.USER_NOT_AUTHORIZED }),
    __metadata("design:type", String)
], LodgeUnauthorizedDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: false }),
    __metadata("design:type", Boolean)
], LodgeUnauthorizedDto.prototype, "success", void 0);
//# sourceMappingURL=response.doc.js.map