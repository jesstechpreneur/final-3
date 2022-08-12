import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export function Shop() {
  const [Shop, setShop] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    getShop();
  }, []);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined) actions.getMessage();
  }, [store.token]);

  const getShop = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.RECIPE_APP}&number=8`
    );
    const data = await api.json();
    setShop(data.recipes);
  };

  return (
    <div className="album py-5">
      <h3>Select Recipes</h3>
      <div className="container">
        <div className="row">
          {Shop.map((recipe) => {
            return (
              <div className="col-md-4" key={recipe.id}>

                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    src={recipe.image}
                    alt={recipe.title}
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">Cusine: {recipe.cuisines}</p>
                    <p className="card-text">Ready in: {recipe.readyInMinutes} minutes</p>
                    <Link to={'/checkout/' + recipe.id}>
                      <a className="btn btn-green">
                        View Recipe
                      </a>
                    </Link>
                    <button onClick={() => actions.addToFavorites(recipe)}><i class="fa-solid fa-heart"></i></button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
