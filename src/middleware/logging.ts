import { Express } from "express";
const morgan = require("morgan");

export const setupLogging = (app : Express) => {
  app.use(morgan("combined"));
};

exports.setupLogging = setupLogging;
