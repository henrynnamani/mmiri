"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTestingModule = void 0;
const testing_1 = require("@nestjs/testing");
const users_service_1 = require("../users.service");
const users_model_action_1 = require("../model/users.model-action");
const users_test_mock_1 = require("./users.test.mock");
const UserTestingModule = () => testing_1.Test.createTestingModule({
    providers: [
        users_service_1.UsersService,
        {
            provide: users_model_action_1.UsersModelAction,
            useValue: users_test_mock_1.mockUsersModelAction,
        },
    ],
});
exports.UserTestingModule = UserTestingModule;
//# sourceMappingURL=base.test.js.map