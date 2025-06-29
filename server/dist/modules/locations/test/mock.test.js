"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockCreatedLocations = exports.mockLocationData = void 0;
const mockLocationData = {
    locations: [
        {
            name: ',hilltop',
            price: 12,
        },
        {
            name: 'odenigwe',
            price: 100,
        },
    ],
    universityId: 'hfdh03-dfhhfd-0183sd',
};
exports.mockLocationData = mockLocationData;
const mockCreatedLocations = {
    data: [
        {
            id: 'loc1',
            name: 'A',
            vendors: expect.any(Object),
            university: expect.any(Object),
            lodges: [],
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date),
        },
        {
            id: 'loc2',
            name: 'B',
            vendors: expect.any(Object),
            university: expect.any(Object),
            lodges: [],
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date),
        },
    ],
    message: 'Locations created successfully',
};
exports.mockCreatedLocations = mockCreatedLocations;
//# sourceMappingURL=mock.test.js.map