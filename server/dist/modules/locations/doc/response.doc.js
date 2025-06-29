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
exports.LocationUnauthorizedDto = exports.LocationNotFoundDto = exports.GetLocationVendorSuccessDto = exports.GetLocationLodgesSuccessDto = exports.LocationSuccessDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const SYS_MSG = __importStar(require("../../common/system-message"));
class LocationSuccessDto {
    success;
    message;
    data;
}
exports.LocationSuccessDto = LocationSuccessDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], LocationSuccessDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.LOCATION_CREATED_SUCCESSFULLY }),
    __metadata("design:type", String)
], LocationSuccessDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                name: 'Odenigbo',
                university: {
                    id: '80baa827-7a0a-4849-a9d0-c74501e00809',
                    createdAt: '2025-04-21T15:44:03.373Z',
                    updatedAt: '2025-04-21T15:44:03.373Z',
                    name: 'University of Nigeria',
                },
                id: '19f3dd84-e100-4090-8c8f-76d59bad00cb',
                createdAt: '2025-04-27T18:44:25.898Z',
                updatedAt: '2025-04-27T18:44:25.898Z',
            },
            {
                name: 'Vet Mountain',
                university: {
                    id: '80baa827-7a0a-4849-a9d0-c74501e00809',
                    createdAt: '2025-04-21T15:44:03.373Z',
                    updatedAt: '2025-04-21T15:44:03.373Z',
                    name: 'University of Nigeria',
                },
                id: 'be27456c-ee45-411a-a323-08f081e90448',
                createdAt: '2025-04-27T18:44:25.898Z',
                updatedAt: '2025-04-27T18:44:25.898Z',
            },
        ],
    }),
    __metadata("design:type", Object)
], LocationSuccessDto.prototype, "data", void 0);
class GetLocationLodgesSuccessDto {
    success;
    message;
    data;
}
exports.GetLocationLodgesSuccessDto = GetLocationLodgesSuccessDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], GetLocationLodgesSuccessDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.LOCATION_CREATED_SUCCESSFULLY }),
    __metadata("design:type", String)
], GetLocationLodgesSuccessDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: 'bbc7f774-d4d0-4592-938b-270f2bdedca1',
            createdAt: '2025-04-21T23:12:46.705Z',
            updatedAt: '2025-04-21T23:12:46.705Z',
            name: 'Hilltop',
            lodges: [
                {
                    id: 'f2b3b726-5262-405a-a47d-54767a21cf2c',
                    createdAt: '2025-04-23T11:22:12.474Z',
                    updatedAt: '2025-04-23T11:22:12.474Z',
                    name: 'Solomon',
                },
                {
                    id: '7a43ed84-9114-41c7-9a04-82aed8b8f25c',
                    createdAt: '2025-04-23T11:22:12.474Z',
                    updatedAt: '2025-04-23T11:22:12.474Z',
                    name: 'Paris',
                },
                {
                    id: 'c978ee18-abe8-459d-8dc1-1c60e5cea869',
                    createdAt: '2025-04-23T11:22:12.474Z',
                    updatedAt: '2025-04-23T11:22:12.474Z',
                    name: 'Udify',
                },
                {
                    id: 'f5a65c65-ca4f-476e-a6aa-ad69c96c3e27',
                    createdAt: '2025-04-23T11:35:37.271Z',
                    updatedAt: '2025-04-23T11:35:37.271Z',
                    name: 'St Agnes',
                },
            ],
        },
    }),
    __metadata("design:type", Object)
], GetLocationLodgesSuccessDto.prototype, "data", void 0);
class GetLocationVendorSuccessDto {
    success;
    message;
    data;
}
exports.GetLocationVendorSuccessDto = GetLocationVendorSuccessDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], GetLocationVendorSuccessDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.LOCATION_CREATED_SUCCESSFULLY }),
    __metadata("design:type", String)
], GetLocationVendorSuccessDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: 'bbc7f774-d4d0-4592-938b-270f2bdedca1',
            createdAt: '2025-04-21T23:12:46.705Z',
            updatedAt: '2025-04-21T23:12:46.705Z',
            name: 'Hilltop',
            vendors: [
                {
                    id: 'a6dcfd0d-1914-4314-a1ae-0363bcb0c1da',
                    createdAt: '2025-04-24T13:39:01.379Z',
                    updatedAt: '2025-04-24T13:39:01.379Z',
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
                    locationId: 'bbc7f774-d4d0-4592-938b-270f2bdedca1',
                },
                {
                    id: '30bde49c-7f02-4a07-854f-98281ca33ab8',
                    createdAt: '2025-04-24T13:48:27.362Z',
                    updatedAt: '2025-04-24T13:48:27.362Z',
                    vendor: {
                        id: 'c9137b4e-ee9f-4650-9543-05340a4fb391',
                        createdAt: '2025-04-24T13:47:45.730Z',
                        updatedAt: '2025-04-24T13:52:03.974Z',
                        email: 'henry@gmail.com',
                        phoneNumber: '+2347052899465',
                        available: false,
                        businessName: null,
                        bankCode: null,
                        accountNumber: null,
                        subaccount: null,
                        isActive: false,
                        role: 'vendor',
                    },
                    vendorId: 'c9137b4e-ee9f-4650-9543-05340a4fb391',
                    locationId: 'bbc7f774-d4d0-4592-938b-270f2bdedca1',
                },
            ],
        },
    }),
    __metadata("design:type", Object)
], GetLocationVendorSuccessDto.prototype, "data", void 0);
class LocationNotFoundDto {
    success;
    message;
}
exports.LocationNotFoundDto = LocationNotFoundDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: false }),
    __metadata("design:type", Boolean)
], LocationNotFoundDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.LOCATION_NOT_FOUND }),
    __metadata("design:type", String)
], LocationNotFoundDto.prototype, "message", void 0);
class LocationUnauthorizedDto {
    success;
    message;
}
exports.LocationUnauthorizedDto = LocationUnauthorizedDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: false }),
    __metadata("design:type", Boolean)
], LocationUnauthorizedDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.USER_NOT_AUTHORIZED }),
    __metadata("design:type", String)
], LocationUnauthorizedDto.prototype, "message", void 0);
//# sourceMappingURL=response.doc.js.map