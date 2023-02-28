import Teacher from "../Teacher/Teacher";
import "./TeacherList.css";

function TeacherList(): JSX.Element {
    return (
        <div className="TeacherList">
            <Teacher name={"Amit"} description={"C# & Web Expert"} years={20} />
            <Teacher name={"Kobi"} description={"React & Java"} years={5} />
        </div>
    );
}

export default TeacherList;
