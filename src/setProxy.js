import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/todos", {
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
