import React from "react";
import { useParams } from "react-router-dom";

/** Renders all info about a single dog */
function Dog({dogs}) {
  const { name } = useParams();

  /** Finds the right dog */
  let dog = dogs.find(dog => dog.name === name);

  /** Turns all facts about a dog into list items */
  let dogFacts = dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>);

  return (
    <div>
      <h1>{ dog.name }</h1>
      <img src={ dog.src } alt={ dog.name }/>
      <p>{ dog.name } is { dog.age } years old.</p>
      <ul>
        { dogFacts }
      </ul>

    </div>
  );
}

export default Dog;