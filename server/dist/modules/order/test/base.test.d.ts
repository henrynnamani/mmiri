export declare const mockOrderModelAction: {
    create: jest.Mock<any, any, any>;
    get: jest.Mock<any, any, any>;
    update: jest.Mock<any, any, any>;
    list: jest.Mock<any, any, any>;
};
export declare const mockUsersService: {
    getUserById: jest.Mock<any, any, any>;
};
export declare const mockVendorsService: {
    getVendorById: jest.Mock<any, any, any>;
};
export declare const mockTelegramService: {
    notifyVendorOfOrder: jest.Mock<any, any, any>;
};
export declare const mockPaymentService: {
    initiatePayment: jest.Mock<any, any, any>;
};
export declare const mockLodgePriceModelAction: {
    findAvailableVendorsByLodge: jest.Mock<any, any, any>;
};
export declare const testingModule: () => import("@nestjs/testing").TestingModuleBuilder;
