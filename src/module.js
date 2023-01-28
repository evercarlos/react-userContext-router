import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { Contact } from "./components/contact";
import { Home } from "./components/home";
import { Login } from "./components/login";
import { Us } from "./components/us";
import { NavBar } from "./navBar";

export const Module = () => {

  return (
    <Router>
      <NavBar />
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/us' element={<Us/>}/>
          <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    )
}