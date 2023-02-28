import "./School.css";
interface SchoolProps {
    street: string;
    houseNumber: number;
    city: string;
    zip: number;
    phone: string;
    src?: string;
}
function School(props: SchoolProps): JSX.Element {
    return (
        <div className="School">
            <p>Address : {props.street} {props.houseNumber} </p>
            <p>{props.city}, {props.zip}</p>
            { props.phone &&  <p>Tel : {props.phone}</p>}

            {

                props.src &&
                <div>
                    <img src={props.src} alt="school" />
                </div>

            }

        </div>
    );
}

export default School;
