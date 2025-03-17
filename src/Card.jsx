/* eslint-disable react/prop-types */
import "./styles/Card.css";
function Card(props) {
	return (
		<>
			<div className="item">
				<div className="item-image">
					<img src={props.card.image} alt="" />
				</div>
				<h4 className="title">{props.card.title}</h4>
				<h5 className="price">Price: {props.card.price}</h5>
			</div>
		</>
	);
}

export default Card;
