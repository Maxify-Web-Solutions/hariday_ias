import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from '../Redux/Slicer/courseSlice';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const PopularCourse = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { courses } = useSelector((state) => state.course)

    useEffect(() => {
        dispatch(getAllCourses());
    }, [dispatch]);

    return (
        <section className='w-full py-2 md:py-2 px-5 md:px-10 lg:px-16 overflow-hidden relative'>
            {/* Heading */}
            <div className='text-center max-w-3xl mx-auto'>
                <h1 className='text-2xl sm:text-[30px] md:text-[36px] font-bold'>
                    Empowering Future <span className='text-[#6B0F0F]'> Civil Servants</span>
                </h1>
                <p className='text-[#6B0F0F] mt-2 text-[10px] sm:text-base'>
                    Expert guidance and quality resources to help you crack the UPSC examination.
                </p>
            </div>

            <div className="flex items-center justify-between mt-2">
                <div></div>
                <Link
                    to="/courses"
                    className="relative w-fit text-[#846458] font-semibold hover:text-[#6B0F0F]
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[3px] after:w-0 after:bg-[#6B0F0F]
                    after:transition-all after:duration-300
                    hover:after:w-full transition-all duration-300 flex items-center gap-1 group"
                >
                    View All
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Swiper Slider */}
            <div className="mt-2 md:mt-4 relative">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        480: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        1280: {
                            slidesPerView: 3.5,
                            spaceBetween: 30,
                        },
                        1536: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    loop={courses?.length >= 4}
                    className="popular-course-slider"
                >
                    {courses?.map((course, index) => (
                        <SwiperSlide key={course._id}>
                            <motion.div
                                onClick={() => navigate(`/course/${course._id}`)}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                whileHover={{
                                    y: -6,
                                    transition: { duration: 0.2 },
                                }}
                                className="bg-[#FFFAF3] rounded-3xl overflow-hidden 
                                shadow-sm hover:shadow-md hover:shadow-[#6B0F0F]/20
                                flex flex-col cursor-pointer h-full"
                            >
                                <div className="w-full h-[180px] overflow-hidden flex-shrink-0">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className='flex items-center justify-between border-[#E7D8CC] md:px-3 px-2 mt-2'>
                                    <div className='flex items-center gap-1'>
                                        <div className='flex items-center'>
                                            {[1, 2, 3, 4, 5].map((star) => {
                                                const rating = Number(course.average_rating || 0);
                                                if (rating >= star) return <FaStar key={star} className='text-[#D4A017] text-sm' />;
                                                if (rating >= star - 0.5) return <FaStarHalfAlt key={star} className='text-[#D4A017] text-sm' />;
                                                return <FaRegStar key={star} className='text-[#D9C7B8] text-sm' />;
                                            })}
                                        </div>
                                        <span className='font-semibold text-[#6B0F0F] text-sm'>
                                            {Number(course.average_rating || 0).toFixed(1)}
                                        </span>
                                    </div>
                                    <div className='bg-[#FFF4EA] border border-[#F1DED0] px-1.5 py-1 rounded-xl flex items-center gap-1 shadow-sm'>
                                        <span className='text-xs font-medium uppercase tracking-wide text-[#B08968] block md:hidden'>Start :</span>
                                        <span className='text-xs font-bold text-[#6B0F0F]'>
                                            {new Date(course.batch_start).toLocaleDateString("en-GB", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 flex flex-col flex-1 -mt-2">
                                    <h2 className="text-lg font-bold text-[#6B0F0F] line-clamp-2 min-h-[56px]">{course.title}</h2>
                                    <p className="text-[#7C5A4F] mt-1 text-sm leading-relaxed line-clamp-2 min-h-[40px]">{course.description}</p>
                                    <div className="mt-auto pt-5">
                                        <Link to={`/course/${course._id}`}>
                                            <button className="bg-[#6B0F0F] text-white px-9 py-3 rounded-full hover:bg-[#571010] transition w-full">
                                                Explore
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}

            </div>

            <style jsx>{`
                .popular-course-slider {
                    padding: 10px 5px;
                }
                .popular-course-slider .swiper-button-prev::after,
                .popular-course-slider .swiper-button-next::after {
                    display: none;
                }
                @media (max-width: 640px) {
                    .swiper-button-prev,
                    .swiper-button-next {
                        display: none !important;
                    }
                }
                @media (min-width: 641px) {
                    .swiper-button-prev,
                    .swiper-button-next {
                        display: flex !important;
                    }
                }
            `}</style>
        </section>
    )
}

export default PopularCourse