import { Link } from "react-router-dom";

//checkout page that will be displayed after shopping cart checkout
function Checkout() {
	return (
		<>
			<div className="checkout">
				<h1 className="title">Checkout</h1>
				<h2 className="items">Shopping List:</h2>
				<Link to="/shop">
					<div>Go Back</div>
				</Link>
			</div>
		</>
	);
}

export default Checkout;
