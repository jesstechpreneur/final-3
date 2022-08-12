import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (store.token && store.token != "" && store.token != undefined) actions.getMessage();
	}, [store.token]);

	return (
		console.log("this is home")
		
	);
};
