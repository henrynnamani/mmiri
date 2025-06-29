"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingModule = exports.mockOrderService = exports.mockLodgePriceService = exports.mockVendorLocationService = exports.mockConfigService = exports.mockLocationsService = exports.mockVendorService = void 0;
const testing_1 = require("@nestjs/testing");
const vendors_service_1 = require("../../vendors/vendors.service");
const telegram_service_1 = require("../telegram.service");
const config_1 = require("@nestjs/config");
const mock_test_1 = require("../../lodge_price/test/mock.test");
const locations_service_1 = require("../../locations/locations.service");
const vendor_locations_service_1 = require("../../vendor_locations/vendor_locations.service");
const lodge_price_service_1 = require("../../lodge_price/lodge_price.service");
const order_service_1 = require("../../order/order.service");
exports.mockVendorService = {};
exports.mockLocationsService = {
    getUserById: jest.fn(),
};
exports.mockConfigService = {
    get: jest.fn(),
};
exports.mockVendorLocationService = {};
exports.mockLodgePriceService = {};
exports.mockOrderService = {};
const testingModule = () => testing_1.Test.createTestingModule({
    providers: [
        telegram_service_1.TelegramService,
        {
            provide: config_1.ConfigService,
            useValue: exports.mockConfigService,
        },
        {
            provide: vendors_service_1.VendorsService,
            useValue: mock_test_1.mockVendor,
        },
        {
            provide: locations_service_1.LocationsService,
            useValue: exports.mockLocationsService,
        },
        {
            provide: vendor_locations_service_1.VendorLocationsService,
            useValue: exports.mockVendorLocationService,
        },
        {
            provide: lodge_price_service_1.LodgePriceService,
            useValue: exports.mockLodgePriceService,
        },
        {
            provide: order_service_1.OrderService,
            useValue: exports.mockOrderService,
        },
    ],
});
exports.testingModule = testingModule;
//# sourceMappingURL=base.test.js.map