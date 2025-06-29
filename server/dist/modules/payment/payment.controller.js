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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaystackController = void 0;
const common_1 = require("@nestjs/common");
const payment_service_1 = require("./payment.service");
const crypto = __importStar(require("crypto"));
const config_1 = require("@nestjs/config");
const is_public_decorator_1 = require("../common/decorators/is-public.decorator");
const telegram_service_1 = require("../telegram/telegram.service");
const order_service_1 = require("../order/order.service");
const SYS_MSG = __importStar(require("../common/system-message"));
const lodges_service_1 = require("../lodges/lodges.service");
let PaystackController = class PaystackController {
    config;
    paymentService;
    telegramService;
    orderService;
    lodgeService;
    constructor(config, paymentService, telegramService, orderService, lodgeService) {
        this.config = config;
        this.paymentService = paymentService;
        this.telegramService = telegramService;
        this.orderService = orderService;
        this.lodgeService = lodgeService;
    }
    async handleWebhook(signature, rawBody, req, res) {
        const secret = this.config.get('paystack.secretKey');
        const hash = crypto
            .createHmac('sha512', secret)
            .update(JSON.stringify(req.body))
            .digest('hex');
        res.status(200).send('OK');
        if (hash == req.headers['x-paystack-signature']) {
            const body = req.body;
            if (body.event === 'charge.success') {
                const orderId = body.data.metadata?.orderId;
                const lodgeId = body.data.metadata?.lodgeId;
                const response = await this.orderService.getOrderById(orderId);
                const lodgeResponse = await this.lodgeService.getLodgeById(lodgeId);
                if (!response) {
                    throw new common_1.NotFoundException(SYS_MSG.ORDER_NOT_FOUND);
                }
                await this.paymentService.updatePaymentRecord(orderId, body?.data?.reference, true);
                await this.telegramService.notifyVendorOfOrder(Number(response?.vendor.chatId), response, lodgeResponse);
            }
        }
        return {
            data: null,
            message: 'Payment successful',
        };
    }
};
exports.PaystackController = PaystackController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Headers)('x-paystack-signature')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Buffer, Object, Object]),
    __metadata("design:returntype", Promise)
], PaystackController.prototype, "handleWebhook", null);
exports.PaystackController = PaystackController = __decorate([
    (0, is_public_decorator_1.skipAuth)(),
    (0, common_1.Controller)('webhook'),
    __metadata("design:paramtypes", [config_1.ConfigService,
        payment_service_1.PaymentService,
        telegram_service_1.TelegramService,
        order_service_1.OrderService,
        lodges_service_1.LodgesService])
], PaystackController);
//# sourceMappingURL=payment.controller.js.map