import { Role } from '@modules/common/enums';
declare const mockUsersModelAction: {
    create: jest.Mock<any, any, any>;
    get: jest.Mock<any, any, any>;
};
declare const mockUserRequest: {
    email: string;
    password: string;
    phoneNumber: string;
};
declare const mockUser: {
    id: string;
    email: string;
    phoneNumber: string;
    password: string;
    role: Role;
    lodge: any;
    lodgeId: string;
    orders: never[];
    createdAt: Date;
    updatedAt: Date;
};
export { mockUsersModelAction, mockUserRequest, mockUser };
