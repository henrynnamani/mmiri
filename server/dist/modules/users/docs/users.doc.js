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
exports.UserBadRequestDto = exports.UserOrderSuccessDto = exports.UserOrdersDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const SYS_MSG = __importStar(require("../../common/system-message"));
const UserOrdersDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Get all user order' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiResponse)({ status: 200, type: UserOrderSuccessDto }), (0, swagger_1.ApiResponse)({ status: 400, type: UserBadRequestDto }));
};
exports.UserOrdersDoc = UserOrdersDoc;
class UserOrderSuccessDto {
    data;
    message;
    success;
}
exports.UserOrderSuccessDto = UserOrderSuccessDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            payload: [
                {
                    id: '8495fbd0-0813-4906-96b4-6f7bcc73ecb9',
                    createdAt: '2025-04-26T16:03:29.257Z',
                    updatedAt: '2025-04-26T16:05:47.623Z',
                    userId: '2788d7a8-c524-44fe-ae78-21a286134627',
                    vendorId: 'cf70c4b7-3c5e-4d96-b6e3-54cc14768e87',
                    noOfGallons: 7,
                    amountPayed: 1500,
                    status: 'pending',
                    paymentStatus: true,
                    paymentReference: 'amsrm8hfqb',
                },
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
], UserOrderSuccessDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'List of user orders' }),
    __metadata("design:type", String)
], UserOrderSuccessDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, description: 'status of the request' }),
    __metadata("design:type", Boolean)
], UserOrderSuccessDto.prototype, "success", void 0);
class UserBadRequestDto {
    message;
    success;
}
exports.UserBadRequestDto = UserBadRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: SYS_MSG.USER_NOT_FOUND }),
    __metadata("design:type", String)
], UserBadRequestDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: false }),
    __metadata("design:type", Boolean)
], UserBadRequestDto.prototype, "success", void 0);
//# sourceMappingURL=users.doc.js.map