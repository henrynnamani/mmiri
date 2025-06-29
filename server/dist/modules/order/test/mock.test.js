"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockPlaceOrderDto = exports.mockOrder = exports.mockVendor = exports.mockUser = void 0;
exports.mockUser = { id: 'user-id' };
exports.mockVendor = { id: 'vendor-id' };
exports.mockOrder = {
    id: 'order-id',
    paymentReference: 'ref-123',
    paymentStatus: false,
};
exports.mockPlaceOrderDto = {
    vendorId: exports.mockVendor.id,
    userId: exports.mockUser.id,
    noOfGallons: 4,
    totalAmount: 500,
    paymentReference: 'payment-ref-123',
    roomNumber: 'Second floor, rm 3',
    lodgeId: '38s0d-hdfk832-dh',
};
//# sourceMappingURL=mock.test.js.map