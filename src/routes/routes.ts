import { RouteConfig } from "./types";

export const ROUTES: RouteConfig[] = [
  {
    url: "/tests/1",
    auth: false,
    creditCheck: false,
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 5,
    },
    proxy: {
      target: "https://jsonplaceholder.typicode.com/todos/1",
      changeOrigin: true,
      pathRewrite: {
        [`^/tests`]: "",
      },
    },
  },
  {
    url: "/tests",
    auth: true,
    creditCheck: true,
    proxy: {
      target: "https://jsonplaceholder.typicode.com/todos",
      changeOrigin: true,
      pathRewrite: {
        [`^/tests`]: "",
      },
    },
    rateLimit: { windowMs: 15 * 60 * 1000, max: 5 },
  },
];

exports.ROUTES = ROUTES;
