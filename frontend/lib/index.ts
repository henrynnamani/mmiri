import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const useAuthCleanup = () => {
  const [cookies, removeCookie] = useCookies(["access_token"]);
  const router = useRouter();

  useEffect(() => {
    const token = cookies.access_token;
    if (!token) {
      router.push("/auth/login");
      return;
    }

    const decoded: { exp: number } = jwtDecode(token);
    const isExpired = decoded.exp * 1000 < Date.now();

    if (isExpired) {
      removeCookie("access_token", { path: "/" });
      router.push("/auth/login");
    }

    return;
  }, [cookies.access_token, removeCookie, router]);
};

export default useAuthCleanup;
