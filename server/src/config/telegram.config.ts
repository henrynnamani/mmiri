export const telegramConfig = () => ({
  bot: {
    token: process.env.TELEGRAM_BOT_TOKEN,
    webhookUrl: process.env.WEBHOOK_URL,
  },
});
