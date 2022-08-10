import React, { useEffect, useState } from "react";
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
      <h3>Select Recipe</h3>
      {Shop.map((recipe) => {
        return (
          <div key={recipe.id} className="card">
            <img
              className="card-img-top"
              src={recipe.imageUrl}
              alt={recipe.title}
            ></img>
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text">{recipe.servings}</p>
              <a href="/cart" class="btn btn-green">
                Add to cart
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
