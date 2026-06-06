import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import logo from '../assets/Images/logoIas.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { clearSubscriberState, subscriberUser } from "../Redux/Slicer/subscribeSlice";
import { toast } from "react-toastify";

const quickLinks = [
    { id: 1, title: "Mentors", path: "/mentor" },
    { id: 1, title: "About Us", path: "/about_page" },
    { id: 2, title: "Our Blogs", path: "/blog" },
    { id: 3, title: "Contact Us", path: "/contact" },
];

const policyLinks = [
    { id: 1, title: "Privacy Policy", path: "/privacy" },
    { id: 2, title: "Refund Policy", path: "/refund" },
    { id: 3, title: "Terms & Conditions", path: "/terms" },
    { id: 4, title: "FAQ", path: "/faq" },
];

const courseLinks = [
    { id: 1, title: "UPSC Preparation", path: "/courses" },
    { id: 2, title: "Director", path: "/about" },
    { id: 3, title: "Courses", path: "/courses" },
];

const Footer = () => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const { loading, success, message, error } = useSelector(
        (state) => state.subscribe
    );

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log(email);
        dispatch(
            subscriberUser({
                email,
            })
        );
    };

    useEffect(() => {
        if (success) {
            toast.success(message);
            setEmail("");
            dispatch(clearSubscriberState());
        }
        if (error) {
            toast.error(error);
            dispatch(clearSubscriberState());
        }
    }, [success, error, message, dispatch]);

    return (
        <footer className="w-full bg-[#FCFBF9] border-t border-[#EAD7C8]/60 antialiased">
            {/* Top Container */}
            <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 py-12">

                {/* Newsletter & Social Links Section */}
                <div className="bg-white rounded-2xl border border-[#F1E4D8]/70 p-6 md:p-8 lg:p-10 shadow-xs ">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Left Side: Text and Input */}
                        <div className="lg:col-span-8 flex flex-col gap-4">
                            <div>
                                <h2 className="text-lg md:text-xl font-bold text-[#6B0F0F] tracking-tight uppercase">
                                    Join Our Newsletter
                                </h2>
                                <p className="text-sm text-[#846458] mt-1">
                                    Stay updated with the latest exam notifications, preparation strategies, and study materials.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubscribe}
                                className="flex flex-col sm:flex-row items-stretch gap-2.5 max-w-xl w-full"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter Your Email Address"
                                    required
                                    className="flex-1 outline-none px-4 py-3 border border-[#D6C2B5] rounded-xl bg-white text-sm focus:border-[#6B0F0F] focus:ring-1 focus:ring-[#6B0F0F] transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-[#6B0F0F] hover:bg-[#541010] active:scale-[0.98] transition-all duration-200 px-6 py-3 rounded-xl text-white font-medium text-sm whitespace-nowrap disabled:opacity-50 shadow-sm"
                                >
                                    {loading ? "Subscribing..." : "Subscribe Now"}
                                </button>
                            </form>
                        </div>

                        {/* Right Side: Social Media Branding */}
                        <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-3 lg:border-l lg:border-[#F1E4D8] lg:pl-8">
                            <h3 className="text-sm font-semibold text-[#6B0F0F] uppercase tracking-wider">
                                Follow Our Journey
                            </h3>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#846458] hover:text-[#6B0F0F] hover:scale-110 transition-all duration-200"
                                >
                                    <AiFillTwitterCircle size={26} />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#846458] hover:text-[#6B0F0F] hover:scale-110 transition-all duration-200"
                                >
                                    <FaFacebook size={23} />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#846458] hover:text-[#6B0F0F] hover:scale-110 transition-all duration-200"
                                >
                                    <FaInstagram size={23} />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#846458] hover:text-[#6B0F0F] hover:scale-110 transition-all duration-200"
                                >
                                    <CiLinkedin size={25} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Directories Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-6 lg:gap-12 pt-4">

                    {/* Brand / Logo Info Column */}
                    <div className="flex flex-col gap-3 md:col-span-5 lg:col-span-4">
                        <Link to="/" className="w-fit group">
                            <div className="flex gap-3 items-center">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-200"
                                />
                                <h2 className="text-2xl font-bold tracking-tight text-[#6B0F0F]">
                                    Hriday IAS
                                </h2>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-[#846458] max-w-sm">
                            Turning Aspirations Into Achievements With Expert Guidance & Smart Preparation.
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div className="flex flex-col gap-3.5 md:col-span-2 lg:col-span-2 md:pl-4">
                        <h4 className="text-sm font-bold text-[#6B0F0F] uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <div className="flex flex-col gap-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.path}
                                    className="relative w-fit text-sm text-[#846458] hover:text-[#6B0F0F]
                       after:absolute after:left-0 after:-bottom-1
                       after:h-[2px] after:w-0 after:bg-[#6B0F0F]
                       after:transition-all after:duration-500
                       hover:after:w-full transition-all duration-500"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Policy Column */}
                    <div className="flex flex-col gap-3.5 md:col-span-3 lg:col-span-3">
                        <h4 className="text-sm font-bold text-[#6B0F0F] uppercase tracking-wider">
                            Policy
                        </h4>
                        <div className="flex flex-col gap-3">
                            {policyLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.path}
                                    className="relative w-fit text-sm text-[#846458] hover:text-[#6B0F0F]
                       after:absolute after:left-0 after:-bottom-1
                       after:h-[2px] after:w-0 after:bg-[#6B0F0F]
                       after:transition-all after:duration-500
                       hover:after:w-full transition-all duration-500"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Courses Column */}
                    <div className="flex flex-col gap-3.5 md:col-span-2 lg:col-span-3">
                        <h4 className="text-sm font-bold text-[#6B0F0F] uppercase tracking-wider">
                            Courses
                        </h4>
                        <div className="flex flex-col gap-3">
                            {courseLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.path}
                                    className="relative w-fit text-sm text-[#846458] hover:text-[#6B0F0F]
                       after:absolute after:left-0 after:-bottom-1
                       after:h-[2px] after:w-0 after:bg-[#6B0F0F]
                       after:transition-all after:duration-500
                       hover:after:w-full transition-all duration-500"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Border Isolation */}
                <div className="w-full h-[1px] bg-[#EAD7C8]/40 mt-12 mb-6"></div>

                {/* Copyright Segment */}
                <div className="flex flex-col sm:flex-row items-center justify-center text-center">
                    <p className="text-[#846458]/80 text-xs font-medium tracking-wide">
                        &copy; 2025 Hriday IAS. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer;