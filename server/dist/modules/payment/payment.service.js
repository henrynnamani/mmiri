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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = __importDefault(require("axios"));
const users_service_1 = require("../users/users.service");
const constants_1 = require("../common/constants");
const locations_service_1 = require("../locations/locations.service");
const vendors_service_1 = require("../vendors/vendors.service");
const payment_model_action_1 = require("./model/payment.model-action");
const SYS_MSG = __importStar(require("../common/system-message"));
const lodges_service_1 = require("../lodges/lodges.service");
const order_service_1 = require("../order/order.service");
let PaymentService = class PaymentService {
    config;
    locationService;
    usersService;
    vendorService;
    paymentModelAction;
    lodgesServie;
    orderService;
    paystackBaseUrl;
    paystackSecretKey;
    constructor(config, locationService, usersService, vendorService, paymentModelAction, lodgesServie, orderService) {
        this.config = config;
        this.locationService = locationService;
        this.usersService = usersService;
        this.vendorService = vendorService;
        this.paymentModelAction = paymentModelAction;
        this.lodgesServie = lodgesServie;
        this.orderService = orderService;
        this.paystackBaseUrl = this.config.get('paystack.baseUrl');
        this.paystackSecretKey = this.config.get('paystack.secretKey');
    }
    async createPaymentRecord(paymentDto) {
        const response = await this.paymentModelAction.create({
            createPayload: paymentDto,
            transactionOptions: {
                useTransaction: false,
            },
        });
        if (!response) {
            throw new common_1.BadRequestException(SYS_MSG.PAYMENT_RECORD_CREATION_FAILED);
        }
        return response;
    }
    async initiatePayment(loggedInUser, paymentDto) {
        try {
            let paymentPayload;
            const locationAmount = await this.lodgesServie.getLodgeLocationPrice(paymentDto.lodgeId);
            if (!locationAmount) {
                throw new common_1.BadRequestException(SYS_MSG.LOCATION_AMOUNT_NOT_SET);
            }
            const amount = this.computePaymentAmount(locationAmount, paymentDto.noOfGallons);
            if (paymentDto.subaccount) {
                paymentPayload = {
                    email: loggedInUser.email,
                    amount,
                    subaccount: paymentDto.subaccount,
                    transaction_charge: constants_1.SERVICE_CHARGE * 100,
                    metadata: {
                        orderId: paymentDto.orderId,
                        lodgeId: paymentDto.lodgeId,
                    },
                };
            }
            else {
                paymentPayload = {
                    email: loggedInUser.email,
                    amount,
                    metadata: {
                        orderId: paymentDto.orderId,
                        lodgeId: paymentDto.lodgeId,
                    },
                };
            }
            const response = await axios_1.default.post(`${this.paystackBaseUrl}/transaction/initialize`, paymentPayload, {
                headers: {
                    Authorization: `Bearer ${this.paystackSecretKey}`,
                    'Content-Type': 'application/json',
                },
            });
            await this.createPaymentRecord({
                orderId: paymentDto.orderId,
                amount: amount / 100,
                status: false,
                reference: response.data.data.reference,
            });
            return response.data;
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(SYS_MSG.ERROR_INITIATING_PAYMENT_TRANSACTION);
        }
    }
    async updatePaymentRecord(orderId, reference, status) {
        try {
            await this.paymentModelAction.update({
                identifierOptions: {
                    orderId,
                    reference,
                },
                updatePayload: {
                    status,
                },
                transactionOption: {
                    useTransaction: false,
                },
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    computePaymentAmount(lodgeCharge, noOfGallons) {
        return (lodgeCharge * noOfGallons + constants_1.SERVICE_CHARGE) * 100;
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(6, (0, common_1.Inject)((0, common_1.forwardRef)(() => order_service_1.OrderService))),
    __metadata("design:paramtypes", [config_1.ConfigService,
        locations_service_1.LocationsService,
        users_service_1.UsersService,
        vendors_service_1.VendorsService,
        payment_model_action_1.PaymentModelAction,
        lodges_service_1.LodgesService,
        order_service_1.OrderService])
], PaymentService);
//# sourceMappingURL=payment.service.js.map