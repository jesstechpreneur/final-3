import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

// let Fav = [{image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
// title: "Omelette" }]

export const Favorites = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className='container d-flex flex-column'>
            {store.favorites.map((recipe, index) => {
                return (
                    <div className="card border border-danger w-75 mx-auto" key={index}>

                        <div className="box-shadow d-flex ">
                            <img

                                className="card-img-top w-60"
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

                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
    )
}