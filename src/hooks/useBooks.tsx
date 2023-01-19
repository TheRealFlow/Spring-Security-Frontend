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

    return {books}
}