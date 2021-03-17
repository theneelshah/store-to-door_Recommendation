const express = require("express");
const cors = require("cors");
const foods = require("./foods");
const { calCalories, validateBMR } = require("./methods");

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.get("/api/v1/calories", (req, res) => {
  const { weight, height, age, activity, gender } = req.body;

  if (!weight || !height || !age || !gender || !activity)
    return res
      .status(401)
      .json({ status: "Failed", message: "Please enter all the fields" });

  let errorMessage = validateBMR(weight, height, age, gender);

  if (errorMessage !== "")
    return res.status(401).json({
      status: "Failed",
      message: errorMessage.trim(),
    });

  const calories = calCalories(weight, height, gender, age, activity);
  res.status(200).json({ status: "OK", calories });
});

app.get("/api/v1/foods", (req, res) => {
  res.status(200).json({ status: "OK" });
});

module.exports = app;
