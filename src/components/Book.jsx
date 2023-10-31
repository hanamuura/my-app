import react from "react";
import styled from "styled-components";

export const Book = ({volumeInfo}) => {
    return (
        <Container>
            <Title>{volumeInfo.title}</Title>
            <Description>{volumeInfo.description}</Description>
            {volumeInfo.authors.map(author => <Body>{author}</Body>)}
        </Container>
    )
}

const Body = styled.h3``

const Description = styled.h3``

const Title = styled.h1``

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    backdround-color: red;
    width: 300px;
    height: 400px;
    border-radius: 24px;
    background-color: #bbbbbb;
    margin: 20px;
    flex-direction: column;
`