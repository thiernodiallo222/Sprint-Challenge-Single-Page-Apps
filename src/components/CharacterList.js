import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';
import "./CharacterCard.css";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // axios.get('https://rickandmortyapi.com/documentation')
    // axios.get('https://rick-api.herokuapp.com/api/')
    // axios.get('https://developers.google.com/web/tools/chrome-devtools/network/reference')
    // axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    // axios.get("https://api.github.com/users/thiernodiallo222")
        axios.get("https://api.github.com/users/thiernodiallo222/followers")
 
            .then(res => {

                console.log(res.data); // displaying data to check its structure

                setCharacter(res.data);

                // set the state of the photo
    
            })
            .catch(err => {
                console.log(`Sorry, data was not returned !`, err);
            });      
  }, []);
  // console.log(`element object after useEffect ${character}`);

  return (
    <section >

      {
        character.map((element, index) =>
          <div className="element-list">
<CharacterCard
        
      index ={element.index}
       avatar_url={element.avatar_url}
      login={element.login}
      type={element.type}
      followers_url={element.followers_url}
      following_url={element.following_url}
      repos_url={element.repos_url}
                           
      />  </div>)
     }
         
          
    </section>
  );
}
