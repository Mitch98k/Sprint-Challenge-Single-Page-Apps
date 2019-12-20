import React from "react";
import Header from "./components/Header.js";
import {BrowserRouter as Router, Route} from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
export default function App() {
  return (
    <main>
      <Header /> 
      <Router>
          <Route exact path = "/Characters">
            <CharacterList />
          </Route>
          <Route exact path = "/">
            <WelcomePage />
          </Route>
      </Router>
    </main>
  );
}
