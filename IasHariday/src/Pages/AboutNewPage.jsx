import React from "react";
import aboutUsNewImage from "../assets/Images/AboutUs.jpg";


const coreValues = [
    {
        title: "Awareness",
        description:
            "We encourage conscious learning, self-reflection, and a deeper understanding of oneself and society.",
    },
    {
        title: "Discipline",
        description:
            "Success in UPSC demands commitment, focus, and the discipline to stay consistent every day.",
    },
    {
        title: "Consistency",
        description:
            "Small efforts repeated daily create extraordinary results. Consistency is the foundation of achievement.",
    },
    {
        title: "Excellence",
        description:
            "We strive for excellence in learning, thinking, and leadership to help aspirants realize their highest potential.",
    },
];

const highlights = [
    {
        title: "Expert Faculty & Personalized Mentorship",
        description:
            "Learn from experienced educators who guide you personally through every stage of your preparation.",
    },
    {
        title: "Comprehensive UPSC Preparation",
        description:
            "Structured courses covering Prelims, Mains, and Interview with integrated strategy for all exams.",
    },
    {
        title: "Daily Current Affairs & Answer Writing Practice",
        description:
            "Stay updated and sharpen your writing skills with daily practice sessions and expert feedback.",
    },
    {
        title: "Regular Mock Tests & Performance Analysis",
        description:
            "Evaluate your progress through frequent tests and detailed performance insights.",
    },
    {
        title: "Student-Centric Learning Environment",
        description:
            "A supportive atmosphere that encourages collaboration, discipline, and growth.",
    },
    {
        title: "Focus on Discipline, Consistency & Strategy",
        description:
            "Build habits and strategies that ensure long-term success in your civil services journey.",
    },
];




const AboutNewPage = () => {
    return (
        <div className="bg-[#FDF6EC] py-4 px-4 md:px-10 lg:px-16">

            <div className="mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* LEFT IMAGE */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="rounded-2xl overflow-hidden shadow-md h-[350px] md:h-[400px] lg:h-[550px] xl:h-[570px]">
                        <img
                            src={aboutUsNewImage}
                            alt="About Hriday IAS"
                            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>

                    {/* decorative glow */}
                    <div className="absolute -inset-2 bg-[#6B0F0F]/10 blur-3xl rounded-3xl -z-10"></div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="w-full lg:w-1/2">

                    {/* TITLE */}
                    <h2 className="text-xl md:text-2xl font-bold text-black leading-tight -mt-4 md:mt-10">
                        About <span className="text-black">Hriday IAS</span>
                    </h2>

                    {/* <div className="w-20 h-1 bg-[#6B0F0F] rounded-full mb-1 mt-1"></div> */}

                    {/* QUOTE CARD */}
                    <div className="bg-white/70 backdrop-blur-md border text-black p-3 rounded-xl shadow-sm mt-3">
                        <p className="italic text-lg leading-relaxed">
                            "In the garden of life, one flower blooms above all others – the flower of awareness."
                        </p>
                    </div>

                    {/* MAIN TEXT */}
                    <div className="space-y-2 text-gray-700 leading-relaxed text-base md:text-lg mt-4">

                        <p className="text-[18px] text-black leading-relaxed">

                            At <span className="font-semibold text-[#6B0F0F]">Hriday IAS</span>, we nurture this flower,
                            cultivating awareness, intelligence, and compassion in every aspirant.
                            Inspired by the wisdom of <span className="text-[#6B0F0F] font-semibold underline"> Osho and Buddha</span> , we recognize that
                            <span className="italic">
                                {" "}<span className="text-[#182769] text-[20px]"> “the ultimate source of all anxiety is the fear of the unknown.”</span>
                            </span>{" "}
                            Our approach to UPSC preparation is not just about acquiring knowledge but
                            about transforming ourselves, embracing the unknown, and discovering our
                            true potential.
                        </p>

                        <div className="">
                            <h3 className="text-xl font-semibold text-black">
                                Join Our <span className="underline">Journey</span>
                            </h3>
                            <p className=" text-black leading-relaxed text-[18px] mt-1.5">
                                At Hriday IAS, we invite you to embark on a path of self-discovery, intellectual growth and civic responsibility. Together, let us explore the depths of human knowledge and emerge as leaders who will shape the future of our nation with awareness, compassion and courage.

                            </p>
                        </div>
                    </div>

                    {/* DIRECTOR CARD */}
                    <div className="mt-3 p-4 rounded-xl bg-[#F5E6D3] border-l-4 border-[#6B0F0F]">
                        <p className="text-sm text-gray-600">Warm Regards</p>
                        <p className="text-xl font-bold text-[#6B0F0F]">
                            Miss Ruksana Khatak
                        </p>
                        <p className="text-gray-700">
                            Founder & Director, Hriday IAS
                        </p>
                    </div>

                </div>
            </div>

            <div className=" mx-auto">
                <div className="text-center mb-10">
                    <p className="text-[#6B0F0F] font-semibold tracking-widest uppercase mt-10 text-xl">
                        Why Students Choose Us
                    </p>
                    <div className="w-24 h-1 bg-[#6B0F0F] mx-auto mt-3 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-[#FFFAF3] border hover:border-[#6B0F0F] p-5 rounded-2xl border-[#F1E2C7] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            {/* Title */}
                            <h3 className="text-xl font-bold text-[#6B0F0F] mb-2 leading-snug">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#7C5A4F] leading-relaxed text-[16px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* OUR CORE VALUES */}
            <div className=" mx-auto mt-8">

                <div className="text-center mb-10">
                    <p className="text-[#6B0F0F] font-semibold tracking-widest uppercase">
                        Our Foundation
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#6B0F0F]">
                        Our Core Values
                    </h2>

                    <p className="text-[#7C5A4F] mt-1 max-w-2xl mx-auto">
                        The principles that guide every student, every mentor,
                        and every step of the Hriday IAS journey.
                    </p>

                    <div className="w-24 h-1 bg-[#6B0F0F] mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    {coreValues.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#F1E2C7] rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#F5E6D3] flex items-center justify-center">
                                <span className="text-[#6B0F0F] text-xl font-bold">
                                    {index + 1}
                                </span>
                            </div>

                            <h3 className="font-bold text-[#6B0F0F] mb-3 text-2xl">
                                {value.title}
                            </h3>

                            <p className="text-[#7C5A4F] leading-relaxed text-[16px]">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default AboutNewPage;