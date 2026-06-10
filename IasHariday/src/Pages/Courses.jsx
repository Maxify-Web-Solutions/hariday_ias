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
      <div className='mt-16 px-3 md:px-6 lg:px-10 py-10 bg-[#FDF6EC]'>
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
        {/* ================= UPSC EXAM OVERVIEW ================= */}
        <div className="mt-8  md:px-4">

          {/* Heading with refined spacing and accent line */}
          <div className="text-center max-w-3xl mx-auto relative">
            <div className="inline-block">
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
              UPSC Civil Services <span className="text-[#6B0F0F]">Examination</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#6B0F0F] to-amber-500 rounded-full mx-auto mt-4 mb-5"></div>

          </div>

          {/* STAGES - Enhanced with modern cards, gradients, and better visual hierarchy */}
          <div className="mt-9">
            {/* <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-300 max-w-20"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#6B0F0F] tracking-wide">
                Stages of Examination
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-300 max-w-20"></div>
            </div> */}

            <div className="grid md:grid-cols-3 gap-7 lg:gap-9 mt-2">

              {/* Prelims - Modern floating card */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-amber-100 hover:border-amber-300 hover:-translate-y-0.5">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6B0F0F] to-[#8B2A2A] text-white flex items-center justify-center text-2xl font-black shadow-md mb-5 group-hover:scale-105 transition-transform">
                    1
                  </div>
                  <div className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">Phase 01</div>
                </div>

                <h4 className="text-2xl font-bold text-[#6B0F0F] mt-2 tracking-tight">
                  Preliminary Exam
                </h4>
                <div className="mt-2 h-1 w-14 bg-amber-400 rounded-full mb-2"></div>

                <ul className="mt-4 text-[#5a4a3a] space-y-3 text-sm font-medium">
                  <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>GS Paper I (200 Marks)</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>CSAT (200 Marks)</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>Objective Type Questions</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>Negative Marking Applicable</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span className="font-semibold text-[#6B0F0F]">Qualifying Stage</span></li>
                </ul>

                {/* Badge for quick insight */}
                <div className="mt-6 pt-4 border-t border-amber-100">
                  <span className="inline-flex items-center gap-1 text-xs text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Two compulsory papers
                  </span>
                </div>
              </div>

              {/* Mains - Enhanced with gradient accent */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-amber-100 hover:border-amber-300 hover:-translate-y-0.5">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6B0F0F] to-[#8B2A2A] text-white flex items-center justify-center text-2xl font-black shadow-md mb-5 group-hover:scale-105 transition-transform">
                    2
                  </div>
                  <div className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">Phase 02</div>
                </div>

                <h4 className="text-2xl font-bold text-[#6B0F0F] mt-2 tracking-tight">
                  Mains Examination
                </h4>
                <div className="mt-2 h-1 w-14 bg-amber-400 rounded-full mb-2"></div>

                <ul className="mt-4 text-[#5a4a3a] space-y-3 text-sm font-medium">
                  <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>9 Descriptive Papers</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>Essay Paper</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>GS I, II, III & IV</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>Optional Subject Papers</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span className="font-semibold text-[#6B0F0F]">1750 Marks Counted For Merit</span></li>
                </ul>

                <div className="mt-6 pt-4 border-t border-amber-100">
                  <span className="inline-flex items-center gap-1 text-xs text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Descriptive + analytical
                  </span>
                </div>
              </div>

              {/* Interview - Premium style */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-amber-100 hover:border-amber-300 hover:-translate-y-0.5">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6B0F0F] to-[#8B2A2A] text-white flex items-center justify-center text-2xl font-black shadow-md mb-5 group-hover:scale-105 transition-transform">
                    3
                  </div>
                  <div className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">Phase 03</div>
                </div>

                <h4 className="text-2xl font-bold text-[#6B0F0F] mt-2 tracking-tight">
                  Interview / Personality Test
                </h4>
                <div className="mt-2 h-1 w-14 bg-amber-400 rounded-full mb-2"></div>

                <ul className="mt-4 text-[#5a4a3a] space-y-3 text-sm font-medium">
                  <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>Personality Assessment</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>275 Marks</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>Communication Skills</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>Decision Making Ability</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span className="font-semibold text-[#6B0F0F]">Final Selection Stage</span></li>
                </ul>

                <div className="mt-6 pt-4 border-t border-amber-100">
                  <span className="inline-flex items-center gap-1 text-xs text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> 275 marks | final merit
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FINAL SELECTION - Modern card with accent and iconography */}
          <div className="mt-10 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6B0F0F]/5 via-amber-100/30 to-[#6B0F0F]/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md border border-amber-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50"></div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-[#6B0F0F] flex items-center justify-center">
                      <Trophy size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#6B0F0F]">
                      Final Selection & Merit
                    </h3>
                  </div>
                  <p className="text-[#7C604F] leading-relaxed text-base md:text-lg">
                    The final merit list is prepared based on the marks obtained in the
                    <span className="font-semibold text-[#6B0F0F]"> Mains Examination (1750 Marks) </span>
                    and the
                    <span className="font-semibold text-[#6B0F0F]"> Personality Test (275 Marks)</span>.
                    The total score out of <span className="font-black text-amber-700">2025 marks</span> determines the final rank,
                    service allocation, and cadre preference.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-3 text-center min-w-[140px] shadow-inner">
                  <span className="text-3xl font-black text-[#6B0F0F]">2025</span>
                  <span className="block text-sm text-amber-700 font-semibold">Total Marks</span>
                  <div className="w-full h-1.5 bg-amber-200 rounded-full mt-2 overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-[#6B0F0F] to-amber-600 rounded-full"></div>
                  </div>
                  <span className="text-xs text-[#7C604F] mt-2 block">Mains + Interview</span>
                </div>
              </div>
            </div>
          </div>

          {/* ELIGIBILITY - Clean table with modern styling, badges, and better readability */}
          <div className="mt-10">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-300 max-w-20"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#6B0F0F] tracking-wide">
                Eligibility Criteria
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-300 max-w-20"></div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-amber-100 transition-all hover:shadow-md">
              {/* Table header - modern dark with gradient */}
              <div className="grid grid-cols-4 bg-gradient-to-r from-[#6B0F0F] to-[#8B2A2A] text-white font-bold text-center py-5 text-sm md:text-base">
                <div className="border-r border-amber-300/30">Category</div>
                <div className="border-r border-amber-300/30">Age Limit</div>
                <div className="border-r border-amber-300/30">Attempts</div>
                <div>Qualification</div>
              </div>

              {/* General Row */}
              <div className="grid grid-cols-4 text-center border-b border-amber-100 py-5 text-[#5a4a3a] text-sm md:text-base hover:bg-amber-50/50 transition-colors">
                <div className="font-semibold text-[#6B0F0F] border-r border-amber-100">General / EWS</div>
                <div className="border-r border-amber-100">21 - 32 Years</div>
                <div className="border-r border-amber-100">
                  <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full text-xs font-bold">6</span>
                </div>
                <div className="text-left pl-3 md:pl-8 font-medium">Graduation from a recognized university</div>
              </div>

              {/* OBC Row */}
              <div className="grid grid-cols-4 text-center border-b border-amber-100 py-2 text-[#5a4a3a] text-sm md:text-base hover:bg-amber-50/50 transition-colors">
                <div className="font-semibold text-[#6B0F0F] border-r border-amber-100">OBC</div>
                <div className="border-r border-amber-100">21 - 35 Years</div>
                <div className="border-r border-amber-100">
                  <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full text-xs font-bold">9</span>
                </div>
                <div className="text-left pl-3 md:pl-10 font-medium text-[#7C604F]">Graduation from a recognized university</div>
              </div>

              {/* SC/ST Row with unlimited badge */}
              <div className="grid grid-cols-4 text-center py-5 text-[#5a4a3a] text-sm md:text-base hover:bg-amber-50/50 transition-colors">
                <div className="font-semibold text-[#6B0F0F] border-r border-amber-100">SC / ST</div>
                <div className="border-r border-amber-100">21 - 37 Years</div>
                <div className="border-r border-amber-100">
                  <span className="inline-flex items-center justify-center bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full text-xs font-bold">Unlimited</span>
                </div>
                <div className="text-left pl-3 md:pl-8 font-medium text-[#7C604F]">Graduation from a recognized university</div>
              </div>
            </div>

            {/* extra note for age relaxation */}
            <div className="flex flex-wrap gap-3 justify-center items-center mt-6 text-xs md:text-sm text-[#7C604F]">

              <span className="bg-white/70 rounded-full px-4 py-1.5 shadow-sm flex items-center gap-2">
                <ClipboardList size={16} className="text-[#6B0F0F]" />
                <strong>Age relaxation:</strong> +3 years for OBC, +5 years for SC/ST
              </span>

              <span className="bg-white/70 rounded-full px-4 py-1.5 shadow-sm flex items-center gap-2">
                <CalendarDays size={16} className="text-[#6B0F0F]" />
                <strong>Physical disability:</strong> Additional relaxation as per rules
              </span>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Courses