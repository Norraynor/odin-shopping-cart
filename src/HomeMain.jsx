import MarketImage from "./assets/market.jpg";
import "./styles/HomeMain.css";
function HomeMain() {
	return (
		<>
			<div className="main">
				{/* some photo maybe or text? */}
				<h1 className="welcome">Welcome to Pepe Market</h1>
				<h2 className="sub-welcome">The best place to get your own Pepe</h2>
				<img src={MarketImage} alt="market" />
			</div>
		</>
	);
}
export default HomeMain;
