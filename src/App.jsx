//import { useState } from 'react'
//import {BrowserRouter as Router,Route, BrowserRouter} from "react-router-dom";
// import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
// import Header from "./section/Header";
import Home from './pages/Home';
import About from './pages/About';
import Portolio from './pages/Portolio';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Header from './section/Header';
import NavProvider from './context/NavContext';
//import Header from './section/Header';

function App() {
  

  return (
    <>
     
   {/* <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>} /> 
       <Route path='/testing' element={<Test22/>} /> 
       {/* <Route path='/testing2' element={<Header/>} /> 
       <Route path='/about' element={<About/>} /> 
       <Route path='/portfolio' element={<Portolio/>} /> 
       <Route path='/skills' element={<Skills/>} /> 
       <Route path='/contact' element={<Contact/>} /> 
     </Routes>
     </BrowserRouter> */}
     

     
     <NavProvider>

     <Header/>
     <Home/>
    <About/>
      <Skills/>
      <Portolio/>
      <Contact/>

     </NavProvider>
     
     


    </>
  )
}

export default App
