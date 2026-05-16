import { Link } from "react-router-dom";
import React from 'react'
import logo from '../assets/Images/logoIas.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
    return (
        <>
            <div className=''>
                <div className=' py-6 px-5 md:px-10 lg:px-16 '>

                    <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-10 lg:gap-16'>
                        {/* Logo Section */}
                        <div className='flex flex-col w-full md:w-[45%] lg:w-[22%]'>
                          <div className="flex gap-2">
                              <img
                                src={logo}
                                alt="Logo"
                                className="w-20 h-20 object-contain"
                            />
                            <h2 className=" mt-6 text-2xl font-bold text-[#6B0F0F]">Hriday IAS</h2>

                          </div>
                            <h3 className="text-sm mt-2 leading-relaxed text-[#846458]">
                                Turning Aspirations <br />
                                Into Achievements
                            </h3>

                            <div className="flex gap-3 mt-4">

                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#c59d5f] transition-all duration-300"
                                >
                                    <AiFillTwitterCircle size={28} />
                                </a>

                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#c59d5f] transition-all duration-300"
                                >
                                    <FaFacebook size={28} />
                                </a>

                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#c59d5f] transition-all duration-300"
                                >
                                    <FaInstagram size={28} />
                                </a>

                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#c59d5f] transition-all duration-300"
                                >
                                    <CiLinkedin size={28} />
                                </a>

                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-col gap-3 w-full sm:w-[45%] lg:w-auto">
                            <h1 className="text-xl font-bold text-[#6B0F0F]">Quick Links</h1>

                            <Link to="/about" className="hover:text-[#c59d5f] text-[#846458]">
                                About Us
                            </Link>

                            <Link to="/blog" className="hover:text-[#c59d5f] text-[#846458]">
                                Our Blogs
                            </Link>
                            <Link to="/contact" className="hover:text-[#c59d5f] text-[#846458]">
                                Contact Us
                            </Link>
                            
                        </div>

                        {/* Policy */}
                        <div className="flex flex-col gap-3 w-full sm:w-[45%] lg:w-auto">
                            <h1 className="text-xl font-bold text-[#6B0F0F]">Policy</h1>

                            <Link to="/privacy" className="hover:text-[#c59d5f] text-[#846458]">
                                Privacy Policy
                            </Link>

                            <Link to="/refund" className="hover:text-[#c59d5f] text-[#846458]">
                                Refund Policy
                            </Link>

                            <Link to="/terms" className="hover:text-[#c59d5f] text-[#846458]">
                                Terms & Conditions
                            </Link>

                            <Link to="/faq" className="hover:text-[#c59d5f] text-[#846458]">
                                FAQ
                            </Link>
                        </div>

                        {/* Courses */}
                        <div className="flex flex-col gap-3 w-full sm:w-[45%] lg:w-auto">
                            <h1 className="text-xl font-bold text-[#6B0F0F]">Courses</h1>

                            <Link to="/courses" className="hover:text-[#c59d5f] text-[#846458]">
                                UPSC Preparation
                            </Link>

                            <Link to="/courses" className="hover:text-[#c59d5f] text-[#846458]">
                                SSC Coaching
                            </Link>

                            <Link to="/courses" className="hover:text-[#c59d5f] text-[#846458]">
                                State PCS
                            </Link>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}

export default Footer