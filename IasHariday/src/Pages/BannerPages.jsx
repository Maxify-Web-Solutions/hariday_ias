import React from 'react'
import banner from '../assets/Images/BannerIas.png'

const BannerPages = () => {
    return (
        <>
            <div className=''>
                <div className="w-full h-[300px] md:h-[450px] bg-[#f5f5f5] flex items-center justify-center overflow-hidden">
                    <img
                        src={banner}
                        alt="Banner"
                        className="w-full h-full object-fill"
                    />
                </div>
            </div>
        </>
    )
}

export default BannerPages
