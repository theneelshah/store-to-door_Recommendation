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

  switch (activity) {
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
