"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingModule = exports.mockLodgePriceModelAction = exports.mockLodgeModelAction = exports.mockLocationsService = void 0;
const testing_1 = require("@nestjs/testing");
const lodges_service_1 = require("../lodges.service");
const locations_service_1 = require("../../locations/locations.service");
const lodges_mode_action_1 = require("../model/lodges.mode-action");
const lodge_price_model_action_1 = require("../../lodge_price/model/lodge_price.model-action");
exports.mockLocationsService = {
    findLocationById: jest.fn(),
};
exports.mockLodgeModelAction = {
    get: jest.fn(),
    create: jest.fn(),
};
exports.mockLodgePriceModelAction = {
    get: jest.fn(),
    list: jest.fn(),
};
const testingModule = () => testing_1.Test.createTestingModule({
    providers: [
        lodges_service_1.LodgesService,
        {
            provide: locations_service_1.LocationsService,
            useValue: exports.mockLocationsService,
        },
        {
            provide: lodges_mode_action_1.LodgeModelAction,
            useValue: exports.mockLodgeModelAction,
        },
        {
            provide: lodge_price_model_action_1.LodgePriceModelAction,
            useValue: exports.mockLodgePriceModelAction,
        },
    ],
});
exports.testingModule = testingModule;
//# sourceMappingURL=base.test.js.map