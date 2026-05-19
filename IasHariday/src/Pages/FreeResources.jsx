import React from 'react'
import {
    FaBookOpen,
    FaClipboardCheck,
    FaNewspaper,
    FaVideo,
    FaFileAlt,
    FaClock,
} from "react-icons/fa";

const FreeData = [
    {
        id: 1,
        icon: FaBookOpen,
        title: "Comprehensive Study Materials",
        description:
            "Access a wide range of study materials covering all subjects and topics relevant to the IAS examination, curated by our expert faculty.",
        link: "/resources/study-materials",
    },

    {
        id: 2,
        icon: FaClipboardCheck,
        title: "Practice Questions and Mock Tests",
        description:
            "Enhance your preparation with a variety of practice questions and mock tests designed to simulate the actual IAS exam experience.",
        link: "/resources/practice-questions",
    },

    {
        id: 3,
        icon: FaNewspaper,
        title: "Insightful Articles and Updates",
        description:
            "Stay informed with the latest news, updates, and expert insights related to the IAS examination and current affairs.",
        link: "/resources/articles",
    },

    {
        id: 4,
        icon: FaVideo,
        title: "Video Lectures and Webinars",
        description:
            "Learn from our expert faculty through engaging video lectures and webinars covering important topics and exam strategies.",
        link: "/resources/video-lectures",
    },

    {
        id: 5,
        icon: FaFileAlt,
        title: "Previous Year Question Papers",
        description:
            "Access a collection of previous year question papers to understand the exam pattern and practice effectively.",
        link: "/resources/question-papers",
    },

    {
        id: 6,
        icon: FaClock,
        title: "Time Management Tips and Strategies",
        description:
            "Discover effective time management techniques and strategies to optimize your study schedule and improve productivity.",
        link: "/resources/time-management",
    },
];
const FreeResources = () => {
    return (
        <>
            <div className=''>
                <h1 className='text-3xl font-bold text-center mt-3 '>Free Learning Resources</h1>
                <p className='text-center text-[#7C5A4F] mt-2 text-base'>
                    Explore our collection of free resources, including study materials, practice questions, and insightful articles to support your IAS preparation journey.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-5 md:px-10 lg:px-16'>

                    {FreeData.map((resource) => {

                        const Icon = resource.icon;

                        return (
                            <div
                                key={resource.id}
                                className='min-h-[220px] flex flex-col justify-between bg-[#FFFAF3] rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-md hover:shadow-[#6B0F0F]/10 border border-transparent hover:border-[#E7D5CA]'
                            >

                                {/* Top Content */}
                                <div>

                                    {/* Icon */}
                                    <div className='w-11 h-11 rounded-md bg-[#F3E6DD] flex items-center justify-center mb-3'>
                                        <Icon
                                            size={32}
                                            className='text-[#6B0F0F]'
                                        />
                                    </div>

                                    {/* Title */}
                                    <h2 className='text-xl font-bold text-[#7A120D] leading-snug'>
                                        {resource.title}
                                    </h2>

                                    {/* Description */}
                                    <p className='text-[#7C5A4F] mt-2 text-sm md:text-base leading-relaxed'>
                                        {resource.description}
                                    </p>
                                </div>

                                {/* Button */}
                                <a
                                    href={resource.link}
                                    className='mt-4 text-[#6B0F0F] font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300'
                                >
                                    Learn More →
                                </a>

                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    )
}

export default FreeResources