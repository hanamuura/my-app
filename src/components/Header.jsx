import React from "react";
import styled from "styled-components";

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
                        value={query.order}
                        onChange={e => setQuery({...query, order: e.target.value})}
                    >
                        <option disabled value="">select one...</option>
                        {options.map(el =>
                            <option key={el.id}>{el.data}</option>
                        )}
                    </CustomSelect>
                    <CustomSelect
                        value={query.filter}
                        onChange={e => setQuery({...query, filter: e.target.value})}
                    >
                        <option disabled value="">select one...</option>
                        {filterOptions.map(el =>
                            <option key={el}>{el}</option>
                        )}
                    </CustomSelect>
                </FilterBox>
            </FilterContainer>
        </Container>
    )
}

const CustomSelect = styled.select`
  width: 100px;
  height: auto;
  margin: 5px;
  padding: 2px;
`

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