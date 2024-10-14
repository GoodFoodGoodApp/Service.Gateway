import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { ROUTES } from "./routes/routes";
import { setupProxies } from "./routes/proxy";
import { setupLogging } from "./middleware/logging";
import https from "https";
import http from "http";
import fs from "fs";

// Load environment variables from .env file
dotenv.config();

const serviceUrl = process.env.SERVICE_URL || "http://goodfood.gateway.io";
const HTTP_PORT = process.env.HTTP_PORT || 3000;
const HTTPS_PORT = process.env.HTTPS_PORT || 3443;

// Decode SSL/TLS certificates from environment variables
const privateKey = Buffer.from(process.env.PRIVATE_KEY_BASE64 || "", "base64").toString("utf8");
const certificate = Buffer.from(process.env.CERTIFICATE_BASE64 || "", "base64").toString("utf8");
const credentials = { key: privateKey, cert: certificate };

const app = express();

setupLogging(app);

app.get("/", (req: Request, res: Response) => {
  return res.sendFile(__dirname + "/views/index.html");
});

setupProxies(app, ROUTES);

// Create HTTPS server
const httpsServer = https.createServer(credentials, app);

// Create HTTP server
const httpServer = http.createServer(app);

// Start HTTPS server
httpsServer.listen(HTTPS_PORT, () => {
  console.log(`HTTPS Server is running on port ${HTTPS_PORT}`);
});

// Start HTTP server
httpServer.listen(HTTP_PORT, () => {
  console.log(`HTTP Server is running on port ${HTTP_PORT}`);
});
