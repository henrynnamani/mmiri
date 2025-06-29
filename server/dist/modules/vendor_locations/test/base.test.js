"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingModule = exports.mockVendorLocationModelAction = void 0;
const testing_1 = require("@nestjs/testing");
const vendor_locations_service_1 = require("../vendor_locations.service");
const vendor_locations_model_action_1 = require("../model/vendor_locations.model-action");
exports.mockVendorLocationModelAction = {
    create: jest.fn(),
    get: jest.fn(),
    update: jest.fn(),
    list: jest.fn(),
};
const testingModule = () => testing_1.Test.createTestingModule({
    providers: [
        vendor_locations_service_1.VendorLocationsService,
        {
            provide: vendor_locations_model_action_1.VendorLocationModelAction,
            useValue: exports.mockVendorLocationModelAction,
        },
    ],
});
exports.testingModule = testingModule;
//# sourceMappingURL=base.test.js.map