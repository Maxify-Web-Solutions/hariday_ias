import React from 'react'
import { FaUsers } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { GiOnTarget } from "react-icons/gi";



const data = [
    {
        id: 1,
        icon: <FaUsers />,
        title: "Expert Faculty",
        description: "Learn from experienced mentors who have successfully guided numerous students to their goals."
    },
    {
        id: 2,
        icon: <FaBook />,
        title: "Comprehensive Study Material",
        description: "Access to well-structured and up-to-date study materials designed by subject matter experts."
    },
    {
        id: 3,
        icon: <GiOnTarget />,
        title: "Personalized Attention",
        description: "Receive individualized support and guidance tailored to your learning style and pace."
    },
    {
        id: 4,
        icon: <FaTrophy />,
        title: "Proven Track Record",
        description: "Join a community of successful candidates who have achieved their dreams with our guidance."
    },
    {
        id: 5,
        icon: <FaComment />,
        title: "Interactive Learning Environment",
        description: "Engage in interactive sessions, doubt clearing, and peer discussions to enhance your understanding."
    },
    {
        id: 6,
        icon: <FaChartBar />,
        title: "Result-Driven Preparation Strategy",
        description: "Our structured approach combines smart study plans, regular assessments, and expert mentorship."
    }
];

const WhyUs = () => {
    return (
        <>
            <div>
                <h1 className='w-full text-center font-bold py-4 text-black text-[20px] md:text-[36px] px-8'>
                    Why Choose <span className='text-[#6B0F0F]'>Hriday IAS</span>  for Your career guidance?
                </h1>
                <p className='text-[#6B0F0F] text-center text-base px-5 md:px-10 lg:px-16 -mt-4'>
                    Discover the reasons why thousands of students trust Hriday IAS for their UPSC preparation.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-10 lg:px-16 py-10'>
                    {data.map((item) => (
                        <div key={item.id} className='rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] bg-[#FFFAF3]  shadow-sm hover:shadow-md 
                        hover:shadow-[#6B0F0F]/20'>
                            <div className='text-4xl text-[#6B0F0F] mb-4'>
                                {item.icon}
                            </div>
                            <h2 className='text-xl font-semibold mb-4 text-[#6B0F0F]'>{item.title}</h2>
                            <p className='text-[#7C5A4F]'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WhyUs