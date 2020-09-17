import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";
 
import Home from "./home";
import Blog from "./blog";
import Contacts from "./contacts";
import Login from "./login";
import Navigation from "./NavigationComponent";
import Profile from "./profile";
export default class App extends Component {
  render() {
    return (
      <div className='app'>
{console.log('props_params',this.props)}
        <Router>
          <div>
          <Navigation />
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/blog" component = {Blog}/>
            <Route path = "/contacts" component = {Contacts}/>
            <Route path = "/login" component = {Login}/>
            <Route path = "/profile" component = {Profile}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
