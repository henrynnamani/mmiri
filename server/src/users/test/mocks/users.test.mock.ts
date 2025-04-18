const mockUsersModelAction = {
  create: jest.fn(),
};

const mockUserRequest = {
  email: 'test@example.com',
  password: 'password',
};

const mockUserResponse = {
  id: '9hdfks-d34hdfsd-dkfjs',
  email: 'test@gmail.com',
  phone: '555-555-5555',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export { mockUsersModelAction, mockUserRequest, mockUserResponse };
