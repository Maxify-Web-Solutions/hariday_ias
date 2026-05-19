import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import ImageFaq from '../assets/Images/FaqImage.webp'


const faqData = [
    {
        question: "What courses are offered by Hriday IAS?",
        answer:
            "Hriday IAS offers comprehensive preparation programs for UPSC Civil Services Examination and various State PCS examinations including Prelims, Mains, Interview Guidance, Test Series, and Mentorship Programs.",
    },

    {
        question: "Do you provide both online and offline classes?",
        answer:
            "No, Hriday IAS provides only offline learning programs so students can prepare according to their convenience and learning preferences.",
    },


    {
        question: "How can I enroll in a course?",
        answer:
            "You can enroll through our official website by selecting your preferred course and completing the registration and payment process.",
    },

    {
        question: "Does Hriday IAS provide study materials?",
        answer:
            "Yes, we provide structured study materials, notes, current affairs content, mock tests, and answer writing practice materials for effective preparation.",
    },

    {
        question: "Is mentorship available for students?",
        answer:
            "Yes, Hriday IAS provides personalized mentorship and guidance sessions to help aspirants improve strategy, consistency, and performance.",
    },

    {
        question: "Do you provide current affairs preparation?",
        answer:
            "Yes, daily current affairs updates, analysis, and important exam-oriented discussions are regularly provided for UPSC and State PCS aspirants.",
    },

    {
        question: "Can beginners join Hriday IAS courses?",
        answer:
            "Absolutely. Our courses are designed for both beginners and experienced aspirants with structured learning and step-by-step guidance.",
    },

    {
        question: "What makes Hriday IAS different from other institutes?",
        answer:
            "Hriday IAS focuses on quality mentorship, student-centric learning, disciplined preparation, personalized guidance, and result-oriented strategies.",
    },

    {
        question: "How can I contact Hriday IAS support?",
        answer:
            "You can contact Hriday IAS through our official website, phone support, email, or social media channels for any queries or assistance.",
    },
];

const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div>
                <div className=''>
                    <img src={ImageFaq} className='w-full h-[350px] md:h-[550px] md:object-fit px-2 rounded-lg'></img>
                </div>
                <section className="w-full py-10 px-5 bg-[#FDF6EC]">
                    <div className="w-full lg:w-[60%] mx-auto">
                        {/* Heading */}
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-4xl font-bold text-[#6B0F0F]">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-[#7C5A4F] mt-4 text-base md:text-lg leading-relaxed">
                                Find answers to the most common questions related to
                                Hriday IAS courses, mentorship, preparation strategy,
                                enrollment process, and learning support.
                            </p>
                        </div>
                        {/* FAQ */}
                        <div className="space-y-5">
                            {faqData.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300"
                                >
                                    {/* Question */}
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between text-left p-5 md:p-6"
                                    >
                                        <h3 className="text-lg md:text-xl font-semibold text-[#6B0F0F] pr-5">
                                            {item.question}
                                        </h3>
                                        <div className="text-[#6B0F0F] text-lg">
                                            {openIndex === index ? <FaMinus /> : <FaPlus />}
                                        </div>
                                    </button>
                                    {/* Answer */}
                                    <div
                                        className={`transition-all duration-300 overflow-hidden ${openIndex === index
                                            ? "max-h-96 opacity-100 pb-5 px-5 md:px-6"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-[#7C5A4F] leading-relaxed text-sm md:text-base">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default Faq;