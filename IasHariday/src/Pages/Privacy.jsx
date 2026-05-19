import React from 'react'
import PrivacyImage from '../assets/Images/privacy1.jpg'
import { RiSettings2Line } from "react-icons/ri";
import { FcLock } from "react-icons/fc";
import { LiaCookieSolid } from "react-icons/lia";
import { LuTarget } from "react-icons/lu";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";


const Privacy = () => {
    return (
        <>
            <div className=''>
                <div className='rounded-full'>
                    <img src={PrivacyImage} className='w-full h-[320px] md:h-[500px] object-fit px-2'></img>
                </div>
                <section className="w-full py-5 px-[6px]">

                    <div className="w-full bg-white rounded-2xl shadow-md p-6 md:p-10 lg:p-14">

                        {/* Heading */}
                        <div className="mb-10">

                            <h1 className="text-2xl md:text-3xl font-bold text-[#6B0F0F] mb-4">
                                Privacy Policy
                            </h1>

                            <p className="text-[#7C5A4F] text-base md:text-lg leading-relaxed">
                                At Hriday IAS, we are committed to protecting the privacy and
                                personal information of our students, visitors, and users.
                                This Privacy Policy explains how we collect, use, store,
                                and safeguard your information when you interact with our
                                website and educational services.
                            </p>

                        </div>

                        {/* Content */}
                        <div className="space-y-8">

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <FaDatabase />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Information We Collect
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    We may collect personal information including your full name,
                                    email address, phone number, course interests, and any details
                                    submitted through inquiry or registration forms. We may also
                                    collect website usage information such as browser type, device
                                    information, and browsing behavior to improve website performance
                                    and user experience.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <RiSettings2Line />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        How We Use Your Information
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    The information collected is used to provide educational services,
                                    respond to inquiries, share important notifications, improve our
                                    website, and communicate updates regarding courses, examinations,
                                    study materials, and mentorship programs.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <FcLock />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Data Security & Protection
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    Hriday IAS takes appropriate security measures to protect your
                                    personal information from unauthorized access, misuse, or disclosure.
                                    While we strive to maintain complete security, no digital platform
                                    can guarantee absolute protection of data shared online.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <LiaCookieSolid />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Cookies & Analytics
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    Our website may use cookies and analytics tools to understand
                                    visitor behavior, improve website functionality, and enhance user
                                    experience. Users can choose to disable cookies through browser settings.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <LuTarget />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Student Communication
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    By submitting your information on our website, you agree to receive
                                    communication from Hriday IAS regarding courses, exam notifications,
                                    updates, mentorship programs, and educational content through calls,
                                    emails, SMS, WhatsApp, or other communication channels.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <MdOutlinePrivacyTip />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Policy Updates
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    Hriday IAS reserves the right to update or modify this Privacy Policy
                                    at any time. Any changes will be reflected on this page, and users
                                    are encouraged to review the policy periodically.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <FcContacts />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Contact Us
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    If you have any questions, concerns, or requests regarding this
                                    Privacy Policy or your personal information, you may contact
                                    Hriday IAS through our official support and communication channels.
                                </p>


                            </div>

                        </div>

                    </div>

                </section>
            </div>
        </>
    )
}

export default Privacy