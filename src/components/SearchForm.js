import React, { useState } from "react";
import "./SearchForm.css";

export default function SearchForm() {
 
  return (
    <section className="search-form">
   
      <form>
          Search
          <div className="abc">
            <label>
        <input className = "search-box" name ="name" type ="text" />
        </label>
        <button className ="my-button">
            ENTER
          </button>
          </div>
     
       
      </form>
    </section>
  );
}
