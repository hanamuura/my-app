import React from "react";
import styled from "styled-components";
import {CustomSelect} from "./UI/CustomSelect";
import {Select} from "./UI/Select";

export const Header = ({filterOptions, children, options, query, setQuery, search}) => {
    return (
        <Container>
            <Title>{children}</Title>
            <FilterContainer>
                <SearchBar  
                    value = {query.search}
                    onChange = {e => setQuery({...query, search: e.target.value})}
                    onKeyDown = {search}
                    placeholder="search"
                />
                <FilterBox>
                    <CustomSelect
                        value = {query.order}
                        onChange = {e => setQuery({...query, order: e})}
                        defaultValue={options[options.length - 1].data}
                        options = {options.slice(0, options.length - 1)}
                    />
                    <Select
                        value={query.filter}
                        onChange={e => setQuery({...query, filter: e})}
                        defaultValue={filterOptions[filterOptions.length - 1]}
                        options={filterOptions.slice(0, filterOptions.length - 1)}
                    />
                </FilterBox>
            </FilterContainer>
        </Container>
    )
}

const FilterBox = styled.div`
  display: flex;
  width: auto;
  height: auto;
  justify-content: space-around;
`

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
    height: auto;
  align-items: center;
`

const Title = styled.h1`
`

const SearchBar = styled.input`
    border: none;
    height: 25px;
    outline: none;
    transition: .2s ease-in-out;
    margin-bottom: 10px;
    width: 95%;
  padding: 5px;
`

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: space-around;
    background-color: #675a5a;
`