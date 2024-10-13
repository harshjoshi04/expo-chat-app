import express from "express";
import dotenv from "dotenv";
import connectionDb from "./config/dbConnection.js";
import morgan from "morgan";
import router from "./router/index.js";
import Errorhandler from "./middleware/errorHandler.js";
import cors from "cors";
dotenv.config();
const server = express();

// middleware
server.use(cors());
server.use(express.json({ limit: "10mb" }));
server.use(express.urlencoded({ extended: true, limit: "10mb" }));
server.use(morgan("dev"));

server.use("/v1", router);

// error handler middleware
server.use(Errorhandler);

connectionDb().then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`server start at ${process.env.PORT}`);
  });
});
