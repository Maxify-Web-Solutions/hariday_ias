import React from 'react';
import founder from '../assets/Images/Founder.png';
import about1 from '../assets/Images/UPSCMain.png'
import about2 from '../assets/Images/UPSCPre.png'
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoGoal } from "react-icons/go";




const About = () => {
  return (
    <div className="mt-2 max-w-6xl mx-auto px-5 md:px-6 mb-5 lg:px-[120px]">

      <div className="pt-8">
        <h1 className="text-center text-lg sm:text-xl md:text-4xl font-bold text-black mb-12 md:mb-20">
          Leading with Integrity -
          <span className="text-[#6B0F0F]">
            {" "}A Message from the Director
          </span>
        </h1>
      </div>

      {/* Card */}
      <div className="relative bg-[#FDF6EC] border-2 border-[#D4A44B] rounded-[30px] overflow-visible mt-4">

        {/* Mobile Image */}
        <div className="flex justify-center pt-3 lg:hidden">
          <img
            src={founder}
            alt="Founder"
            className="w-[500px] h-[500px]
           
            sm:w-[260px]
            sm:h-[280px]
             md:w-[320px]
             md:h-[320px]
             rounded-full
             object-cover
             "
          />
        </div>

        {/* Desktop Image */}
        <div className="hidden lg:block absolute top-0 right-0 translate-x-20 -translate-y-40 z-10">
          <img
            src={founder}
            alt="Founder"
            className="w-[550px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 lg:p-16">
          <div className="w-full lg:w-[60%]">
            <h2 className="text-2xl md:text-4xl font-bold text-[#6B0F0F] mb-6">
              Founder's Vision
            </h2>

            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[#3D2A20] font-serif">
              A technocrat by education and a spiritual seeker by soul,
              our Director embodies the
              <span className="text-[#6B0F0F] font-semibold">
                {" "}Karma Yoga{" "}
              </span>
              philosophy in education. With the strategic mindset of an
              NIT Kurukshetra graduate, she provides the roadmap for UPSC
              success, while her spiritual insights provide the resilience
              required to reach the finish line.
            </p>

            <div className="mt-5">
              <p className="text-lg md:text-xl font-bold text-[#6B0F0F]">
                Her Vision is Simple :
              </p>

              <p className="text-xl md:text-2xl font-semibold mt-2">
                <span className='text-[#6B0F0F]'>Empowered Minds</span>,<span className='text-[#6B0F0F]'> Ethical Souls.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-visible">

          {/* About Image */}
          <div className="
            flex justify-center
               lg:absolute lg:-left-24 lg:top-1/2 lg:-translate-y-1/2
               z-10
              ">
            <img
              src={about1}
              alt="Our Mindset"
              className="
           w-[300px]
             h-[300px]
            sm:w-[260px]
            sm:h-[280px]
             md:w-[320px]
             md:h-[320px]
             rounded-full
             object-cover
             shadow-xl
              border-4 border-[#D4A44B]
              "
            />
          </div>

          {/* Content Card */}
          <div className=" bg-[#FFF8EF] rounded-[30px] p-6 md:p-10 lg:pl-[280px] pt-20 ">


            <div className="border-l-4 border-[#6B0F0F] pl-4">
              <p className="text-xl md:text-2xl font-semibold text-[#6B0F0F] italic">
                "अप्प दीपो भवः"
              </p>

              <p className="text-lg text-[#6B0F0F] mt-1">
                “Be a light unto yourself”
              </p>
            </div>

            <p className="text-[#5B4338] text-lg leading-relaxed mt-2">
              Said the <span className="font-semibold text-[#6B0F0F]">Buddha</span>.
              At <span className="font-semibold text-[#6B0F0F]">Hriday IAS</span>,
              we echo this call to awareness, encouraging each aspirant to become
              a source of light in a world filled with darkness.
            </p>

            <p className="text-[#5B4338] text-lg leading-relaxed mt-2">
              We believe that the journey of UPSC preparation is a journey of
              self-discovery, where one confronts fears, doubts, and limitations,
              and emerges stronger, wiser, and more compassionate.
            </p>

          </div>
        </div>

        <div className="relative mt-10 overflow-visible">

          {/* Content Card */}
          <div className="bg-[#FFF8EF] rounded-[30px] p-6 md:p-10 lg:pr-[280px]">

            {/* Highlight Quote */}
            <div className="border-l-4 border-[#6B0F0F] pl-4 mb-6">
              <p className="text-xl md:text-2xl font-semibold text-[#6B0F0F] italic">
                "Osho taught"
              </p>

              <p className="text-lg text-[#6B0F0F] mt-1">
                “Life is not a problem to be solved, but a mystery to be lived”
              </p>
            </div>

            <p className="text-[#5B4338] text-lg leading-relaxed">
              We at this platform, strive to create an environment where aspirants can
              live life fully, embracing its mysteries, complexities, and challenges.
            </p>

            <p className="text-[#5B4338] text-lg leading-relaxed mt-2">
              Our approach is holistic, focusing not just on intellectual growth but
              also on emotional intelligence, creativity, and spiritual awareness.
            </p>

          </div>

          {/* Desktop Image - Right Overlap */}
          <div className="hidden lg:flex absolute -right-24 top-1/3 -translate-y-1/2 z-10">
            <img
              src={about2}
              alt="Our Philosophy"
              className="w-[320px] h-[320px] rounded-full object-cover shadow-xl border-4 border-[#D4A44B]"
            />
          </div>

          {/* Mobile Image */}
          <div className="flex justify-center mt-8 lg:hidden mb-5">
            <img
              src={about2}
              alt="Our Philosophy"
              className="
        w-[300px]
        h-[300px]
        sm:w-[260px]
        sm:h-[280px]
        md:w-[320px]
        md:h-[320px]
        rounded-full
        object-cover
        shadow-xl
        border-4 border-[#D4A44B]
         "            />
          </div>

        </div>
      </div>

      <div className='mt-12'>
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Vision */}
          <div className="w-full lg:w-1/2 p-6 rounded-2xl border border-[#F1E2C7] shadow-sm hover:shadow-sm hover:shadow-[#6B0F0F] transition-all duration-500 hover:scale-[1.02] bg-[#FFFAF3]">

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
              platforms for UPSC  Exam preparation by shaping
              future leaders who will contribute positively to society and nation-building.

            </p>
          </div>

          {/* Mission */}
          <div className="w-full lg:w-1/2 p-6 rounded-2xl shadow-sm border border-[#F1E2C7] hover:shadow-sm hover:shadow-[#6B0F0F] transition-all duration-500 hover:scale-[1.02] bg-[#FFFAF3]">

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

    </div>
  );
};

export default About;