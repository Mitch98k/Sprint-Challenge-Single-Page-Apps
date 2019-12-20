import React, {useState, useEffect } from "react";
import ReactDOM from "react-dom";

const characters = [
"Rick Sanchez",
"Morty Smith",
"Summer Smith",
"Beth Smith",
"Jerry Smith",
"Abadango Cluster Princess",
"Abradolf Lincler",
"Adjudicator Rick",
"Agency Director",
"Alan Rails",
"Albert Einstein",
"Alexander",
"Alien Googah",
"Alien Morty",
"Alien Rick",
"Amish Cyborg",
"Annie",
"Antenna Morty",
"Antenna Rick",
"Ants in my Eyes Johnson"
]

export default function SearchForm() {
 const [search, setSearch] = useState("");
 const [searchResults, setSearchResults] = useState([]);
 const handleChange = e => {
   setSearch(e.target.value);
 };
 useEffect(() => {
   const results = characters.filter(character => 
    character.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
 }, [search]);
  return (
    <section className="search-form">
     <input 
     type = "text"
     placeholder = "Search"
     value = {search}
     onChange = {handleChange}
     />
     <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
     </ul>
    </section>
  );
}
