import "./Header.css";
import logo from '../../Assets/Images/logo.svg';
import { CiSettings, CiBank, CiFacebook, CiBasketball } from "react-icons/ci";
function Header(): JSX.Element {
    return (
        <div className="Header">
            <img src={logo} alt="clalit" />
            <h1>Fullstack Clalit</h1>
            <CiSettings size={36} />

            {/* <CiFacebook />
            <CiBasketball /> */}


            {/* <CiBank /> */}
        </div>
    );
}

export default Header;
