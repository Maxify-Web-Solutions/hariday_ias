import React from 'react'
import { useEffect } from 'react';
import { MdOutlineDateRange } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom'
import { CgChevronDoubleRight } from "react-icons/cg";
import { getAllBlogs } from '../Redux/Slicer/blogSlice'
import { useDispatch, useSelector } from "react-redux";
import { ArrowRight } from "lucide-react";


const HomeBlog = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { blogs, loading, error } = useSelector(
        (state) => state.blog
    )

    useEffect(() => {
        dispatch(getAllBlogs());
    }, [dispatch]);

    return (
        <>
            <div className=' y-7 md:py-5 px-5 md:px-10 lg:px-16'>
                <div className='text-center font-bold text-xl md:text-3xl mt-5'>
                    Latest Insights and <span className='text-[#6B0F0F]'>Articles</span>

                </div>
                <div className="flex items-end justify-end mt-3">
                    <Link
                        to="/blog"
                        className="relative w-fit text-[#846458] font-semibold hover:text-[#6B0F0F]
    after:absolute after:left-0 after:-bottom-1
    after:h-[3px] after:w-0 after:bg-[#6B0F0F]
    after:transition-all after:duration-300
    hover:after:w-full transition-all duration-300 flex items-center gap-1 group"
                    >
                        View All
                        <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 mt-5">

                    {blogs?.slice(0, 2).map((item) => (

                        <div
                            key={item._id}
                            onClick={() => navigate(`/blog/${item._id}`)}
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
                                <p className="text-xs text-gray-600 line-clamp-2 break-all overflow-hidden w-full">
                                    {item.description}
                                </p>

                                {/* Date */}
                                <div className="flex items-center gap-1 text-sm b mt-1">
                                    <MdOutlineDateRange className='text-xl font-bold' />
                                    <p>
                                        {new Date(item.date).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </>
    )
}

export default HomeBlog