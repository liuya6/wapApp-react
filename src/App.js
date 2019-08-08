import React, {Component} from 'react';
import {Switch,Route} from "react-router-dom";

import RouterData from "./router";
import RegisterRoute from "./router/registerRouter";

import NotFound from "./view/notfound";

export default class App extends Component {
  render () {
    return (
      <div id="app">
        <Switch>
          {
            RouterData.map((routeOne,i)=><RegisterRoute key={i} {...routeOne} />)
          }
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}
