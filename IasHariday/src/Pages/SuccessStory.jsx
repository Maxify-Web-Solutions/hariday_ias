import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import review2 from '../assets/Images/review2.png'
import review3 from '../assets/Images/review3.png'
import review4 from '../assets/Images/review4.png'
import review5 from '../assets/Images/review5.png'
import review6 from '../assets/Images/review6.png'
import review7 from '../assets/Images/review7.png'
import review8 from '../assets/Images/review8.png'
import review9 from '../assets/Images/review9.png'
import review10 from '../assets/Images/review10.png'

const storyData = [
    {
        id: 1,
        image: review2,
        name: "Shivam Kumar",
        reviewTime: "2 months ago",
        review: "I am extremely satisfied with the Hriday IAS Foundation Course. The course content is comprehensive and well-structured, covering all the essential topics for UPSC preparation.",
        button: "Read More"
    }, {
        id: 2,
        image: review3,
        name: "Priyansh Singh",
        reviewTime: "3 months ago",
        review: "The Hriday IAS Foundation Course has been instrumental in my UPSC preparation. The structured approach and comprehensive content have significantly improved my understanding of the subjects.",
        button: "Read More"
    }, {
        id: 3,
        image: review4,
        name: "Rahul Verma",
        reviewTime: "4 months ago",
        review: "The Hriday IAS Foundation Course has been a game-changer in my UPSC preparation journey. The curriculum is well-organized and the teaching methodology is highly effective.",
        button: "Read More"
    }, {
        id: 4,
        image: review5,
        name: "Amit Kumar",
        reviewTime: "5 months ago",
        review: "The Hriday IAS Foundation Course has been a great learning experience for me. The course structure is well-designed and the faculty is highly qualified.",
        button: "Read More"
    }, {
        id: 5,
        image: review6,
        name: "Vikram Singh",
        reviewTime: "6 months ago",
        review: "The Hriday IAS Foundation Course has been a transformative experience for me. The course content is well-structured and the instructors are highly knowledgeable.",
        button: "Read More"
    }, {
        id: 6,
        image: review7,
        name: "Suman Gupta",
        reviewTime: "7 months ago",
        review: "The Hriday IAS Foundation Course has been an excellent choice for my UPSC preparation. The course content is well-structured and the faculty is highly experienced.",
        button: "Read More"
    }, {
        id: 7,
        image: review8,
        name: "Rohit Sharma",
        reviewTime: "8 months ago",
        review: "The Hriday IAS Foundation Course has been a great learning experience for me. The course structure is well-designed and the faculty is highly qualified.",
        button: "Read More"
    }, {
        id: 8,
        image: review9,
        name: "Neha Patel",
        reviewTime: "9 months ago",
        review: "The Hriday IAS Foundation Course has been a great learning experience for me. The course structure is well-designed and the faculty is highly qualified.",
        button: "Read More"
    },
    {
        id: 9,
        image: review10,
        name: "Anjali Sharma",
        reviewTime: "10 months ago",
        review: "The Hriday IAS Foundation Course has been an excellent choice for my UPSC preparation. The course content is well-structured and the faculty is highly experienced.",
        button: "Read More"
    }
]

const SuccessStory = () => {
    return (

        <section className=' py-6'>

            {/* Heading */}
            <div className='text-center px-5'>

                <h1 className='text-3xl md:text-4xl font-bold'>
                    Success Stories
                </h1>

                <p className='text-[#7C5A4F] mt-3 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed'>
                    Discover the inspiring journeys of our successful candidates
                    who achieved their dreams with Hariday IAS.
                </p>

            </div>

            <div className='mt-12 px-5 md:px-10 lg:px-16'>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >

                    {storyData.map((story) => (

                        <SwiperSlide key={story.id}>

                            <div className='h-[210px] w-full bg-[#FFFAF3] border border-[#F1E2C7] rounded-xl p-3 transition-all duration-300  shadow-sm hover:shadow-md 
                        hover:shadow-[#6B0F0F]/20'>
                                <div className='flex items-center gap-4'>
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className='w-14 h-14 rounded-full object-cover'
                                    />

                                    <div>
                                        <h2 className='text-base font-bold text-[#7A120D]'>
                                            {story.name}
                                        </h2>
                                        <p className='text-[#D1A328] text-xs mt-1'>
                                            {story.reviewTime}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center mt-1 text-[#D4A017] text-lg'>
                                    ★★★★★
                                </div>
                                <p className='text-[#7C5A4F] italic text-[13px] mt-1 font-medium'>
                                    "{story.review}"
                                </p>

                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </section>
    )
}

export default SuccessStory

