export declare const mockOrderService: {
    placeOrder: jest.Mock<any, any, any>;
};
export declare const mockLodgePriceService: {
    getLodgePrice: jest.Mock<any, any, any>;
};
export declare const mockUsersService: {
    getUserById: jest.Mock<any, any, any>;
};
export declare const mockVendorsService: {
    getVendorByChatId: jest.Mock<any, any, any>;
};
export declare const mockLocationsService: {
    getUserById: jest.Mock<any, any, any>;
};
export declare const mockLodgesService: {
    getLodgeLocationPrice: jest.Mock<any, any, any>;
};
export declare const mockPaymentModelAction: {
    create: jest.Mock<any, any, any>;
    get: jest.Mock<any, any, any>;
    update: jest.Mock<any, any, any>;
};
export declare const mockConfigService: {
    get: jest.Mock<"https://api.paystack.co" | "sk_test_secret" | undefined, [key: string], any>;
};
export declare const testingModule: () => import("@nestjs/testing").TestingModuleBuilder;
