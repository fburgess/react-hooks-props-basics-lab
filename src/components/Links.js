import React from "react";

function Links ({ github, linkedin }) {

  return (
    <div id="linkSection">
        <h3>Links</h3>
        <a href={github} id="gitLinks"> {github}</a>
        <a href={linkedin} id="Links"> {linkedin}</a>
    </div>


  );
}

export default Links;