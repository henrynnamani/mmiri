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
exports.VendorOrdersSuccessResponseDto = exports.VendorInternalServerResponseDto = exports.VendorNotFoundResponseDto = exports.VendorBadRequestResponseDto = exports.AddVendorServingLocationDto = exports.ChangeAvailabilityStatusSuccessDto = exports.GetAllVendorSuccessDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const SYS_MSG = __importStar(require("../../common/system-message"));
class GetAllVendorSuccessDto {
    success;
    message;
    data;
}
exports.GetAllVendorSuccessDto = GetAllVendorSuccessDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], GetAllVendorSuccessDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.REGISTRATION_SUCCESSFUL }),
    __metadata("design:type", String)
], GetAllVendorSuccessDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            payload: [
                {
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
                {
                    id: '53e876c9-248a-4663-9024-37921c5e7616',
                    createdAt: '2025-04-24T13:48:59.296Z',
                    updatedAt: '2025-04-24T13:48:59.296Z',
                    email: 'anita@gmail.com',
                    phoneNumber: '+2347052899465',
                    available: true,
                    businessName: null,
                    bankCode: null,
                    accountNumber: null,
                    subaccount: null,
                    isActive: false,
                    role: 'vendor',
                },
                {
                    id: '0b663754-ba13-4a27-ad4c-93fc1aabc81b',
                    createdAt: '2025-04-26T15:48:04.509Z',
                    updatedAt: '2025-04-26T15:48:04.509Z',
                    email: 'victor@gmail.com',
                    phoneNumber: '+2347052899465',
                    available: true,
                    businessName: 'Hassan',
                    bankCode: '999992',
                    accountNumber: '7052899465',
                    subaccount: null,
                    isActive: false,
                    role: 'vendor',
                },
                {
                    id: '983d95b9-a9db-429f-9640-d8401e2c3ef6',
                    createdAt: '2025-04-26T15:49:02.878Z',
                    updatedAt: '2025-04-26T15:49:02.878Z',
                    email: 'penita@gmail.com',
                    phoneNumber: '+2347052899465',
                    available: true,
                    businessName: 'Hassan',
                    bankCode: '999992',
                    accountNumber: '7052899465',
                    subaccount: null,
                    isActive: false,
                    role: 'vendor',
                },
                {
                    id: '2782dafe-50b1-4dce-b932-3f509662ee2d',
                    createdAt: '2025-04-26T15:49:37.694Z',
                    updatedAt: '2025-04-26T15:49:37.694Z',
                    email: 'bose@gmail.com',
                    phoneNumber: '+2347052899465',
                    available: true,
                    businessName: 'Hassan',
                    bankCode: '999992',
                    accountNumber: '7052899465',
                    subaccount: 'ACCT_41eq8zlg86xgbxt',
                    isActive: true,
                    role: 'vendor',
                },
                {
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
            ],
            paginationMeta: {
                total: 6,
                limit: 10,
                page: 1,
                totalPages: 1,
                hasNext: false,
                hasPrevious: false,
            },
        },
    }),
    __metadata("design:type", Object)
], GetAllVendorSuccessDto.prototype, "data", void 0);
class ChangeAvailabilityStatusSuccessDto {
    success;
    message;
    data;
}
exports.ChangeAvailabilityStatusSuccessDto = ChangeAvailabilityStatusSuccessDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], ChangeAvailabilityStatusSuccessDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.VENDOR_AVAILABILITY_UPDATED }),
    __metadata("design:type", String)
], ChangeAvailabilityStatusSuccessDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
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
    }),
    __metadata("design:type", Object)
], ChangeAvailabilityStatusSuccessDto.prototype, "data", void 0);
class AddVendorServingLocationDto {
    success;
    message;
    data;
}
exports.AddVendorServingLocationDto = AddVendorServingLocationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], AddVendorServingLocationDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: SYS_MSG.VENDOR_SERVING_LOCATION_UPDATED,
    }),
    __metadata("design:type", String)
], AddVendorServingLocationDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
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
            location: {
                id: 'f9cdaa27-e516-4885-af70-20b37ba29893',
                createdAt: '2025-04-21T23:12:47.205Z',
                updatedAt: '2025-04-21T23:12:47.205Z',
                name: 'Odenigwe',
            },
            vendorId: '2782dafe-50b1-4dce-b932-3f509662ee2d',
            locationId: 'f9cdaa27-e516-4885-af70-20b37ba29893',
            id: 'eb05a6dd-325b-4ed9-a5a0-951940cdd13c',
            createdAt: '2025-04-27T17:49:45.225Z',
            updatedAt: '2025-04-27T17:49:45.225Z',
        },
    }),
    __metadata("design:type", Object)
], AddVendorServingLocationDto.prototype, "data", void 0);
class VendorBadRequestResponseDto {
    success;
    message;
}
exports.VendorBadRequestResponseDto = VendorBadRequestResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: false }),
    __metadata("design:type", Boolean)
], VendorBadRequestResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.VENDOR_FAILED_LOCATION_UPDATE }),
    __metadata("design:type", String)
], VendorBadRequestResponseDto.prototype, "message", void 0);
class VendorNotFoundResponseDto {
    success;
    message;
}
exports.VendorNotFoundResponseDto = VendorNotFoundResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: false }),
    __metadata("design:type", Boolean)
], VendorNotFoundResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.VENDOR_NOT_FOUND }),
    __metadata("design:type", String)
], VendorNotFoundResponseDto.prototype, "message", void 0);
class VendorInternalServerResponseDto {
    success;
    message;
}
exports.VendorInternalServerResponseDto = VendorInternalServerResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: false }),
    __metadata("design:type", Boolean)
], VendorInternalServerResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.VENDOR_FAILED_LOCATION_UPDATE }),
    __metadata("design:type", String)
], VendorInternalServerResponseDto.prototype, "message", void 0);
class VendorOrdersSuccessResponseDto {
    success;
    message;
    data;
}
exports.VendorOrdersSuccessResponseDto = VendorOrdersSuccessResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], VendorOrdersSuccessResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'List of vendor orders' }),
    __metadata("design:type", String)
], VendorOrdersSuccessResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Array,
        example: {
            payload: [
                {
                    id: '3ee6019d-f23a-4e21-9965-83883e30fb99',
                    createdAt: '2025-04-26T16:16:55.379Z',
                    updatedAt: '2025-04-26T16:20:10.963Z',
                    userId: '2788d7a8-c524-44fe-ae78-21a286134627',
                    vendorId: '2782dafe-50b1-4dce-b932-3f509662ee2d',
                    noOfGallons: 6,
                    amountPayed: 1180,
                    status: 'pending',
                    paymentStatus: true,
                    paymentReference: 'hnpofxmlj7',
                },
                {
                    id: 'c4a8ec0e-c63b-4da3-affa-b7810ca8ab10',
                    createdAt: '2025-04-28T08:53:55.546Z',
                    updatedAt: '2025-04-28T08:53:55.546Z',
                    userId: '2788d7a8-c524-44fe-ae78-21a286134627',
                    vendorId: '2782dafe-50b1-4dce-b932-3f509662ee2d',
                    noOfGallons: 3,
                    amountPayed: 400,
                    status: 'pending',
                    paymentStatus: false,
                    paymentReference: '359p0j1qo3',
                },
            ],
            paginationMeta: {
                total: 2,
                limit: 10,
                page: 1,
                totalPages: 1,
                hasNext: false,
                hasPrevious: false,
            },
        },
    }),
    __metadata("design:type", Array)
], VendorOrdersSuccessResponseDto.prototype, "data", void 0);
//# sourceMappingURL=response.doc.js.map