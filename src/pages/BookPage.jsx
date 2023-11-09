import react, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Book} from "../components/Book";
import styled from "styled-components";

export function BookPage(){

    const {id} = useParams();
    const [book, setBook] = useState();

    console.log(id);

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(res => {
                setBook(prev => prev = res.data);
                console.log(res.data);
            })
    }, []);

    return (
        <LayoutContainer>
            <BookContainer>
                <BookImage src={book?.volumeInfo?.imageLinks?.thumbnail}/>
                <BookTitle>{book?.volumeInfo.title}</BookTitle>
                <BookCategories>
                    {book?.volumeInfo?.categories?.split?.('/')?.map(category =>
                        <BookCategory>{category}</BookCategory>
                    ) ?? "No such category"}
                </BookCategories>
                <BookDescription>{book?.volumeInfo?.description ?? "No Description"}</BookDescription>
                <BookAuthors>
                    {book?.volumeInfo?.authors?.map(author =>
                        <BookAuthor>{author}</BookAuthor>
                    ) ?? "No authors"}
                </BookAuthors>
            </BookContainer>
        </LayoutContainer>
    )
}

const LayoutContainer = styled.div`
  min-height: 100%;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BookImage = styled.img` 
    width: 128px;
    height: 217px;
`

const BookAuthor = styled.span``

const BookAuthors = styled.div`
  margin: 20px;
`

const BookDescription = styled.span``

const BookCategory = styled.span`
  color: #c4bfbf;
`

const BookCategories = styled.div`
  margin: 10px;
`

const BookTitle = styled.h1``

const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #675a5a;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 20px;
  max-width: 300px;
  padding: 20px;
`
