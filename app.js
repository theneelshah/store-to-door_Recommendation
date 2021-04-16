const express = require("express");
const cors = require("cors");
const foods = require("./foods");
const { calCalories, validateBMR, getInstructions } = require("./methods");

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.post("/api/v1/calories", (req, res) => {
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
  res
    .status(200)
    .json({ status: "OK", calories: Math.round(calories * 100) / 100 });
});

app.get("/api/v1/foods", (req, res) => {
  const { calories } = req.query;

  if (!calories)
    return res
      .status(404)
      .json({ status: "Failed", message: "Calorie Not found" });

  const returnFoods = foods.map((el) => {
    return getInstructions(el, calories);
  });

  returnFoods.sort(function (a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  res.status(200).json({ status: "OK", foods: returnFoods });
});

module.exports = app;
