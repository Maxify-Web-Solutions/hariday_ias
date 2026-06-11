import React, { useEffect } from 'react'
import UpscPre from '../assets/Images/UPSCPre.png'
import UpscMain from '../assets/Images/UPSCMain.png'
import UppcsEx from '../assets/Images/UPPCS.png'
import SSCEx from '../assets/Images/SSCExam.png'
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { getAllCourses } from '../Redux/Slicer/courseSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ClipboardList, CalendarDays } from "lucide-react";
import { Trophy } from "lucide-react";


const Courses = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { courses, loading, error } = useSelector(
    (state) => state.course
  )
  useEffect(() => {
    dispatch(getAllCourses())
  }, [dispatch])

  return (
    <>
      <div className='px-3 md:px-6 lg:px-10 py-5 md:py-6 bg-[#FDF6EC]'>
        <div className=''>
          <h1 className='text-2xl md:text-3xl font-bold text-[#6B0F0F]'>
            Start Your Journey Today
          </h1>
          <p className='text-[#7C604F] mt-2 text-sm md:text-base'>
            Explore Premium Courses For UPSC, SSC, UPPCS & Government Exams
          </p>
        </div>
        {/* Course Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
          {courses?.map((course, index) => (
            <div
              key={course._id}
              onClick={() => navigate(`/course/${course._id}`)}

              className='bg-white rounded-3xl overflow-hidden 
             shadow-sm hover:shadow-md hover:shadow-[#6B0F0F]/20
             transition-all duration-500 flex flex-col h-full cursor-pointer'
            >

              {/* Image */}
              <div className='w-full h-[180px] overflow-hidden flex-shrink-0'>
                <img
                  src={course.image}
                  alt={course.title}
                  className='w-full h-full object-cover hover:scale-105 transition-all duration-500'
                />
              </div>

              {/* Content */}
              <div className='p-4 flex flex-col flex-1 justify-between'>
                <div>
                  <div className='flex items-center justify-between  border-[#E7D8CC] gap-1'>
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
                    <div className="bg-[#FFF4EA] border border-[#F1DED0] px-1.5 py-1 rounded-xl flex items-center gap-0.5 shadow-sm w-fit shrink-0 whitespace-nowrap">
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
                  {/* Title */}
                  <h2 className='text-lg font-bold mt-1 text-[#6B0F0F] line-clamp-2 min-h-[56px]'>
                    {course.title}
                  </h2>

                  {/* Description */}
                  <p className='text-[#7C604F] text-sm mt-1 line-clamp-2 min-h-[20px] break-words overflow-hidden'>
                    {course.description}
                  </p>
                </div>

                {/* Button */}
                <Link to={`/course/${course._id}`} className='mt-5'>
                  <button className='w-full bg-[#6B0F0F] text-white py-2.5 rounded-3xl text-lg font-medium hover:bg-[#571010] transition-all duration-300'>
                    More Details
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