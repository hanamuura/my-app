import React from "react";
import styled from "styled-components";

export const Header = ({children, options, query, setQuery, search}) => {
    return (
        <Container>
            <Title>{children}</Title>
            <FilterContainer>
                <SearchBar  
                    value = {query.search}
                    onChange = {e => setQuery({...query, search: e.target.value})}
                    onKeyPress = {search}
                    placeholder="search"
                />
                <select
                    value={query.order}
                    onChange={e => setQuery({...query, order: e.target.value})}
                >
                    <option disabled value="">select one...</option>
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