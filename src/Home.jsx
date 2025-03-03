//homepage goes here
import NavBar from "./NavBar";
function Home() {
	return (
		<>
			<div className="container">
				<NavBar />
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
