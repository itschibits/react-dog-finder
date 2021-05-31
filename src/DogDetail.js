import React from "react";

/** DogDetail
 * 
 * Props:
 * - dog {name, age, src, [facts]}
 * 
 * Routes -> DogFinder -> DogDetails
 */
function DogDetail({ dog }) {
  /** Turns all facts about a dog into list items */
  let dogFacts = dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>);

  return (<div>
    <h1>{dog.name}</h1>
    <img src={dog.src} alt={dog.name} />
    <p>{dog.name} is {dog.age} years old.</p>
    <ul>
      {dogFacts}
    </ul>
  </div>)
}

export default DogDetail;