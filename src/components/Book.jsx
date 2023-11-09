import react from "react";
import styled from "styled-components";

export const Book = ({volumeInfo}) => {

    return (
        <Container>
            <img src={volumeInfo?.imageLinks?.smallThumbnail}/>
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
  text-decoration: none;
`

const Description = styled.h3`
  text-decoration: none;
`

const Title = styled.h1`
  text-decoration: none;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  backdround-color: red;
  border-radius: 24px;
  padding: 20px;
  width: 400px;
  background-color: rgba(103, 90, 90, 0.82);
  margin: 20px;
  height: 600px;
  flex-direction: column;
  transition: .2s ease-in-out;

  &:hover {
    background-color: #675a5a;
    transition: .2s ease-in-out;
  }
`