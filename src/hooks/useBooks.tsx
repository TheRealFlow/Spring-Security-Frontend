import {useEffect, useState} from "react";
import {Book} from "../components/Book";
import axios from "axios";

export default function useBooks() {
    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        (async () => {
            const res = await axios.get("/books")
            setBooks(res.data)
        })();
    }, []);

    async function addBook(book: { author: string; title: string }) {
        const res = await axios.post("/books", book)
        setBooks([...books, res.data])
    }

    return {books, addBook}
}