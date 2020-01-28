import React from "react";
import "./CharacterCard.css";

export default function CharacterCard(props) {
  return (
  <div>
  <img alt = "Image is not available" src = {props.avatar_url}/>
  <p> Type: {props.type} </p>
  <p> Followers: {props.followers_url} </p>
  <p> Following: {props.following_url} </p>
  <p> Repos: {props.repos_url} </p>
    </div>
  )
 
}
