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
        {id: "poetry", data: "poetry"},
        {id: "medical", data: "medical"},
        {id: "history", data: "history"},
        {id: "computers", data: "computers"},
        {id: "biography", data: "biography"},
        {id: "art", data: "art"},
        {id: "all", data: "all"},
    ]);

    const [query, setQuery] = useState(
        {filter: "", order: "", search: ""}
    );

    const searchBooks = async (e) => {
        if(e.code === "Enter"){
            console.log(query);
            try{
                await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${query.search}+subject:${filterOptions.filter(option => option.data === query.filter)[0]?.id ?? ""}&orderBy=${query.order}&startIndex=0&maxResults=30&key=AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk`)
                    .then(res => {
                        setBooks(res.data.items);
                        setTotalItems(prev => prev = 30);
                        console.log(res.data);
                    })
                    .catch(rej => {
                        console.log(rej);
                        alert("Invalid request");
                    });
            } catch(err){
                alert("error")
            }

        }
    }

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers&startIndex=0&maxResults=30&key=AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk`)
            .then(res => {
                setBooks(res.data.items ?? []);
                console.log(res.data.items);
                setTotalItems(prev => prev + books.length);
                setLoading(false);
            })
            .catch(rej => {
                console.log(rej);
                alert("Invalid request");
            });
    }, [])

    const loadBooks = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query.search? query.search : "flowers"}+${filterOptions.filter(option => option.data === query.filter)[0]?.id ?? ""}${query.order? `&orderBy=${query.order}` : ""}&startIndex=${startIndex}&maxResults=30&key=AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk`)
            .then(res => {
                setBooks([...books, ...res.data.items ?? []]);
                setLoading(false);
                setTotalItems(prev => prev + (res.data.items?.length ?? 0));
                setStartIndex(prev => prev + (res.data.items?.length ?? 0));
            })
            .catch(rej => {
                console.log(rej);
                alert("Invalid request");
            });
    }

    return (
        <App>
            <Header filterOptions={filterOptions} query={query} setQuery={setQuery} options={options} search={searchBooks}>{!loading? `Total Items: ${totalItems}` : null}</Header>
                {loading && !books.length? <>still loading...</> :
                    <ErrorBoundary>
                        <Books books={books}/>
                    </ErrorBoundary>}
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