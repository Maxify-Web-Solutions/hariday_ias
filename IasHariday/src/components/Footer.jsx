import { Link } from "react-router-dom";
import React from 'react'
import logo from '../assets/Images/logoIas.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion";


const quickLinks = [
    {
        id: 1,
        title: "About Us",
        path: "/about",
    },

    {
        id: 2,
        title: "Our Blogs",
        path: "/blog",
    },

    {
        id: 3,
        title: "Contact Us",
        path: "/contact",
    },
];

const policyLinks = [
    {
        id: 1,
        title: "Privacy Policy",
        path: "/privacy",
    },

    {
        id: 2,
        title: "Refund Policy",
        path: "/refund",
    },

    {
        id: 3,
        title: "Terms & Conditions",
        path: "/terms",
    },

    {
        id: 4,
        title: "FAQ",
        path: "/faq",
    },
];

const courseLinks = [
    {
        id: 1,
        title: "UPSC Preparation",
        path: "/courses",
    },

    {
        id: 2,
        title: "SSC Coaching",
        path: "/courses",
    },

    {
        id: 3,
        title: "State PCS",
        path: "/courses",
    },
];

const Footer = () => {
    return (
        <>
            <div className=''>
                <div className=' py-6 px-5 md:px-10 lg:px-16 '>

                    <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-6 lg:gap-12 mt-2 md:mt-12'>
                        {/* Logo Section */}
                        <div className='flex flex-col w-full md:w-[45%] lg:w-[22%]'>
                            <Link to="/">
                                <div className="flex gap-2">
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        className="w-20 h-20 object-contain"
                                    />
                                    <h2 className=" mt-6 text-3xl font-bold text-[#6B0F0F]">Hriday IAS</h2>

                                </div>
                            </Link>
                            <h3 className="text-sm mt-3 leading-relaxed text-[#846458]">
                                Turning Aspirations
                                Into Achievements
                                With Expert Guidance & Smart Preparation
                            </h3>

                            <div className="flex gap-4 mt-5">

                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#6B0F0F] transition-all duration-300"
                                >
                                    <AiFillTwitterCircle size={28} />
                                </a>

                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#6B0F0F] transition-all duration-300"
                                >
                                    <FaFacebook size={28} />
                                </a>

                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#6B0F0F] transition-all duration-300"
                                >
                                    <FaInstagram size={28} />
                                </a>

                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#6B0F0F] transition-all duration-300"
                                >
                                    <CiLinkedin size={28} />
                                </a>

                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-auto">

                            <h1 className="text-xl font-bold text-[#6B0F0F] underline">
                                Quick Links
                            </h1>

                            {quickLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.path}
                                    className="relative w-fit text-[#846458] hover:text-[#6B0F0F]
                                     after:absolute after:left-0 after:-bottom-1
                                     after:h-[3px] after:w-0 after:bg-[#6B0F0F]
                                     after:transition-all after:duration-300
                                     hover:after:w-full transition-all duration-300"
                                >
                                    {link.title}
                                </Link>
                            ))}

                        </div>
                        {/* Policy */}
                        <div className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-auto">

                            <h1 className="text-xl font-bold text-[#6B0F0F] underline">
                                Policy
                            </h1>

                            {policyLinks.map((link) => (
                                <motion.div
                                    key={link.id}
                                    whileHover={{ x: 0 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link
                                        to={link.path}
                                        className="relative w-fit text-[#846458] hover:text-[#6B0F0F]
                                    after:absolute after:left-0 after:-bottom-1
                                    after:h-[3px] after:w-0 after:bg-[#6B0F0F]
                                    after:transition-all after:duration-300
                                    hover:after:w-full transition-all duration-300"
                                    >
                                        {link.title}
                                    </Link>
                                </motion.div>
                            ))}

                        </div>

                        {/* Courses */}
                        <div className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-auto">

                            <h1 className="text-xl font-bold text-[#6B0F0F] underline">
                                Courses
                            </h1>

                            {courseLinks.map((link) => (
                                <motion.div
                                    key={link.id}
                                    whileHover={{ x: 0 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link
                                        to={link.path}
                                        className="relative w-fit text-[#846458] hover:text-[#6B0F0F]
                                        after:absolute after:left-0 after:-bottom-1
                                        after:h-[3px] after:w-0 after:bg-[#6B0F0F]
                                        after:transition-all after:duration-300
                hover:after:w-full transition-all duration-300"
                                    >
                                        {link.title}
                                    </Link>
                                </motion.div>
                            ))}

                        </div>
                        {/* Subscribe */}
                        <div className="flex flex-col gap-3 w-full sm:w-[45%] lg:w-[25%]">

                            <h1 className="text-xl font-bold text-[#6B0F0F] underline">
                                Subscribe
                            </h1>

                            <p className="text-[#846458] leading-relaxed text-sm">
                                Join our community to receive the latest updates.
                            </p>

                            <form className="flex flex-col gap-3">

                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="outline-none px-4 py-2.5 border border-[#D6C2B5] rounded-lg bg-white text-sm"
                                />

                                <button className="bg-[#6B0F0F] hover:bg-[#541010] transition-all duration-300 px-4 py-3 rounded-lg text-white font-medium">
                                    Subscribe Now
                                </button>

                            </form>

                            <p className="text-sm text-[#846458] leading-relaxed">
                                By subscribing, you agree to our Privacy Policy
                                and consent to receive updates from Hriday IAS.
                            </p>

                        </div>
                    </div>

                </div>
                <div className="w-[96%] h-[1px] bg-[#e3d7c5] mx-auto"></div>
                <div className="flex items-center justify-center text-center mt-2 mb-4">
                    <h1 className="text-[#6B0F0F] text-sm font-semibold">© 2025 Hriday IAS. All rights reserved.</h1>
                </div>
            </div>


        </>
    )
}

export default Footer