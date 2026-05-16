import React from 'react'
import Testimonial from '../assets/Images/bannerImage.png'

const testData = [
    {
        id: 1,
        title: "1525+",
        description: "Student enrolled"
    },
    {
        id: 2,
        title: "1050+",
        description: "Classes completed"
    },
    {
        id: 3,
        title: "800+",
        description: "Learners report"
    },
    {
        id: 4,
        title: "10+",
        description: "Top instructors"
    },{
        id: 5,
        title: "98%",
        description: "Satisfaction rate"
    },
];
const Testimonials = () => {
    return (
        <>
            <div className='mt-4 md:mt-14 px-5 md:px-10 lg:px-16 py-8'>
                <h1 className='text-3xl font-bold text-center text-[#6B0F0F]'>We Achieved till now</h1>
                <p className='text-center text-[#7C5A4F] mt-2 text-base'>
                    Our commitment to excellence and student success has led us to achieve remarkable milestones in our journey.
                </p>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-10'>
                    {testData.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className='h-[120px] flex flex-col justify-center items-center bg-[#FFFAF3] rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-[#6B0F0F] hover:scale-105 mb-2'
                        >
                            <h2 className='text-lg md:text-xl font-bold text-[#7A120D]'>
                                {testimonial.title}
                            </h2>
                            <p className='text-center text-base md:text-xl text-[#7C5A4F] mt-2'>
                                {testimonial.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Testimonials