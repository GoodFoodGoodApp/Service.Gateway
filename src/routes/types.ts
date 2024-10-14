export interface RateLimit {
  windowMs: number;
  max: number;
}

export interface Proxy {
  target: string;
  changeOrigin: boolean;
  pathRewrite: {
    [key: string]: string;
  };
}

export interface RouteConfig {
  url: string;
  auth: boolean;
  creditCheck: boolean;
  rateLimit: RateLimit;
  proxy: Proxy;
}
