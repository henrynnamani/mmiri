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
  route("", "./layouts/ProtectedLayout.tsx", [
    route("", "./layouts/MainLayout.tsx", [
      route("order", "./pages/place-order.tsx"),
      route("payment", "./pages/payment.tsx"),
      route("tracking", "./pages/order-tracking.tsx"),
      route("summary", "./pages/payment-summary.tsx"),
      route("confirmation", "./pages/payment-confirmation.tsx"),
    ]),
  ])
] satisfies RouteConfig;
