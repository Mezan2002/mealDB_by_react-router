import React from "react";
import { Link } from "react-router-dom";
import "./Meal.css";
const Meal = ({ meal }) => {
  const { strMeal, strCategory, strInstructions, strMealThumb, idMeal } = meal;
  return (
    <div className="singleMealCard">
      <h1>{strMeal}</h1>
      <img
        style={{ width: "300px", height: "300px", borderRadius: "30px" }}
        src={strMealThumb}
        alt=""
      />
      <h3>Category: {strCategory}</h3>
      <p className="description">
        <small>{strInstructions.slice(0, 250)}...</small>
      </p>
      <Link to={`/meals/${idMeal}`}>
        <button
          style={{ position: "absolute", bottom: "0", left: "0" }}
          className="showMoreBtn"
        >
          Show More
        </button>
      </Link>
    </div>
  );
};

export default Meal;
