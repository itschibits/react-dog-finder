import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogFinder from "./DogFinder";
import Homepage from "./Homepage";

/** Routes for Dog App 
 * 
 * props: 
 * - dogs [{dog},{dog},...]
 * 
 * App -> Routes -> { DogFinder, Homepage }
*/
function Routes({dogs}) {
  return (
    <Switch>
      <Route exact path="/dogs/:name"><DogFinder dogs={dogs}/></Route>
      <Route exact path="/dogs"><Homepage dogs={dogs}/></Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;