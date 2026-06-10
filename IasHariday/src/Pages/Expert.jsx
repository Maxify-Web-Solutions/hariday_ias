import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFaculty } from '../Redux/Slicer/facultySlice'


const Expert = () => {

    const dispatch = useDispatch()
    const { faculties, loading, error } = useSelector(
        (state) => state.faculty
    )
    useEffect(() => {
        dispatch(getAllFaculty())

    }, [dispatch])
    
    return (
        <section className=' bg-[#f8ede1] pb-5'>
            <div className='max-w-4xl mx-auto text-center px-5'>
                <h1 className='font-bold text-black text-[20px] md:text-[36px] pt-5'>
                    Guidance from the <span className='text-[#6B0F0F]'>Best Mentors</span>
                </h1>
                <p className='text-[#7C5A4F] text-base md:text-base leading-relaxed'>
                    Get expert support, strategic preparation, and valuable insights from mentors who understand the demands of the UPSC examination.
                </p>
            </div>
            <div className='mt-7 px-5 md:px-10 lg:px-16'>
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
                    {faculties?.map((expert) => (
                        <SwiperSlide key={expert.id}>
                            <div className='h-[390px] rounded-2xl transition-all duration-300 group font-semibold mt-1 overflow-hidden shadow-sm hover:shadow-md hover:shadow-[#6B0F0F]/20 flex flex-col'>
                                <div className='overflow-hidden'>
                                    <img
                                        src={expert.image}
                                        alt={expert.name}
                                        className='w-full h-[355px] object-cover group-hover:scale-105 transition duration-500'
                                    />
                                </div>

                                <div className='p-5 flex-1 bg-[#FFFAF3]'>
                                    <h2 className='text-base font-bold text-[#6B0F0F] line-clamp-2'>
                                        Name : {expert.name}
                                    </h2>

                                    <p className='text-[#7C5A4F] text-sm mt-1 line-clamp-2'>
                                        Designation : {expert.designation}
                                    </p>

                                    <p className='text-[#6B0F0F] text-sm mt-0.5'>
                                        Experience: {expert.experience}+ Years
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