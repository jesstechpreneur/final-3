import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import {Shop} from "./shop.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (store.token && store.token != "" && store.token != undefined) actions.getMessage();
	}, [store.token]);

	return (
		<Shop>
		console.log("this is home")
		</Shop>
	);
};
