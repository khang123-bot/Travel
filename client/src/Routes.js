import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {withRouter} from 'react-router';

import Home from "./Child/Home";
import Error404 from "./Child/Error404"
import SignUp from "./Child/SignUp";


export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path={'/SignUp'} component={SignUp}/> 
            <Route path="/Home" component={Home}/> 
        </Switch>
    </BrowserRouter>
  );
}