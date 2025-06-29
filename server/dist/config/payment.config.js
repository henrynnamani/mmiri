"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentConfig = void 0;
const paymentConfig = () => ({
    paystack: {
        secretKey: process.env.PAYSTACK_SECRET_KEY,
        baseUrl: process.env.PAYSTACK_BASE_URL,
    },
});
exports.paymentConfig = paymentConfig;
//# sourceMappingURL=payment.config.js.map