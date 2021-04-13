import React, { useState, useEffect, createContext } from "react";
import SearchTable from "./search_table/SearchTable";
import SearchBar from "./search_bar";
import "./searchComponent.css";
import JsonList from "./search_table/TableTest.json";

export const searchTermContext = createContext();

const SearchComponent = (props) => {
  const [searchTermState, setSearchTermState] = useState("");
  const [searchResults, setSearchResults] = useState();
  const [JsonList1, SetJsonList1] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

    const response = await fetch("/traderoom", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    console.log("response from search component is: " + response);
    const json = await response.json();
  // const jsonParse = json.userRes;
    setSearchResults(json)
    SetJsonList1(json);
  }

  fetchData();

}, []);



  useEffect(() => {
    const FilterResults = JsonList1.filter((obj) =>
      obj.description_profession
        .toLowerCase()
        .includes(searchTermState.toLowerCase())
    );
    setSearchResults(FilterResults);
  }, [searchTermState]);

  

  const removeCardHandler = (profession) => {
    props.removeCard(profession);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <SearchBar
        setSearchTerm={setSearchTermState}
        searchTerm={searchTermState}
      />
      <div
        className="searchComponent"
        style={{
          overflow: "scroll",
          height: "500px",
          borderStyle: "solid",
          borderWidth: "5px",
          backgroundColor: "#a0abb9",
        }}
      >
        <searchTermContext.Provider value={searchTermState[0]}>
          <SearchTable
            searchterm={searchTermState}
            searchlist={searchResults}
            setchatlist={props.setchatlist}
            chatlist={props.chatlist}
            removeCard={(key) => removeCardHandler(key)}
          />
        </searchTermContext.Provider>
      </div>
    </div>
  );
};
export default SearchComponent;
