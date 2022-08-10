import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";
import myImage from "../../img/1.png"
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar">
			
			<Link to="/">
				<img id="navbarLogo" src={myImage}></img>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn">Home</button>
				</Link>
				<Link to="/shop">
					<button className="btn">Shop</button>
				</Link>
				<Link to="/checkout.js">
					<button className="btn">Checkout</button>
				</Link>
				{/* {!store.token ?
						<Link to="/login">
							<button className="btn">log in</button>
						</Link> : 
						<button onClick={() => actions.logout()} className="btn btn-primary">log out</button>
					} */}

			</div>

		</nav>
	);
};
