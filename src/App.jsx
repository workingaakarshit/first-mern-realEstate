import React from 'react'
import { BrowserRouter, Routes , Route } from "react-router-dom";
import About from './PAGES/About';
import Home from './PAGES/Home';
import Profile from './PAGES/Profile';
import SignUp from './PAGES/SignUp';
import SignIn from './PAGES/SignIn';
import Header from './components/Header';
import Kids from "./PAGES/Kids";
import Women from "./PAGES/Women";
import Men from "./PAGES/Men";


 
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
       <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/men" element = {<Men/>}/>
          <Route path = "/women" element = {<Women/>}/>
          <Route path = "/kids" element = {<Kids/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/profile" element = {<Profile/>}/>
          <Route path = "/signin" element = {<SignIn/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
        </Routes>
    </BrowserRouter>
  )
  
}

export default App