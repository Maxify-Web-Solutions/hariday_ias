import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllReviews } from '../Redux/Slicer/reviewSlice'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const SuccessStory = () => {
    const dispatch = useDispatch()
    const { reviews, loading, errors } = useSelector(
        (state) => state.review
    )

    useEffect(() => {
        dispatch(getAllReviews())
    }, [dispatch])

    return (
        <section className='py-6'>
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
                    {reviews.map((story) => (
                        <SwiperSlide key={story.id}>
                            <ReviewCard story={story} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

// Separate component for each review card with its own state
const ReviewCard = ({ story }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const textRef = React.useRef(null)

    // Character limit for truncated view
    const CHAR_LIMIT = 120

    // Check if review text exceeds limit
    React.useEffect(() => {
        if (story.review && story.review.length > CHAR_LIMIT) {
            setShowButton(true)
        }
    }, [story.review])

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    const getDisplayText = () => {
        if (!story.review) return ""
        if (isExpanded) return story.review
        return story.review.length > CHAR_LIMIT
            ? story.review.substring(0, CHAR_LIMIT) + "..."
            : story.review
    }

    return (
        <div className='h-[225px] w-full bg-[#FFFAF3] border border-[#F1E2C7] rounded-xl p-3 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#6B0F0F]/20 flex flex-col'>           
         <div className='flex items-center gap-4'>
            <img
                src={story.image}
                alt={story.name}
                className='w-14 h-14 rounded-full object-cover'
            />
            <div>
                <h2 className='text-base font-bold text-[#7A120D]'>
                    {story.reviewer_name}
                </h2>
                <h3 className="text-xs text-[#846458] mt-1">
                    {story?.date
                        ? new Date(story.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        })
                        : ""}
                </h3>

            </div>
        </div>
            <div className='flex-1'>
                <div className="flex items-center text-lg mt-2">
                    {(() => {
                        const rating = Number(story?.rating || 0);

                        return [1, 2, 3, 4, 5].map((star) => {
                            return (
                                <span key={star}>
                                    {rating >= star ? (
                                        <FaStar className="text-[#D4A017] text-sm" />
                                    ) : rating >= star - 0.5 ? (
                                        <FaStarHalfAlt className="text-[#D4A017] text-sm" />
                                    ) : (
                                        <FaRegStar className="text-[#D9C7B8] text-sm" />
                                    )}
                                </span>
                            );
                        });
                    })()}
                </div>
                <p className='text-[#7C5A4F] italic text-[14px] mt-2 font-medium md:line-clamp-4 line-clamp-3 min-h-[75px]'>
                    "{getDisplayText()}"
                </p>
                {showButton && (
                    <button
                        onClick={toggleExpand}
                        className='text-[#7A120D] text-xs font-semibold mt-1 hover:text-[#D1A328] transition-colors duration-200 focus:outline-none'
                    >
                        {isExpanded ? 'View Less ↑' : 'View More ↓'}
                    </button>
                )}
            </div>
        </div>
    )
}

export default SuccessStory