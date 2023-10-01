import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { PORT } from "./config/serverConfig.js";
dotenv.config();
const setupAndStartServer = async () => {
  const app = express();
  const port = PORT || 4000;
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

setupAndStartServer();
