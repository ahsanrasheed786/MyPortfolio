//import React from 'react'
import { useNav } from '../hooks/useNav';

import { useState } from "react";



//let countnext=65;
// countreact=70;
let react=67;
let next=61;
let html=80;
let css=75;
let javaScript=75;
let typeScript=65;
let mysql=60;
let tailwind=70;
let php=60;
let python=62;
let i=0;
let x=0;
const Skills = () => {
  const skillRef=useNav("Skill");

  const[countreact,setcountreact]=useState(0)
  const[countnext,setcountnext]=useState(0)
  
  
  setInterval(()=>{
    setTimeout(() => {
      if(i==react){
        clearInterval();
      }else{
        i++
        setcountreact(i)
      }
    }, 150);
    
  },150)
    
  setInterval(()=>{
    setTimeout(() => {
      if(x==next){
        clearInterval();
      }else{
        x++
        setcountnext(x)
      }
    }, 600);
    
  },300)

  
  
  return (





   <div >
   <div className="mainall  justify-center items-center pb-16 md:px-2 px-2  " id="skill" ref={skillRef}>
<div className="text bg-[#FFA500] pb-2 ">
   <p className="text-md text-textColor flex justify-center ">Technical And Professional</p>
   <p className=" text-hoverColor text-3xl flex justify-center items-center  "> <b>My Skills</b></p>
   </div>
   <div className="main grid md:grid-cols-2 md:pt-[7%] ">

<div className="grid1 pt-4">
  <p className="md:text-2xl text-2xl text-textColor" >Technial Skils</p>

  <div className="bars pt-10 md:w-96 w-80 text-textColor">
  <div className="Html-5"><b> Html:5</b>
  <div className="bar h-4  rounded-xl "> <div style={{width:html/120*384}} className="innerbar h-[100%]  rounded-lg bg-hoverColor"><b className="pl-[100%]">{html}%</b></div></div>
  </div> {/* END DIV HTML */}

  <div className="Css"><b> Css</b>
  <div className="bar h-4 md:w-96 w-80 rounded-xl ">
    <div style={{width:css/120*384}} className="innerbar h-[100%]  rounded-lg bg-hoverColor"><b className="pl-[100%]">{css}%</b></div></div>
  
  </div>{/* end div of the css*/}

  <div className="Javascript"><b>JavaScript</b>
  <div className="bar h-4 md:w-96 w-80 rounded-xl ">
    <div style={{width:javaScript/120*384}} className="innerbar h-[100%]  rounded-lg bg-hoverColor">
      <b className="pl-[100%]">{javaScript}%</b></div></div>
  </div> {/* END DIV JAVASCRIPT*/}
  <div className="Javascript"><b>TypeScript</b>
  <div className="bar h-4 md:w-96 w-80 rounded-xl "><div style={{width:typeScript/120*384}} className="innerbar h-[100%]  rounded-lg bg-hoverColor"><b className="pl-[100%]">{typeScript}%</b></div></div>
  </div> {/* END DIV TypeScript*/}
  <div className="Javascript"><b>Mysql</b>
  <div className="bar h-4 md:w-96 w-80 rounded-xl "><div style={{width:mysql/120*384}} className="innerbar h-[100%]  rounded-lg bg-hoverColor"><b className="pl-[100%]">{mysql}%</b></div></div>
  </div> {/* END DIV MySQL*/}
  <div className="TailWind"><b>TailWind</b>
  
  
  <div className="bar h-4 md:w-96 w-80 rounded-xl "><div style={{width:tailwind/120*384}} className="innerbar h-[100%]  rounded-lg bg-hoverColor"><b className="pl-[100%]">{tailwind}%</b></div></div>

  </div> {/* end of div tailwind */}
  <div className="Php"><b>Php</b>
  <div className="bar h-4 md:w-96 w-80 rounded-xl "><div style={{width:php/120*384}} className="innerbar h-[100%]  rounded-lg bg-hoverColor"><b className="pl-[100%]">{php}%</b></div></div>
</div> {/* end og php div*/}
  <div className="Python"><b>Python</b>
  <div className="bar h-4 md:w-96 w-80 rounded-xl "><div style={{width:python/120*384}} className="innerbar h-[100%] rounded-lg bg-hoverColor"><b className="pl-[100%]">{python}%</b></div></div>
</div> {/*  end of python div*/}
</div></div>


<div className="grid2 md:text-2xl text-2xl text-textColor pt-4 ">
<p className="text-2xl">Professional skills</p>

<div className="react  grid grid-cols-2 pt-10 ">
  {/*circle one start*/}
  <div className="outernext text-center w-40 ">
<div className="next ">
<div className="outer">
  <div className="inner">
    <div className="innerinner">
     <b>{countreact}</b> 
    </div>
    
  </div>{/* inner end */}
</div> {/* outer end */}

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#FF6347" />
               <stop offset="30%" stopColor="#D2691E" />
               <stop offset="60%" stopColor="#FF8C00" />
               <stop offset="100%" stopColor="#FF4500" />
            </linearGradient>
         </defs>      {/*style={{strokeDashoffset:react/100*472}}  */}
         <circle  cx="80" cy="80" r="70" strokeLinecap="round" />
 </svg>
</div>
React Js
</div>


 {/*circle 2*/}
 <div className="skillouter  text-center w-40">
 <div className="skill">
<div className="outer">
  <div className="inner">
    <div className="innerinner">
     <b>{countnext}</b> 
    </div>
    
  </div>{/* inner end */}
</div> {/* outer end */}

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
<defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#FF6347" />
               <stop offset="30%" stopColor="#D2691E" />
               <stop offset="60%" stopColor="#FF8C00" />
               <stop offset="100%" stopColor="#FF4500" />
            </linearGradient>
         </defs>
           {/*style={{strokeDashoffset:next/100*472}}  */}
         <circle cx="80" cy="80" r="70" strokeLinecap="round"/>
 </svg>

 </div>{/* skill div   end */}
Next Js
 </div>{/* outerskill div   end */}
{/*circle 2 end */}



</div>{/*  react div end*/}
</div>
   </div> {/** main div end  */}
   </div>{/** mainall div end  */}
   
   </div>
  )
}

export default Skills