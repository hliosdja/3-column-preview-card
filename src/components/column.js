import "../styles/main.css";

const column = (props) => {
    return(
        <div className="col">
            <img src="" alt=""/>
            <h2>{props.carName}</h2>
            <p>{props.description}</p>
            <button>Learn More</button>
        </div>
    );
};

export default column;