import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";
// import MainLayout from "./layouts/MainLayout";

export default [
  index("./routes/home.tsx"),
  route("auths", "./layouts/AuthLayout.tsx", [
    route("login", "./pages/login.tsx"),
    route("register", "./pages/register.tsx"),
  ]),
    route("", "./layouts/MainLayout.tsx", [
      route("order", "./pages/place-order.tsx")
    ]),
] satisfies RouteConfig;
