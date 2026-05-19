import React from 'react'
import image1 from '../assets/Images/image1.png'
import image2 from '../assets/Images/image2.png'
import image3 from '../assets/Images/image3.png'
import image4 from '../assets/Images/image4.png'
import image5 from '../assets/Images/image5.png'
import image6 from '../assets/Images/image6.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const experts = [
    {
        id: 1,
        image: image1,
        name: "Ruksana Ma'am",
        designation: 'Ethics and Geography Expert',
        experience: "4+ Years Experience"
    },
    {
        id: 2,
        image: image2,
        name: "Rishabh Sharma Sir",
        designation: "Environment & Ecology, IR, Current Affairs",
        experience: "5+ Years Experience"
    },
    {
        id: 3,
        image: image3,
        name: "R.K Jha Sir",
        designation: "Polity (GS & Optional), Economics",
        experience: "10+ Years Experience"
    },
    {
        id: 4,
        image: image4,
        name: "Chand Kubba Sir",
        designation: "History (GS & Optional)",
        experience: "20+ Years Experience"
    },
    {
        id: 5,
        image: image5,
        name: "Arvidn Sir",
        designation: "CSAT",
        experience: "15+ Years Experience"
    },
    {
        id: 6,
        image: image6,
        name: "Ashok Singh Sir",
        designation: "Hindi Literature",
        experience: "22+ Years Experience"
    }
]

const Expert = () => {
    return (
        <section className=' bg-[#f8ede1] pb-5'>
            <div className='max-w-4xl mx-auto text-center px-5'>
                <h1 className='font-bold text-black text-3xl md:text-5xl pt-5'>
                    The Minds Behind Our Success
                </h1>
                <p className='text-[#7C5A4F] mt-3 text-base md:text-base leading-relaxed'>
                    Our faculty comprises experienced educators, subject specialists,
                    and dedicated mentors committed to helping aspirants achieve
                    success in competitive examinations through quality guidance
                    and strategic preparation.
                </p>
            </div>
            <div className='mt-10 px-5 md:px-10 lg:px-16'>
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
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1280: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {experts.map((expert) => (
                        <SwiperSlide key={expert.id}>
                            <div className='h-[380px] rounded-2xl transition-all duration-300 group font-semibold mt-1 overflow-hidden  shadow-sm hover:shadow-md hover:shadow-[#6B0F0F]/20'>
                                <div className='overflow-hidden'>
                                    <img
                                        src={expert.image}
                                        alt={expert.name}
                                        className='w-full h-[250px] object-coverb group-hover:scale-105 transition duration-500'
                                    />
                                </div>
                                <div className='p-5'>
                                    <h2 className='text-base font-bold text-[#6B0F0F] mt-1'>
                                        {expert.name}
                                    </h2>
                                    <p className='text-[#7C5A4F] text-sm mt-1'>
                                        {expert.designation}
                                    </p>
                                    <p className='text-[#6B0F0F] text-sm mt-1'>
                                        {expert.experience}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
export default Expert