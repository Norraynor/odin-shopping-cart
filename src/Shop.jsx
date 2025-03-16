//shop page goes here with possibility to add items to cart
import NavBar from "./NavBar";
import Footer from "./Footer";
import Card from "./Card";
import { useEffect, useState } from "react";
import "./styles/Shop.css";

function Shop() {
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => setItems(data));
	}, []);
	return (
		<>
			<div className="container">
				<NavBar />
				<h1>Our Shop</h1>
				<div className="top-bar">
					<div className="coins">{/* coins amout goes here */}</div>
					<div className="cart">{/* cart icon with items in it */}</div>
				</div>
				{/* add items here */}
				<div className="items-container">
					{/* cards go here */}
					{items.map((element, index) => {
						return <Card card={element} key={index} />;
					})}
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Shop;
