import { jwtDecode } from "jwt-decode";

type JwtPayload = {
  sub: string;
  exp: number;
  iat: number;
};

export const getUserIdFromToken = (token: string): string | null => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded?.sub;
  } catch (err) {
    console.error("Invalid token", err);
    return null;
  }
};
