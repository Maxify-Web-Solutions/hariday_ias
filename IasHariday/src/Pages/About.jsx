import React from 'react'
import AboutImage from '../assets/Images/AboutUs.jpg'
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoGoal } from "react-icons/go";



const highlights = [
  {
    title: "Expert Faculty & Personalized Mentorship",
    description:
      "Learn from experienced educators who guide you personally through every stage of your preparation.",
  },
  {
    title: "Comprehensive UPSC & State PCS Preparation",
    description:
      "Structured courses covering Prelims, Mains, and Interview with integrated strategy for all exams.",
  },
  {
    title: "Daily Current Affairs & Answer Writing Practice",
    description:
      "Stay updated and sharpen your writing skills with daily practice sessions and expert feedback.",
  },
  {
    title: "Regular Mock Tests & Performance Analysis",
    description:
      "Evaluate your progress through frequent tests and detailed performance insights.",
  },
  {
    title: "Student-Centric Learning Environment",
    description:
      "A supportive atmosphere that encourages collaboration, discipline, and growth.",
  },
  {
    title: "Focus on Discipline, Consistency & Strategy",
    description:
      "Build habits and strategies that ensure long-term success in your civil services journey.",
  },
];
const About = () => {
  return (
    <>
      <div className='mt-16 bg-[#FDF6EC] px-5 md:px-10 lg:px-16 py-10'>
        <div className="flex flex-col lg:flex-row items-center gap-10 ">

          <div className="w-full lg:w-1/2 mt-8 md:mt-12">
            <img
              src={AboutImage}
              alt="About Us"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              About
              <span className='text-[#6B0F0F] ps-2'>Hriday IAS</span>
            </h2>

            <p className="text-xl text-[#7C5A4F]">
              We <span className='text-[#6B0F0F] text-[20px] font-bold'>Hriday Ias</span> are dedicated to helping students achieve their dream
              of becoming successful officers through quality education,
              mentorship, and guidance. Our mission is to empower aspirants
              with the knowledge, confidence, and strategy.
            </p>
          </div>
        </div>
        <div className='mt-12'>
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Vision */}
            <div className="w-full lg:w-1/2 p-6 rounded-2xl shadow-sm hover:shadow-sm hover:shadow-[#6B0F0F] transition-all duration-500 hover:scale-[1.02] bg-[#FFFAF3]">

              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#6B0F0F] p-2 rounded-full text-white text-2xl">
                  <HiOutlineLightBulb />
                </div>

                <h2 className="text-3xl font-bold text-[#6B0F0F]">
                  Our Vision
                </h2>
              </div>

              <p className="text-[#7C5A4F] leading-relaxed">
                Our vision is to become one of India’s most trusted and respected
                platforms for UPSC and State Competitive Exam preparation by shaping
                future leaders who will contribute positively to society and nation-building.

              </p>
            </div>

            {/* Mission */}
            <div className="w-full lg:w-1/2 p-6 rounded-2xl shadow-sm  hover:shadow-sm hover:shadow-[#6B0F0F] transition-all duration-500 hover:scale-[1.02] bg-[#FFFAF3]">

              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#6B0F0F] p-2 rounded-full text-white text-2xl">
                  <GoGoal />
                </div>

                <h2 className="text-3xl font-bold text-[#6B0F0F] ">
                  Our Mission
                </h2>
              </div>

              <p className="text-[#7C5A4F] leading-relaxed">
                Our mission is to provide accessible, affordable, and result-oriented
                education through innovative teaching methods, expert mentorship,
                and a student-centric approach. We aim to empower aspirants with
                the knowledge, strategy.
              </p>
            </div>

          </div>
        </div>
        {/* <section className="py-10 px-6"> */}
          <div className=" px-5 md:px-10 lg:px-16 py-10">
            <div className="text-center mb-14">
              <p className="text-[#6B0F0F] font-semibold tracking-widest uppercase">
                Why Students Choose Us
              </p>
              <div className="w-24 h-1 bg-[#6B0F0F] mx-auto mt-3 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group bg-[#FFFAF3] border border-transparent hover:border-[#6B0F0F] p-4 rounded-2xl transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#6B0F0F] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#7C5A4F] leading-relaxed text-[15px]">
                    {item.description}
                  </p>

                </div>
              ))}
            </div>
          </div>
        {/* </section> */}
      </div>
    </>
  )
}

export default About