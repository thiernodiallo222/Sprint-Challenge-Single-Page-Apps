import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';
import "./CharacterCard.css";
import Card from "react-bootstrap/Card";

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
    axios.get("https://rickandmortyapi.com/api/character")
    // axios.get("https://api.github.com/users/thiernodiallo222/followers")
          
 
            .then(res => {

                console.log(res.data.results); // displaying data to check its structure

                setCharacter(res.data.results);

                // set the state of the photo
    
            })
            .catch(err => {
                console.log(`Sorry, data was not returned !`, err);
            });      
  }, []);
  // console.log(`element object after useEffect ${character}`);

  return (
    <section className ='all-cards'>

      {
        character.map((element, index)=>
          // <div  key ={index} className="single-card">
          <Card key={index}>
<CharacterCard
      image={element.image}
      name={element.name}
      type={element.type}
      gender={element.gender}
      species={element.species}
                           
      /> </Card>)
     }
         
          
    </section>
  );
}



  // <Card style={{ width: '18rem' }}>
  // <Card.Img variant="top" src="holder.js/100px180" />
  // <Card.Body>
  // <Card.Title>Card Title</Card.Title>
  // <Card.Text></Card.Text>