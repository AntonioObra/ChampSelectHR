import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import User from "./models/users.js";

import championRoutes from "./routes/champions.js";
import itemRoutes from "./routes/items.js";
import guideRoutes from "./routes/guides.js";
import userRoutes from "./routes/user.js";
import commentRoutes from "./routes/comments.js";
import dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.DB_URL;

const app = express();

//database connection check
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("MongoDB connected!");
});

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//session
const sessionConfig = {
  secret: "yeet",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

//all api routes
app.use("/champions", championRoutes);
app.use("/items", itemRoutes);
app.use("/guides", guideRoutes);
app.use("/users", userRoutes);
app.use("/comments", commentRoutes);
// app.use("/builds", buildRoutes);
// app.use("/builds/:id/reviews", reviewRoutes);
// app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.redirect("https://champselect.obradovic.dev");
});

app.listen(5001, () => {
  console.log("Listening on port 5001!");
});
