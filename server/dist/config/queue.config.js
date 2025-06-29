"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueConfig = void 0;
const queueConfig = () => ({
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    },
});
exports.queueConfig = queueConfig;
//# sourceMappingURL=queue.config.js.map