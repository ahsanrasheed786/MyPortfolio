import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
     <Routes>
      {/* <Route path='/home' element={<Home/>} /> 
       <Route path='/testing' element={<Test22/>} /> 
       <Route path='/testing3' element={<Test3/>} /> 
       <Route path='/testing2' element={<Header/>} /> 
       <Route path='/about' element={<About/>} />  
       <Route path='/portfolio' element={<Portolio/>} /> 
       <Route path='/skills' element={<Skills/>} /> 
       <Route path='/contact' element={<Contact/>} />*/} 
       <Route path='/' element={<App/>} /> 
     </Routes>
     </BrowserRouter>
 


   {/* <Portolio/> */}
  </React.StrictMode>,
)
