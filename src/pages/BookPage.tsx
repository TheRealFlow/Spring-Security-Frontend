import {Link} from "react-router-dom";
import useBooks from "../hooks/useBooks";

export default function BookPage () {
    const {books} = useBooks();

    return (
        <div className="BookPage">
            <h1>Book-List</h1>

            {books.map((b) =>
            <ul key={b.id}>
                <li>
                    <p>{b.title}</p>
                    <p>{b.author}</p>
                </li>
            </ul>
            )}

            <Link to={"/"}>Back to Home</Link>
        </div>
    );
}