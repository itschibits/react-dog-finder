import React from "react";
import { useParams } from "react-router-dom";
import DogDetail from "./DogDetail"

/** DogFinder - filters dog list and renders single dog
 * 
 * Props:
 * - dogs [{dog},...]
 * 
 * DogFinder -> DogDetail
 *  
 *  */
function DogFinder({dogs}) {
  const { name } = useParams();

  /** Finds the right dog */
  let dog = dogs.find(dog => dog.name === name);

  return (
    <div>
      <DogDetail dog={dog}/>
    </div>
  );
}

export default DogFinder;