//import React from 'react'
let story=`I am a student of 4th smester pursuing a degree in Software Engineering. 
My journey into the world of computer  began during my time in Intermediate.
 I first delved into computer programming languages with C++, During my Intermediate education
 Part 2. After c++ i decided to explore Python, marking my second programming language
 . Subsequently, I enrolled in a Bachelor of Software Engineering program. It was 
during this phase that I ventured into web development, leveraging online tutorials
 and resources from platforms like YouTube.

 \n 
 \n

While I am relatively new to web development, I am enthusiastic about advancing 
my skills in this field. I am eager to secure an internship opportunity with your 
esteemed software company,where I can apply my passion for coding and my willingness
 to learn to contribute effectively to your projects and goals.`
import { useState } from "react";
import { useNav } from "../hooks/useNav"

const About = () => {
  
  const aboutRef=useNav("About");
  let [btn,setBtn]=useState(true)

  let [aboutStory]=useState(story)

  let btnfun=()=>{
    if (btn==true) {
      setBtn(false)
    }else{
      setBtn(true)
    }
  }
 

  return (

   <>
  
<div className="banner md:text-5xl py-3 mx-5 text-md text-center bg-hoverColor text-[#FF8C00]"> <b>About Me!</b></div>

  
   <div className="main grid md:grid-cols-2  " id="about" ref={aboutRef} >


<div className="img grid1  relative " > <img className=' md:h-[80vh] h-[60vh]' src="./images/go2.png" alt="" />
<div className="aboutMe">
  <div className="abtf absolute md:bottom-10 md:right-44 bottom-10 right-10 shadow-xl shadow-hoverColor " ><b>3+</b> <br/><b>Ecommerce Projets</b></div>
  <div className="abtf absolute md:bottom-10 md:right-44 top-10 right-10 shadow-xl shadow-hoverColor py-[5%]" ><b>Smester: 4</b> <br/></div>
    <div className="abtf absolute md:top-32 md:left-6 top-10 left-0 shadow-xl shadow-hoverColor "><b>Student of Software Engineer</b></div></div>

</div>{/* image div end */}


<div className="contant grid2 p-4 m-auto">
<div className="about text-hoverColor md:text-4xl "> <b>About me</b></div>
<div className="about md:text-xl text-[#FFA500]"> <b>A story of Good</b></div>
<div className="story text-textColor"> {/* story div start */}

{btn==true?aboutStory.substring(0,247) :story}

 </div> {/* here story dive end */}
 <a onClick={btnfun} className=" cursor-pointer " ><div   className="  button h-12 md:w-32 w-24 text-center z-[-1] "><button className="py-[10%]">{(btn==true?"Read More":"Show Less")}</button></div></a>

</div>{/* content div end here */}

</div>
   
   
   
   
   </>
  )
}

export default About