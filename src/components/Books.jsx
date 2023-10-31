import react from "react";
import { Book } from "./Book";
import styled from "styled-components";

export const Books = ({books, children}) => {
    return (
        <Container>
            {books.map(book => 
                <Book key={book.id} title={book.title} description={book.description} body={book.body}/>
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