import React from "react";
import { useLoaderData } from "react-router-dom";
import "./SingleMealCard.css";
const SingleMealCard = () => {
  const singleMealData = useLoaderData();
  const { meals } = singleMealData;

  return (
    <div className="singleMealContainer">
      <h1>{meals[0].strMeal}</h1>
      <iframe
        width="700"
        height="450"
        src={meals[0].strYoutube}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p style={{ width: "90%", margin: "40px auto" }}>
        {meals[0].strInstructions}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "2px solid gray",
            width: "40%",
            margin: "20px 10px",
            borderRadius: "20px",
          }}
        >
          <h3 style={{ textAlign: "left", paddingLeft: "40px" }}>
            Needed Ingredient
          </h3>
          <ul
            style={{
              listStyle: "none",
              textAlign: "left",
            }}
          >
            <li>{meals[0].strIngredient1}</li>
            <li>{meals[0].strIngredient2}</li>
            <li>{meals[0].strIngredient3}</li>
            <li>{meals[0].strIngredient4}</li>
            <li>{meals[0].strIngredient5}</li>
            <li>{meals[0].strIngredient6}</li>
            <li>{meals[0].strIngredient7}</li>
            <li>{meals[0].strIngredient8}</li>
            <li>{meals[0].strIngredient9}</li>
            <li>{meals[0].strIngredient10}</li>
          </ul>
        </div>
        <div>
          <img
            style={{ width: "300px", height: "250px", borderRadius: "20px" }}
            src={meals[0].strMealThumb}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SingleMealCard;
