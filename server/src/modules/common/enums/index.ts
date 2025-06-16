export enum Role {
  USER = 'user',
  VENDOR = 'vendor',
}

export enum OrderStatus {
  PENDING = 'pending',
  // PAYMENT_CONFIRMED = 'payment confirmed',
  ON_DELIVERY = 'on delivery',
  ASSIGNED = 'assigned',
  DELIVERED = 'delivered',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}
