"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingModule = exports.mockUniversitiesService = exports.mockLocationModelAction = void 0;
const testing_1 = require("@nestjs/testing");
const locations_service_1 = require("../locations.service");
const locations_model_action_1 = require("../model/locations.model-action");
const universities_service_1 = require("../../universities/universities.service");
exports.mockLocationModelAction = {
    create: jest.fn(),
    get: jest.fn(),
};
exports.mockUniversitiesService = {
    findUniversityById: jest.fn(),
};
const testingModule = () => testing_1.Test.createTestingModule({
    providers: [
        locations_service_1.LocationsService,
        {
            provide: locations_model_action_1.LocationModelAction,
            useValue: exports.mockLocationModelAction,
        },
        {
            provide: universities_service_1.UniversitiesService,
            useValue: exports.mockUniversitiesService,
        },
    ],
});
exports.testingModule = testingModule;
//# sourceMappingURL=base.js.map