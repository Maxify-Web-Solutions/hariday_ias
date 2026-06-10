import React from 'react'
import logo from '../assets/Images/logoIas.png'
import Sidebar from './Sidebar'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    return (
        <div className='bg-[#FDF6EC] px-8 fixed top-0 left-0 w-full  z-50 shadow-sm'>
            <div className="flex justify-between items-center py-2">
                {/* Logo + Heading */}
                <Link to="/">
                    <div className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="Logo1"
                            className="w-14 h-14 object-contain"
                        />
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-bold bg-gradient-to-b from-[#590711] to-[#bd5c6b] bg-clip-text text-transparent font-serif">
                                HRIDAY IAS
                            </h3>
                            <h6 className='text-[10px] text-[#7C5A4F] tracking-wide text-center -mt-1 pe-0.5'>KARMA BEATS THE DESTINY</h6>
                        </div>
                    </div>
                </Link>
                {/* Navbar */}
                <Sidebar />
                <div className="hidden md:block">
                    <ul className="flex items-center lg:gap-3 md:gap-0.5 text-base">
                        <Link
                            to="/courses"
                            className={`px-3 py-1 rounded transition-all duration-300

                                 ${location.pathname === "/courses"
                                    ? "bg-[#F5E6D3] text-[#6B0F0F] hover:text-[#711716]"
                                    : "text-[#6B0F0F] hover:bg-[#F5E6D3]"
                                }
                               `}
                        >
                            Courses
                        </Link>

                        <Link
                            to="/blog"
                            className={`px-3 py-1 rounded-md transition-all duration-300

            ${location.pathname === "/blog"
                                    ? "bg-[#F5E6D3] text-[#8E443F] hover:text-[#711716]"
                                    : "text-[#6B0F0F] hover:bg-[#F5E6D3]"
                                }
            `}
                        >
                            Blog
                        </Link>

                        <Link
                            to="/about"
                            className={`px-3 py-1 rounded-md transition-all duration-300

            ${location.pathname === "/about"
                                    ? "bg-[#F5E6D3] text-[#8E443F] hover:text-[#711716]"
                                    : "text-[#6B0F0F] hover:bg-[#F5E6D3]"
                                }
            `}
                        >
                            Director
                        </Link>

                         <Link
                            to="/mentor"
                            className={`px-3 py-1 rounded-md transition-all duration-300
    ${location.pathname === "/mentor"
                                    ? "bg-[#F5E6D3] text-[#8E443F] hover:text-[#711716]"
                                    : "text-[#6B0F0F] hover:bg-[#F5E6D3]"
                                }`}
                        >
                            Mentors
                        </Link>

                        <Link
                            to="/about_page"
                            className={`px-3 py-1 rounded-md transition-all duration-300
    ${location.pathname === "/about_page"
                                    ? "bg-[#F5E6D3] text-[#8E443F] hover:text-[#711716]"
                                    : "text-[#6B0F0F] hover:bg-[#F5E6D3]"
                                }`}
                        >
                            About Us
                        </Link>

                        <Link
                            to="/contact"
                            className={`px-3 py-1 rounded-md transition-all duration-300

            ${location.pathname === "/contact"
                                    ? "bg-[#F5E6D3] text-[#8E443F] hover:text-[#711716]"
                                    : "text-[#6B0F0F] hover:bg-[#F5E6D3]"
                                }
            `}
                        >
                            Contact
                        </Link>
                    </ul>
                </div>

            </div>
            <hr />
        </div>
    )
}

export default Navbar

