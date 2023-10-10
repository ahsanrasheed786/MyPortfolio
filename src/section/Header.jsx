// import React from 'react'
import { useContext, useState } from "react";

import { NavContext } from "../context/NavContext";

const Header = () => {

    const { activeLinkId }=useContext(NavContext);
    // console.log(activeLinkId)

    let [open ,setOpen]=useState(false);
  //   let location = useLocation();
  // let path=location.pathname;

 
 const funscrollhome =()=>{
    document.getElementById('home').scrollIntoView({block: 'end',behavior:'smooth'})
 }
 const funscrollabout =()=>{
    document.getElementById('about').scrollIntoView({block: 'end',behavior:'smooth' })
 }
 const funscrollskill =()=>{
    document.getElementById('skill').scrollIntoView({block: 'end',behavior:'smooth'})
 }
 const funscrollportfolio =()=>{
    document.getElementById('portolio').scrollIntoView({block: 'end',behavior:'smooth'})
 }
 const funscrollcontact =()=>{
    document.getElementById('contact').scrollIntoView({block: 'end',behavior:'smooth'})
 }

  return (
    <div>

    
<div className='shadow-md w-full fixed top-0 left-0 text-bgColor z-[1]  '>
    <div className=' md:flex bg-textColor items-center justify-between py-2  md:px-10 px-7 pt-5'>
        <div className=' font-bold text-2xl  cursor-pointer flex items-center font-[poppins] text-[#d73f3f]'>
            <span className=' text-xl text-hoverColor mr-1 pt-2'>
            <ion-icon size='large' name="logo-ionic"></ion-icon>
            </span>
            Ahsan
        </div>
        <div onClick={()=>{setOpen(!open)}} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
        <ion-icon name={open?'close':'menu-outline'}></ion-icon>
        </div>
        <ul className= {`  md:flex md:items-center md:pb-0 cursor-pointer absolute md:static
         bg-textColor md:z-auto  left-0 w-full md:w-auto
          pl-9 md:pl-0 transition-all duration-500 ease-in ${open?'top-20':'top-[-490px]'} `} >
            
    <li ><button id="btnhome" onClick={funscrollhome} className={activeLinkId==='Home'?'liveborder':''}>Home</button></li>
    <li><button id="btnabout" onClick={funscrollabout}  className={activeLinkId==='About'?'liveborder':''}>About</button></li>
    <li><button id="btnskill" onClick={funscrollskill}  className={activeLinkId==='Skill'?'liveborder':''} >Skills</button></li>
    <li><button id="btnport" onClick={funscrollportfolio} className={activeLinkId==='Port'?'liveborder':''} >Portfolio</button></li>
    <li><button id="btncontact" onClick={funscrollcontact} className={activeLinkId==='Contact'?'liveborder':''}>Contact</button></li>
        </ul>

    </div>

</div>




    </div>
  )
}

export default Header