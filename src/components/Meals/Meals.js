import React from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";
import "./Meals.css";
const Meals = () => {
  const mealsData = useLoaderData();
  const { meals } = mealsData;
  console.log(meals);
  return (
    <div>
      <h2>{meals.length} Meals Item Here</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Meals;
