import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("pages"));

import courseRoutes from "./routes/courseRoutes.js";

const PORT = process.PORT || 5002;
const MONGO_URL = process.env.MONGO_URL;

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome" });
// });

app.use("/", courseRoutes);

// app.get("/addnewcourse", (req, res) => {
//   res.sendFile(__dirname + "/pages/index.html");
// });

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

// mongoose
// .connect(MONGO_URL)
// .then(() => {
//   console.log("DB on");
// })
// .catch((error) => {
//   console.log(error);
// });
