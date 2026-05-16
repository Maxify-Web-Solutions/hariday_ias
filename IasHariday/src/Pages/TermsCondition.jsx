import React from 'react'
import conditionImage from '../assets/Images/Terms.jpg'


import {
    FaBookOpen,
    FaUserShield,
    FaExclamationCircle,
    FaLaptop,
    FaBan,
    FaGavel,
} from "react-icons/fa";

import {
    MdOutlinePayments,
    MdOutlineSecurity,
    MdSupportAgent,
} from "react-icons/md";


const TermsCondition = () => {
    return (
        <>
            <div>
                <div className='mt-16'>
                    <img src={conditionImage} className='w-full h-[350px] md:[550px] object-fit px-2'></img>
                </div>
                <section className="w-full py-10 md:py-16 px-[6px] ">

                    <div className="w-full bg-white rounded-2xl shadow-md p-6 md:p-10 lg:p-14">

                        {/* Heading */}
                        <div className="mb-10">
                            <h1 className="text-3xl md:text-4xl font-bold text-[#6B0F0F] mb-4">
                                Terms & Conditions
                            </h1>

                            <p className="text-[#7C5A4F] text-base md:text-lg leading-relaxed">
                                Welcome to Hriday IAS. By accessing our website, enrolling in our
                                courses, or using any of our educational services, you agree to
                                comply with and be bound by the following Terms & Conditions.
                                These terms are designed to maintain transparency, fairness,
                                discipline, and a secure learning environment for every aspirant.
                            </p>

                        </div>

                        {/* Content */}
                        <div className="space-y-10">

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <FaBookOpen />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Educational Services
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    Hriday IAS provides educational content, mentorship,
                                    live classes, test series, study materials, and guidance
                                    programs for UPSC and State Competitive Exam preparation.
                                    All services are intended solely for educational purposes.
                                    Students are expected to use the provided resources responsibly
                                    and maintain discipline throughout their learning journey.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <FaUserShield />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        User Responsibilities
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    Users are responsible for providing accurate information
                                    during registration and maintaining the confidentiality
                                    of their login credentials. Any misuse of accounts,
                                    unauthorized sharing of course materials, or disruptive
                                    behavior may lead to suspension or termination of access
                                    without prior notice.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <MdOutlinePayments />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Payments & Fees
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    All course fees, mentorship charges, and other payments
                                    must be completed through approved payment methods.
                                    Students are advised to verify course details before
                                    making payments. Hriday IAS reserves the right to
                                    revise pricing, course structure, or offerings at any time
                                    without affecting previously confirmed enrollments.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <FaLaptop />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Online Learning Access
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    Access to digital courses, recorded lectures,
                                    PDFs, mock tests, and other online resources
                                    is provided only to enrolled students.
                                    Sharing or reproducing educational materials
                                    without permission is strictly prohibited and
                                    may result in legal action or account termination.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <MdOutlineSecurity />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Privacy & Data Protection
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    Hriday IAS values user privacy and takes reasonable
                                    measures to safeguard personal information.
                                    By using our services, users agree to the collection
                                    and use of information as described in our Privacy Policy.
                                    We continuously work to improve security and user safety.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <FaBan />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Restricted Activities
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    Users must not engage in activities that may harm
                                    the platform, other students, or Hriday IAS operations.
                                    Spamming, abusive language, hacking attempts,
                                    unauthorized content distribution, or misuse of resources
                                    are strictly prohibited and may lead to permanent restrictions.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <FaGavel />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Policy Changes
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    Hriday IAS reserves the right to modify,
                                    update, or revise these Terms & Conditions
                                    at any time without prior notice.
                                    Continued use of our website or services
                                    after changes indicates acceptance of the updated terms.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <MdSupportAgent />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Contact & Support
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    If you have any questions regarding these
                                    Terms & Conditions, payments, enrollments,
                                    or educational services, you may contact
                                    the Hriday IAS support team through our
                                    official communication channels for assistance.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

            </div>
        </>
    )
}

export default TermsCondition