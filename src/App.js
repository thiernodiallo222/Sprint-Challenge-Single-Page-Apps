import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import "./components/CharacterCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'; 


export default function App() {
  return (
    <main>
      
  <Header />  
  <CharacterList />   
      
    </main>
  );
}
