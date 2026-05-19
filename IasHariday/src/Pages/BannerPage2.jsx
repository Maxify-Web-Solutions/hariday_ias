import React from 'react'
import banner from '../assets/Images/Banner2Ias.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';


const BannerPage2 = () => {
    return (
        <>
            <div className='mt-10'>
                <div className="w-full relative h-[350px] md:h-[450px] bg-[#f5f5f5] flex items-center justify-center overflow-hidden">
                    <img
                        src={banner}
                        alt="Banner"
                        className="w-full h-full object-fill"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4 -mt-10">
                        <h1 className="text-5xl font-bold text-[#FDF6EC]">Welcome to Our Platform</h1>
                        <p className="text-lg text-gray-200 mt-4 max-w-2xl">
                            Discover a world of knowledge and opportunities with us. Join our community of learners and start your journey towards success today!
                        </p>
                        <Link to="/courses">
                            <button className="mt-6 bg-[#6B0F0F] text-white px-6 py-3 rounded-full hover:bg-[#571010] transition-all duration-300 flex items-center font-semibold group">
                                Start Learing Today <IoIosArrowRoundForward className="ml-2 text-2xl font-bold transition-all duration-300 group-hover:translate-x-1.5" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerPage2