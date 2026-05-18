import React from 'react'
import Answer from '../assets/Images/Answer.png'
import currentAffair from '../assets/Images/CurrentAffairs.png'
import notification from '../assets/Images/Notification.png'
import planning from '../assets/Images/Planning.png'
import Rank from '../assets/Images/Rank.png'
import imp from '../assets/Images/TopicImp.png'
import { MdOutlineDateRange } from "react-icons/md";
import { useNavigate } from "react-router-dom";




const blogData = [
  {
    id: 1,
    image: currentAffair,
    highlight: "Current Affairs",
    title: "Top Current Affairs for UPSC 2024",
    date: "12 May 2026",
    description:
      "Stay updated with the most important national and international current affairs for UPSC and State PCS preparation.",
  },

  {
    id: 2,
    image: planning,
    highlight: "Preparation Strategy",
    title: "Ultimate Strategy to Crack UPSC in 1 Year",
    date: "15 May 2026",
    description:
      "Learn a complete one-year preparation roadmap with smart study planning, revision techniques, and time management.",
  },

  {
    id: 3,
    image: Answer,
    highlight: "Answer Writing",
    title: "Answer Writing Tips for UPSC Mains",
    date: "18 May 2026",
    description:
      "Improve your answer writing skills with expert strategies, structure techniques, and presentation methods for UPSC Mains.",
  },

  {
    id: 4,
    image: notification,
    highlight: "Latest Notification",
    title: "UPSC Prelims 2026 Notification Released",
    date: "20 May 2026",
    description:
      "Check the latest UPSC Prelims notification, important dates, eligibility criteria, and application details.",
  },

  {
    id: 5,
    image: Rank,
    highlight: "Toppers Strategy",
    title: "How AIR-5 Cracked UPSC",
    date: "22 May 2026",
    description:
      "Discover the preparation strategy, study routine, and success habits followed by a UPSC topper.",
  },

  {
    id: 6,
    image: imp,
    highlight: "Indian Polity",
    title: "Important Topics in Indian Polity",
    date: "25 May 2026",
    description:
      "Explore the most important Indian Polity topics frequently asked in UPSC and State PCS examinations.",
  },
];
const Blog = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='mt-16 y-7 md:py-10 px-5 md:px-10 lg:px-16 bg-[#FDF6EC]'>
        <div className=''>
          <h1 className='text-[#6B0F0F] md:text-3xl text-lg font-bold text-center pt-6'>Guidance Beyond The Classroom</h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mt-6">

          {blogData.map((item, index) => (

            <div
              key={index}
              onClick={() => {
                navigate(`/blog/${item.id}`);
                scrollToTop();
              }}

              className="flex flex-col sm:flex-row gap-4 bg-[#FFFAF3] p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 ease-in-out mb-2 cursor-pointer hover:scale-105"
            >

              {/* Left Side Image */}
              <div className="w-full sm:w-52 h-52 flex-shrink-0 overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              {/* Right Side Content */}
              <div className="flex flex-col justify-between">
                {/* Highlight Button */}
                <button className="w-fit bg-[#ca8989] text-white px-4 py-2 rounded-md text-sm font-semibold">
                  {item.highlight}
                </button>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#6B0F0F] mt-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#7C5A4F] text-base mt-1">
                  {item.description}
                </p>

                {/* Date */}
                <div className="flex items-center gap-1 text-sm text-[#7C5A4F] mt-2">
                  <MdOutlineDateRange className='text-xl font-bold' />
                  <p>{item.date}</p>
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