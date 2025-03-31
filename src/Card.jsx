/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./styles/Card.css";
function Card(props) {
	const [count, setCount] = useState(0);
	useEffect(() => {
		setCount(props.count);
	}, [props.count]);
	function handleClick() {
		props.addItem(props.card);
		// add item to cart state here or API call to server to add item to cart.
	}
	function handleChange(val) {
		console.log(val.target.value);
		if (val.target.value < 1) return;
		setCount(val.target.value);
		props.addItem(props.card, val.target.value);
	}
	return (
		<>
			<div className="item">
				<div className="item-image">
					<img src={props.card.image} alt="" />
				</div>
				<h4 className="title">{props.card.title}</h4>
				<h5 className="price">Price: {props.card.price}</h5>
				{count > 0 ? (
					<>
						<input
							type="number"
							defaultValue={count}
							onChange={handleChange}
							min={0}
						/>
					</>
				) : (
					<button onClick={handleClick}>Add</button>
				)}
			</div>
		</>
	);
}

export default Card;
