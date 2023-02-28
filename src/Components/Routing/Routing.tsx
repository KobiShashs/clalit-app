import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import App from "../../App";
import Home from "../Home/Home";
import Teacher from "../Teacher/Teacher";
import TeacherList from "../TeacherList/TeacherList";
import Map from "../Map/Map";
import Page404 from "../Page404/Page404";
import School from "../School/School";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App />} />
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="school" element={<School street={"homma vemigdal"} houseNumber={29} city={"TLV"} zip={1234} phone={"*6444"} />} />
                <Route path="teachers" element={<TeacherList />} />
                <Route path="map" element={<Map />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
