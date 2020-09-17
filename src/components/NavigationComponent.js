import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Login from "./login";
import Logout from "./logout";

export default class NavigationComponent extends Component {
   render() {
     return (
       <div>
           <NavLink exact to= "/">Home</NavLink>
           <NavLink  to= "/blog">Blog</NavLink>
           <NavLink  to= "/contacts">Contact</NavLink>
           <NavLink  to= "/profile">Profile</NavLink>
           <Login />
           <Logout />
       </div>
     );
   }
 }