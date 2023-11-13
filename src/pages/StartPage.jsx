import react, {useEffect, useState} from "react"
import axios from "axios";
import {Header} from "../components/Header";
import {Books} from "../components/Books";
import styled from "styled-components";
import ErrorBoundary from "../components/ErrorBoundry"

export function StartPage(){
    const [books, setBooks] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

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

    const [query, setQuery] = useState(
        {filter: "", order: "", search: ""}
    );

    const searchBooks = (e) => {
        if(e.code === "Enter"){
            console.log(query);
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query.search}+${filterOptions.filter(option => option.data === query.filter)[0]?.id ?? ""}&orderBy=${query.order}&startIndex=0&maxResults=30&key=AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk`)
                .then(res => {
                    setBooks(res.data.items);
                    setTotalItems(prev => prev = 30);
                    console.log(res.data);
                })
                .catch(rej => console.log(rej));
        }
    }

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers&startIndex=0&maxResults=30&key=AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk`)
            .then(res => {
                setBooks(res.data.items);
                console.log(res.data.items);
                setTotalItems(prev => books.length)
                setLoading(false);
            })
            .catch(rej => console.log(rej));
    }, [])

    const loadBooks = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query.search? query.search : "flowers"}+${filterOptions.filter(option => option.data === query.filter)[0]?.id ?? ""}${query.order? `&orderBy=${query.order}` : ""}&startIndex=${startIndex}&maxResults=30&key=AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk`)
            .then(res => {
                console.log(res.data.items);
                setBooks([...books, ...res.data.items])
                setLoading(false);
                setTotalItems(prev => prev + 30);
                setStartIndex(prev => prev + 30);
            })
            .catch(rej => console.log(rej));
        setTimeout(() => {
            console.log(books);
        }, 0)
    }

    return (
        <App>
            <Header filterOptions={filterOptions} query={query} setQuery={setQuery} options={options} search={searchBooks}>{!loading? `total Items: ${totalItems}` : null}</Header>
                {loading && !books.length? <>still loading...</> : <ErrorBoundary><Books books={books}/></ErrorBoundary>}
                <LoadMoreButton onClick={loadBooks}>load more</LoadMoreButton>
        </App>
    );
}

const LoadMoreButton = styled.button`
  width: 100px;
  height: 30px;
  outline: none;
  border-radius: 10px;
  border: none;
  background-color: #675a5a;
  color: white;
  margin-left: 45%;
  cursor: pointer;
`

const App = styled.div`  
`