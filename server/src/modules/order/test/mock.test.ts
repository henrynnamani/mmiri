export const mockUser = { id: 'user-id' };
export const mockVendor = { id: 'vendor-id' };
export const mockOrder = {
  id: 'order-id',
  paymentReference: 'ref-123',
  paymentStatus: false,
};

export const mockPlaceOrderDto = {
  vendorId: mockVendor.id,
  userId: mockUser.id,
  noOfGallons: 4,
  totalAmount: 500,
  paymentReference: 'payment-ref-123',
};
