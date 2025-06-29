"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingModule = exports.mockLodgePriceModelAction = exports.mockPaymentService = exports.mockTelegramService = exports.mockVendorsService = exports.mockUsersService = exports.mockOrderModelAction = void 0;
const testing_1 = require("@nestjs/testing");
const order_service_1 = require("../order.service");
const order_model_action_1 = require("../model/order.model-action");
const users_service_1 = require("../../users/users.service");
const vendors_service_1 = require("../../vendors/vendors.service");
const telegram_service_1 = require("../../telegram/telegram.service");
const payment_service_1 = require("../../payment/payment.service");
const lodge_price_model_action_1 = require("../../lodge_price/model/lodge_price.model-action");
exports.mockOrderModelAction = {
    create: jest.fn(),
    get: jest.fn(),
    update: jest.fn(),
    list: jest.fn(),
};
exports.mockUsersService = {
    getUserById: jest.fn(),
};
exports.mockVendorsService = {
    getVendorById: jest.fn(),
};
exports.mockTelegramService = {
    notifyVendorOfOrder: jest.fn(),
};
exports.mockPaymentService = {
    initiatePayment: jest.fn(),
};
exports.mockLodgePriceModelAction = {
    findAvailableVendorsByLodge: jest.fn(),
};
const testingModule = () => testing_1.Test.createTestingModule({
    providers: [
        order_service_1.OrderService,
        {
            provide: payment_service_1.PaymentService,
            useValue: exports.mockPaymentService,
        },
        {
            provide: lodge_price_model_action_1.LodgePriceModelAction,
            useValue: exports.mockLodgePriceModelAction,
        },
        {
            provide: telegram_service_1.TelegramService,
            useValue: exports.mockTelegramService,
        },
        {
            provide: order_model_action_1.OrderModelAction,
            useValue: exports.mockOrderModelAction,
        },
        {
            provide: users_service_1.UsersService,
            useValue: exports.mockUsersService,
        },
        {
            provide: vendors_service_1.VendorsService,
            useValue: exports.mockVendorsService,
        },
    ],
});
exports.testingModule = testingModule;
//# sourceMappingURL=base.test.js.map