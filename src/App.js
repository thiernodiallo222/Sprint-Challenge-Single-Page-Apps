import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import "./components/CharacterCard.css";
// import { BrowserRouter as Router } from 'react-router-dom'; 


export default function App() {
  return (
    <main className = "whole-page">
      <Header />
      <div className ='test'>
  <CharacterList />
      </div>
      
    </main>
  );
}
