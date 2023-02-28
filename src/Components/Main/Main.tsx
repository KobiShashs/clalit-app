import Map from "../Map/Map";
import School from "../School/School";
import Teacher from "../Teacher/Teacher";
import "./Main.css";
import image from '../../Assets/Images/logo.svg';
import { Outlet } from "react-router-dom";
import Routing from "../Routing/Routing";

function Main(): JSX.Element {

    return (
        <div className="Main">
            <Routing/>
            <Outlet/>
        </div>
    );
}

export default Main;
