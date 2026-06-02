import React from 'react'
import banner from '../assets/Images/Banner12345.png'

const BannerPages = () => {
    return (
        <>
            <div className=''>
                <div className="w-full h-[200px] md:h-[500px] bg-[#f5f5f5] flex items-center justify-center overflow-hidden">
                    <img
                        src={banner}
                        alt="Banner"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </>
    )
}

export default BannerPages
