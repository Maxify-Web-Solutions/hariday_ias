import React from 'react'
import UpscPre from '../assets/Images/UPSCPre.png'
import UpscMain from '../assets/Images/UPSCMain.png'
import UppcsEx from '../assets/Images/UPPCS.png'
import SSCEx from '../assets/Images/SSCExam.png'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom'


const courseData = [
  {
    id: 1,
    image: UpscPre,
    courseTitle: "UPSC Prelims 2026",
    description:
      "Comprehensive preparation for UPSC Prelims including GS, CSAT.",
    rating: 4.8,
    price: "₹12,999",
    discountPrice: "₹8,999",
    button: "View More",
  },

  {
    id: 2,
    image: UpscMain,
    courseTitle: "UPSC Mains 2026",
    description:
      "Advanced answer writing program with GS papers.",
    rating: 4.9,
    price: "₹14,999",
    discountPrice: "₹9,999",
    button: "View More",
  },

  {
    id: 3,
    image: UppcsEx,
    courseTitle: "UPPCS Preparation",
    description:
      "Complete UPPCS preparation course covering prelims, mains.",
    rating: 4.7,
    price: "₹10,999",
    discountPrice: "₹6,999",
    button: "View More",
  },

  {
    id: 4,
    image: SSCEx,
    courseTitle: "SSC CGL Complete Batch",
    description:
      "Full SSC CGL course with quantitative aptitude, reasoning, English.",
    rating: 4.6,
    price: "₹8,999",
    discountPrice: "₹4,999",
    button: "View More",
  },

  {
    id: 5,
    image: UpscPre,
    courseTitle: "CDS Preparation",
    description:
      "Focused CDS preparation with mathematics, English, GK.",
    rating: 4.8,
    price: "₹13,999",
    discountPrice: "₹9,999",
    button: "View More",
  },

  {
    id: 6,
    image: UpscMain,
    courseTitle: "CTET Preparation",
    description:
      "Structured CTET course including pedagogy, child development.",
    rating: 4.9,
    price: "₹11,999",
    discountPrice: "₹8,999",
    button: "View More",
  },

  {
    id: 7,
    image: UppcsEx,
    courseTitle: "IBPS PO",
    description:
      "Complete IBPS PO preparation with banking awareness.",
    rating: 4.7,
    price: "₹7,999",
    discountPrice: "₹3,999",
    button: "View More",
  },

  {
    id: 8,
    image: SSCEx,
    courseTitle: "Banking Exams",
    description:
      "All-in-one banking preparation course for SBI.",
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
          <h1 className='text-2xl md:text-3xl font-bold text-[#6B0F0F]'>
            Start Your Journey Today
          </h1>
          <p className='text-[#7C604F] mt-2 text-sm md:text-base'>
            Explore Premium Courses For UPSC, SSC, UPPCS & Government Exams
          </p>
        </div>
        {/* Course Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5'>
          {courseData.map((course, index) => (
            <div
              key={index}
              className='bg-white rounded-3xl overflow-hidden hover:border-[#9c6060] ease-in-out transition-all duration-500 group  shadow-sm hover:shadow-md 
                        hover:shadow-[#6B0F0F]/20'
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
              <div className='p-4'>
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
                <h4 className='text-[#7C604F]'>{course.description}</h4>
                {/* Price */}
                <div className='flex items-center gap-3 mt-2'>
                  <h3 className='text-2xl font-bold text-black'>
                    {course.discountPrice}
                  </h3>
                  <p className='text-[#7C604F] textb-sm line-through'>
                    {course.price}
                  </p>
                </div>
                <Link to={`/course/${course.id}`}>
                  <button className='w-full mt-5 bg-[#6B0F0F] text-white py-2.5 rounded-3xl text-lg font-medium hover:bg-[#571010] transition-all duration-300'>
                    {course.button}
                  </button>
                </Link>
              </div>

            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Courses