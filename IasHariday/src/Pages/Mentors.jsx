import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFaculty } from "../Redux/Slicer/facultySlice";


const Mentors = () => {


    const dispatch = useDispatch()
    const { faculties, loading, error } = useSelector(
        (state) => state.faculty
    )

    useEffect(() => {
        dispatch(getAllFaculty())
    }, [dispatch])

    return (
        <div className="max-w-7xl mx-auto px-5 md:px-8 ">

            {/* Heading */}
            <div className="text-center mb-10 mt-1 md:mt-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#6B0F0F]">
                    Meet Our <span className="text-[#6B0F0F]">faculty</span>
                </h2>
                <p className="mt-3 text-[#7C604F] max-w-2xl mx-auto">
                    Learn from experienced educators and UPSC experts dedicated to
                    guiding you through every stage of your civil services journey.
                </p>
            </div>

            {/* Mentor Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
                {faculties.map((mentor) => (
                    <div
                        key={mentor.id}
                        className="flex flex-col items-center text-center group"
                    >
                        {/* Image */}
                        <div className="w-72 h-72  rounded-full overflow-hidden border-4 border-[#F3E6D3] shadow-md transition-all duration-300 group-hover:border-[#D9B8A2]">
                            <img
                                src={mentor.image}
                                alt={mentor.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <h3 className="mt-5 text-[22px] tracking-wide font-bold text-[#6B0F0F] uppercase">
                            {mentor.name}
                        </h3>

                        <p className="text-[#C08B5C] text-[18px] font-semibold mt-1">
                            {mentor.designation}
                        </p>

                        <p className="mt-2 text-base font-semibold text-[#6B0F0F]">
                            {mentor.experience}+ Years Experience
                        </p>

                        {/* <p className="mt-4 text-sm text-[#7C604F] max-w-xs leading-relaxed">
                            Dedicated to helping aspirants build conceptual clarity,
                            consistency, and confidence for UPSC success.
                        </p> */}

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mt-5 text-[#3A2A1A]">
                            <i className="fab fa-facebook-f hover:text-[#6B0F0F] cursor-pointer transition-colors"></i>
                            <i className="fab fa-instagram hover:text-[#6B0F0F] cursor-pointer transition-colors"></i>
                            <i className="fab fa-twitter hover:text-[#6B0F0F] cursor-pointer transition-colors"></i>
                            <i className="fab fa-linkedin-in hover:text-[#6B0F0F] cursor-pointer transition-colors"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mentors;