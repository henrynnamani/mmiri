import { Role } from '@modules/common/enums';

const mockUsersModelAction = {
  create: jest.fn(),
  get: jest.fn(),
};

const mockUserRequest = {
  email: 'test@example.com',
  password: 'Pyr@hornet0101',
  phoneNumber: '2345678901',
};

const mockUser = {
  id: '9hdfks-d34hdfsd-dkfjs',
  email: 'test@gmail.com',
  phoneNumber: '555-555-5555',
  password: 'Pyr@hornet0101',
  role: Role.USER,
  lodge: {} as any,
  lodgeId: 'dkshd',
  orders: [],
  createdAt: new Date(),
  updatedAt: new Date(),
};

export { mockUsersModelAction, mockUserRequest, mockUser };
