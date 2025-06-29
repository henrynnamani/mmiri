"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingModule = exports.mockVendorsService = exports.mockLodgesService = exports.mockLodgePriceModelAction = void 0;
const testing_1 = require("@nestjs/testing");
const vendors_service_1 = require("../../vendors/vendors.service");
const lodge_price_service_1 = require("../lodge_price.service");
const lodge_price_model_action_1 = require("../model/lodge_price.model-action");
const lodges_service_1 = require("../../lodges/lodges.service");
exports.mockLodgePriceModelAction = {
    create: jest.fn(),
    get: jest.fn(),
    update: jest.fn(),
    list: jest.fn(),
};
exports.mockLodgesService = {
    getLodgeById: jest.fn(),
};
exports.mockVendorsService = {
    getVendorById: jest.fn(),
};
const testingModule = () => testing_1.Test.createTestingModule({
    providers: [
        lodge_price_service_1.LodgePriceService,
        {
            provide: lodges_service_1.LodgesService,
            useValue: exports.mockLodgesService,
        },
        {
            provide: lodge_price_model_action_1.LodgePriceModelAction,
            useValue: exports.mockLodgePriceModelAction,
        },
        {
            provide: vendors_service_1.VendorsService,
            useValue: exports.mockVendorsService,
        },
    ],
});
exports.testingModule = testingModule;
//# sourceMappingURL=base.test.js.map