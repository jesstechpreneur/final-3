import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (store.token && store.token != "" && store.token != undefined) actions.getMessage();
	}, [store.token]);

	return (
		<div style={{ paddingTop:"20%", display: 'flex', justifyContent: 'center', alignItems: 'center',alignContent: 'spaceBetween' }}>
			<div id="leftSideQuote" className="text-center">
				<h1>Order Fresh Meals To Your Doorstep</h1>
			</div>
			<div className="" style={{ border: "3px solid lightgray", padding: "25px" }}>
				<form className="loginForm">
					<div className="text-center" id="header">
						<header><strong>Sign up for a free account</strong></header>
					</div>
					<br></br>
					<div id="formInputs">
						<div id="topFormInputs">
							<label>
								<input id="firstName" placeholder="First Name" type="firstName"></input>
							</label>
							<label>
								<input id="LastName" placeholder="Last Name" type="firstName"></input>
							</label>
						</div>
						<br></br>
						<div id="bottomFormInputs">
							<label>
								<input id="email" placeholder="Email Address" type="email"></input>
							</label>
							<br></br>
							<label>
								<input id="password" placeholder="Password" type="password"></input>
							</label>
							<br></br>
							<label>
								<input id="confirmationPassword" placeholder="Confirm Password" type="confirmationPassword"></input>
							</label>
						</div>
						<br></br>
						<div id="formButton">
							<button className="btn btn-primary" type="submit" onClick={()=>{actions.login}}>Register</button>
						</div>
					</div>

				</form>
			</div>
		</div>
	);
};
