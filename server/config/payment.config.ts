export const paymentConfig = () => ({
  paystack: {
    secretKey: process.env.PAYSTACK_SECRET_KEY,
    baseUrl: process.env.PAYSTACK_BASE_URL,
  },
});
