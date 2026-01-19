import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoutes.js";

const app = express();
const Port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

app.use(cors({
  origin: "*",  
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/admin", adminRouter);
app.use("/", (req, res) => {
  res.send("api working");
});

app.listen(Port, () => {
  console.log("server run at 4000");
});
