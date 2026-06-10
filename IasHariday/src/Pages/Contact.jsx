import React, { useEffect, useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";

import {
  createContact,
  clearContactState,
} from "../Redux/Slicer/contactSlice";

const Contact = () => {

  const dispatch = useDispatch();

  const {
    loading,
    success,
    error,
    message,
  } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    dispatch(createContact(formData));
  };

  // Clear Form After Success
  useEffect(() => {

    if (success) {

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        dispatch(clearContactState());
      }, 3000);
    }

  }, [success, dispatch]);

  return (
    <>
      <div className="mt-0 md:mt-16 px-3 md:px-20 lg:px-28 py-10 bg-[#FDF6EC]">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B0F0F]">
          Reach Out to Us Anytime
        </h1>        <div className="flex flex-col lg:flex-row mt-8 items-center justify-between gap-4">

          {/* Left Side */}
          <div className="w-full lg:w-[55%] rounded-2xl shadow-md p-4 bg-white">

            <div className="px-5">

              <h1 className="text-4xl font-bold text-[#6B0F0F]">
                Contact Us
              </h1>

              <p className="text-base mt-1 text-[#7C5A4F] leading-relaxed">
                For any queries, please reach out to us.
                Our support team will get back to you within 24 hours.
              </p>

              {/* Address */}
              <div className="flex items-start gap-4 mt-4">

                <div className="h-11 w-11 rounded-full bg-[#6B0F0F] flex items-center justify-center flex-shrink-0">

                  <MdLocationOn className="text-white text-2xl" />

                </div>

                <div>

                  <h2 className="text-xl font-semibold text-[#6B0F0F]">
                    Address
                  </h2>

                  <p className="text-[#7C5A4F] mt-1 text-sm">
                    A-78, Block-A, Sector 2, Noida
                    <br />
                    Metro Station Noida Sector 15,
                    Exit Gate No. 3 (201301)
                  </p>

                </div>

              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mt-3">

                <div className="h-11 w-11 rounded-full bg-[#6B0F0F] flex items-center justify-center flex-shrink-0">

                  <MdEmail className="text-white text-2xl" />

                </div>

                <div>

                  <h2 className="text-xl font-semibold text-[#6B0F0F]">
                    Email
                  </h2>

                  <p className="text-[#7C5A4F] mt-1 text-sm">
                    info@hridayias.com
                  </p>

                </div>

              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mt-3">

                <div className="h-11 w-11 rounded-full bg-[#6B0F0F] flex items-center justify-center flex-shrink-0">

                  <MdPhone className="text-white text-2xl" />

                </div>

                <div>

                  <h2 className="text-xl font-semibold text-[#6B0F0F]">
                    Phone
                  </h2>

                  <p className="text-[#7C5A4F] mt-1 text-sm">
                    +91 9355650923
                  </p>

                  <p className="text-[#7C5A4F] text-sm">
                    +91 9667096213
                  </p>

                </div>

              </div>

            </div>

            {/* Map */}
            <div className="mt-6">

              <div className="w-full h-[300px] rounded-xl overflow-hidden border-2 border-[#F5E6D3]">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4796.038414479783!2d77.30961804496985!3d28.584999561203453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5ac9d6c1a19%3A0xa1cb942dd7c350e0!2sHriday%20IAS!5e0!3m2!1sen!2sin!4v1779167020410!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 1 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hriday IAS Location"
                ></iframe>

              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <div className="w-full lg:w-[45%] rounded-3xl shadow-md p-4 border-t-[20px] border-[#b96565] border-l border-r bg-white">

            <h2 className="text-2xl md:text-3xl font-bold text-[#6B0F0F] text-center">
              Have Some Questions?
            </h2>

            <div className="w-32 h-1 bg-[#6B0F0F] mx-auto mt-2 rounded-full"></div>

            <form
              className="flex flex-col mt-8"
              onSubmit={handleSubmit}
            >

              {/* Full Name */}
              <label>
                Full Name*
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter Name"
                className="outline-none py-2 border-b-2 mt-1 border-[#7C5D73] rounded pl-2"
                required
              />

              {/* Email */}
              <label className="mt-5">
                Email*
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="outline-none py-2 border-b-2 mt-1 border-[#7C5D73] rounded pl-2"
                required
              />

              {/* Phone */}
              <label className="mt-5">
                Phone No*
              </label>

              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Number"
                className="outline-none py-2 border-b-2 border-[#7C5D73] rounded pl-2 mt-1"
                required
              />

              {/* Message */}
              <textarea
                rows={7}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message*"
                className="mt-7 outline-none py-2 border-b-2 border-[#7C5D73] rounded pl-2"
                required
              />

              {/* Success Message */}
              {success && (
                <p className="text-green-600 text-sm mt-4 font-medium">
                  {message}
                </p>
              )}

              {/* Error Message */}
              {error && (
                <p className="text-red-600 text-sm mt-4 font-medium">
                  {error}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="text-lg font-semibold py-3 px-6 mt-10 bg-[#6B0F0F] text-white text-center rounded-xl hover:bg-[#530c0c] transition disabled:opacity-70"
              >

                {loading ? "Submitting..." : "Submit"}

              </button>

            </form>

          </div>

        </div>

      </div>
    </>
  );
};

export default Contact;