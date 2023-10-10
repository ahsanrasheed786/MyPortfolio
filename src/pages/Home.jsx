//import React from 'react'

import { TypeAnimation } from 'react-type-animation';

import { useNav } from '../hooks/useNav';


let Cv="https://drive.google.com/file/d/1zMMPxYZYnlX2ndN5XpmMcmw0vLBpaCeP/view?usp=sharing"



//let array=['Youtuber','Web developer','Frontend Developer']

const Home = () => {
  
const homeRef=useNav('Home');
  
    return (
        < >
        {/* <Header/> */}
        {/* <Test22/> */}
        <div  className="main grid md:grid-cols-2 md:mx-h-[100vh] md:pt-2 pt-24 md:pb-20 pb-10" id='home' ref={homeRef}>
    <div className="forgrid1 ">
    <div className='md:pt-28 md:pl-10 px-4 '>
      <div className="intro md:text-4xl text-xl z-[-1] text-[#FF8C00] ">Hi! I`m <span className='text-hoverColor z-[-1]'><b >Ahsan Rasheed</b></span></div> 
      <div className='h-[80px] md:h-10 font-bold text-[13px] z-[-1] text-hoverColor'><  TypeAnimation
        sequence={[
          " And I'm a Softwear Engineer.",
          1000,
          " And I'm a Developer.",
          1000,
          " And I'm a Youtuber.",
          1000,
          " And I'm a Designer.",
          1000,
        ]}
        speed={2}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      /></div>
    </div>

    <div className='md:px-8 px-4 text-textColor md:h-32 h-56 text-[12px] md:text-[13px]'>
      <TypeAnimation
      className='md:text-[5px]'
        sequence={[
          `Welcome to my website!\n I am Fresher Web developer on React And Next js Framwork.
          React is a popular JavaScript library for building  user interfaces,
           and it's widely used in the industry.\n 
           Email: \n rasheedahsan786@gmail.com\n 
           Whatsapp:\n   +923404099242
           `,
          10000000000,
          "",
        ]}
        speed={50}
        style={{ whiteSpace: 'pre-line', fontSize: '1.1em' }}
        repeat={false}
      /></div>
         </div> {/*   here grid1 div end */}


         <div className="mainForGrid2 home-image relative mt-[10%] z-[-1]">

      <div className='img-box absolute top-[] left-20  '> 
      <img className= ' h-[450px] md:h-[89vh]  ' src="./images/16without2.png" alt="img" />
      </div>
    
<div className='blobs liquid-shape relative md:top-[100px] md:w-[450px]'><svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"  width="100%" id="blobSvg">
<path  fill="#12f7ff">
<animate attributeName='d'
dur='20000ms'
repeatCount='indefinite'
values='
M407.5,289.5Q401,329,374,359.5Q347,390,313.5,443Q280,496,231,463Q182,430,159,390.5Q136,351,118.5,319Q101,287,74.5,243.5Q48,200,92.5,175Q137,150,159,108.5Q181,67,229.5,45Q278,23,321.5,53.5Q365,84,380.5,128.5Q396,173,405,211.5Q414,250,407.5,289.5Z;
M423.5,290Q402,330,384.5,374.5Q367,419,319.5,423Q272,427,224.5,435Q177,443,140.5,411.5Q104,380,63,343Q22,306,22,250Q22,194,57,152Q92,110,142.5,105Q193,100,232,88.5Q271,77,318.5,79.5Q366,82,412.5,111Q459,140,452,195Q445,250,423.5,290Z;
M461.5,305Q460,360,425.5,407Q391,454,330.5,433Q270,412,230,410Q190,408,142,398Q94,388,58.5,347Q23,306,50,256.5Q77,207,104.5,176Q132,145,155,102Q178,59,226,54.5Q274,50,330.5,51Q387,52,415,100.5Q443,149,453,199.5Q463,250,461.5,305Z;
M407.5,289.5Q401,329,374,359.5Q347,390,313.5,443Q280,496,231,463Q182,430,159,390.5Q136,351,118.5,319Q101,287,74.5,243.5Q48,200,92.5,175Q137,150,159,108.5Q181,67,229.5,45Q278,23,321.5,53.5Q365,84,380.5,128.5Q396,173,405,211.5Q414,250,407.5,289.5Z
'> </animate></path></svg>
     
</div>


</div> {/*here gird 2 div end  */}
    




<div className="buttons  md:p-0 md:pt-[-100px] md:mt-0 mt-20   mx-[10%]">
<a  href="ahsanrasheedresumefor.netlify.app" target='_blank ' ><button className='button p-3 m-2  z-[-1]  '>Responsive Cv</button></a>
<a  href={Cv} target='_blank ' ><button className='button p-3 m-2  z-[-1]  '>Dowload CV</button></a>
<a href="mailto:rasheedahsan786@gmail.com?cc=   &subject=Mail For Hire"><button  className='button  p-3 z-[-1] mx-[27%] md:mx-0 '>Hire Me Now!</button></a>


<div className="social flex  h-18">
  <div className="face text-center h-[42px] rounded-xl  mx-1 w-[42px]  hover:text-textColor hover:bg-[#417DF6] text-hoverColor"> <a href="https://www.facebook.com/ahsan.rasheed.18400700?mibextid=ZbWKwL" target='_blank '> < ion-icon  name="logo-facebook"></ion-icon></a></div>
 <div className="whats text-center h-[42px] rounded-xl  mx-1 w-[42px] hover:text-textColor hover:bg-[#00FF7F] text-hoverColor">  <a href="https://wa.me/923026899408" target='_blank ' ><ion-icon  name="logo-whatsapp"></ion-icon></a></div>
 <div className="link text-center h-[42px] rounded-xl   mx-1 w-[42px] hover:text-textColor hover:bg-[#2951a0] text-hoverColor">  <a href='https://www.linkedin.com/in/ahsan-rasheed-977693177' target='_blank '><ion-icon  name="logo-linkedin"></ion-icon></a></div>
 <div className="tiww text-center h-[42px] rounded-xl   mx-1 w-[42px] hover:text-textColor hover:bg-[#417DF6] text-hoverColor">  <a href="https://instagram.com/ahsanrasheed78647?igshid=MzMyNGUyNmU2YQ== " target='_blank '><ion-icon name="logo-instagram"></ion-icon> </a></div>
 <div className="tiktok text-center h-[42px] rounded-xl mx-1 w-[42px] hover:text-textColor hover:bg-[#1d1313] text-hoverColor">  <a href="https://www.tiktok.com/@ahsanrasheed786?is_from_webapp=1&sender_device=pc" target='_blank '><ion-icon  name="logo-tiktok"></ion-icon> </a></div>
</div></div> {/*the outer div button div */}


</div>{/*  here main div end */}






    </>
        
        
  )
}

export default Home