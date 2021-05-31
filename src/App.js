import React from "react";
import Routes from "./Routes";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";

import duke from "./dog-pics/duke.jpg";
import perry from "./dog-pics/perry.jpg";
import tubby from "./dog-pics/tubby.jpg";
import whiskey from "./dog-pics/whiskey.jpg";

/** Render the App w/ nav bar and routes to dog app. */
function App({ dogs }) {
  return (
    <div>
      <BrowserRouter>
        <Nav dogs={dogs}/>
        <Routes dogs={dogs}/>
      </BrowserRouter>
    </div>
  );
}

/**Default dogs for app */
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
