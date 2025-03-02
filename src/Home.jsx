//homepage goes here
import pepeIcon from "./assets/pepe-icon.webp";
function Home() {
	return (
		<>
			<div className="container">
				<div className="nav-bar">
					{/*LOGO and NAME || Home Shop About */}
					<div className="logo">
						<div className="icon">
							<img src="./assets/pepe-icon.webp" alt="pepe icon" />
						</div>
						<div className="name">Pepe Market</div>
					</div>
					<div className="nav">
						{/* links to pages --router stuff? */}
						<div className="home"></div>
						<div className="shop"></div>
						<div className="about"></div>
					</div>
				</div>
				<div className="main">
					{/* some photo maybe or text? */}
					<h1 className="welcome">Welcome to Pepe Market</h1>
					<h2 className="sub-welcome">The best place to get your own Pepe</h2>
				</div>
				<div className="footer">
					{/* link to github? */}
					<h5 className="creator">Made by Norraynor</h5>
				</div>
			</div>
		</>
	);
}
export default Home;
