import React, { useEffect } from 'react'
import Answer from '../assets/Images/Answer.png'
import currentAffair from '../assets/Images/CurrentAffairs.png'
import notification from '../assets/Images/Notification.png'
import planning from '../assets/Images/Planning.png'
import Rank from '../assets/Images/Rank.png'
import imp from '../assets/Images/TopicImp.png'
import { MdOutlineDateRange } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../Redux/Slicer/blogSlice'
import ScrollToTop from '../components/ScrollToTop'

const Blog = () => {

  const dispatch = useDispatch()
  const { blogs, loading, error } = useSelector(
    (state) => state.blog
  )
  useEffect(() => {
    dispatch(getAllBlogs())
  }, [dispatch])

  const navigate = useNavigate();
  return (
    <>
      <div className='py-1 md:py-2 px-2 md:px-10 lg:px-16 bg-[#FDF6EC]'>
        <div className=''>
          <h1 className='text-[#6B0F0F] md:text-3xl text-lg font-bold text-center pt-1 md:pt-4'>Guidance Beyond The Classroom</h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-6c mt-2">

          {blogs?.map((item, index) => (

            <div
              key={index}
              onClick={() => {
                navigate(`/blog/${item._id}`),
                  scrollToTop();
              }}

              className="flex flex-col sm:flex-row gap-4 bg-[#FFFAF3] p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 ease-in-out mb-2 cursor-pointer hover:scale-[1.02]"
            >

              {/* Left Side Image */}
              <div className="w-full sm:w-52 md:h-40 h-56 flex-shrink-0 overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-center rounded"
                />
              </div>

              {/* Right Side Content */}
              <div className="flex flex-col justify-between">
                {/* Highlight Button */}
                <button className="w-fit bg-[#F5E6D3] text-[#6B0F0F] px-4 py-2 rounded-md text-sm font-medium">
                  {item.highlight}
                </button>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#6B0F0F] mt-1 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 line-clamp-2 break-all overflow-hidden">
                  {item.description}
                </p>

                {/* Date */}
                <div className="flex items-center gap-1 text-sm text-[#7C5A4F] mt-2">
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

export default Blog