import react from "react";
import { Book } from "./Book";
import styled from "styled-components";

export const Books = ({books}) => {
    
    return (
        <Container>
            {books.length? books.map(book => <Book volumeInfo={book.volumeInfo}/>) : <>no books</>}
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`