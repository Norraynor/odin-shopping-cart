//shop page goes here with possibility to add items to cart
import NavBar from "./NavBar";
import Footer from "./Footer";

function Shop() {
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
				<div className="items-container">{/* cards go here */}</div>
				<Footer />
			</div>
		</>
	);
}

export default Shop;
