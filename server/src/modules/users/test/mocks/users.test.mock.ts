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
  createdAt: new Date(),
  updatedAt: new Date(),
};

export { mockUsersModelAction, mockUserRequest, mockUser };
