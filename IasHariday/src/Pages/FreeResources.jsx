import React from 'react'

const FreeData = () => [
    {
        id: 1,
        title: "Comprehensive Study Materials",
        description: "Access a wide range of study materials covering all subjects and topics relevant to the IAS examination, curated by our expert faculty.",
        link: "/resources/study-materials"
    }, {
        id: 2,
        title: "Practice Questions and Mock Tests",
        description: "Enhance your preparation with a variety of practice questions and mock tests designed to simulate the actual IAS exam experience.",
        link: "/resources/practice-questions"
    }, {
        id: 3,
        title: "Insightful Articles and Updates",
        description: "Stay informed with the latest news, updates, and expert insights related to the IAS examination and current affairs.",
        link: "/resources/articles"
    }, {
        id: 4,
        title: "Video Lectures and Webinars",
        description: "Learn from our expert faculty through engaging video lectures and webinars covering important topics and exam strategies.",
        link: "/resources/video-lectures"
    }, {
        id: 5,
        title: "Previous Year Question Papers",
        description: "Access a collection of previous year question papers to understand the exam pattern and practice effectively.",
        link: "/resources/question-papers"
    }, {
        id: 6,
        title: "Time Management Tips and Strategies",
        description: "Discover effective time management techniques and strategies to optimize your study schedule and improve productivity.",
        link: "/resources/time-management"
    }
]
const FreeResources = () => {
    return (
        <>
            <div className=''>
                <h1 className='text-3xl font-bold text-center mt-3 md:mt-8 '>Free Learning Resources</h1>
                <p className='text-center text-[#7C5A4F] mt-2 text-base'>
                    Explore our collection of free resources, including study materials, practice questions, and insightful articles to support your IAS preparation journey.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-5 md:px-10 lg:px-16 '>
                    {FreeData().map((resource) => (
                        <div
                            key={resource.id}
                            className='h-[200px] flex flex-col justify-between bg-[#FFFAF3] rounded-xl p-7 shadow-sm transition-all duration-500 hover:shadow-[#6B0F0F] hover:scale-[1.02]'
                        >
                            <div>
                                <h2 className='text-lg md:text-xl font-bold text-[#7A120D]'>
                                    {resource.title}
                                </h2>

                                <p className='text-[#7C5A4F]  text-sm md:text-base'>
                                    {resource.description}
                                </p>
                            </div>

                            <a
                                href={resource.link}
                                className='text-[#6B0F0F] hover:underline  block font-semibold'
                            >
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default FreeResources