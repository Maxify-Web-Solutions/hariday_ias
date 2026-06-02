import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { store } from '../Redux/Store';
import { getAllCourses } from '../Redux/Slicer/courseSlice';
import { CgChevronDoubleRight } from "react-icons/cg";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ArrowRight } from "lucide-react";



const PopularCourse = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { courses, singleCourses, loading, error } = useSelector(
        (state) => state.course
    )

    useEffect(() => {
        dispatch(getAllCourses());
    }, [dispatch]);

    return (
        <section className='w-full py-2 md:py-5 px-5 md:px-10 lg:px-16'>

            {/* Heading */}
            <div className='text-center max-w-3xl mx-auto'>

                <h1 className='text-2xl sm:text-[30px] md:text-[34px] font-bold'>
                    We Provide Career-Oriented Courses
                </h1>

                <p className='text-[#6B0F0F] mt-3 text-[10px] sm:text-base'>
                    Prepare for India’s top competitive examinations with
                    expert guidance, structured learning, and quality study material.
                </p>
            </div>

            <div className="flex items-end justify-end mt-2">
                <Link
                    to="/courses"
                    className="relative w-fit text-[#846458] font-semibold hover:text-[#6B0F0F]
    after:absolute after:left-0 after:-bottom-1
    after:h-[3px] after:w-0 after:bg-[#6B0F0F]
    after:transition-all after:duration-300
    hover:after:w-full transition-all duration-300 flex items-center gap-1"
                >
                    View All
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Courses Grid */}
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-4 md:mt-8'>

                {courses.slice(0, 4).map((course, index) => (

                    <motion.div
                        key={course._id}
                        onClick={() => navigate(`/course/${course._id}`)}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.1,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        whileHover={{
                            y: -6,
                            transition: {
                                duration: 0.3,
                            },
                        }}
                        className="bg-[#FFFAF3] rounded-2xl overflow-hidden 
    shadow-sm hover:shadow-md 
    hover:shadow-[#6B0F0F]/20
    flex flex-col h-full cursor-pointer"
                    >

                        {/* IMAGE */}
                        <div className="w-full h-[180px] overflow-hidden flex-shrink-0">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className='flex items-center justify-between  border-[#E7D8CC] md:px-3 px-2 mt-2'>

                            {/* LEFT */}
                            <div className='flex items-center gap-1'>

                                {/* STARS */}
                                <div className='flex items-center'>
                                    {[1, 2, 3, 4, 5].map((star) => {
                                        const rating = Number(course.average_rating || 0);

                                        if (rating >= star) {
                                            return (
                                                <FaStar
                                                    key={star}
                                                    className='text-[#D4A017] text-sm'
                                                />
                                            );
                                        }

                                        if (rating >= star - 0.5) {
                                            return (
                                                <FaStarHalfAlt
                                                    key={star}
                                                    className='text-[#D4A017] text-sm'
                                                />
                                            );
                                        }

                                        return (
                                            <FaRegStar
                                                key={star}
                                                className='text-[#D9C7B8] text-sm'
                                            />
                                        );
                                    })}
                                </div>

                                {/* RATING */}
                                <span className='font-semibold text-[#6B0F0F] text-sm'>
                                    {Number(course.average_rating || 0).toFixed(1)}
                                </span>

                            </div>

                            {/* RIGHT - START DATE */}
                            <div className='bg-[#FFF4EA] border border-[#F1DED0] px-1.5 py-1 rounded-xl flex items-center gap-1 shadow-sm'>

                                <span className='text-xs font-medium uppercase tracking-wide text-[#B08968] block md:hidden'>
                                    Start :
                                </span>

                                <span className='text-xs font-bold text-[#6B0F0F]'>
                                    {new Date(course.batch_start).toLocaleDateString(
                                        "en-GB",
                                        {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        }
                                    )}
                                </span>

                            </div>

                        </div>
                        {/* CONTENT */}
                        <div className="p-4 flex flex-col flex-1 -mt-2">

                            {/* TITLE */}
                            <h2 className="text-lg font-bold text-[#6B0F0F] line-clamp-2 min-h-[56px]">
                                {course.title}
                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-[#7C5A4F] mt-1 text-sm leading-relaxed line-clamp-2 min-h-[20px]">
                                {course.description}
                            </p>

                            {/* PRICE */}
                            <div className="flex items-center gap-3 mt-2">
                                <span className="text-xl font-bold text-[#6B0F0F]">
                                    ₹{course.discount_price}
                                </span>

                                <span className="text-gray-500 line-through text-sm">
                                    ₹{course.price}
                                </span>
                            </div>

                            {/* BUTTON */}
                            <div className="mt-auto pt-3">
                                <Link to={`/course/${course._id}`}>
                                    <button className="bg-[#6B0F0F] text-white px-9 py-3 rounded-full hover:bg-[#571010] transition w-full">
                                        Explore
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    )
}

export default PopularCourse