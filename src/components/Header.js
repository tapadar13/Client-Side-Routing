import Title from "./Title";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Title />
            <h1 className="heading"><Link to="/" style={{ textDecoration: "none" }}>Golden Palace</Link></h1>
            <div className="nav-items">
                <ul>
                    <li><Link to="/about" style={{ textDecoration: "none" }}>About</Link></li>
                    <li><Link to="/contact" style={{ textDecoration: "none" }}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;