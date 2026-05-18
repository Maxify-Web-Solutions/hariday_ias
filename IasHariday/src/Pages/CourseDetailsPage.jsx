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
        teacherImage: image1,
        courseTitle: "UPSC Ethics & Geography Batch",
        description:
            "Complete preparation for Ethics and Geography with answer writing practice and mentorship.",
        price: "₹12,999",
        discountPrice: "₹8,999",
        teacher: "Ruksana Ma'am",
        duration: "12 Months",
        students: "15,000+",
        experience: "4+ Years Experience",
    },

    {
        id: 2,
        courseImage: UpscMain,
        teacherImage: image2,
        courseTitle: "Environment & Current Affairs",
        description:
            "Comprehensive course covering Environment, Ecology, IR and Current Affairs for UPSC.",
        discountPrice: "₹9,999",
        price: "₹11,499",
        teacher: "Rishabh Sharma Sir",
        duration: "10 Months",
        students: "12,000+",
        experience: "5+ Years Experience",
    },

    {
        id: 3,
        courseImage: UppcsEx,
        teacherImage: image3,
        courseTitle: "Polity & Economics Masterclass",
        description:
            "Advanced UPSC preparation course for Polity, Governance and Economics.",
        discountPrice: "₹8,999",
        price: "₹11,999",
        teacher: "Chand Kubba Sir",
        duration: "14 Months",
        students: "18,000+",
        experience: "10+ Years Experience",
    },

    {
        id: 4,
        courseImage: SSCEx,
        teacherImage: image4,
        courseTitle: "History Optional & GS",
        description:
            "Detailed History preparation for GS and Optional with notes and test series.",
        discountPrice: "₹8,999",
        price: "₹10,999",
        teacher: "Satyarth Sir",
        duration: "15 Months",
        students: "20,000+",
        experience: "20+ Years Experience",
    },

    {
        id: 5,
        courseImage: UpscPre,
        teacherImage: image5,
        courseTitle: "CSAT Complete Preparation",
        description:
            "Focused CSAT preparation including aptitude, reasoning and comprehension.",
        discountPrice: "₹8,999",
        price: "₹10,999",
        teacher: "Arvidn Sir",
        duration: "8 Months",
        students: "10,000+",
        experience: "15+ Years Experience",
    },

    {
        id: 6,
        courseImage: UpscMain,
        teacherImage: image6,
        courseTitle: "Hindi Literature Optional",
        description:
            "Structured Hindi Literature course with previous year analysis and mentorship.",
        discountPrice: "₹8,999",
        price: "₹10,999",
        teacher: "Ashok Singh Sir",
        duration: "16 Months",
        students: "8,000+",
        experience: "22+ Years Experience",
    },
    {
        id: 7,
        courseImage: UpscMain,
        teacherImage: image6,
        courseTitle: "IBPS PO",
        description:
            "Complete IBPS PO preparation with banking awareness.",
        discountPrice: "₹8,999",
        price: "₹10,999",
        teacher: "Ashok Singh Sir",
        duration: "16 Months",
        students: "8,000+",
        experience: "22+ Years Experience",
    },
    {
        id: 8,
        courseImage: UpscMain,
        teacherImage: image6,
        courseTitle: "Banking Exams",
        description:
            "All-in-one banking preparation course for SBI.",
        discountPrice: "₹8,999",
        price: "₹10,999",
        teacher: "Ashok Singh Sir",
        duration: "16 Months",
        students: "8,000+",
        experience: "22+ Years Experience",
    },
];

const CourseDetailsPage = () => {
    const { id } = useParams();

    const course = courseData.find(
        (item) => item.id === parseInt(id)
    );

    /* Safety Check */
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

                {/* Left Side - Course Image */}
                <div className="">
                    <img
                        src={course.courseImage}
                        alt={course.courseTitle}
                        className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
                    />
                </div>

                {/* Right Side - Course Details */}
                <div className="" >
                    {/* Course Title */}
                    <h1 className="text-2xl md:text-4xl font-bold text-[#6B0F0F] leading-relaxed">
                        {course.courseTitle}
                    </h1>

                    {/* Description */}
                    <p className="mt-3 text-[#7C604F] text-lg leading-relaxed">
                        {course.description}
                    </p>

                    {/* Price */}
                    <div className="mt-6 flex gap-1">
                        <h2 className="text-3xl font-bold text-black">{course.discountPrice}</h2>
                        <h3 className="line-through text-lg font-semibold">{course.price}</h3>
                    </div>

                    {/* Teacher Section */}
                    <div className="flex items-center gap-4 mt-5 bg-white p-2 rounded-sm shadow-sm">

                        <img
                            src={course.teacherImage}
                            alt={course.teacher}
                            className="h-24 w-24 rounded-xl object-cover border-2 border-[#6B0F0F]"
                        />

                        <div>
                            <h3 className="text-xl font-bold text-[#6B0F0F]">
                                {course.teacher}
                            </h3>

                            <p className="text-[#7C604F] mt-1">
                                Senior UPSC Mentor
                            </p>

                            <p className="text-sm text-[#7C604F] mt-1">
                                {course.experience}
                            </p>
                        </div>
                    </div>

                    {/* Extra Information */}
                    <div className="flex flex-wrap gap-10 mt-5">
                        <div className="bg-white px-6 py-4 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-2xl text-[#6B0F0F]">
                                {course.duration}
                            </h4>
                            <p className="text-[#7C604F] mt-1">
                                Course Duration
                            </p>
                        </div>
                        <div className="bg-white px-6 py-4 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-2xl text-[#6B0F0F]">
                                {course.students}
                            </h4>
                            <p className="text-[#7C604F] mt-1">
                                Students Enrolled
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;