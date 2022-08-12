import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Recipe() {
  let params = useParams();

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
          <div className="col-md-12">
            <h3>{details.title}</h3>
            <img src={details.image} />
            <p>Cuisine: {details.servings} Servings</p>
            <p>Ready in: {details.readyInMinutes} minutes</p>
            <p> Course Type: {details.vegan}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
