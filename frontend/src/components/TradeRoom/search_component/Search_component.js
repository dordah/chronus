import React,{useState,useEffect,createContext} from 'react';
import SearchTable from './search_table/SearchTable'
import SearchBar from './search_bar'
import "./searchComponent.css"
import JsonList from './search_table/TableTest.json'



export const searchTermContext = createContext();

const SearchComponent = (props) => {

const [searchTermState,setSearchTermState] = useState("")
const [searchResults, setSearchResults] = useState(JsonList);

useEffect(() => {
const FilterResults =
JsonList.filter( (obj) => obj.UserProffesion.toLowerCase().includes(searchTermState.toLowerCase()));
setSearchResults(FilterResults); 
},[searchTermState])

console.log(searchResults)

  const removeCardHandler = (profession) => {
    props.removeCard(profession);
      }
    
return (
<div style={{marginTop: "30px"}}>
  <SearchBar
  setSearchTerm = {setSearchTermState}
  searchTerm = {searchTermState}
  />
  <div className="searchComponent" style={{overflow:"scroll", height:"500px", borderStyle: "solid", borderWidth: "5px", backgroundColor: "#eecc"}}>
  <searchTermContext.Provider  value={searchTermState[0]}>
  <SearchTable
  searchterm={searchTermState}
  searchlist = {searchResults}   
  setchatlist={props.setchatlist}
  chatlist={props.chatlist}
  removeCard={(key) => removeCardHandler(key)}
  />
  </searchTermContext.Provider>
  </div>
</div>
)
}
export default SearchComponent