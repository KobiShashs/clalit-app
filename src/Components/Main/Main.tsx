import Map from "../Map/Map";
import School from "../School/School";
import Teacher from "../Teacher/Teacher";
import "./Main.css";

function Main(): JSX.Element {

    return (
        <div className="Main">
            <Teacher name={"Amit"} description={"C# & Web Expert"} years={20} />
            <Teacher name={"Kobi"} description={"React & Java"} years={5} />

            <School street={"Homma Vemigdal"} houseNumber={29} city={"TLV"} zip={12345} phone={"*6444"} />
            <Map/>
        </div>
    );
}

export default Main;
