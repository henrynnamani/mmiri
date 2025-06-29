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
exports.LodgePriceNotFoundDto = exports.UpdateLodgePriceSuccessResponse = exports.CreateLodgePriceSuccessResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const SYS_MSG = __importStar(require("../../common/system-message"));
class CreateLodgePriceSuccessResponse {
    data;
    message;
    success;
}
exports.CreateLodgePriceSuccessResponse = CreateLodgePriceSuccessResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            lodge: {
                id: 'f2b3b726-5262-405a-a47d-54767a21cf2c',
                createdAt: '2025-04-23T11:22:12.474Z',
                updatedAt: '2025-04-23T11:22:12.474Z',
                name: 'Solomon',
            },
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
            price: 80,
            vendorId: '2782dafe-50b1-4dce-b932-3f509662ee2d',
            lodgeId: 'f2b3b726-5262-405a-a47d-54767a21cf2c',
            id: '3ca39234-a55b-4a0a-9d63-03c17e8de064',
            createdAt: '2025-04-28T08:21:09.959Z',
            updatedAt: '2025-04-28T08:21:09.959Z',
        },
    }),
    __metadata("design:type", Object)
], CreateLodgePriceSuccessResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.PRICE_SET_SUCCESSFULLY }),
    __metadata("design:type", String)
], CreateLodgePriceSuccessResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], CreateLodgePriceSuccessResponse.prototype, "success", void 0);
class UpdateLodgePriceSuccessResponse {
    message;
    success;
    data;
}
exports.UpdateLodgePriceSuccessResponse = UpdateLodgePriceSuccessResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Lodge price updated successfully' }),
    __metadata("design:type", String)
], UpdateLodgePriceSuccessResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], UpdateLodgePriceSuccessResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: '7fb29cff-5951-49e2-941d-ee1825b1fd8d',
            createdAt: '2025-04-24T16:21:31.584Z',
            updatedAt: '2025-04-28T08:31:18.191Z',
            vendorId: '53e876c9-248a-4663-9024-37921c5e7616',
            lodgeId: '7a43ed84-9114-41c7-9a04-82aed8b8f25c',
            price: 200,
        },
    }),
    __metadata("design:type", Object)
], UpdateLodgePriceSuccessResponse.prototype, "data", void 0);
class LodgePriceNotFoundDto {
    message;
    success;
}
exports.LodgePriceNotFoundDto = LodgePriceNotFoundDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Lodge price not found' }),
    __metadata("design:type", String)
], LodgePriceNotFoundDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: false }),
    __metadata("design:type", Boolean)
], LodgePriceNotFoundDto.prototype, "success", void 0);
//# sourceMappingURL=response.doc.js.map