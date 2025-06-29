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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsService = void 0;
const common_1 = require("@nestjs/common");
const vendors_model_action_1 = require("./model/vendors.model-action");
const config_1 = require("@nestjs/config");
const axios_1 = __importDefault(require("axios"));
const SYS_MSG = __importStar(require("../common/system-message"));
const constants_1 = require("../common/constants");
let VendorsService = class VendorsService {
    vendorModelAction;
    config;
    constructor(vendorModelAction, config) {
        this.vendorModelAction = vendorModelAction;
        this.config = config;
    }
    async registerVendor(registerDto) {
        const vendorExist = await this.getVendorByEmail(registerDto.email);
        if (vendorExist) {
            throw new common_1.BadRequestException(SYS_MSG.VENDOR_ALREADY_EXIST);
        }
        const subAccountCode = await this.createSubaccount(registerDto.businessName, registerDto.bankCode, registerDto.accountNumber);
        const payload = {
            ...registerDto,
            subaccount: subAccountCode?.data?.data?.subaccount_code,
        };
        await this.vendorModelAction.create({
            createPayload: payload,
            transactionOptions: {
                useTransaction: false,
            },
        });
        const createdVendor = await this.vendorModelAction.get({
            getRecordIdentifierOption: { email: payload.email },
        });
        if (!createdVendor) {
            throw new common_1.InternalServerErrorException(SYS_MSG.VENDOR_NOT_CREATED);
        }
        return createdVendor;
    }
    getVendorByEmail(email) {
        return this.vendorModelAction.get({
            getRecordIdentifierOption: { email },
        });
    }
    getVendorByChatId(chatId) {
        return this.vendorModelAction.get({
            getRecordIdentifierOption: { chatId },
        });
    }
    getAllVendors() {
        return this.vendorModelAction.list({
            pagination: {
                page: 1,
                limit: 10,
            },
            queryOption: {
                available: true,
            },
        });
    }
    async changeAvailabilityStatus(chatId) {
        const vendorExist = await this.getVendorByChatId(chatId);
        if (!vendorExist) {
            throw new common_1.NotFoundException(SYS_MSG.VENDOR_NOT_FOUND);
        }
        const payload = {
            isActive: !vendorExist.isActive,
        };
        await this.vendorModelAction.update({
            identifierOptions: { chatId },
            updatePayload: payload,
            transactionOption: {
                useTransaction: false,
            },
        });
        const updatedVendor = await this.getVendorByChatId(chatId);
        return {
            data: updatedVendor,
            message: SYS_MSG.VENDOR_AVAILABILITY_UPDATED,
        };
    }
    async createSubaccount(businessName, bankCode, accountNumber) {
        const url = `${this.config.get('paystack.baseUrl')}/subaccount`;
        const payload = {
            business_name: businessName,
            bank_code: bankCode,
            account_number: accountNumber,
            percentage_charge: constants_1.SERVICE_CHARGE,
        };
        const headers = {
            Authorization: `Bearer ${this.config.get('paystack.secretKey')}`,
            'Content-Type': 'application/json',
        };
        const response = await axios_1.default.post(`${url}`, payload, {
            headers,
        });
        return response;
    }
};
exports.VendorsService = VendorsService;
exports.VendorsService = VendorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [vendors_model_action_1.VendorModelAction,
        config_1.ConfigService])
], VendorsService);
//# sourceMappingURL=vendors.service.js.map