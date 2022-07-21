import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Shop = () => {
    return(
        <div>
        <h3 className="text-center mt-5">Select Food Items</h3>
        <div className="foodOptionsTop"></div>  
        <div className="foodOptionsBottom"></div>      
        </div>
    )
}