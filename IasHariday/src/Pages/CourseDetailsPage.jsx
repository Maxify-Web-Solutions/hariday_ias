import React, { useEffect } from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    useParams
} from "react-router-dom";

import {
    getSingleCourse
} from "../Redux/Slicer/courseSlice";

import {
    Clock3,
    Globe,
    CalendarDays,
    BookOpen,
    CheckCircle2,
    PlayCircle,
    Users,
    Award,
    IndianRupee,
    Sparkles
} from "lucide-react";

const CourseDetailsPage = () => {

    const dispatch = useDispatch();

    const { singleCourse, loading } = useSelector(
        (state) => state.course
    );

    const { id } = useParams();

    useEffect(() => {
        dispatch(getSingleCourse(id));
    }, [dispatch, id]);

    const course = singleCourse;

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FFF9F5]">
                <div className="text-center">
                    <div className="w-14 h-14 border-4 border-[#6B0F0F] border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="mt-5 text-[#6B0F0F] font-semibold text-lg">
                        Loading Course...
                    </p>
                </div>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FFF9F5]">
                <div className="bg-white p-10 rounded-3xl shadow-lg text-center">
                    <h2 className="text-3xl font-bold text-[#6B0F0F]">
                        Course Not Found
                    </h2>
                </div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";

        return new Date(dateString).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    const discountPercentage =
        course.price > 0 &&
            course.discount_price > 0 &&
            course.discount_price < course.price
            ? Math.round(
                ((course.price - course.discount_price) /
                    course.price) *
                100
            )
            : 0;

    return (
        <div className="bg-[#FFF9F5] min-h-screen">

            {/* HERO SECTION */}
            <div className="relative overflow-hidden">

                <div className="absolute inset-0 bg-[#F8EDE1]" />
                <div className="relative mx-auto px-5 md:px-8 lg:px-12 py-7 lg:py-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                        {/* LEFT CONTENT */}
                        <div className="text-white">
                            {/* CATEGORY */}
                            {course.category_id && (
                                <div className="mb-5">
                                    <span className=" backdrop-blur-md px-3 py-1.5 bg-[#F5E6D3]  text-[#7C5A4F] border-[#F1DED0] rounded-full text-sm font-semibold border border-white/20">
                                        {course.category_id.name}
                                    </span>
                                </div>
                            )}

                            {/* TITLE */}
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#6B0F0F]">
                                {course.title}
                            </h1>

                            {/* SHORT DESC */}
                            <p className="mt-3 text-[#7C5A4F] text-lg leading-8 max-w-2xl">
                                {course.short_description}
                            </p>

                            {/* TAGS */}
                            <div className="flex flex-wrap gap-4 mt-5">

                                <div className="px-4 py-2 rounded-lg  flex items-center gap-2 bg-[#F5E6D3] text-[#7C5A4F] border-[#F1DED0]">
                                    <Globe size={16} />
                                    <span className="font-medium text-sm">
                                        {course.language}
                                    </span>
                                </div>

                                <div className="px-4 py-2 rounded-lg  flex items-center gap-2 bg-[#F5E6D3]  text-[#7C5A4F] border-[#F1DED0]">
                                    <Clock3 size={16} />
                                    <span className="font-medium text-sm">
                                        {course.course_duration || "N/A"}
                                    </span>
                                </div>

                                {course.batch_start && (
                                    <div className="px-4 py-1.5 rounded-lg  flex items-center gap-2 bg-[#F5E6D3]  text-[#7C5A4F] border-[#F1DED0] ">
                                        <CalendarDays size={16} />
                                        <span className="font-medium text-sm">
                                            {formatDate(course.batch_start)}
                                        </span>
                                    </div>
                                )}

                            </div>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative -mt-2">

                            <div className="absolute -inset-5 bg-white/10 rounded-[40px] blur-2xl"></div>

                            <div className="relative bg-white/10 backdrop-blur-xl p-1 rounded-[35px] border border-white/10">

                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full md:h-[420px] h-[320px] object-cover rounded-[20px]"
                                />
                                {/* PREMIUM BADGE */}
                                {course.premium && (
                                    <div className="absolute -top-3.5 -left-3 md:-left-7 bg-[#d7c7b2] text-[#835b4d] px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2 font-bold">
                                        <Sparkles size={20} />
                                        Premium Course
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* MAIN CONTENT */}
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-10 antialiased selection:bg-[#6B0F0F]/10">

                {/* TEACHERS SECTION */}
                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {course.teacher.map((teacher, index) => (
                            <div
                                key={index}
                                className="bg-white p-3 rounded-2xl shadow-sm border border-[#F1E4D8]/60 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                            >
                                <div className="flex items-start gap-5">
                                    <img
                                        src={teacher.image}
                                        alt={teacher.name}
                                        className="w-20 h-20 rounded-xl object-cover border-2 border-[#F8E7D6] flex-shrink-0 group-hover:scale-[1.02] transition-transform duration-300"
                                    />
                                    <div className="flex-1 min-w-0 pt-0.5">
                                        <h3 className="text-lg font-bold text-[#6B0F0F] truncate group-hover:text-[#8A1A1A] transition-colors">
                                            {teacher.name}
                                        </h3>
                                        <p className="text-[#7C5A4F] text-xs font-medium mt-0.5 tracking-wide uppercase">
                                            {teacher.designation}
                                        </p>
                                        <div className="mt-3.5 inline-flex bg-[#F5E6DA]/60 text-[#6B0F0F] px-2.5 py-1 rounded-md text-xs font-medium border border-[#F1E4D8]/50">
                                            {teacher.experience} Experience
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SUBJECTS SECTION */}
                {course.subject && course.subject.length > 0 && (
                    <div className="mt-7 border-t border-[#F1E4D8]/50 pt-3">
                        <h2 className="text-lg font-bold tracking-tight text-[#6B0F0F] mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-5 rounded-sm bg-[#6B0F0F]"></span>
                            Subjects Covered
                        </h2>
                        <div className="flex flex-wrap gap-2.5">
                            {course.subject.map((subject, index) => (
                                <div
                                    key={subject._id || index}
                                    className="bg-white border border-[#EAD7C8] text-xs px-4 py-2 rounded-lg font-medium text-[#6B0F0F] shadow-xs hover:bg-[#6B0F0F]/5 transition-all duration-200 cursor-default"
                                >
                                    {typeof subject === "string"
                                        ? subject
                                        : subject.name || subject}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* LEARNING SECTION */}
                {course.learns && course.learns.length > 0 && (
                    <div className="mt-5">
                        {/* SECTION HEADER */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-1.5 h-8 rounded-full bg-[#6B0F0F]" />
                            <div>
                                <h2 className="text-2xl font-bold text-[#6B0F0F]">
                                    What You Will Learn
                                </h2>
                                <p className="text-sm text-[#846458] mt-1">
                                    Key skills and knowledge you will gain from this course.
                                </p>
                            </div>
                        </div>

                        {/* LEARNING CARDS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {course.learns.map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl bg-white border border-[#F1E4D8] p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500"
                                >
                                    {/* Hover Accent */}
                                    <div className="absolute left-0 top-0 h-full w-1 bg-[#6B0F0F] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF3E8] border border-[#F5D7C3] flex-shrink-0">
                                            <CheckCircle2
                                                size={20}
                                                className="text-[#6B0F0F]"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-sm font-semibold text-[#6B0F0F] mb-1">
                                                Learning Outcome {index + 1}
                                            </h3>

                                            <p className="text-sm leading-relaxed text-[#555] group-hover:text-black transition-colors">
                                                {item}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {/* STATS SECTION */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
                    {/* Subjects Card */}
                    <div className="bg-white rounded-2xl p-5 border border-[#F1E4D8]/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[130px]">
                        <div className="w-10 h-10 rounded-xl bg-[#6B0F0F]/5 flex items-center justify-center">
                            <BookOpen className="text-[#6B0F0F]" size={22} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-[#6B0F0F] mt-3">
                                {course.subject?.length || 0}
                            </h3>
                            <p className="text-[#7C604F]/90 text-xs font-medium uppercase tracking-wider mt-1">
                                Subjects Included
                            </p>
                        </div>
                    </div>

                    {/* Teachers Card */}
                    <div className="bg-white rounded-2xl p-5 border border-[#F1E4D8]/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[130px]">
                        <div className="w-10 h-10 rounded-xl bg-[#6B0F0F]/5 flex items-center justify-center">
                            <Users className="text-[#6B0F0F]" size={22} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-[#1E1E1E] mt-3">
                                {course.teacher?.length || 0}
                            </h3>
                            <p className="text-[#7C604F]/90 text-xs font-medium uppercase tracking-wider mt-1">
                                Expert Teachers
                            </p>
                        </div>
                    </div>

                    {/* Registration Card */}
                    <div className="bg-white rounded-2xl p-5 border border-[#F1E4D8]/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[130px]">
                        <div className="w-10 h-10 rounded-xl bg-[#6B0F0F]/5 flex items-center justify-center">
                            <Award className="text-[#6B0F0F]" size={22} />
                        </div>
                        <div>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold mt-3 ${course.registration_open
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : "bg-rose-50 text-rose-700 border border-rose-200"
                                }`}>
                                {course.registration_open ? "Open" : "Closed"}
                            </span>
                            <p className="text-[#7C604F]/90 text-xs font-medium uppercase tracking-wider mt-1.5">
                                Registration
                            </p>
                        </div>
                    </div>
                </div>



                {/* COURSE INCLUDES SECTION */}
                {course.includes && course.includes.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-lg font-bold tracking-tight text-[#6B0F0F] mb-5 flex items-center gap-2">
                            <span className="w-1.5 h-5 rounded-sm bg-[#6B0F0F]"></span>
                            This Course Includes
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.includes.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-[#F1E4D8]/60 flex items-start gap-3.5 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="bg-[#FFF3E8] p-1.5 rounded-lg border border-[#F1E4D8]/60 flex-shrink-0 mt-0.5">
                                        <PlayCircle className="text-[#6B0F0F]" size={18} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[#444] text-sm leading-relaxed font-normal">
                                            {typeof item === "string"
                                                ? item
                                                : item.text || item}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* DESCRIPTION SECTION */}
                {course.description && (
                    <div className="mt-8 border-t border-[#F1E4D8]/50 pt-8">
                        <h2 className="text-lg font-bold tracking-tight text-[#6B0F0F] mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-5 rounded-sm bg-[#6B0F0F]"></span>
                            Course Description
                        </h2>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F1E4D8]/60">
                            <div
                                className="prose prose-sm max-w-none prose-headings:text-[#6B0F0F] prose-headings:font-bold prose-p:text-[#555] prose-p:leading-relaxed prose-strong:text-[#1E1E1E]"
                                dangerouslySetInnerHTML={{
                                    __html: course.description,
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default CourseDetailsPage;