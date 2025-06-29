"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramConfig = void 0;
const telegramConfig = () => ({
    bot: {
        token: process.env.TELEGRAM_BOT_TOKEN,
        webhookUrl: process.env.WEBHOOK_URL,
    },
});
exports.telegramConfig = telegramConfig;
//# sourceMappingURL=telegram.config.js.map