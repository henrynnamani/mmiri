"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingModule = exports.mockUniversityModelAction = void 0;
const testing_1 = require("@nestjs/testing");
const universities_service_1 = require("../universities.service");
const universities_model_action_1 = require("../model/universities.model-action");
exports.mockUniversityModelAction = {
    create: jest.fn(),
    get: jest.fn(),
};
const testingModule = () => testing_1.Test.createTestingModule({
    providers: [
        universities_service_1.UniversitiesService,
        {
            provide: universities_model_action_1.UniversityModelAction,
            useValue: exports.mockUniversityModelAction,
        },
    ],
});
exports.testingModule = testingModule;
//# sourceMappingURL=base.test.js.map