import React, { useEffect, useState } from "react";
import "../../styles/home.css";

export function Shop() {
  const [Shop, setShop] = useState([]);

  useEffect(() => {
    getShop();
  }, []);
  const getShop = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.RECIPE_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setShop(data.recipes);
  };

  return (
    <div>
      {Shop.map((recipe) => {
        return (
          <div key={recipe.key}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
}
