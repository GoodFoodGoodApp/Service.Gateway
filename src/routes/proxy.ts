import { Express } from "express";
import { RouteConfig } from "./types";
const { createProxyMiddleware } = require("http-proxy-middleware");


export const setupProxies = (app: Express, routes: RouteConfig[]) => {
    routes.forEach((r: RouteConfig) => {
        app.use(r.url, createProxyMiddleware(r.proxy));
    });
};

exports.setupProxies = setupProxies;
