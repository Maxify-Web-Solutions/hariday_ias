import React, { useState, useEffect } from 'react'
import logo from '../assets/Images/logoIas.png'
import Sidebar from './Sidebar'
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Courses", path: "/courses" },
        { name: "From Director", path: "/about" },
        { name: "faculty", path: "/mentor" },
        { name: "UPSC Roadmap", path: "/upsc-roadmap" },
        { name: "Blog", path: "/blog" },
        { name: "About Us", path: "/about_page" },
        { name: "Contact", path: "/contact" },
        { name: "Career", path: "career" },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                ? 'bg-[#FDF6EC]/90 backdrop-blur-xl shadow-md py-2'
                : 'bg-[#FDF6EC] shadow-md py-3'
                }`}>
                <div className="px-3 mx-auto md:px-6 lg:px-10">
                    <div className="flex justify-between items-center">

                        {/* Logo + Heading - Left Side */}
                        <Link to="/" className="group relative">
                            <div className="flex items-center gap-3">
                                {/* Premium Logo Container */}
                                <div className="relative">
                                    <div className="absolute rounded-full transition-opacity duration-500"></div>
                                    <img
                                        src={logo}
                                        alt="Hriday IAS Logo"
                                        className="w-14 h-14 object-contain transition-all duration-500"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-2xl font-bold bg-gradient-to-b from-[#590711] via-[#8B2C2C] to-[#bd5c6b] bg-clip-text text-transparent font-serif tracking-tight">
                                            HRIDAY IAS
                                        </h3>
                                    </div>
                                    <div className="relative">
                                        <h6 className='text-[10px] text-[#203259] tracking-wider text-center font-medium uppercase'>
                                            KARMA BEATS THE DESTINY
                                        </h6>
                                        <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#6B0F0F] to-transparent group-hover:w-full transition-all duration-500"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Navigation Links - Right Side */}
                        <div className="hidden lg:flex items-center gap-2">
                            <ul className="flex items-center gap-1">
                                {navLinks.map((link) => {
                                    const isActive = location.pathname === link.path;
                                    return (
                                        <li key={link.path} className="relative group/link">
                                            <Link
                                                to={link.path}
                                                className={`relative px-4 py-2 rounded-xl text-base font-semibold tracking-wide transition-all duration-300
                                                    ${isActive
                                                        ? 'text-[#6B0F0F] bg-gradient-to-r from-[#F5E6D3] to-[#F5E6D3]/80 shadow-md'
                                                        : 'text-[#6B0F0F]/70 hover:text-[#6B0F0F] hover:bg-[#F5E6D3]/40'
                                                    }
                                                `}
                                            >
                                                <span className="relative z-10">{link.name}</span>
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="activeNav"
                                                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#F5E6D3] to-[#F5E6D3]/80 -z-0"
                                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                    />
                                                )}
                                            </Link>

                                            {/* Premium Hover Underline Effect */}
                                            {!isActive && (
                                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#6B0F0F]/0 via-[#6B0F0F] to-[#6B0F0F]/0 group-hover/link:w-full transition-all duration-500 rounded-full"></span>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* Premium Divider */}
                            <div className="h-8 w-px bg-gradient-to-b from-transparent via-[#EAD7C8] to-transparent mx-2"></div>
                        </div>

                        {/* Mobile Menu Button - Sidebar Trigger */}
                        <div className="lg:hidden">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Spacer */}
            <div className="h-[59px] md:h-[59px]"></div>
        </>
    )
}

export default Navbar;