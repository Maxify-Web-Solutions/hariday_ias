import React from 'react'
import HeroSection from './HeroSection'
import PopularCourse from './PopularCourse'
import WhyUs from './WhyUs'
import Expert from './Expert'
import SuccessStory from './SuccessStory'
import FreeResources from './FreeResources'
import BannerPages from './BannerPages'
import BannerPage2 from './BannerPage2'
import HomeBlog from './HomeBlog'
import FAQPage from './FAQPage'


const Home = () => {
    return (
        <>
            <div className='bg-[#FDF6EC]'>
                <HeroSection />
                <PopularCourse/>
                <WhyUs/>
                <Expert/>
                <BannerPages/>
                <SuccessStory/>
                <FAQPage/>
                <FreeResources/>
                <HomeBlog/>
                <BannerPage2/>
            </div>
        </>
    )
}

export default Home