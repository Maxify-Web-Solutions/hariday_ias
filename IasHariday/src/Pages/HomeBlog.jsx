import React from 'react'
import Answer from '../assets/Images/Answer.png'
import currentAffair from '../assets/Images/CurrentAffairs.png'
import notification from '../assets/Images/Notification.png'
import planning from '../assets/Images/Planning.png'
import Rank from '../assets/Images/Rank.png'
import imp from '../assets/Images/TopicImp.png'
import { MdOutlineDateRange } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom'
import { CgChevronDoubleRight } from "react-icons/cg";




const blogData = [
    {
        id: 1,
        image: currentAffair,
        highlight: "Current Affairs",
        title: "Top Current Affairs for UPSC 2024",
        date: "12 May 2026",
        description:
            "Stay updated with the most important national and international current affairs for UPSC and State PCS preparation.",
    },

    {
        id: 2,
        image: planning,
        highlight: "Preparation Strategy",
        title: "Ultimate Strategy to Crack UPSC in 1 Year",
        date: "15 May 2026",
        description:
            "Learn a complete one-year preparation roadmap with smart study planning, revision techniques, and time management.",
    },


];
const HomeBlog = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className=' y-7 md:py-5 px-5 md:px-10 lg:px-16'>
                <div className='text-center font-bold text-xl md:text-3xl mt-5'>
                    Latest Insights and <span className='text-[#6B0F0F] underline'>Articles</span>

                </div>
                <div className="grid lg:grid-cols-2 gap-8 mt-10">

                    {blogData.map((item, index) => (

                        <div
                            key={index}
                            onClick={() => navigate(`/blog/${item.id}`)}
                            className="flex flex-col sm:flex-row gap-4 bg-[#FFFAF3] p-3 rounded-lg transition-all duration-300 cursor-pointer mb-2 shadow-sm  hover:shadow-md 
                        hover:shadow-[#6B0F0F]/20">

                            {/* Left Side Image */}
                            <div className="w-full sm:w-52 h-52 flex-shrink-0 overflow-hidden rounded-md">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Right Side Content */}
                            <div className="flex flex-col justify-between">
                                {/* Highlight Button */}
                                <button className="w-fit bg-[#F5E6D3] text-[#6B0F0F] px-4 rounded py-2 text-sm font-medium mt-2">
                                    {item.highlight}
                                </button>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-[#6B0F0F] mt-2">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#7C5A4F] text-base mt-1">
                                    {item.description}
                                </p>

                                {/* Date */}
                                <div className="flex items-center gap-1 text-sm b mt-1">
                                    <MdOutlineDateRange className='text-xl font-bold' />
                                    <p>{item.date}</p>
                                </div>
                            </div>

                        </div>

                    ))}

                </div>
                <Link to="/blog">
                    <div className='flex items-center justify-center mt-5 '>
                        <button className='flex items-center gap-2 px-10 py-3 rounded-3xl bg-[#6B0F0F] text-white font-semibold group'>
                            View More
                            <CgChevronDoubleRight className='text-2xl transition-all duration-300 group-hover:translate-x-2' />
                        </button>

                    </div>
                </Link>
            </div>
        </>
    )
}

export default HomeBlog