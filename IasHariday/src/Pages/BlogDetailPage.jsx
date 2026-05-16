import React from "react";
import { useParams } from "react-router-dom";
import { MdOutlineDateRange } from "react-icons/md";

import Answer from "../assets/Images/Answer.png";
import currentAffair from "../assets/Images/CurrentAffairs.png";
import notification from "../assets/Images/Notification.png";
import planning from "../assets/Images/Planning.png";
import Rank from "../assets/Images/Rank.png";
import imp from "../assets/Images/TopicImp.png";

const blogData = [
    {
        image: currentAffair,
        highlight: "Current Affairs",
        title: "Top Current Affairs for UPSC 2024",
        date: "12 May 2026",
        description:
            "Stay updated with the most important national and international current affairs for UPSC and State PCS preparation.",
        fullContent:
            "Current affairs play a crucial role in UPSC and State PCS examinations. Aspirants should regularly follow important national and international events, government schemes, economic updates, international relations, science & technology developments, and environmental issues. Consistent revision and answer writing practice based on current affairs can significantly improve preparation quality and exam performance.",
    },
    {
        image: planning,
        highlight: "Preparation Strategy",
        title: "Ultimate Strategy to Crack UPSC in 1 Year",
        date: "15 May 2026",
        description:
            "Learn a complete one-year preparation roadmap with smart study planning, revision techniques, and time management.",
        fullContent:
            "A well-structured preparation strategy is essential for UPSC success. Students should divide their preparation into phases including syllabus completion, revision, mock tests, and answer writing practice. Time management, discipline, consistency, and regular evaluation are key elements for achieving success within one year of preparation.",
    },
    {
        image: Answer,
        highlight: "Answer Writing",
        title: "Answer Writing Tips for UPSC Mains",
        date: "18 May 2026",
        description:
            "Improve your answer writing skills with expert strategies, structure techniques, and presentation methods for UPSC Mains.",
        fullContent:
            "Answer writing is one of the most important aspects of UPSC Mains preparation. Aspirants should focus on structure, clarity, relevant examples, balanced viewpoints, and proper conclusion writing. Daily answer writing practice helps improve speed, presentation, and analytical thinking.",
    },
    {
        image: notification,
        highlight: "Latest Notification",
        title: "UPSC Prelims 2026 Notification Released",
        date: "20 May 2026",
        description:
            "Check the latest UPSC Prelims notification, important dates, eligibility criteria, and application details.",
        fullContent:
            "UPSC has officially released the Civil Services Examination notification for 2026. Candidates should carefully review eligibility criteria, important dates, syllabus updates, exam patterns, and application procedures before submitting their forms.",
    },
    {
        image: Rank,
        highlight: "Toppers Strategy",
        title: "How AIR-5 Cracked UPSC",
        date: "22 May 2026",
        description:
            "Discover the preparation strategy, study routine, and success habits followed by a UPSC topper.",
        fullContent:
            "Every UPSC topper follows a disciplined and strategic preparation approach. Consistency, revision, current affairs analysis, mock tests, and answer writing are among the common habits followed by successful candidates.",
    },
    {
        image: imp,
        highlight: "Indian Polity",
        title: "Important Topics in Indian Polity",
        date: "25 May 2026",
        description:
            "Explore the most important Indian Polity topics frequently asked in UPSC and State PCS examinations.",
        fullContent:
            "Indian Polity is one of the most scoring subjects in UPSC preparation. Aspirants should focus on constitutional provisions, fundamental rights, parliament, judiciary, executive, constitutional bodies, and current political developments for comprehensive preparation.",
    },
];

const BlogDetailPage = () => {
    const { id } = useParams();

    const blog = blogData[Number(id)];

    if (!blog) {
        return (
            <div className="flex items-center justify-center min-h-screen text-xl text-gray-600">
                Blog not found
            </div>
        );
    }

    return (
        <section className="w-full min-h-screen bg-[#F3E6DD] py-10 px-5 md:px-10 lg:px-20 mt-16">

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                {/* LEFT SIDE - MAIN BLOG (70%) */}
                <div className="lg:w-[70%] w-full bg-[#FFFAF3] p-4 shadow-md overflow-hidden">

                    {/* Image */}
                    <div className="w-full h-[250px] md:h-[450px]">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-10">

                        <button className="bg-[#ca8989] text-white px-4 py-2 rounded-md text-sm font-semibold">
                            {blog.highlight}
                        </button>

                        <h1 className="text-3xl md:text-5xl font-bold text-[#6B0F0F] mt-5 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex items-center gap-2 mt-4 text-[#7C5A4F]">
                            <MdOutlineDateRange className="text-2xl" />
                            <p>{blog.date}</p>
                        </div>

                        <p className="text-[#7C5A4F] text-lg leading-relaxed mt-6">
                            {blog.description}
                        </p>

                        <p className="text-[#7C5A4F] text-base md:text-lg leading-loose mt-8">
                            {blog.fullContent}
                        </p>

                    </div>
                </div>

                {/* RIGHT SIDE - OTHER BLOGS (30%) */}
                <div className="lg:w-[30%] w-full flex flex-col gap-4">

                    <h2 className="text-xl font-bold text-[#6B0F0F] mb-2">
                        More Articles
                    </h2>

                    {blogData
                        .filter((_, index) => index !== Number(id))
                        .map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer"
                            >
                                <h3 className="text-md font-semibold text-[#6B0F0F] line-clamp-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                    {item.description}
                                </p>

                                <p className="text-xs text-gray-400 mt-2">
                                    {item.date}
                                </p>
                            </div>
                        ))
                    }

                </div>

            </div>

        </section>
    );
};

export default BlogDetailPage;