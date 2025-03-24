import { Link, useLocation } from "react-router-dom";
import "./styles/Checkout.css";
//checkout page that will be displayed after shopping cart checkout
function Checkout() {
	const location = useLocation();
	console.log(location.state);
	return (
		<>
			<div className="checkout">
				<h1 className="title">Checkout</h1>
				<h2 className="items">Shopping List:</h2>
				<ul className="checkout-items-list">
					{location.state.items.map((item, index) => (
						<li className="checkout-item" key={index}>
							<img className="checkout-img" src={item.image} alt="" />
							<h3>{item.title}</h3>
							<p>Count: {item.count}</p>
							<p>Price: {item.price * item.count}</p>
						</li>
					))}
				</ul>
				<Link to="/shop">
					<button>Go Back</button>
				</Link>
				<button className="pay">PAY!</button>
			</div>
		</>
	);
}

export default Checkout;
