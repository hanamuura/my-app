import react, {useEffect, useState} from "react"
import axios from "axios";
import {Header} from "../components/Header";
import {Books} from "../components/Books";

export function StartPage(){
    const [books, setBooks] = useState([]);

    const [options, setOptions] = useState([
        {id: 0, data: "relevance"},
        {id: 1, data: "newest"},
    ])

    const [filterOptions, setFilterOptions] = useState([
        {id: "intitle", data: "in the title"},
        {id: "inauthor", data: "in the author"},
        {id: "inpublisher", data: "in the publisher"},
        {id: "subject", data: "in the category list of the volume"},
        {id: "isbn", data: " ISBN number"},
        {id: "lccn", data: "Library of Congress Control Number"},
        {id: "oclc", data: "Online Computer Library Center number"},
    ]);

    const [count, setCount] = useState(0);

    const [query, setQuery] = useState(
        {filter: "", order: "", search: ""}
    );

    const searchBooks = (e) => {
        if(e.code === "Enter"){
            console.log(query);
            console.log(filterOptions.filter(option => option.data === query.filter)[0].id);
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query.search}+${filterOptions.filter(option => option.data === query.filter)[0].id}&orderBy=${query.order}&key=AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk`)
                .then(res => {
                    setBooks(res.data.items);
                    setCount(res.data.totalItems);
                    console.log(res.data);
                })
                .catch(rej => console.log(rej));
        }
    }

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers:keyes&key=AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk`)
            .then(res => {
                setBooks(res.data.items);
                console.log(res.data.items);
                setLoading(false);
                setCount(res.data.totalItems);
            })
            .catch(rej => console.log(rej));
    }, [])


    return (
        <div className="App">
            <Header filterOptions={filterOptions} query={query} setQuery={setQuery} options={options} search={searchBooks}>{count? `total Items: ${count}` : null}</Header>
            {loading && !books.length? <>still loading...</> : <Books books={books}/>}
        </div>
    );
}