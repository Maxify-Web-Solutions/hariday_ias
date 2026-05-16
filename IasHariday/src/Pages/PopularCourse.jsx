import React from 'react'
import { motion } from "framer-motion";
import foundation from '../assets/Images/foundation.png'
import Advanced from '../assets/Images/Advanced.png'
import CGL from '../assets/Images/CGL.png'
import UPPCS from '../assets/Images/UPPCS.png'
import { Link } from 'react-router-dom';


const courses = [
    {
        id: 1,
        image: foundation,
        title: "UPSC Civil Services Foundation course",
        description:
            "Comprehensive preparation for UPSC Prelims & Mains with expert",
    },
    {
        id: 2,
        image: Advanced,
        title: "UPSC Civil Services Advanced course",
        description:
            "Advanced strategy-based preparation for serious UPSC aspirants.",
    },
    {
        id: 3,
        image: CGL,
        title: "SSC CGL Foundation Course and Test Series",
        description:
            "Complete preparation course for SSC CGL with practice and mock tests.",
    },
    {
        id: 4,
        image: foundation,
        title: "UPPCS Foundation Course and Test Series",
        description:
            "Focused preparation program for UPPCS Prelims and Mains examination.",
    }
]

const PopularCourse = () => {
    return (
        <section className='w-full py-7 md:py-10 px-5 md:px-10 lg:px-16'>

            {/* Heading */}
            <div className='text-center max-w-3xl mx-auto'>

                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                    We Provide Career-Oriented Courses
                </h1>

                <p className='text-[#6B0F0F] mt-3 text-sm sm:text-base'>
                    Prepare for India’s top competitive examinations with
                    expert guidance, structured learning, and quality study material.
                </p>
            </div>

            {/* Courses Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-10'>

                {courses.map((course, index) => (

                    <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.15,
                            ease: "easeInOut"
                        }}
                        viewport={{ once: true }}
                        className='h-[500px] bg-[#FFFAF3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 group hover:shadow-[#6B0F0F]'
                    >

                        {/* Image */}
                        <div className='w-full h-[250px] overflow-hidden'>
                            <img
                                src={course.image}
                                alt={course.title}
                                className='w-full h-full object-cover group-hover:scale-105 transition duration-500'
                            />
                        </div>
                        <div className='p-6 flex flex-col justify-between h-[250px]'>
                            <div>
                                <h2 className='text-xl font-bold text-[#6B0F0F] leading-snug'>
                                    {course.title}
                                </h2>
                                <p className='text-[#7C5A4F] mt-4 leading-relaxed line-clamp-4'>
                                    {course.description}
                                </p>
                            </div>
                            <Link to="/courses">
                                <button className='bg-[#6B0F0F] text-white px-9 py-2 rounded-full hover:bg-[#571010] transition w-full'>
                                    Explore
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    )
}

export default PopularCourse