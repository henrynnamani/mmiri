"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockUser = exports.mockUserRequest = exports.mockUsersModelAction = void 0;
const enums_1 = require("../../common/enums");
const mockUsersModelAction = {
    create: jest.fn(),
    get: jest.fn(),
};
exports.mockUsersModelAction = mockUsersModelAction;
const mockUserRequest = {
    email: 'test@example.com',
    password: 'Pyr@hornet0101',
    phoneNumber: '2345678901',
};
exports.mockUserRequest = mockUserRequest;
const mockUser = {
    id: '9hdfks-d34hdfsd-dkfjs',
    email: 'test@gmail.com',
    phoneNumber: '555-555-5555',
    password: 'Pyr@hornet0101',
    role: enums_1.Role.USER,
    lodge: {},
    lodgeId: 'dkshd',
    orders: [],
    createdAt: new Date(),
    updatedAt: new Date(),
};
exports.mockUser = mockUser;
//# sourceMappingURL=users.test.mock.js.map