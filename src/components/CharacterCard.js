import React from "react";
import "./CharacterCard.css";
import Card from "react-bootstrap/Card";

export default function CharacterCard(props) {
  return (
  <Card style = {{ width: '25rem'}}>
      <img className ='image-ref' alt = "Image is not available" src = {props.image}/>
      {/* <Card.Img variant="top" src="{props.image}/{100px180?text=Image cap}" /> */}
      
  {/* <p> Name: {props.name} </p>
  <p> Type: {props.type} </p>
  <p> Gender: {props.gender} </p>
  <p> Species: {props.species} </p> */}
      <Card.Title> Name: {props.name}</Card.Title>
       <Card.Title> Type: {props.type}</Card.Title>
      <Card.Title> Gender: {props.gender}</Card.Title>
       <Card.Title> Species: {props.species}</Card.Title>
    </Card>
  )
 
}


// <Card style={{ width: '18rem' }}>
  // <Card.Img variant="top" src="holder.js/100px180" />
  // <Card.Body>
  // <Card.Title>Card Title</Card.Title>
  // <Card.Text></Card.Text>
