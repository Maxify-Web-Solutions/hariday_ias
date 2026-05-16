import React from 'react'
import HeroSection from './HeroSection'
import PopularCourse from './PopularCourse'
import WhyUs from './WhyUs'
import Expert from './Expert'
import SuccessStory from './SuccessStory'
import SelectedStudent from './SelectedStudent'
import FreeResources from './FreeResources'
import Testimonials from './Testimonials'
import BannerPages from './BannerPages'
import BannerPage2 from './BannerPage2'
import HomeBlog from './HomeBlog'


const Home = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-[#FDF6EC] via-[#F2E5DC] to-[#FDF6EC]'>
                <HeroSection />
                <PopularCourse/>
                <WhyUs/>
                <Expert/>
                <BannerPages/>
                <SuccessStory/>
                <SelectedStudent/>
                <FreeResources/>
                <Testimonials/>
                <HomeBlog/>
                <BannerPage2/>
            </div>
        </>
    )
}

export default Home