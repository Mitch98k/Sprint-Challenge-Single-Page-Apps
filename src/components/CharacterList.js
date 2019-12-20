import React, { useEffect, useState } from "react";
import axios from "axios";
import {ListGroup, ListGroupItem} from "reactstrap";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  // TODO: Add useState to track data from useEffect
const [character, setCharacter] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      console.log(res);
      setCharacter(res.data.results);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <section className="character-list">
      {character.map(characters => (
          <CharacterDetails key = {characters.id} characters = {characters} />
      ))}
    </section>
  );
}

function CharacterDetails({characters}) {
  const {name, status, species} = characters;
  return (
    <ListGroup>
      <ListGroupItem>{name}</ListGroupItem>
      <ListGroupItem>{status}</ListGroupItem>
      <ListGroupItem>{species}</ListGroupItem>
    </ListGroup>
  );
}

export default CharacterList;
