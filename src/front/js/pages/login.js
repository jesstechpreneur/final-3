import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";


export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password , setPassword] = useState("");

	const history = useNavigate();

	console.log("This is your token", store.token);
	const handleClick = () => {
		actions.login(email, password);
		history("/shop", { replace: true })
	};

	//if (store.token && store.token != "" && store.token != undefined ) //history.push("/home");
	
	return (	
		
		<div className="signUpContainer" >
			<div id="leftSideQuote" className="text-center">
				<h1>Order Fresh Meals To Your Doorstep</h1>
			</div>
			<div className="homeSignUpForm" style={{ border: "3px solid lightgray", padding: "25px" }}>
				<form className="loginForm">
					<div className="text-center" id="header">
						<header><strong>Sign up for a free account</strong></header>
					</div>
					<br></br>
					<div id="formInputs">
						
						<br></br>
						{store.token && store.token !="" && store.token != undefined ? ("You are logged in with this token" + store.token) : (
						<div id="bottomFormInputs">
						
							<label>
							<input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
							</label>
							<br></br>
							<label>
							<input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
							</label>
							<br></br>
							
						</div>
						)}
						<br></br>
						<div id="formButton">
							<button className="btn btn-primary" type="submit" onClick={handleClick}>Login</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		
	);
};
