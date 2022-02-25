import React from "react";
import user from "../data/user";

function About({bio}) {
  if (bio) {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        
      </div>
    );
  } else {
    return null;
  }
}

export default About;
