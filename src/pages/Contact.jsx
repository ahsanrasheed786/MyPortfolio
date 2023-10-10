import { useNav } from '../hooks/useNav';

// import { BiPaperPlane } from "react-icons/bi";

function ContactForm() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can handle form submission logic here, such as sending data to a server.
  //   console.log(formData);
  // };
  const contactRef=useNav('Contact');

  return (
<div className='text-[#FFFFFF] px-4 md:px-8' id='contact' ref={contactRef}>

<div className="banner bg-[#FFA500]  ">
  {/* <img className='' src="./images/go2.png" alt="" /> */}
  <div className="text-[#FFFFFF]  md:text-4xl text-xl text-center py-3 md:py-5 "><b>#Contact Us</b></div>
</div>

  {/* <img className='absolute' src="./images/112.png" alt="" /> */}




    <div className="max-w-md mx-auto  bg-white shadow-lg rounded-lg pt-10">
      {/* <h2 className="text-2xl font-semibold mb-4">Contact Us</h2> */}
      <form action="https://formsubmit.co/964f8ad19e89d06070e4a0f4256bf82a " method="POST" > {/*formsubmit       <form action="https://formsubmit.co/964f8ad19e89d06070e4a0f4256bf82a " method="POST" >
 */}
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-gray-700">Full Name:</label>
          <input
          placeholder='eg:Ali Abbas'
            type="text"
            id="fullname"
            name="fullName"
            // value={formData.fullName}
            // onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
          placeholder='abc@gmail.com'
            type="email"
            id="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number:</label>
          <input
          placeholder='+923401112233'
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            // value={formData.phoneNumber}
            // onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message:</label>
          <textarea
          placeholder='Type Your message here'
            id="message"
            name="message"
            // value={formData.message}
            // onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            rows="4"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2  button z-[-1]"
            >
            Send 
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default ContactForm;
