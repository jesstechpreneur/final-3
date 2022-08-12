import React, { useContext } from 'react';
import { Context } from "../store/appContext";


export const Favorites = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className='container'>
            {store.favorites.map((item, index) => {
                return (
                    <div className="row border-1" key={index}>
                        {item.title}
                    </div>
                )
            })}
        </div>
    )
}