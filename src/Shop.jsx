//shop page goes here with possibility to add items to cart
import NavBar from "./NavBar";
import Footer from "./Footer";

function Shop() {
	return (
		<>
			<div className="container">
				<NavBar />
				<h1>Our Shop</h1>
				{/* add items here */}
				<Footer />
			</div>
		</>
	);
}

export default Shop;
