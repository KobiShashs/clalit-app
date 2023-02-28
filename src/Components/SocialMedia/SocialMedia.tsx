import "./SocialMedia.css";
import { FaFacebook, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";
function SocialMedia(): JSX.Element {
    return (
        <div className="SocialMedia">
            <FaFacebook size={36} />
            <FaTwitter size={36} />
            <FaTiktok size={36} />
            <FaInstagram size={36} />
        </div>
    );
}

export default SocialMedia;
