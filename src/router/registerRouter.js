import React from "react";
import { Route, Redirect } from "react-router-dom";

let isLogin = true;
const App = route => {
  if(route.exact){
    return (<Route exact path={route.path} render={props => {
      return(
        <route.component {...props}/>
      );
    }}/>)
  }else {
    return (
      <Route path={route.path} render={props=>{
        if(!isLogin){
          return(
            <Redirect to='/login' />
          )
        }else {
          return (
            <route.component {...props}/>
          )
        }
      }} />
    )
  }
};

export default App;
