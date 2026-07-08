import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Briefcase,
    GraduationCap,
    Users,
    HeartHandshake,
    ArrowRight,
    CheckCircle,
    MapPin,
    Clock,
    Sparkles,
    Rocket,
    Award,
    Star,
    Mail,
    Upload,
    ChevronRight,
    Building2,
    TrendingUp,
    Coffee,
    Gift,
    Zap
} from "lucide-react";

const CareerPage = () => {
    const [activeJob, setActiveJob] = useState(null);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({
                            ...prev,
                            [entry.target.id]: true,
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll(".animate-section").forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const jobs = [
        {
            id: 1,
            title: "UPSC Faculty",
            location: "Noida",
            type: "Full Time",
            department: "Academics",
            posted: "2 days ago",
            description: "Guide and mentor UPSC aspirants with expert knowledge and teaching methodologies.",
            requirements: ["Experience in UPSC teaching", "Strong subject expertise", "Excellent communication skills"]
        },
        {
            id: 2,
            title: "Academic Counselor",
            location: "Noida",
            type: "Full Time",
            department: "Student Services",
            posted: "3 days ago",
            description: "Help students navigate their academic journey and career choices.",
            requirements: ["Counseling experience", "Empathetic approach", "Goal-oriented mindset"]
        },
        {
            id: 3,
            title: "Content Writer",
            location: "Remote",
            type: "Full Time",
            department: "Content",
            posted: "1 week ago",
            description: "Create engaging educational content for various platforms and mediums.",
            requirements: ["Excellent writing skills", "Educational content experience", "SEO knowledge"]
        },
        {
            id: 4,
            title: "Digital Marketing Executive",
            location: "Noida",
            type: "Full Time",
            department: "Marketing",
            posted: "5 days ago",
            description: "Drive digital marketing strategies to reach more aspiring students.",
            requirements: ["Digital marketing experience", "Analytical skills", "Creative thinking"]
        },
    ];

    const benefits = [
        { icon: Award, title: "Competitive Salary", description: "Industry-best compensation packages" },
        { icon: TrendingUp, title: "Career Growth", description: "Clear advancement pathways" },
        { icon: Users, title: "Great Culture", description: "Supportive and collaborative environment" },
        { icon: GraduationCap, title: "Learning & Development", description: "Continuous skill enhancement" },
        { icon: Coffee, title: "Work-Life Balance", description: "Flexible working arrangements" },
        { icon: Gift, title: "Performance Incentives", description: "Reward for outstanding work" },
    ];

    return (
        <div className="bg-gradient-to-br from-[#FDF6EC] via-white to-[#FDF6EC] min-h-screen">
            {/* Floating Gradient Orbs */}
            <div className="fixed top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="fixed bottom-20 right-10 w-72 h-72 bg-red-300/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* Hero Section */}
            <section id="hero" className="px-4 md:px-20 lg:px-28 py-16 animate-section">
                <div className="relative overflow-hidden bg-gradient-to-br from-[#6B0F0F] via-[#7a1a1a] to-[#8B2A2A] rounded-3xl p-10 md:p-16 text-white shadow-2xl">
                    {/* Animated Background Pattern */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                            <Sparkles size={16} className="animate-pulse" />
                            We're Hiring
                            <Sparkles size={16} className="animate-pulse" />
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-6 leading-tight">
                            Build The Future
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                                Of Education
                            </span>
                        </h1>

                        <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                            Join our passionate team and help thousands of students
                            achieve their dreams through quality education and
                            mentorship.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button className="group bg-white text-[#6B0F0F] font-semibold px-8 py-3.5 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                                View Open Positions
                                <ArrowRight size={18} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-300">
                                Join Our Team
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Why Join Us */}
            <section id="why-join" className="px-4 md:px-20 lg:px-28 animate-section">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-[#6B0F0F]/10 px-4 py-1 rounded-full text-[#6B0F0F] text-sm font-medium mb-2">
                        <Rocket size={16} />
                        Why Join Us
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#6B0F0F]">
                        Why Hriday IAS?
                    </h2>
                    <p className="text-[#7C5A4F] mt-2 max-w-2xl mx-auto text-lg">
                        Be part of a mission-driven organization dedicated to shaping
                        future leaders and civil servants.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {[
                        { icon: GraduationCap, title: "Learning Culture", desc: "Continuous learning and professional development" },
                        { icon: Users, title: "Great Team", desc: "Work alongside talented educators and mentors" },
                        { icon: Briefcase, title: "Career Growth", desc: "Clear opportunities to advance your career" },
                        { icon: HeartHandshake, title: "Positive Environment", desc: "Collaborative and employee-friendly workplace" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 border border-[#F1E2C7]"
                        >
                            <div className="w-16 h-16 bg-[#6B0F0F]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#6B0F0F] transition-colors duration-300">
                                <item.icon className="text-[#6B0F0F] group-hover:text-white transition-colors duration-300" size={32} />
                            </div>
                            <h3 className="font-bold text-xl mt-5 text-[#6B0F0F]">
                                {item.title}
                            </h3>
                            <p className="text-[#7C5A4F] mt-2 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Open Positions */}
            <section id="positions" className="px-4 md:px-20 lg:px-28 py-6 bg-white/50 backdrop-blur-sm animate-section">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-[#6B0F0F]/10 px-4 py-2 rounded-full text-[#6B0F0F] text-sm font-medium mb-4">
                        <Briefcase size={16} />
                        Careers
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#6B0F0F]">
                        Current Openings
                    </h2>
                    <p className="text-[#7C5A4F] mt-3 max-w-2xl mx-auto text-lg">
                        Find your perfect role and start making a difference today
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-12">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 border border-[#f1dfc8]"
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="text-2xl font-bold text-[#6B0F0F] group-hover:text-[#8B2A2A] transition-colors">
                                    {job.title}
                                </h3>
                                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                                    {job.posted}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-3 text-[#7C5A4F]">
                                <span className="flex items-center gap-1">
                                    <MapPin size={16} />
                                    {job.location}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock size={16} />
                                    {job.type}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Building2 size={16} />
                                    {job.department}
                                </span>
                            </div>

                            <p className="mt-4 text-[#7C5A4F] leading-relaxed">
                                {job.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {job.requirements.slice(0, 2).map((req, idx) => (
                                    <span key={idx} className="bg-[#FDF6EC] text-[#6B0F0F] text-xs px-3 py-1 rounded-full">
                                        {req}
                                    </span>
                                ))}
                                {job.requirements.length > 2 && (
                                    <span className="text-[#6B0F0F] text-xs px-3 py-1 rounded-full">
                                        +{job.requirements.length - 2} more
                                    </span>
                                )}
                            </div>

                            <Link to="/carrer_form">
                                <button className="mt-6 group/btn flex items-center gap-2 bg-gradient-to-r from-[#6B0F0F] to-[#8B2A2A] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                                    Apply Now
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits */}
            <section id="benefits" className="px-4 md:px-20 lg:px-28">
                <div className="bg-white rounded-2xl p-10 md:p-16 shadow-2xl">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-[#6B0F0F]/10 px-4 py-2 rounded-full text-[#6B0F0F] text-sm font-medium mb-4">
                            <Gift size={16} />
                            Perks & Benefits
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#6B0F0F]">
                            Employee Benefits
                        </h2>
                        <p className="text-[#7C5A4F] mt-3 max-w-2xl mx-auto text-lg">
                            We care about our employees' well-being and professional growth
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-[#FDF6EC] transition-all duration-300 border border-[#F1E2C7]"
                            >
                                <div className="w-12 h-12 bg-[#6B0F0F]/10 rounded-xl flex items-center justify-center group-hover:bg-[#6B0F0F] transition-colors duration-300 flex-shrink-0">
                                    <item.icon className="text-[#6B0F0F] group-hover:text-white transition-colors duration-300" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#6B0F0F]">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-[#7C5A4F]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring Process */}
            <section id="hiring" className="px-4 md:px-20 lg:px-28 py-10 bg-white/50 backdrop-blur-sm ">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-[#6B0F0F]/10 px-4 py-2 rounded-full text-[#6B0F0F] text-sm font-medium mb-4">
                        <Zap size={16} />
                        Process
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#6B0F0F]">
                        Our Hiring Process
                    </h2>
                    <p className="text-[#7C5A4F] mt-3 max-w-2xl mx-auto text-lg">
                        A simple and transparent journey to join our team
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mt-12">
                    {[
                        { step: "Apply", icon: Mail, desc: "Submit your application online" },
                        { step: "Screening", icon: Users, desc: "Initial review and shortlisting" },
                        { step: "Interview", icon: Star, desc: "Meet the team and showcase your skills" },
                        { step: "Join Team", icon: Rocket, desc: "Welcome to the Hriday IAS family" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="relative group bg-white rounded-3xl p-8 shadow-sm border border-[#F1E2C7] hover:shadow-md transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6B0F0F] to-[#8B2A2A] text-white flex items-center justify-center mx-auto text-2xl font-bold shadow-lg group-hover:scale-105 transition-transform duration-300">
                                {index + 1}
                            </div>
                            <div className="mt-5 text-center">
                                <div className="flex justify-center mb-3">
                                    <item.icon className="text-[#6B0F0F]" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-[#6B0F0F]">
                                    {item.step}
                                </h3>
                                <p className="text-sm text-[#7C5A4F] mt-2">
                                    {item.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* Resume CTA */}
            <section id="cta" className="px-4 md:px-20 lg:px-28 pb-20 animate-section">
                <div className="relative overflow-hidden bg-gradient-to-br from-[#6B0F0F] to-[#8B2A2A] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-400/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Upload size={16} />
                            Still Looking?
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold">
                            Didn't Find Your Role?
                        </h2>

                        <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg">
                            Send us your resume and we'll contact you when a
                            suitable opportunity becomes available.
                        </p>

                        <button className="group mt-8 bg-white text-[#6B0F0F] px-8 py-3.5 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                            <Upload size={18} />
                            Upload Resume
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareerPage;