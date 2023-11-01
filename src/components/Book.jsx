import react from "react";
import styled from "styled-components";

export const Book = ({volumeInfo}) => {

    return (
        <Container>
            <img src={volumeInfo.imageLinks?.smallThumbnail}/>
            <Title>{volumeInfo.title}</Title>
            <Description>{volumeInfo.description? volumeInfo.description.length > 100? volumeInfo.description.slice(0, 100) : volumeInfo.description : null}</Description>
            <Authors>{volumeInfo.authors? volumeInfo.authors.map(author => <Body>{author}</Body>) : null}</Authors>
        </Container>
    )
}

const Authors = styled.div`
    display: flex
`

const Body = styled.p`
    margin: 2px;
`

const Description = styled.h3``

const Title = styled.h1``

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    backdround-color: red;
    border-radius: 24px;
    padding: 20px;
    width: 400px;
    background-color: #bbbbbb;
    margin: 20px;
    height: 600px;
    flex-direction: column;
    transition: .2s ease-in-out;

    &:hover{
        background-color: #999999;
        transition: .2s ease-in-out;
    }
`