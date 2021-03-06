import express from "express";
import Dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./Route/Auth.js";
import hotels from "./Route/Hotels.js";
import rooms from "./Route/Rooms.js";
import users from "./Route/Users.js";
import cookieParser from "cookie-parser";


const app = express();
Dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.Mongo);
    console.log("connected to Mongo Db");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("Disconnected", () => {
  console.log("MongoDB Disconnected");
});

// Middleware
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotels);
app.use("/api/rooms", rooms);
app.use("/api/users", users);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    succuss: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});


app.listen(8800, () => {
  connect();
  console.log("connected at port 8800");
});
