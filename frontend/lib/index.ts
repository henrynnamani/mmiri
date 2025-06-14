import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const useAuthCleanup = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);

  useEffect(() => {
    const token = cookies.access_token;
    if (!token) return;

    try {
      const decoded: { exp: number } = jwtDecode(token);
      const isExpired = decoded.exp * 1000 < Date.now();

      if (isExpired) {
        console.log("Token expired, removing cookie");
        removeCookie("access_token", { path: "/" });
      }
    } catch (e) {
      console.error("Invalid token:", e);
      removeCookie("access_token", { path: "/" });
    }
  }, [cookies.access_token]);
};

export default useAuthCleanup