import express, { Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const proxy = createProxyMiddleware({
  target: "https://example.com", // Replace with your microservice URL
  changeOrigin: true,
});

app.use("/api", proxy);

app.listen(3000, () => {
  console.log("This is the API Gateway. It is listening on port 3000 and forwarding requests to the microservices.");
});
