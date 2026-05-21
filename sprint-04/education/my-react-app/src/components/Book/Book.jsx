// CSS Stylesheet
import './Book.css';

const Book = (props) => {
    return (
        <>
            <div className="boxed" >
                <h2>{props.name}</h2>
                <p>{props.price}</p>
            </div>
        </>
    )
}

export default Book;