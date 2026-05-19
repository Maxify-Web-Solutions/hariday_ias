import React from "react";
import { useParams } from "react-router-dom";

/* Teacher Images */
import image1 from "../assets/Images/image1.png";
import image2 from "../assets/Images/image2.png";
import image3 from "../assets/Images/image3.png";
import image4 from "../assets/Images/image4.png";
import image5 from "../assets/Images/image5.png";
import image6 from "../assets/Images/image6.png";

/* Course Images */
import UpscPre from "../assets/Images/UPSCPre.png";
import UpscMain from "../assets/Images/UPSCMain.png";
import UppcsEx from "../assets/Images/UPPCS.png";
import SSCEx from "../assets/Images/SSCExam.png";

const courseData = [
    {
        id: 1,
        courseImage: UpscPre,
        subjects: [
            "Ethics",
            "Geography",
            "Answer Writing",
            "Current Affairs",
            "Mock Tests",
        ],

        teachers: [
            {
                name: "Ruksana Ma'am",
                designation: "Ethics Faculty",
                experience: "4+ Years Experience",
                image: image1,
            },
            {
                name: "Rishabh Sharma Sir",
                designation: "Geography Expert",
                experience: "6+ Years Experience",
                image: image2,
            },
        ],

        courseTitle: "UPSC Ethics & Geography Batch",
        description:
            "Complete preparation for Ethics and Geography with comprehensive classroom programs, answer writing practice, weekly mock tests, personalized mentorship, current affairs discussions, and strategic guidance designed to help aspirants excel in both Prelims and Mains examination.",
        price: "₹12,999",
        discountPrice: "₹8,999",
        duration: "12 Months",
        students: "15,000+",
    },

    {
        id: 2,
        courseImage: UpscMain,
        subjects: [
            "Environment",
            "Ecology",
            "International Relations",
            "Current Affairs",
            "Answer Writing",
        ],

        teachers: [
            {
                name: "Rishabh Sharma Sir",
                designation: "Environment Faculty",
                experience: "5+ Years Experience",
                image: image2,
            },
            {
                name: "R.K Jha Sir",
                designation: "Current Affairs Expert",
                experience: "7+ Years Experience",
                image: image3,
            },
        ],

        courseTitle: "Environment & Current Affairs",
        description:
            "Comprehensive course covering Environment, Ecology, International Relations, and Current Affairs with in-depth conceptual learning, daily news analysis, expert mentorship, answer writing practice, and regular mock tests designed for UPSC Prelims and Mains preparation.",
        discountPrice: "₹9,999",
        price: "₹11,499",
        duration: "10 Months",
        students: "12,000+",
    },

    {
        id: 3,
        courseImage: UppcsEx,
        subjects: [
            "Polity",
            "Governance",
            "Economics",
            "Constitution",
            "Current Affairs",
        ],

        teachers: [
            {
                name: "R.K Jha Sir",
                designation: "Polity Faculty",
                experience: "10+ Years Experience",
                image: image3,
            },
            {
                name: "Chand Kubba Sir",
                designation: "Economics Mentor",
                experience: "8+ Years Experience",
                image: image4,
            },
        ],

        courseTitle: "Polity & Economics Masterclass",
        description:
            "Advanced UPSC preparation course for Polity, Governance, and Economics featuring detailed concept clarity, constitutional analysis, economic understanding, answer writing practice, current affairs integration, and expert mentorship for Prelims and Mains success.",
        discountPrice: "₹8,999",
        price: "₹11,999",
        duration: "14 Months",
        students: "18,000+",
    },

    {
        id: 4,
        courseImage: SSCEx,
        subjects: [
            "Ancient History",
            "Medieval History",
            "Modern History",
            "GS Preparation",
            "Test Series",
        ],

        teachers: [
            {
                name: "Chand Kubba Sir",
                designation: "History Faculty",
                experience: "20+ Years Experience",
                image: image4,
            },
            {
                name: "Arvind Sir",
                designation: "GS Mentor",
                experience: "9+ Years Experience",
                image: image5,
            },
        ],

        courseTitle: "History Optional & GS",
        description:
            "Detailed History preparation for General Studies and Optional subjects with comprehensive notes, conceptual clarity, chronological analysis, answer writing practice, regular mock tests, and expert mentorship for UPSC Prelims and Mains.",
        discountPrice: "₹8,999",
        price: "₹10,999",
        duration: "15 Months",
        students: "20,000+",
    },

    {
        id: 5,
        courseImage: UpscPre,
        subjects: [
            "Aptitude",
            "Logical Reasoning",
            "Comprehension",
            "Decision Making",
            "Quantitative Techniques",
        ],

        teachers: [
            {
                name: "Arvind Sir",
                designation: "CSAT Faculty",
                experience: "15+ Years Experience",
                image: image5,
            },
            {
                name: "Ruksana Ma'am",
                designation: "Reasoning Expert",
                experience: "6+ Years Experience",
                image: image1,
            },
        ],

        courseTitle: "CSAT Complete Preparation",
        description:
            "Focused CSAT preparation program covering aptitude, logical reasoning, quantitative techniques, decision making, and reading comprehension with practice sessions, shortcut techniques, mock tests, and expert guidance for UPSC Prelims.",
        discountPrice: "₹8,999",
        price: "₹10,999",
        duration: "8 Months",
        students: "10,000+",
    },

    {
        id: 6,
        courseImage: UpscMain,
        subjects: [
            "Hindi Literature",
            "Literary Analysis",
            "Essay Writing",
            "PYQ Discussion",
            "Answer Writing",
        ],

        teachers: [
            {
                name: "Ashok Singh Sir",
                designation: "Hindi Literature Mentor",
                experience: "22+ Years Experience",
                image: image6,
            },
            {
                name: "Rishabh Sharma Sir",
                designation: "Answer Writing Expert",
                experience: "12+ Years Experience",
                image: image2,
            },
        ],

        courseTitle: "Hindi Literature Optional",
        description:
            "Structured Hindi Literature course with comprehensive syllabus coverage, previous year question analysis, detailed literary discussions, answer writing practice, personalized mentorship, and strategic guidance for UPSC Optional preparation.",
        discountPrice: "₹8,999",
        price: "₹10,999",
        duration: "16 Months",
        students: "8,000+",
    },

    {
        id: 7,
        courseImage: UpscMain,
        subjects: [
            "Quantitative Aptitude",
            "Reasoning",
            "English",
            "Banking Awareness",
            "Current Affairs",
        ],

        teachers: [
            {
                name: "Ashok Singh Sir",
                designation: "Banking Faculty",
                experience: "22+ Years Experience",
                image: image6,
            },
            {
                name: "R.K Jha Sir",
                designation: "Quant Expert",
                experience: "11+ Years Experience",
                image: image3,
            },
        ],

        courseTitle: "IBPS PO",
        description:
            "Complete IBPS PO preparation course covering quantitative aptitude, reasoning, English language, banking awareness, current affairs, mock tests, interview guidance, and shortcut techniques designed for competitive banking examinations.",
        discountPrice: "₹8,999",
        price: "₹10,999",
        duration: "16 Months",
        students: "8,000+",
    },

    {
        id: 8,
        courseImage: UpscMain,
        subjects: [
            "SBI Preparation",
            "Reasoning",
            "Quantitative Aptitude",
            "English",
            "Interview Preparation",
        ],

        teachers: [
            {
                name: "Ashok Singh Sir",
                designation: "Banking Mentor",
                experience: "22+ Years Experience",
                image: image6,
            },
            {
                name: "Chand Kubba Sir",
                designation: "SBI Specialist",
                experience: "10+ Years Experience",
                image: image4,
            },
        ],

        courseTitle: "Banking Exams",
        description:
            "All-in-one banking preparation course for SBI exams covering quantitative aptitude, reasoning, English language, banking awareness, current affairs, mock tests, interview preparation, and speed-building techniques for complete exam readiness.",
        discountPrice: "₹8,999",
        price: "₹10,999",
        duration: "16 Months",
        students: "8,000+",
    },
];

