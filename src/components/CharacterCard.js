import React from "react";
import "./CharacterCard.css";

export default function CharacterCard(props) {
  return (
  <div>
  <img className ='image-ref' alt = "Image is not available" src = {props.image}/>
  <p> Name: {props.name} </p>
  <p> Type: {props.type} </p>
  <p> Gender: {props.gender} </p>
  <p> Species: {props.species} </p>
    </div>
  )
 
}
