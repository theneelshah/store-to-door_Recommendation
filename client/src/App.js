import axios from "axios";
import React, { Component } from "react";
import "./App.css";

const FoodDetails = (props) => {
  const { name, nutrition, instructions } = props.food;
  const {
    calories,
    carbs,
    cholestrol,
    fats,
    gi,
    iron,
    potassium,
    protein,
    servingSize,
    sodium,
  } = nutrition;

  const { img } = props.food;

  return (
    <div id="id01" class="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            onClick={() => {
              document.getElementById("id01").style.display = "none";
            }}
            className="w3-button w3-display-topright"
          >
            &times;
          </span>
          <p className="modal-p">{name}</p>

          <div class="table-holder">
            <div class="nutrient">
              <h1>Nutrients Available</h1>
              <table class="nutrient-table">
                <thead>
                  <td>Nutrient</td>
                  <td>Value</td>
                </thead>
                <tbody>
                  <tr>
                    <td>Serving Size</td>
                    <td>{servingSize} gm</td>
                  </tr>
                  <tr>
                    <td>Calories</td>
                    <td>{calories} kcal</td>
                  </tr>
                  <tr>
                    <td>Cholestrol</td>
                    <td>{cholestrol} mg</td>
                  </tr>
                  <tr>
                    <td>Carbohydrates</td>
                    <td>{carbs} gm</td>
                  </tr>
                  <tr>
                    <td>Iron</td>
                    <td>{iron} mg</td>
                  </tr>
                  <tr>
                    <td>Fats</td>
                    <td>{fats} gm</td>
                  </tr>
                  <tr>
                    <td>Glycemic Index</td>
                    <td>{gi}</td>
                  </tr>
                  <tr>
                    <td>Sodium</td>
                    <td>{sodium} mg</td>
                  </tr>
                  <tr>
                    <td>Potassium</td>
                    <td>{potassium} mg</td>
                  </tr>
                  <tr>
                    <td>Protein</td>
                    <td>{protein} g</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="recommend">
              <h1>Instructions To Eat</h1>
              <table className="recommend-table">
                <thead>
                  <td>Name</td>
                  <td>Message</td>
                  <td>Recommend</td>
                </thead>
                <tbody>
                  {instructions.map((el, i) => {
                    const { name, message, recommend } = el;
                    return (
                      <tr key={i}>
                        <td>{name}</td>
                        <td>{message}</td>
                        <td>{recommend}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <img src={img} className="food-img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class App extends Component {
  state = {
    weight: null,
    height: null,
    age: null,
    activity: "-1",
    gender: null,
    calories: null,
    foods: [],
    currentFood: null,
    search: "",
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { activity, age, gender, height, weight } = this.state;
    if (activity === "-1" || !weight || !height || !age || !gender) {
      alert("Fill all the data");
    } else {
      const response = await axios.post("/api/v1/calories", {
        age,
        activity,
        gender,
        height,
        weight,
      });
      const { calories } = response.data;
      this.setState({ calories });
    }
    this.getFoods();
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getFoods = async () => {
    const response = await axios.get("/api/v1/foods", {
      params: { calories: this.state.calories },
    });
    const { foods } = response.data;
    this.setState({ foods });
  };

  showFoodDetails = (food) => {
    this.setState({ currentFood: food }, () => {
      document.getElementById("id01").style.display = "block";
    });
  };

  setSearch = (e) => {
    const search = e.target.value;
    this.setState({ search });
  };

  render() {
    const { calories, foods, currentFood, search } = this.state;
    return (
      <div className="App">
        {currentFood && <FoodDetails food={currentFood} />}

        <div className="form-holder">
          <form onSubmit={this.onSubmit}>
            <div className="age input">
              <label htmlFor="age">Age</label>
              <div>
                <input
                  type="number"
                  name="age"
                  min="12"
                  max="100"
                  placeholder="Age"
                  autoComplete="off"
                  onChange={this.onChange}
                />
                <p className="message">*between 12 - 100</p>
              </div>
            </div>

            <div className="weight input">
              <label htmlFor="weight">Weight</label>
              <div>
                <input
                  type="number"
                  name="weight"
                  max="150"
                  min="20"
                  placeholder="Weight in KG"
                  autoComplete="off"
                  onChange={this.onChange}
                />
                <p className="message">*between 20 - 150 KG</p>
              </div>
            </div>

            <div className="height input">
              <label htmlFor="height">Height</label>
              <div>
                <input
                  type="number"
                  name="height"
                  min="80"
                  max="220"
                  placeholder="Height in CM"
                  autoComplete="off"
                  onChange={this.onChange}
                />
                <p className="message">*between 80 - 220 KG</p>
              </div>
            </div>

            <div className="radio">
              <label htmlFor="gender-radio">Gender</label>

              <div className="radio-btn">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={this.onChange}
                />

                <label htmlFor="male">Male</label>
              </div>

              <div className="radio-btn">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={this.onChange}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>

            <div className="activity">
              <label htmlFor="activity">Activity Level</label>

              <select name="activity" id="activity" onChange={this.onChange}>
                <option value="-1">--select</option>
                <option value="0">Little or no exercise</option>
                <option value="1">Little Exercise 1-3 days</option>
                <option value="2">Moderate Exercise 3-5 days</option>
                <option value="3">
                  High Physical Sports or Exercise 6 days
                </option>
                <option value="4">Intense Physical workouts 7 days</option>
              </select>
            </div>

            <input type="submit" value="Submit" />
          </form>
          {calories && (
            <div>
              Daily Calories Intake Recommended:
              <h1>{calories}</h1>
              <div>
                <input
                  type="text"
                  onChange={this.setSearch}
                  placeholder="Search for food items"
                  className="search-box"
                />
              </div>
              Food Details Available:
              {foods.length > 1 && (
                <div class="foods-wrapper">
                  {foods.map((el, i) => {
                    if (
                      search === "" ||
                      el.name.toLowerCase().includes(search.toLowerCase())
                    )
                      return (
                        <p
                          key={i}
                          onClick={() => {
                            this.showFoodDetails(el);
                          }}
                        >
                          {el.name}
                        </p>
                      );
                    else return <></>;
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
