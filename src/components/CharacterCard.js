import React from "react";
import "./CharacterCard.css";
import Card from "react-bootstrap/Card";

export default function CharacterCard(props) {
  return (
  <Card style = {{ width: '25rem'}}>
      <img className ='image-ref' alt = "Image is not available" src = {props.image}/>
      {/* <Card.Img variant="top" src="{props.image}/{100px180?text=Image cap}" /> */}
      
      <Card.Title> Name: {props.name}</Card.Title>
       <Card.Title> Type: {props.type}</Card.Title>
      <Card.Title> Gender: {props.gender}</Card.Title>
       <Card.Title> Species: {props.species}</Card.Title>
    </Card>
  )
 
}