import react, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Book} from "../components/Book";

export function BookPage(){

    const {id} = useParams();
    const [book, setBook] = useState();

    console.log(id);

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${id}:keyes&key=AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk`)
            .then(res => {
                setBook(prev => prev = res.data.items[0]);
                console.log(res.data);
            })
    }, []);

    return (
        <>

        </>
    )
}