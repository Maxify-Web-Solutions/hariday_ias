import React from 'react'
import logo from '../assets/Images/logoIas.png'
import { Link } from "react-router-dom"
import Sidebar from './Sidebar'

const Navbar = () => {
    return (
        <div className='bg-[#FDF6EC] px-8 fixed top-0 left-0 w-full  z-50 shadow-sm'>
            <div className="flex justify-between items-center py-2">
                {/* Logo + Heading */}
                <Link to="/">
                    <div className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-14 h-14 object-contain"
                        />
                        <h3 className="text-2xl font-bold text-[#6B0F0F]">
                            Hriday IAS
                        </h3>
                    </div></Link>
                {/* Navbar */}
                <Sidebar />
                <div className='hidden md:block'>
                    <ul className="flex items-center gap-6 text-[15px]">
                        <Link to="/courses" className='text-[#7C604F]'>Courses</Link>
                        <Link to="/blog" className='text-[#7C604F]'>Blog</Link>
                        <Link to="/about" className='text-[#7C604F]'>About</Link>
                        <Link to="/contact" className='text-[#7C604F]'>Contact</Link>
                    </ul>
                </div>

            </div>
            <hr />
        </div>
    )
}

export default Navbar

