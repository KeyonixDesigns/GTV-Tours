import "./HomeHeader.css"
import Airplane from "../assets/SVG/airplane.svg"

import Nav from "./Nav";

function HomeHeader() {
    return (
        <header>
            <Nav />
            <div className="home">
                <div className="center-text">
                    <h1>DREAM. DISCOVER. EXPLORE.</h1>
                    <p>Experience the world in Black and White!</p>
                </div>
                <div className="scroll-down">
                    <img src={Airplane} alt="" />
                </div>
            </div>
        </header>
    );
}

export default HomeHeader;