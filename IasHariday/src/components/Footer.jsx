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
import { FaTelegramPlane } from "react-icons/fa";

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
            {/* Top Container - Changed to 7xl max width */}
            <div className="max-w-[110rem] mx-auto px-8  py-12 md:py-6 lg:py-8">

                {/* Newsletter & Social Links Section - Enhanced spacing for 7xl */}
                <div className="bg-white rounded-2xl border border-[#F1E4D8]/70 p-8 md:p-10 lg:p-12 xl:p-14 shadow-xs">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 items-center">

                        {/* Left Side: Text and Input */}
                        <div className="lg:col-span-8 flex flex-col gap-5 xl:gap-6">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-[#6B0F0F] tracking-tight uppercase">
                                    Join Our Newsletter
                                </h2>
                                <p className="text-base text-[#846458] mt-2">
                                    Stay updated with the latest exam notifications, preparation strategies, and study materials.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubscribe}
                                className="flex flex-col sm:flex-row items-stretch gap-3 max-w-2xl w-full"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter Your Email Address"
                                    required
                                    className="flex-1 outline-none px-5 py-3.5 border border-[#D6C2B5] rounded-xl bg-white text-base focus:border-[#6B0F0F] focus:ring-2 focus:ring-[#6B0F0F]/20 transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-[#6B0F0F] hover:bg-[#541010] active:scale-[0.98] transition-all duration-200 px-8 py-3.5 rounded-xl text-white font-semibold text-base whitespace-nowrap disabled:opacity-50 shadow-md hover:shadow-lg"
                                >
                                    {loading ? "Subscribing..." : "Subscribe Now"}
                                </button>
                            </form>
                        </div>

                        {/* Right Side: Social Media Branding */}
                        <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4 lg:border-l lg:border-[#F1E4D8] lg:pl-10">
                            <h3 className="text-base font-semibold text-[#6B0F0F] uppercase tracking-wider">
                                Follow Our Journey
                            </h3>
                            <div className="flex items-center gap-4">
                                <a
                                    href="t.me/HridayIAS"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#846458] hover:text-[#6B0F0F] hover:scale-110 transition-all duration-200"
                                >
                                    <FaTelegramPlane size={28} />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61587483425025"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#846458] hover:text-[#6B0F0F] hover:scale-110 transition-all duration-200"
                                >
                                    <FaFacebook size={28} />
                                </a>
                                <a
                                    href="https://www.instagram.com/hriday_ias/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#846458] hover:text-[#6B0F0F] hover:scale-110 transition-all duration-200"
                                >
                                    <FaInstagram size={28} />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Directories Section - Enhanced grid for 7xl */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 pt-8 lg:pt-10">

                    {/* Brand / Logo Info Column */}
                    <div className="flex flex-col gap-4 lg:col-span-4 xl:col-span-4">
                        <Link to="/" className="w-fit group">
                            <div className="flex gap-4 items-center">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-16 h-16 object-contain group-hover:scale-105 transition-transform duration-200"
                                />
                                <h2 className="text-3xl font-bold tracking-tight text-[#6B0F0F]">
                                    Hriday IAS
                                </h2>
                            </div>
                        </Link>
                        <p className="text-base leading-relaxed text-[#846458] max-w-md">
                            Turning Aspirations Into Achievements With Expert Guidance & Smart Preparation.
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div className="flex flex-col gap-4 lg:col-span-2 xl:col-span-2">
                        <h4 className="text-base font-bold text-[#6B0F0F] uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <div className="flex flex-col gap-3.5">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.path}
                                    className="relative w-fit text-base text-[#846458] hover:text-[#6B0F0F]
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
                    <div className="flex flex-col gap-4 lg:col-span-3 xl:col-span-3">
                        <h4 className="text-base font-bold text-[#6B0F0F] uppercase tracking-wider">
                            Policy
                        </h4>
                        <div className="flex flex-col gap-3.5">
                            {policyLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.path}
                                    className="relative w-fit text-base text-[#846458] hover:text-[#6B0F0F]
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
                    <div className="flex flex-col gap-4 lg:col-span-3 xl:col-span-3">
                        <h4 className="text-base font-bold text-[#6B0F0F] uppercase tracking-wider">
                            Courses
                        </h4>
                        <div className="flex flex-col gap-3.5">
                            {courseLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.path}
                                    className="relative w-fit text-base text-[#846458] hover:text-[#6B0F0F]
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
                <div className="w-full h-[1px] bg-[#EAD7C8]/40 mt-12 mb-8"></div>

                {/* Copyright Segment */}
                <div className="flex flex-col sm:flex-row items-center justify-center text-center">
                    <p className="text-[#846458]/80 text-sm font-medium tracking-wide">
                        &copy; 2025 Hriday IAS. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer;