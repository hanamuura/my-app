import react, {useEffect, useState} from "react"
import axios from "axios";
import {Header} from "../components/Header";
import {Books} from "../components/Books";
import styled from "styled-components";
import ErrorBoundary from "../components/ErrorBoundry"
import Query from "../API/Query";
import {logDOM} from "@testing-library/react";

export function StartPage(){
    const [books, setBooks] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const [options, setOptions] = useState([
        {id: 0, data: "relevance"},
        {id: 1, data: "newest"},
    ])

    const [filterOptions, setFilterOptions] = useState([
        "poetry",
        "medical",
        "history",
        "computers",
        "biography",
        "art",
        "all",
    ]);

    const [query, setQuery] = useState(
        {filter: "", order: "", search: ""}
    );

    const searchBooks = (e) => {
        if(e.code === "Enter"){
            console.log(query);
            try{
                Query(query.search, {option: "subject", value: query}, 0, 30)
                    .then(res => {
                        console.log(query);
                        setBooks(res.data.items);
                        setTotalItems(prev => prev + res.data.totalItems);
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

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Query("flowers", null, 0, 30)
            .then(res => {
                setTotalItems(prev => prev = res.data?.items?.length);
                setBooks(res.data.items);
            })
            .catch(rej => {
                console.log(rej);
                alert("Invalid request");
            })
            .finally(() =>{
                console.log(books);
                setLoading(false);
            })
    }, [])

    const loadBooks = () => {
        Query(query.search, {option: "subject", value: query}, startIndex, 30)
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
                {loading? <>still loading...</> :
                    <ErrorBoundary>
                        <Books books={books}/>
                    </ErrorBoundary>
                }
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