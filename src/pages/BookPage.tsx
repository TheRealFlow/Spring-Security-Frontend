import {Link} from "react-router-dom";
import useBooks from "../hooks/useBooks";
import React, {useState} from "react";

export default function BookPage () {
    const {books, addBook} = useBooks();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addBook({title, author});
        setTitle("");
        setAuthor("");
    }

    return (
        <div className="BookPage">
            <h1>Book-List</h1>
            <br/>
            {books.map((b) =>
            <ul key={b.id}>
                <li>
                    <p>{b.title}</p>
                    <p>{b.author}</p>
                </li>
            </ul>
            )}

            <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type={"text"} placeholder={"Title"} value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <input type={"text"} placeholder={"Author"} value={author} onChange={e => setAuthor(e.target.value)}/>
                </div>
                <div>
                    <button>Add Book</button>
                </div>
            </form>
            </div>
            <Link to={"/"}>Back to Home</Link>
        </div>
    );
}