import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export function Shop() {
  const [Shop, setShop] = useState([]);

  useEffect(() => {
    getShop();
  }, []);
  const getShop = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.RECIPE_APP}&number=9`
    );
    const data = await api.json();
    setShop(data.recipes);
  };

  return (
    <div>
      <h3 className="text-center mt-5">Select Food Items</h3>
      {Shop.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
}
