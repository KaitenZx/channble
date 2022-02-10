import styled from "styled-components"

export const AppContainer = styled.div `
  background-color: #282c34;
  width: 100vw;
  heigh: 100vh;
  display: flex;
  flex-direction: column;
  

`
export const ChannelsContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
`


export const Page = styled.div`
  padding: 1rem;
  color: #ffffff;
  &:hover {
    background-color: #ddd;
    border-radius: 0.4rem;
    color: #000000;
  }
`

export const ActivePage = styled(Page)`
  background-color: #4CAF50;
  
`
    
export const PaginationContainer = styled.div`
  display: flex;
`
export const ChannelContainer = styled.div`
  width: 17rem;
  height: 9rem;
  border: 1px solid #ffffff;
  background-color: #70949c;
  margin: 1.5vw;
  position: relative;
`

export const ChannelName = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-top: 1px solid #ffffff; 
  height: 20%;
  position: absolute;
  bottom: 0;
`

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1.5vw;
`

export const Select = styled.select`
  padding: 0.5rem;
  width: 10rem;
  height: 2rem;
  padding-right: 0.5rem;
  border: none;
`

export const Input = styled.input`
  height: 2rem;
  width: 10rem;
  padding: 0;
  border: none;
  margin: 0 1.5vw;
`

export const SearchContainer = styled.div`
  display: flex;
  color: #ffffff;
  margin-top: 2rem;
  height: 2rem;
`

export const CountryLabel = styled.div`
  margin: 0 1rem;  
`

 