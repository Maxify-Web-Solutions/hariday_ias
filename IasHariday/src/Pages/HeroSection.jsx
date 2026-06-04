import React from 'react'
import Hero from '../assets/Images/HeroImage.jpg'
import { motion } from "framer-motion";
import { HiArrowRightCircle } from "react-icons/hi2";
import { Link } from 'react-router-dom';


const HeroSection = () => {
    return (
        <>
            <div className='mt-[40px]'>

                <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-2 md:py-5 px-5 md:px-10 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "ease-in-Out" }}
                        className="w-full lg:w-1/2 flex flex-col justify-center mt-2 md:mt-10"
                    >
                        <p className="text-[#6B0F0F] font-semibold text-xl -mt-4 md:mt-0 ">
                            India’s Trusted Platform For Government Exam Preparation
                        </p>

                        <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-6xl font-bold text-black max-w-xl mt-3 leading-normal md:leading-relaxed">
                            Every Great <span className='text-[#6B0F0F]'>Officer</span> Once Started As An Aspirant
                        </h1>

                        <p className="text-[#7C5A4F] text-lg sm:text-xl mt-6 max-w-xl leading-relaxed">
                            Take the first step toward your civil services dream with expert guidance,
                            disciplined preparation, and the right learning environment.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-5 mt-6 md:mt-12 md:w-full">
                            <Link to="/courses" className='group'>
                                <button className="bg-[#6B0F0F] text-white px-6 py-3 rounded-full font-medium text-lg transition-all duration-300 hover:bg-[#571010] hover:scale-105 flex items-center gap-2">
                                    More Details
                                    <HiArrowRightCircle size={28} className='ml-4 font-bold text-2xl transition-all duration-300 group-hover:translate-x-2' />
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
                            ease: "easeout",
                        }}
                        className="w-full lg:w-1/2 flex justify-center overflow-hidden rounded-xl"
                    >
                        <motion.img
                            src={Hero}
                            alt="Hero"
                            className="w-full max-w-3xl object-contain mt-12"
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