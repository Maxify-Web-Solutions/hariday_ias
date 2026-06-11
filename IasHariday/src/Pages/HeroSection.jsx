import React from 'react'
import Hero from '../assets/Images/HeroImage.jpg'
import { motion } from "framer-motion";
import { HiArrowRightCircle } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    return (
        <>
            <div className="w-full py-2 md:py-10 px-5 md:px-10 lg:px-16">

                {/* MAIN SECTION */}
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-7">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[50%] flex flex-col justify-center"
                    >
                        {/* Top Label */}
                        <p className="text-base md:text-base font-medium uppercase tracking-wider text-[#6B0F0F]">
                            India's Trusted Platform for UPSC Preparation
                        </p>

                        {/* Main Heading */}
                        <h1 className="mt-3 text-4xl md:text-[54px] font-bold leading-[1.15] text-black">
                            Turn Your <span className='text-[#6B0F0F]'>UPSC Dream</span> Into
                            <br />
                             Reality with{" "}
                            <span className="">
                                Expert Guidance
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-4 text-[#7C604F] text-[18px] md:text-[22px] leading-relaxed max-w-3xl">
                            Learn from experienced mentors, follow a proven strategy, and build the consistency, confidence, and analytical skills needed to succeed in the Civil Services Examination and achieve your dream career in public service.
                        </p>

                        {/* CTA */}
                        <div className="mt-5">
                            <Link to="/courses">
                                <button className="flex items-center gap-2 bg-[#6B0F0F] text-white px-6 py-3 rounded-lg hover:bg-[#4e0b0b] transition-all duration-300 shadow-md">
                                    Explore Courses
                                    <ArrowRight size={18} />
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE IMAGE (FULL SIZE RESPECT) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[50%] flex justify-center items-center mt-1"
                    >
                        <motion.img
                            src={Hero}
                            alt="Hriday IAS Hero"
                            className="w-full h-auto object-contain rounded-2xl"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.div>

                </div>
            </div>
        </>
    )
}

export default HeroSection