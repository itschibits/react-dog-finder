import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

/** Renders Nav bar with links to all dogs
 * 
 * props: { dogs }
 * 
 * App -> Nav
 */
function Nav({ dogs }) {

  /** gets all dogs for nav bar */
  let allDogs = dogs.map(dog => (
    <li key={dog.name}><NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink></li>
  ));

  return (
    <nav className="Nav">
      <ul>
      <NavLink to="/dogs">Home</NavLink>
      { allDogs }
      </ul>
    </nav>
  );
}

export default Nav;