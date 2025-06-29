"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingModule = exports.mockConfigService = exports.mockPaymentModelAction = exports.mockLodgesService = exports.mockLocationsService = exports.mockVendorsService = exports.mockUsersService = exports.mockLodgePriceService = exports.mockOrderService = void 0;
const testing_1 = require("@nestjs/testing");
const users_service_1 = require("../../users/users.service");
const payment_service_1 = require("../payment.service");
const order_service_1 = require("../../order/order.service");
const lodge_price_service_1 = require("../../lodge_price/lodge_price.service");
const config_1 = require("@nestjs/config");
const locations_service_1 = require("../../locations/locations.service");
const vendors_service_1 = require("../../vendors/vendors.service");
const payment_model_action_1 = require("../model/payment.model-action");
const lodges_service_1 = require("../../lodges/lodges.service");
exports.mockOrderService = {
    placeOrder: jest.fn(),
};
exports.mockLodgePriceService = {
    getLodgePrice: jest.fn(),
};
exports.mockUsersService = {
    getUserById: jest.fn(),
};
exports.mockVendorsService = {
    getVendorByChatId: jest.fn(),
};
exports.mockLocationsService = {
    getUserById: jest.fn(),
};
exports.mockLodgesService = {
    getLodgeLocationPrice: jest.fn(),
};
exports.mockPaymentModelAction = {
    create: jest.fn(),
    get: jest.fn(),
    update: jest.fn(),
};
exports.mockConfigService = {
    get: jest.fn((key) => {
        if (key === 'paystack.baseUrl')
            return 'https://api.paystack.co';
        if (key === 'paystack.secretKey')
            return 'sk_test_secret';
    }),
};
const testingModule = () => testing_1.Test.createTestingModule({
    providers: [
        payment_service_1.PaymentService,
        {
            provide: config_1.ConfigService,
            useValue: exports.mockConfigService,
        },
        {
            provide: lodges_service_1.LodgesService,
            useValue: exports.mockLodgesService,
        },
        {
            provide: payment_model_action_1.PaymentModelAction,
            useValue: exports.mockPaymentModelAction,
        },
        {
            provide: vendors_service_1.VendorsService,
            useValue: exports.mockVendorsService,
        },
        {
            provide: locations_service_1.LocationsService,
            useValue: exports.mockLocationsService,
        },
        {
            provide: order_service_1.OrderService,
            useValue: exports.mockOrderService,
        },
        {
            provide: users_service_1.UsersService,
            useValue: exports.mockUsersService,
        },
        {
            provide: lodge_price_service_1.LodgePriceService,
            useValue: exports.mockLodgePriceService,
        },
    ],
});
exports.testingModule = testingModule;
//# sourceMappingURL=base.test.js.map