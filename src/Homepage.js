import React from "react";
import { Link } from "react-router-dom";

/** Shows a homepage with all dogs listed 
 * 
 * props: { dogs }
*/
function Homepage({ dogs }) {

  let allDogs = dogs.map(dog => (
    <li key={dog.name}><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>
  ));

  return (
    <div>
      <h1>Look at all our dogs!</h1>
      <ul>
        { allDogs }
      </ul>
    </div>
  )
}

export default Homepage;
