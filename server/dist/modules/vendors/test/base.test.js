"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingModule = exports.mockConfigService = exports.mockVendorLocationService = exports.mockLocationsService = exports.mockVendorModelAction = void 0;
const testing_1 = require("@nestjs/testing");
const vendors_service_1 = require("../vendors.service");
const locations_service_1 = require("../../locations/locations.service");
const vendor_locations_service_1 = require("../../vendor_locations/vendor_locations.service");
const vendors_model_action_1 = require("../model/vendors.model-action");
const config_1 = require("@nestjs/config");
exports.mockVendorModelAction = {
    create: jest.fn(),
    get: jest.fn(),
    update: jest.fn(),
    list: jest.fn(),
};
exports.mockLocationsService = {
    findLocationById: jest.fn(),
};
exports.mockVendorLocationService = {
    addServingLocation: jest.fn(),
};
exports.mockConfigService = {
    get: jest.fn(),
};
const testingModule = () => testing_1.Test.createTestingModule({
    providers: [
        vendors_service_1.VendorsService,
        {
            provide: config_1.ConfigService,
            useValue: exports.mockConfigService,
        },
        {
            provide: vendors_model_action_1.VendorModelAction,
            useValue: exports.mockVendorModelAction,
        },
        {
            provide: locations_service_1.LocationsService,
            useValue: exports.mockLocationsService,
        },
        {
            provide: vendor_locations_service_1.VendorLocationsService,
            useValue: exports.mockVendorLocationService,
        },
    ],
});
exports.testingModule = testingModule;
//# sourceMappingURL=base.test.js.map