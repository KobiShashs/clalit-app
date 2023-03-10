import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <Link to="/home">Home</Link>
            <Link to="/teachers">Teachers</Link>
            <Link to="/school">School</Link>
            <Link to="/map">Map</Link>
        </div>
    );
}

export default Menu;
