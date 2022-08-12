import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export function Recipe() {
  let params = useParams();

  const { store, actions } = useContext(Context);

  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.RECIPE_APP}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <div>
      <div className="container recipe">
        <div className="row">
          <div className="card col">
            <h3>{details.title}</h3>
            <img src={details.image} />
            <div className="row mx-auto text-center">
              <div className="col">
                <p>Cuisine: {details.servings} Servings</p>
                <p>Ready in: {details.readyInMinutes} minutes</p>
                <p> Course Type: {details.vegan}</p>
              </div>
              <a
                onClick={() => actions.addToFavorites(details)}
                className="col"
              >
                <i class="fa-solid fa-heart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
