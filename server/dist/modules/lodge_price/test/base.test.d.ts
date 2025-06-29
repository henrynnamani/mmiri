export declare const mockLodgePriceModelAction: {
    create: jest.Mock<any, any, any>;
    get: jest.Mock<any, any, any>;
    update: jest.Mock<any, any, any>;
    list: jest.Mock<any, any, any>;
};
export declare const mockLodgesService: {
    getLodgeById: jest.Mock<any, any, any>;
};
export declare const mockVendorsService: {
    getVendorById: jest.Mock<any, any, any>;
};
export declare const testingModule: () => import("@nestjs/testing").TestingModuleBuilder;
