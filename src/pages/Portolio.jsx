//import React from 'react'
import { useNav } from '../hooks/useNav';


const Portolio = () => {
  const portRef=useNav('Port');

  return (
    <>
   
<div className="outerBanner px-4 md:px-8"><div className="text-5xl m-auto content-center text-center md:py-4 py-2 bg-[#FFA500]"><b>Projects</b> </div></div> {/* banner uter div end */}

    <div className="mainpt pt-10 grid md:grid-cols-2 grid-cols-1  m-auto content-center text-center text-textColor " id="portolio" ref={portRef}>




<div className="content m-auto h-56 w-[70%]  ">
I have attached my latest project, which is an E-commerce website developed using React.js.
The website features a shopping cart,
 wishlist functionality, product details, star ratings for products, 
 discount ,Off etc
 and a beautifully designed header and footer. I have only developed 
 only the frontend of this site.
</div>{/*here main content div  end */}




<div className="images grid md:grid-cols-2 grid-cols-1 m-auto  ">


<div className='puterdiv m-5 rounded-lg border-4 md:shadow-lg shadow-md hover:shadow-hoverColor border-hoverColor'><div className="img1 overflow-hidden h-52 w-56 rounded-lg "><img className='h-full hover:scale-125 duration-1000 rounded-lg '  src="../images/allProducts.png" alt="img" /></div></div>
<div className='outerdiv m-5 rounded-lg border-4 md:shadow-lg shadow-md hover:shadow-hoverColor border-hoverColor'><div className="img2 overflow-hidden h-52 w-56 rounded-lg "><img className='h-full hover:scale-125 duration-1000 rounded-lg '   src="../images/productDel.png" alt="img" />  </div></div>
<div className='outerdiv m-5 rounded-lg border-4 md:shadow-lg shadow-md hover:shadow-hoverColor border-hoverColor'><div className="img3 overflow-hidden h-52 w-56 rounded-lg "><img className='h-full hover:scale-125 duration-1000 rounded-lg '   src="../images/EmptyCart.png" alt="img" />   </div></div>
<div className='outerdiv m-5 rounded-lg border-4 md:shadow-lg shadow-md hover:shadow-hoverColor border-hoverColor'><div className="img4 overflow-hidden h-52 w-56 rounded-lg "><img className='h-full hover:scale-125 duration-1000 rounded-lg '   src="../images/CartwithItems.png" alt="img" /></div></div>
  

</div>{/*here main image div end */}


</div>

    </>
  )
}

export default Portolio