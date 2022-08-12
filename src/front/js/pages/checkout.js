import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/checkout.css";

export function Recipe() {
  let params = useParams();

  const [details, setDetails] = useState();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.RECIPE_APP}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="checkoutContainer">
      <div className="recipeOptions">
        <div className="recipeOption">
          <h3>{details.title}</h3>
          <div className="recipePhoto">image</div>
          <div className="recipeDetails"></div>
        </div>
      </div>
    </div>
  );
}
