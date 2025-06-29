export declare const mockVendorModelAction: {
    create: jest.Mock<any, any, any>;
    get: jest.Mock<any, any, any>;
    update: jest.Mock<any, any, any>;
    list: jest.Mock<any, any, any>;
};
export declare const mockLocationsService: {
    findLocationById: jest.Mock<any, any, any>;
};
export declare const mockVendorLocationService: {
    addServingLocation: jest.Mock<any, any, any>;
};
export declare const mockConfigService: {
    get: jest.Mock<any, any, any>;
};
export declare const testingModule: () => import("@nestjs/testing").TestingModuleBuilder;
