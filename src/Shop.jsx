//shop page goes here with possibility to add items to cart
import NavBar from "./NavBar";
import Footer from "./Footer";
import Card from "./Card";
import { useEffect, useState } from "react";
import "./styles/Shop.css";
import cart from "./assets/cart.svg";
import { Link } from "react-router-dom";

function Shop() {
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => setItems(data));
	}, []);
	const [cartItems, setCartItems] = useState(Array(0));
	const [cartItemsSize, setCartItemsSize] = useState(0);
	function findItem(item) {
		let foundItem = null;
		cartItems.forEach((element) => {
			if (element.id === item.id) {
				foundItem = element;
			}
		});
		if (item) {
			foundItem = item;
		}

		return foundItem;
	}
	function itemCount(item) {
		let foundItem = findItem(item);
		return foundItem ? foundItem.count : 0;
	}
	function addItem(item, count) {
		console.log("adding item...", item);
		let newArray = cartItems;
		if (cartItems.filter((element) => item.id === element.id).length > 0) {
			//increase count
			newArray.find((element) => element.id == item.id).count = count;
		} else {
			//add item
			item.count = 1;
			newArray.push(item);
		}
		setCartItems(newArray);
		setCartItemsSize(newArray.length);
	}
	return (
		<>
			<div className="container">
				<NavBar />
				<div className="top-bar">
					<Link
						to="/checkout"
						state={{ items: cartItems, count: cartItemsSize }}
					>
						<div className="cart">
							<img src={cart} alt="" />
							<span>({cartItemsSize})</span>
						</div>
					</Link>
				</div>
				<h1>Our Shop</h1>
				{/* add items here */}
				<div className="items-container">
					{/* cards go here */}
					{items.map((element, index) => {
						return (
							<Card
								card={element}
								key={index}
								addItem={addItem}
								count={itemCount(element)}
							/>
						);
					})}
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Shop;
