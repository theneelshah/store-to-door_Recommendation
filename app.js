const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.get("/api/v1/users", (req, res) => {
  res.status(200).json({ message: "OK" });
});

module.exports = app;
