import React, { useState } from "react";
import {
    FaBookOpen,
    FaChevronDown,
    FaClock,
    FaHeadset,
    FaPenNib,
} from "react-icons/fa";

const faqData = [
    {
        q: "Hriday IAS mein kaun se courses available hain?",
        a: "Hum UPSC Foundation, Prelims, Mains, Optional guidance, answer writing aur Interview preparation ke structured programs provide karte hain.",
    },
    {
        q: "Kya online aur offline dono classes milti hain?",
        a: "Haan, aspirants apni convenience ke according online aur offline learning modes choose kar sakte hain.",
    },
    {
        q: "Study material course ke saath included hota hai?",
        a: "Haan, enrolled students ko updated notes, class resources aur exam-oriented study material provide kiya jata hai.",
    },
    {
        q: "Kya regular test series conduct hoti hai?",
        a: "Haan, Prelims aur Mains ke liye regular tests, performance analysis aur improvement feedback diya jata hai.",
    },
    {
        q: "Answer writing practice kaise karwayi jati hai?",
        a: "Students ko structured questions, mentor evaluation aur model approach ke through writing clarity aur presentation improve karwayi jati hai.",
    },
    {
        q: "Doubt clearing support kab milta hai?",
        a: "Classes ke baad aur scheduled doubt sessions mein mentors students ke conceptual aur strategy-related doubts resolve karte hain.",
    },
];

const supportData = [
    {
        icon: <FaBookOpen />,
        title: "Course Guidance",
        text: "Foundation se interview tak complete roadmap.",
    },
    {
        icon: <FaPenNib />,
        title: "Practice Support",
        text: "Tests, evaluation aur answer writing feedback.",
    },
    {
        icon: <FaClock />,
        title: "Flexible Learning",
        text: "Online/offline batches with mentor assistance.",
    },
];

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#FDF6EC] px-5 md:px-10 lg:px-16">
            <div className="">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="w-full font-bold text-black text-[24px] md:text-[36px]">
                        Frequently Asked <span className="text-[#6B0F0F]">Questions</span>
                    </h1>

                    <p className="text-[#7C5A4F] text-sm sm:text-base leading-relaxed mt-3">
                        Find quick answers to the most frequently asked questions about Hriday IAS courses, classroom programs, test series, mentorship, admissions, and preparation strategies.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-6 lg:gap-8 mt-9 md:mt-11 items-start">
                    <aside className="bg-[#FFFAF3] border border-[#F1E2C7] rounded-2xl p-5 md:p-6 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-[#6B0F0F] text-white flex items-center justify-center text-xl">
                            <FaHeadset />
                        </div>

                        <h2 className="text-[#6B0F0F] text-2xl font-bold mt-5">
                            Need Help Choosing?
                        </h2>
                        <p className="text-[#7C5A4F] text-sm md:text-base leading-relaxed mt-3">
                            Agar aapko course, batch timing ya preparation strategy ko lekar
                            confusion hai, mentors aapko right starting point choose karne mein
                            guide karenge.
                        </p>

                        <div className="space-y-4 mt-6">
                            {supportData.map((item) => (
                                <div key={item.title} className="flex gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#FFF4EA] border border-[#F1DED0] text-[#6B0F0F] flex items-center justify-center flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-[#6B0F0F] font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#846458] text-sm leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>

                    <div className="space-y-4">
                        {faqData.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={item.q}
                                    className={`bg-[#FFFAF3] border rounded-2xl shadow-sm transition-all duration-300 overflow-hidden ${isOpen
                                        ? "border-[#D9B8A2] shadow-md shadow-[#6B0F0F]/10"
                                        : "border-[#F1E2C7] hover:shadow-md hover:shadow-[#6B0F0F]/20"
                                        }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggle(index)}
                                        aria-expanded={isOpen}
                                        className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 text-left"
                                    >
                                        <span className="flex items-start gap-3">
                                            <span className="mt-0.5 w-7 h-7 rounded-full bg-[#FFF4EA] border border-[#F1DED0] text-[#6B0F0F] text-xs font-bold flex items-center justify-center flex-shrink-0">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-[#6B0F0F] font-semibold text-base md:text-lg leading-snug">
                                                {item.q}
                                            </span>
                                        </span>

                                        <span
                                            className={`text-[#6B0F0F] transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""
                                                }`}
                                        >
                                            <FaChevronDown />
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="px-5 md:px-6 pb-5 md:pb-6">
                                            <p className="text-[#7C5A4F] text-sm md:text-base leading-relaxed pl-10 border-l-2 border-[#E6C8B4]">
                                                {item.a}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-8 bg-[#6B0F0F] rounded-2xl px-5 md:px-7 py-5 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-md shadow-[#6B0F0F]/20">
                    <div>
                        <h2 className="text-white text-xl md:text-2xl font-bold">
                            Still have a question?
                        </h2>
                        <p className="text-[#F8E6D8] text-sm md:text-base mt-1">
                            Our team will help you understand batches, fees, syllabus and
                            preparation plan.
                        </p>
                    </div>

                    <a
                        href="/contact"
                        className="bg-[#FFFAF3] text-[#6B0F0F] font-semibold px-6 py-3 rounded-full text-center hover:bg-[#F8E6D8] transition-colors duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQPage;
