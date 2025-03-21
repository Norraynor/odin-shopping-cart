/* eslint-disable react/prop-types */
import "./styles/Card.css";
function Card(props) {
	function handleClick() {
		props.addItem(props.card);
		// add item to cart state here or API call to server to add item to cart.
	}
	return (
		<>
			<div className="item">
				<div className="item-image">
					<img src={props.card.image} alt="" />
				</div>
				<h4 className="title">{props.card.title}</h4>
				<h5 className="price">Price: {props.card.price}</h5>
				<button onClick={handleClick}>Add</button>
			</div>
		</>
	);
}

export default Card;
