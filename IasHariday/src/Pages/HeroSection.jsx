import React from 'react'
import Hero from '../assets/Images/HeroImage.jpg'
import { motion } from "framer-motion";
import { HiArrowRightCircle } from "react-icons/hi2";
import { Link } from 'react-router-dom';


const HeroSection = () => {
    return (
        <>
            <div className='mt-[70px]'>

                <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-8 md:py-10 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex flex-col justify-center mt-3 md:mt-10"
                    >
                        <p className="text-[#6B0F0F] font-semibold text-xl">
                            India’s Trusted Platform For Government Exam Preparation
                        </p>

                        <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-6xl font-bold text-black max-w-xl mt-3 leading-relaxed">
                            Every Great Officer Once Started As An Aspirant
                        </h1>

                        <p className="text-[#7C5A4F] text-lg sm:text-xl mt-6 max-w-xl leading-relaxed">
                            Take the first step toward your civil services dream with expert guidance,
                            disciplined preparation, and the right learning environment.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-5 mt-8 md:mt-14 md:w-full">
                            <Link to="/courses">
                                <button className="bg-[#6B0F0F] text-white px-6 py-3 rounded-full font-medium text-lg transition-all duration-300 hover:bg-[#571010] hover:scale-105 flex items-center gap-2">
                                    More Details
                                    <HiArrowRightCircle size={28} className='ml-4 font-bold' />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                        }}
                        className="w-full lg:w-1/2 flex justify-center overflow-hidden rounded-2xl"
                    >
                        <motion.img
                            src={Hero}
                            alt="Hero"
                            className="w-full max-w-2xl object-contain mt-5 "
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1.1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default HeroSection