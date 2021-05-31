import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dog from "./Dog";
import Homepage from "./Homepage";

/** Routes for Dog App 
 * 
 * props: { dogs }
*/
function Routes({dogs}) {
  return (
    <Switch>
      <Route exact path="/dogs/:name"><Dog dogs={dogs}/></Route>
      <Route exact path="/dogs"><Homepage dogs={dogs}/></Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;