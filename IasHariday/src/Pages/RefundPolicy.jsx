import React from 'react'
import RefundImage from '../assets/Images/Refund.jpg'

import { RiRefund2Line } from "react-icons/ri";

import {
    FaMoneyBillWave,
    FaClipboardCheck,
    FaTimesCircle,
    FaExchangeAlt,
} from "react-icons/fa";

import {
    MdPayments,
    MdOutlineSupportAgent,
} from "react-icons/md";

const RefundPolicy = () => {

    return (
        <>
            <div>
                <div>
                    <img src={RefundImage} className='w-full h-[350px] md:h-[500px] object-fit px-2'></img>
                </div>
                <section className="w-full py-10 md:py-16 px-[6px] ">

                    <div className="w-full bg-white rounded-2xl shadow-md p-6 md:p-10 lg:p-14">

                        {/* Heading */}
                        <div className="mb-10">

                            <h1 className="text-3xl md:text-4xl font-bold text-[#6B0F0F] mb-4">
                                Refund Policy
                            </h1>

                            <p className="text-[#7C5A4F] text-base md:text-lg leading-relaxed">
                                At Hriday IAS, we strive to provide high-quality educational
                                services and maintain transparency regarding payments and refunds.
                                Please read our refund policy carefully before enrolling in any course
                                or service offered through our platform.
                            </p>

                        </div>

                        {/* Content */}
                        <div className="space-y-10">

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <MdPayments />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Course Enrollment & Payments
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    All payments made for course enrollment, test series,
                                    mentorship programs, or educational services are subject
                                    to the terms mentioned in this refund policy.
                                    Students are advised to carefully review course details,
                                    duration, and payment information before completing enrollment.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <RiRefund2Line />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Refund Eligibility
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    Refund requests may be considered only under specific circumstances,
                                    such as duplicate payments or technical payment failures.
                                    Requests must be submitted within the specified refund period.
                                    Hriday IAS reserves the right to verify all refund claims
                                    before approval.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <FaTimesCircle />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Non-Refundable Services
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    Once access to course materials, recorded lectures,
                                    live classes, or downloadable content has been provided,
                                    the payment will generally be considered non-refundable.
                                    This policy helps maintain fairness and protects
                                    digital educational resources.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <FaClipboardCheck />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Refund Request Process
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    To request a refund, users must contact Hriday IAS support
                                    with payment details, transaction proof, and the reason for
                                    the refund request. All requests will be reviewed carefully.
                                    Incomplete or unverifiable requests may not be processed.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <FaExchangeAlt />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Processing Time
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    Approved refunds may take several business days to process,
                                    depending on the payment method and banking procedures.
                                    Hriday IAS is not responsible for delays caused by banks
                                    or payment gateways. Processing timelines may vary
                                    during holidays or technical maintenance periods.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <FaMoneyBillWave />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Cancellation Policy
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    Course cancellations after enrollment may not be eligible
                                    for a refund once educational services have been accessed
                                    or classes have commenced. Students are encouraged to
                                    contact support before enrollment for any clarification
                                    regarding courses or policies.
                                </p>

                            </div>

                            {/* Section */}
                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="p-2 rounded-full bg-[#FDF6EC] text-[#6B0F0F] text-xl">
                                        <MdOutlineSupportAgent />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-semibold text-[#6B0F0F]">
                                        Contact Support
                                    </h2>

                                </div>

                                <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                    If you have any questions regarding refunds, payments,
                                    or cancellations, please contact the Hriday IAS support team
                                    through our official communication channels.
                                    Our team will make every effort to respond
                                    and assist you as quickly as possible.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

            </div>
        </>
    )
}

export default RefundPolicy