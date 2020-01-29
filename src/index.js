import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
// import { styled } from "styled-components";


// const navElem = styled.h2`
// color: blue;
// line-height: 1.2rem;
// background: rgb(233,234,235);
// `
ReactDOM.render(

  <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link exact to="/"> Home </Link>
            </li>
            <li>
              <Link to="/character">Character</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route exact path="/character">
            <CharacterList />
          </Route>
      </Switch>
    </div>
    <div>
   <App />
    </div>
  
    </Router>
  ,document.getElementById("root")
);
