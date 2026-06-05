import React from 'react'
import Hero from '../assets/Images/HeroImage.jpg'
import { motion } from "framer-motion";
import { HiArrowRightCircle } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="w-full bg-[#FCFBF9] overflow-hidden mt-[40px]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 py-16 md:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 relative">
                
                {/* Subtle Ambient Background Glows */}
                <div className="absolute w-72 h-72 bg-[#6B0F0F]/5 rounded-full blur-3xl -top-10 -left-10 pointer-events-none" />
                
                {/* Left Content Column */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 relative z-10"
                >
                    {/* Modern Top Tagline Kicker */}
                    <div className="inline-flex items-center space-x-3">
                        <span className="h-px w-8 bg-[#6B0F0F]/40 hidden sm:inline-block"></span>
                        <p className="text-[#6B0F0F] font-semibold text-xs sm:text-sm tracking-widest uppercase">
                            India's Trusted Platform For <span className="font-extrabold text-[#2D1A11]">UPSC</span> Preparation
                        </p>
                    </div>

                    {/* Editorial Main Heading */}
                    <h1 className="text-3xl sm:text-3xl xl:text-4xl font-extrabold text-[#2D1A11] tracking-tight leading-[1.15]">
                        Welcome to{" "}
                        <span className="relative inline-block text-[#6B0F0F] z-10 px-2 mt-1 sm:mt-0">
                            Hriday IAS
                            <span className="absolute inset-0 bg-[#6B0F0F]/5 -rotate-1 rounded-lg -z-10 transform scale-105"></span>
                        </span>
                    </h1>

                    {/* Restructured Philosophy & Quote Space */}
                    <div className="space-y-5">
                        {/* Quote Highlight */}
                        <div className="border-l-2 border-[#6B0F0F] pl-4 sm:pl-5 my-2">
                            <p className="text-[#7C5A4F] text-base md:text-lg leading-relaxed italic font-medium">
                                "In the garden of life, one flower blooms above all others - the flower of awareness."
                            </p>
                        </div>
                        
                        {/* Core Message */}
                        <p className="text-[#7C5A4F]/90 text-sm md:text-base leading-relaxed max-w-2xl">
                            At Hriday IAS, we nurture this flower, cultivating awareness, intelligence and compassion in every aspirant. Inspired by the wisdom of <span className='font-semibold text-[#6B0F0F]'>Osho and Buddha</span>, we recognize that <span className="italic">'the ultimate source of all anxiety is the fear of the unknown.'</span> Our approach to UPSC preparation is not just about acquiring knowledge but about transforming ourselves, embracing the unknown and discovering our true potential.
                        </p>
                    </div>

                    {/* Bottom Row: Separated Founder Signature and Premium CTA Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 mt-2 border-t border-[#2D1A11]/10">
                        {/* Founder Block */}
                        <div className="space-y-0.5">
                            <p className="text-[11px] uppercase tracking-wider text-[#7C5A4F] font-semibold opacity-70">Warm Regards,</p>
                            <h4 className="font-bold text-[#2D1A11] text-base sm:text-lg">Miss Ruksana Khatak</h4>
                            <p className="text-[#6B0F0F] text-xs sm:text-sm font-medium">Founder & Director, Hriday IAS</p>
                        </div>

                        {/* CTA Button Wrapper */}
                        <div className="flex items-center">
                            <Link to="/courses" className='group w-full sm:w-auto'>
                                <button className="w-full sm:w-auto bg-[#6B0F0F] text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 transform group-hover:-translate-y-0.5 hover:bg-[#571010] hover:shadow-xl hover:shadow-[#6B0F0F]/20 flex items-center justify-center gap-3">
                                    More Details
                                    <HiArrowRightCircle size={22} className='transition-transform duration-300 group-hover:translate-x-1 text-white/90' />
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
                
                {/* Right Image Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="w-full lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0"
                >
                    {/* Deep shadow background glow behind the image frame */}
                    <div className="absolute w-72 h-72 bg-[#6B0F0F]/5 rounded-full blur-3xl -bottom-10 -right-10 pointer-events-none" />
                    
                    {/* Framed Image container */}
                    <div className="relative w-full max-w-md lg:max-w-full p-2">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#6B0F0F]/10 to-transparent rounded-3xl blur-2xl opacity-60"></div>
                        
                        {/* Floating Motion Graphics Image */}
                        <motion.img
                            src={Hero}
                            alt="Hriday IAS UPSC Preparation Hero Illustration"
                            className="w-full h-auto max-h-[500px] lg:max-h-[600px] object-contain relative z-10 drop-shadow-[0_20px_35px_rgba(45,26,17,0.12)]"
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 5,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default HeroSection