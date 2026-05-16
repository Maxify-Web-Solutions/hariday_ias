import React, { useState } from "react";
import Hello from '../assets/Images/contact.svg'



const Contact = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get old data
    const existingData =
      JSON.parse(localStorage.getItem("contactForm")) || [];

    // Add new form data
    const updatedData = [...existingData, formData];

    // Save to localhost
    localStorage.setItem("contactForm", JSON.stringify(updatedData));

    console.log(updatedData);

    // Clear form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <div className='mt-0 md:mt-16 px-3 md:px-20 lg:px-28 py-10 bg-[#FDF6EC]'>
        <div className="flex flex-col lg:flex-row  mt-16 items-center justify-between gap-4">
          <div className="w-full lg:w-[55%]  rounded-xl shadow-md p-4">
            <div className='px-5'>
              <h1 className='text-4xl font-bold text-[#6B0F0F]'>Contact Us</h1>
              <p className=' text-base mt-2 text-[#6B0F0F]'>For any queries, Please reach out to us. Our Support team will get <br /> back to you within 24 hours.</p>
              <p className='mt-5 text-[#7C5A4F]'>support@gmail.com</p>
              <p className='mt-3 text-[#7C5A4F]'>+91 9355650923</p>
              <p className='mt-1 text-[#7C5A4F]'>+91 9667096213</p>
            </div>
            <div className='mt-8'>
              <img src={Hello}></img>
            </div>
          </div>
          <div className="w-full lg:w-[45%] rounded-xl shadow-md  p-6">
            <form className='flex flex-col mt-7' onSubmit={handleSubmit}>

              <label>Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder='Enter Name'
                className='outline-none py-2 border-b-2 mt-1 border-[#7C5D73] rounded pl-2'
              />

              <label className='mt-5'>Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter Email'
                className='outline-none py-2 border-b-2 mt-1 border-[#7C5D73] rounded pl-2'
              />

              <label className='mt-5'>Phone No*</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder='Enter Number'
                className='outline-none py-2 border-b-2 border-[#7C5D73] rounded pl-2'
              />

              <textarea
                rows={7}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder='Your Message*'
                className='mt-7 outline-none py-2 border-b-2 border-[#7C5D73] rounded pl-2'
              />

              <button
                type="submit"
                className='text-lg font-semibold py-2 px-6 mt-8 border  bg-[#6B0F0F] text-white text-center rounded-lg'
              >
                Submit
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact