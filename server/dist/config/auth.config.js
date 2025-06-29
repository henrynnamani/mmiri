"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authConfig = void 0;
const authConfig = () => ({
    jwt: {
        secret: process.env.JWT_SECRET,
        expiry: process.env.DEFAULT_EXPIRY,
    },
});
exports.authConfig = authConfig;
//# sourceMappingURL=auth.config.js.map