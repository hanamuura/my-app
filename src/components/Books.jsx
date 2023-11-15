import react from "react";
import { Book } from "./Book";
import styled from "styled-components";
import {Link} from "react-router-dom";
export const Books = ({books}) => {
    
    return (
        <Container>
            {books.map(book =>
                <Link style={{textDecoration: "none", color: "black"}} key={book.id} to={`/books/${book.id}`}>
                    <Book volumeInfo={book.volumeInfo}/>
                </Link>
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`