import "../styles/main.css";

const column = (props) => {
    return(
        <div className={props.class}>
            <img src={props.carImage} alt=""/>
            <h1>{props.carName}</h1>
            <p>{props.description}</p>
            <button>Learn More</button>
        </div>
    );
};

export default column;