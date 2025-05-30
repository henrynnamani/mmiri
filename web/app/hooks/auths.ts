import { useCookies } from "react-cookie";

const useAuth = () => {
  const [cookies] = useCookies(["user"]);

  return {
    isAuthenticated: Object.entries(cookies).length !== 0 ? true : false,
  };
};

export default useAuth;
