import express from "express";
import cors from "cors";
const app = express();


app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));




// routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)


app.get("/", (req, res) => {
    console.log("URL accessed");
    res.send("Hello, World!"); // Sending a response to the client
});



export { app };
