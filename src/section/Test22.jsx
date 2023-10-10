// import React from 'react'
import { useState } from "react";
import { Link, useLocation} from "react-router-dom"

const Test22 = () => {
    let [open ,setOpen]=useState(false);
    let location = useLocation();
  let path=location.pathname;

  return (
    <div>

    
<div className='shadow-md w-full fixed top-0 left-0 text-bgColor'>
    <div className=' md:flex bg-textColor items-center justify-between py-4 md:px-10 px-7'>
        <div className=' font-bold text-2xl  cursor-pointer flex items-center font-[poppins] tex-[gray]'>
            <span className=' text-3xl text-hoverColor mr-1 pt-2'>
            <ion-icon name="logo-ionic"></ion-icon>
            </span>
            Ahsan
        </div>
        <div onClick={()=>{setOpen(!open)}} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
        <ion-icon name={open?'close':'menu-outline'}></ion-icon>
        </div>
        <ul className= {` md:flex md:items-center md:pb-0 pb-12 absolute md:static
         bg-textColor md:z-auto z-[-1] left-0 w-full md:w-auto
          pl-9 md:pl-0 transition-all duration-500 ease-in ${open?'top-20':'top-[-490px]'} `} >
            
    <li><Link className={(path=="/about")?"active":"unactive"}  to="/">Home</Link></li>
    <li><Link className={(path=="/about")?"active":"unactive"} to="/about">About</Link></li>
    <li><Link className={(path=="/skills")?"active":"unactive"} to="/skills">Skills</Link></li>
    <li><Link className={(path=="/portfolio")?"active":"unactive"} to="/portfolio">Portfolio</Link></li>
    <li><Link className={(path=="/contact")?"active":"unactive"} to="/contact">Contact</Link></li>
        </ul>

    </div>

</div>




    </div>
  )
}

export default Test22