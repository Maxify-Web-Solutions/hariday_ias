import React from 'react'
import UpscPre from '../assets/Images/UPSCPre.png'
import UpscMain from '../assets/Images/UPSCMain.png'
import UppcsEx from '../assets/Images/UPPCS.png'
import SSCEx from '../assets/Images/SSCExam.png'
import { FaStar } from "react-icons/fa";

const courseData = [
  {
    image: UpscPre,
    courseTitle: "UPSC Prelims 2026",
    rating: 4.8,
    price: "₹12,999",
    discountPrice: "₹8,999",
    button: "View More",
  },

  {
    image: UpscMain,
    courseTitle: "UPSC Mains 2026",
    rating: 4.9,
    price: "₹14,999",
    discountPrice: "₹9,999",
    button: "View More",
  },

  {
    image: UppcsEx,
    courseTitle: "UPPCS Preparation",
    rating: 4.7,
    price: "₹10,999",
    discountPrice: "₹6,999",
    button: "View More",
  },

  {
    image: SSCEx,
    courseTitle: "SSC CGL Complete Batch",
    rating: 4.6,
    price: "₹8,999",
    discountPrice: "₹4,999",
    button: "View More",
  },
  {
    image: UpscPre,
    courseTitle: "CDS Preparation",
    rating: 4.8,
    price: "₹13,999",
    discountPrice: "₹9,999",
    button: "View More",
  },

  {
    image: UpscMain,
    courseTitle: "CTET Preparation",
    rating: 4.9,
    price: "₹11,999",
    discountPrice: "₹8,999",
    button: "View More",
  },

  {
    image: UppcsEx,
    courseTitle: "IBPS PO",
    rating: 4.7,
    price: "₹7,999",
    discountPrice: "₹3,999",
    button: "View More",
  },

  {
    image: SSCEx,
    courseTitle: "Banking Exams",
    rating: 4.6,
    price: "₹6,999",
    discountPrice: "₹2,599",
    button: "View More",
  },

];

const Courses = () => {
  return (
    <>
      <div className='mt-16 px-3 md:px-6 lg:px-28 py-10 bg-[#FDF6EC]'>
        <div className=''>
          <h1 className='text-xl md:text-3xl font-bold text-[#6B0F0F]'>
            Start Your Journey Today
          </h1>
          <p className='text-[#7C604F] mt-2 text-xs md:text-sm'>
            Explore Premium Courses For UPSC, SSC, UPPCS & Government Exams
          </p>
        </div>
        {/* Course Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
          {courseData.map((course, index) => (
            <div
              key={index}
              className='bg-white rounded-3xl overflow-hidden border hover:border-[#9c6060] ease-in-out transition-all duration-500 group hover:shadow-[#9c6060] hover:shadow'
            >
              {/* Image */}
              <div className='h-[200px] overflow-hidden'>
                <img
                  src={course.image}
                  alt={course.courseTitle}
                  className='w-full h-full object-cover hover:scale-105 ease-in-out transition-all duration-500 '
                />
              </div>
              {/* Content */}
              <div className='p-5'>
                {/* Rating */}
                <div className='flex items-center gap-2'>
                  <FaStar className='text-yellow-500' />
                  <span className='font-medium text-[#7C604F]'>
                    {course.rating}
                  </span>
                </div>
                {/* Title */}
                <h2 className='text-xl font-bold mt-2 text-[#6B0F0F] leading-snug'>
                  {course.courseTitle}
                </h2>
                {/* Price */}
                <div className='flex items-center gap-3 mt-2'>
                  <h3 className='text-2xl font-bold text-black'>
                    {course.discountPrice}
                  </h3>
                  <p className='text-[#7C604F] textb-sm line-through'>
                    {course.price}
                  </p>
                </div>
                <button className='w-full mt-5 bg-[#6B0F0F] text-white py-2.5 rounded-3xl text-lg font-medium hover:bg-[#571010] transition-all duration-300'>
                  {course.button}
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Courses