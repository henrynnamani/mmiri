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
exports.LodgePriceService = void 0;
const common_1 = require("@nestjs/common");
const vendors_service_1 = require("../vendors/vendors.service");
const lodges_service_1 = require("../lodges/lodges.service");
const lodge_price_model_action_1 = require("./model/lodge_price.model-action");
const SYS_MSG = __importStar(require("../common/system-message"));
let LodgePriceService = class LodgePriceService {
    lodgesService;
    vendorsService;
    lodgePriceModelAction;
    constructor(lodgesService, vendorsService, lodgePriceModelAction) {
        this.lodgesService = lodgesService;
        this.vendorsService = vendorsService;
        this.lodgePriceModelAction = lodgePriceModelAction;
    }
    async setVendorLodge(lodgePriceDto) {
        const vendorExist = await this.vendorsService.getVendorByChatId(lodgePriceDto.chatId);
        if (!vendorExist) {
            throw new common_1.NotFoundException(SYS_MSG.VENDOR_NOT_FOUND);
        }
        const lodgeExist = await this.lodgesService.getLodgeById(lodgePriceDto.lodgeId);
        if (!lodgeExist) {
            throw new common_1.NotFoundException(SYS_MSG.LODGE_NOT_FOUND);
        }
        const response = await this.lodgePriceModelAction.create({
            createPayload: {
                lodge: lodgeExist,
                vendor: vendorExist,
            },
            transactionOptions: {
                useTransaction: false,
            },
        });
        return {
            data: response,
            message: SYS_MSG.PRICE_SET_SUCCESSFULLY,
        };
    }
};
exports.LodgePriceService = LodgePriceService;
exports.LodgePriceService = LodgePriceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [lodges_service_1.LodgesService,
        vendors_service_1.VendorsService,
        lodge_price_model_action_1.LodgePriceModelAction])
], LodgePriceService);
//# sourceMappingURL=lodge_price.service.js.map