import SocialMedia from "../SocialMedia/SocialMedia";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <span>
                <p>All right reserved to Kobi &copy;</p>
            </span>

            <SocialMedia />
        </div>
    );
}

export default Footer;
