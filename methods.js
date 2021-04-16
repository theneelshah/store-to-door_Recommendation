exports.validateBMR = (weight, height, age, gender) => {
  let errorMessage = "";

  if (weight < 20 || weight > 150)
    errorMessage += " Please enter weight between 20 & 150 kg.";

  if (height < 80 || height > 220)
    errorMessage += " Please enter height between 80 & 220 cm.";

  if (age < 12 || age > 100)
    errorMessage += " Please enter age between 12 & 100.";

  if (gender.toUpperCase() !== "MALE" && gender.toUpperCase() !== "FEMALE")
    errorMessage += " Please enter gender as male or female.";

  return errorMessage;
};

exports.calCalories = (weight, height, gender, age, activity) => {
  let bmr;

  if (gender === "male") bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  else bmr = 10 * weight + 6.25 * height - 5 * age - 161;

  switch (activity * 1) {
    case 0:
      bmr *= 1.2;
      break;

    case 1:
      bmr *= 1.375;
      break;

    case 2:
      bmr *= 1.55;
      break;

    case 3:
      bmr *= 1.725;
      break;

    case 4:
      bmr *= 1.9;
      break;

    default:
      break;
  }

  return bmr;
};

exports.getInstructions = (el, dailyCalorieAvailable) => {
  const { calories, carbs, gi, protein, servingSize, sodium } = el.nutrition;
  const dailyCaloriePercent = Math.round(
    (calories / dailyCalorieAvailable) * 100
  );
  const dailySodiumPercent = Math.round((sodium / 1500) * 100);
  const caloriesByCarbs = Math.round(((carbs * 4) / calories) * 100);
  const proteinPercent = Math.round((protein / servingSize) * 100);

  let temp = el;
  temp.instructions = [];

  // weight loss
  temp.instructions.push({
    name: "weight loss",
    message: `${caloriesByCarbs}% of calories by carbs`,
    recommend: caloriesByCarbs < 70 ? "yes" : "no",
  });

  // BP
  temp.instructions.push({
    name: "bp",
    message: `contains ${dailySodiumPercent}% of your daily salt intake`,
    recommend: dailySodiumPercent < 25 ? "yes" : "no",
  });

  // calories
  temp.instructions.push({
    name: "calories",
    message: `contains ${dailyCaloriePercent}% of your daily calorie intake`,
    recommend:
      dailyCaloriePercent < 30 ? "yes" : dailyCaloriePercent < 50 ? "ok" : "no",
  });

  // protein
  temp.instructions.push({
    name: "protein",
    message:
      proteinPercent >= 4
        ? "has good amount of protein"
        : "isn't having high protein",
    recommend: proteinPercent >= 4 ? "yes" : "ok",
  });

  // diabetes
  if (gi > 70)
    temp.instructions.push({
      name: "diabetes",
      message: "should not be consumed",
      recommend: "no",
    });
  else if (gi > 56)
    temp.instructions.push({
      name: "diabetes",
      message: "its ok to consume",
      recommend: "ok",
    });
  else
    temp.instructions.push({
      name: "diabetes",
      message: "recommended to consume",
      recommend: "yes",
    });

  return temp;
};