const CourseDetailsPage = () => {
    const { id } = useParams();

    const course = courseData.find(
        (item) => item.id === parseInt(id)
    );

    if (!course) {
        return (
            <div className="text-center mt-20 text-3xl font-bold">
                Course Not Found
            </div>
        );
    }

    return (
        <div className="bg-[#FDF6EC] min-h-screen px-5 md:px-10 lg:px-28 py-12 mt-16">

            {/* Main Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side */}
                <div>
                    <img
                        src={course.courseImage}
                        alt={course.courseTitle}
                        className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
                    />
                </div>

                {/* Right Side */}
                <div>

                    {/* Title */}
                    <h1 className="text-2xl md:text-4xl font-bold text-[#6B0F0F] leading-relaxed">
                        {course.courseTitle}
                    </h1>

                    {/* Description */}
                    <p className="mt-3 text-[#7C604F] text-lg leading-relaxed">
                        {course.description}
                    </p>

                    {/* Price */}
                    <div className="mt-6 flex gap-2 items-center">
                        <h2 className="text-3xl font-bold text-black">
                            {course.discountPrice}
                        </h2>

                        <h3 className="line-through text-lg font-semibold text-[#7C604F]">
                            {course.price}
                        </h3>
                    </div>

                    {/* Teachers Section */}
                    <div className="flex flex-wrap gap-4 mt-5">

                        {course.teachers.map((teacher, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-white p-2 rounded-xl shadow-sm flex-1 min-w-[260px]"
                            >

                                <img
                                    src={teacher.image}
                                    alt={teacher.name}
                                    className="h-20 w-20 rounded-xl object-cover border border-[#6B0F0F]"
                                />

                                <div>
                                    <h3 className="text-lg font-bold text-[#6B0F0F]">
                                        {teacher.name}
                                    </h3>

                                    <p className="text-sm text-[#7C604F] mt-1">
                                        {teacher.designation}
                                    </p>

                                    <p className="text-xs text-[#7C604F] mt-1">
                                        {teacher.experience}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Extra Information */}
                    <div className="flex flex-nowrap sm:flex-wrap gap-4 sm:gap-10 mt-5">
                        <div className="bg-white px-2 py-4 rounded-2xl shadow-sm flex-1 text-center">
                            <h4 className="font-bold text-2xl text-[#6B0F0F]">
                                {course.duration}
                            </h4>

                            <p className="text-[#7C604F] mt-1">
                                Course Duration
                            </p>
                        </div>
                        <div className="bg-white px-4 py-4 rounded-2xl shadow-sm flex-1 text-center">
                            <h4 className="font-bold text-2xl text-[#6B0F0F]">
                                {course.students}
                            </h4>
                            <p className="text-[#7C604F] mt-1">
                                Students Enrolled
                            </p>
                        </div>
                    </div>
                    {/* Subjects Section */}
                </div>
                    <div className="mt-1">

                        <h2 className="text-2xl font-bold text-[#6B0F0F] mb-4">
                            Subjects Included
                        </h2>

                        <div className="flex flex-wrap gap-3">

                            {course.subjects.map((subject, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-[#6B0F0F] text-[#6B0F0F] px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                                >
                                    {subject}
                                </div>
                            ))}

                        </div>
                    </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;