//homepage goes here
import NavBar from "./NavBar";
import "./styles/Home.css";
import Footer from "./Footer";
// import HomeMain from "./HomeMain";
import { Outlet } from "react-router-dom";
function Home() {
	return (
		<>
			<div className="container">
				<NavBar />
				<Outlet />
				<Footer />
			</div>
		</>
	);
}
export default Home;
