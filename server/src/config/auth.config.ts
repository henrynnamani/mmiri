export const authConfig = () => ({
  jwt: {
    secret: process.env.JWT_SECRET,
    expiry: process.env.DEFAULT_EXPIRY,
  },
});
