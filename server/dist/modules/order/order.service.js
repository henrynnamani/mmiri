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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const vendors_service_1 = require("../vendors/vendors.service");
const SYS_MSG = __importStar(require("../common/system-message"));
const order_model_action_1 = require("./model/order.model-action");
const users_service_1 = require("../users/users.service");
const enums_1 = require("../common/enums");
const telegram_service_1 = require("../telegram/telegram.service");
const payment_service_1 = require("../payment/payment.service");
const lodge_price_model_action_1 = require("../lodge_price/model/lodge_price.model-action");
const typeorm_1 = require("typeorm");
let OrderService = class OrderService {
    orderModelAction;
    usersService;
    vendorsService;
    telegramService;
    paymentService;
    lodgePriceModelAction;
    constructor(orderModelAction, usersService, vendorsService, telegramService, paymentService, lodgePriceModelAction) {
        this.orderModelAction = orderModelAction;
        this.usersService = usersService;
        this.vendorsService = vendorsService;
        this.telegramService = telegramService;
        this.paymentService = paymentService;
        this.lodgePriceModelAction = lodgePriceModelAction;
    }
    async placeOrder(loggedInUserId, orderDto) {
        const userExist = await this.usersService.getUserById(loggedInUserId);
        if (!userExist) {
            throw new common_1.NotFoundException(SYS_MSG.USER_NOT_FOUND);
        }
        const order = await this.orderModelAction.create({
            createPayload: {
                noOfGallons: orderDto.noOfGallons,
                roomNumber: orderDto.roomNumber,
                user: userExist,
            },
            transactionOptions: {
                useTransaction: false,
            },
        });
        const vendors = await this.lodgePriceModelAction.findAvailableVendorsByLodge(orderDto.lodgeId);
        if (!vendors) {
            const response = await this.paymentService.initiatePayment(userExist, {
                noOfGallons: orderDto.noOfGallons,
                orderId: order.id,
                lodgeId: orderDto.lodgeId,
            });
            return {
                data: response,
                message: SYS_MSG.ORDER_PLACED_SUCCESSFULLY,
            };
        }
        const selectedVendor = vendors[0];
        await this.assignVendorToOrder(order?.id, selectedVendor.id);
        const response = await this.paymentService.initiatePayment(userExist, {
            noOfGallons: orderDto.noOfGallons,
            orderId: order.id,
            lodgeId: orderDto.lodgeId,
            subaccount: selectedVendor?.subaccount,
        });
        return {
            data: response,
            message: SYS_MSG.ORDER_PLACED_SUCCESSFULLY,
        };
    }
    async getOrderByReference(reference) {
        return this.orderModelAction.get({
            getRecordIdentifierOption: { paymentReference: reference },
        });
    }
    async getOrderById(orderId) {
        return this.orderModelAction.get({
            getRecordIdentifierOption: { id: orderId },
            relations: ['user', 'vendor', 'user.lodge'],
        });
    }
    async getUserOrders(id) {
        return this.orderModelAction.list({
            queryOption: {
                userId: id,
                status: (0, typeorm_1.Not)(enums_1.OrderStatus.COMPLETED),
            },
            pagination: {
                limit: 5,
                page: 1,
            },
        });
    }
    async getVendorOrders(id, pagination) {
        return this.orderModelAction.list({
            queryOption: { vendorId: id, status: enums_1.OrderStatus.PENDING },
            pagination,
        });
    }
    async assignVendorToOrder(orderId, vendorId) {
        const response = await this.orderModelAction.update({
            identifierOptions: {
                id: orderId,
            },
            updatePayload: {
                vendorId,
                status: enums_1.OrderStatus.ASSIGNED,
            },
            transactionOption: {
                useTransaction: false,
            },
        });
        return {
            data: response,
        };
    }
    async updateOrderStatus(orderId, status) {
        const order = await this.orderModelAction.get({
            getRecordIdentifierOption: { id: orderId },
        });
        if (order?.status === status) {
            return false;
        }
        await this.orderModelAction.update({
            identifierOptions: { id: orderId },
            updatePayload: {
                status,
            },
            transactionOption: {
                useTransaction: false,
            },
        });
        return true;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => telegram_service_1.TelegramService))),
    __param(4, (0, common_1.Inject)((0, common_1.forwardRef)(() => payment_service_1.PaymentService))),
    __metadata("design:paramtypes", [order_model_action_1.OrderModelAction,
        users_service_1.UsersService,
        vendors_service_1.VendorsService,
        telegram_service_1.TelegramService,
        payment_service_1.PaymentService,
        lodge_price_model_action_1.LodgePriceModelAction])
], OrderService);
//# sourceMappingURL=order.service.js.map