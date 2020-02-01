import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import "./components/CharacterCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router } from 'react-router-dom'; 
import SearchForm from "./components/SearchForm.js";


export default function App() {
  return (
    <main>  
      <Header />  
      <SearchForm />
      
    </main>
  );
}
