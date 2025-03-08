import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
console.log("MongoDB URI:", process.env.MONGODB_URI);

import connectDb from "./db/index.js";
import { app } from "./app.js";

import { createServer } from "node:http";

import { Server } from "socket.io";
import { connectToSocket } from "./controllers/socketManager.controller.js";

const server = createServer(app);

const io = connectToSocket(server);

app.set("port", process.env.PORT || 3000);

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });
    server.listen(app.get("port"), () => {
      console.log(`Server is running on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!!", err);
  });

  





  