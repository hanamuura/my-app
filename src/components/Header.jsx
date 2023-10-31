import React from "react";
import styled from "styled-components";

export const Header = ({children, options, query, setQuery}) => {
    return (
        <Container>
            <Title>{children}</Title>
            <FilterContainer>
                <SearchBar  
                    value = {query}
                    onChange = {e => setQuery(prev => prev = e.target.value)}
                />
                <select>
                    {options.map(el => 
                        <option key={el.id}>{el.data}</option>
                    )}
                </select>
            </FilterContainer>
        </Container>
    )
}

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h1`
`

const SearchBar = styled.input`
    border: none;
    height: 25px;
    outline: none;
    width: 175px;
    transition: .2s ease-in-out;
    margin-bottom: 10px;
`

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: space-around;
    background-color: #aaaaaa;
`