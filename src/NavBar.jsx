import pepeIcon from "./assets/pepe-icon.webp";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";
function NavBar() {
	return (
		<>
			<div className="nav-bar">
				{/*LOGO and NAME || Home Shop About */}
				<div className="logo">
					<div className="icon">
						<img src={pepeIcon} alt="pepe icon" />
					</div>
					<div className="name">Pepe Market</div>
				</div>
				<div className="nav">
					{/* links to pages --router stuff? */}
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/shop">Shop</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
export default NavBar;
