import React from 'react'
import { FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ClipboardList, CalendarDays } from "lucide-react";
import { Trophy } from "lucide-react";

const RoadMap = () => {
    return (
        <>
            <div>

                <div className="w-full py-2 md:py-10 px-5 md:px-10 lg:px-16">

                    {/* Heading with refined spacing and accent line */}
                    <div className="text-center max-w-3xl mx-auto relative">
                        <div className="inline-block">
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
                            UPSC Civil Services <span className="text-[#6B0F0F]">Examination</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#6B0F0F] to-amber-500 rounded-full mx-auto mt-4 mb-5"></div>

                    </div>

                    {/* STAGES - Enhanced with modern cards, gradients, and better visual hierarchy */}
                    <div className="mt-9">
                        <div className="grid md:grid-cols-3 gap-7 lg:gap-9 mt-2">

                            {/* Prelims - Modern floating card */}
                            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-amber-100 hover:border-amber-300 hover:-translate-y-0.5">
                                <div className="flex items-start justify-between">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6B0F0F] to-[#8B2A2A] text-white flex items-center justify-center text-2xl font-black shadow-md mb-5 group-hover:scale-105 transition-transform">
                                        1
                                    </div>
                                    <div className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">Phase 01</div>
                                </div>

                                <h4 className="text-2xl font-bold text-[#6B0F0F] mt-2 tracking-tight">
                                    Preliminary Exam
                                </h4>
                                <div className="mt-2 h-1 w-14 bg-amber-400 rounded-full mb-2"></div>

                                <ul className="mt-4 text-[#5a4a3a] space-y-3 text-sm font-medium">
                                    <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>GS Paper I (200 Marks)</span></li>
                                    <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>CSAT (200 Marks)</span></li>
                                    <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>Objective Type Questions</span></li>
                                    <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>Negative Marking Applicable</span></li>
                                    <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span className="font-semibold text-[#6B0F0F]">Qualifying Stage</span></li>
                                </ul>

                                {/* Badge for quick insight */}
                                <div className="mt-6 pt-4 border-t border-amber-100">
                                    <span className="inline-flex items-center gap-1 text-xs text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full">
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Two compulsory papers
                                    </span>
                                </div>
                            </div>

                            {/* Mains - Enhanced with gradient accent */}
                            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-amber-100 hover:border-amber-300 hover:-translate-y-0.5">
                                <div className="flex items-start justify-between">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6B0F0F] to-[#8B2A2A] text-white flex items-center justify-center text-2xl font-black shadow-md mb-5 group-hover:scale-105 transition-transform">
                                        2
                                    </div>
                                    <div className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">Phase 02</div>
                                </div>

                                <h4 className="text-2xl font-bold text-[#6B0F0F] mt-2 tracking-tight">
                                    Mains Examination
                                </h4>
                                <div className="mt-2 h-1 w-14 bg-amber-400 rounded-full mb-2"></div>

                                <ul className="mt-4 text-[#5a4a3a] space-y-3 text-sm font-medium">
                                    <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>9 Descriptive Papers</span></li>
                                    <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>Essay Paper</span></li>
                                    <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>GS I, II, III & IV</span></li>
                                    <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>Optional Subject Papers</span></li>
                                    <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span className="font-semibold text-[#6B0F0F]">1750 Marks Counted For Merit</span></li>
                                </ul>

                                <div className="mt-6 pt-4 border-t border-amber-100">
                                    <span className="inline-flex items-center gap-1 text-xs text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full">
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Descriptive + analytical
                                    </span>
                                </div>
                            </div>

                            {/* Interview - Premium style */}
                            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-amber-100 hover:border-amber-300 hover:-translate-y-0.5">
                                <div className="flex items-start justify-between">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6B0F0F] to-[#8B2A2A] text-white flex items-center justify-center text-2xl font-black shadow-md mb-5 group-hover:scale-105 transition-transform">
                                        3
                                    </div>
                                    <div className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">Phase 03</div>
                                </div>

                                <h4 className="text-2xl font-bold text-[#6B0F0F] mt-2 tracking-tight">
                                    Interview / Personality Test
                                </h4>
                                <div className="mt-2 h-1 w-14 bg-amber-400 rounded-full mb-2"></div>

                                <ul className="mt-4 text-[#5a4a3a] space-y-3 text-sm font-medium">
                                    <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>Personality Assessment</span></li>
                                    <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>275 Marks</span></li>
                                    <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>Communication Skills</span></li>
                                    <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span>Decision Making Ability</span></li>
                                    <li className="flex items-start gap-2"><span className="text-amber-600 text-base">•</span> <span className="font-semibold text-[#6B0F0F]">Final Selection Stage</span></li>
                                </ul>

                                <div className="mt-6 pt-4 border-t border-amber-100">
                                    <span className="inline-flex items-center gap-1 text-xs text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full">
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> 275 marks | final merit
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FINAL SELECTION - Modern card with accent and iconography */}
                    <div className="mt-10 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6B0F0F]/5 via-amber-100/30 to-[#6B0F0F]/5 rounded-3xl blur-xl"></div>
                        <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md border border-amber-100 overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-amber-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50"></div>
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 rounded-xl bg-[#6B0F0F] flex items-center justify-center">
                                            <Trophy size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-[#6B0F0F]">
                                            Final Selection & Merit
                                        </h3>
                                    </div>
                                    <p className="text-[#7C604F] leading-relaxed text-base md:text-lg">
                                        The final merit list is prepared based on the marks obtained in the
                                        <span className="font-semibold text-[#6B0F0F]"> Mains Examination (1750 Marks) </span>
                                        and the
                                        <span className="font-semibold text-[#6B0F0F]"> Personality Test (275 Marks)</span>.
                                        The total score out of <span className="font-black text-amber-700">2025 marks</span> determines the final rank,
                                        service allocation, and cadre preference.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-3 text-center min-w-[140px] shadow-inner">
                                    <span className="text-3xl font-black text-[#6B0F0F]">2025</span>
                                    <span className="block text-sm text-amber-700 font-semibold">Total Marks</span>
                                    <div className="w-full h-1.5 bg-amber-200 rounded-full mt-2 overflow-hidden">
                                        <div className="w-3/4 h-full bg-gradient-to-r from-[#6B0F0F] to-amber-600 rounded-full"></div>
                                    </div>
                                    <span className="text-xs text-[#7C604F] mt-2 block">Mains + Interview</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ELIGIBILITY - Clean table with modern styling, badges, and better readability */}
                    <div className="mt-10">
                        <div className="flex items-center justify-center gap-4 mb-10">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-300 max-w-20"></div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#6B0F0F] tracking-wide">
                                Eligibility Criteria
                            </h3>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-300 max-w-20"></div>
                        </div>

                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-amber-100 transition-all hover:shadow-md">
                            {/* Table header - modern dark with gradient */}
                            <div className="grid grid-cols-4 bg-gradient-to-r from-[#6B0F0F] to-[#8B2A2A] text-white font-bold text-center py-5 text-sm md:text-base">
                                <div className="border-r border-amber-300/30">Category</div>
                                <div className="border-r border-amber-300/30">Age Limit</div>
                                <div className="border-r border-amber-300/30">Attempts</div>
                                <div>Qualification</div>
                            </div>

                            {/* General Row */}
                            <div className="grid grid-cols-4 text-center border-b border-amber-100 py-5 text-[#5a4a3a] text-sm md:text-base hover:bg-amber-50/50 transition-colors">
                                <div className="font-semibold text-[#6B0F0F] border-r border-amber-100">General / EWS</div>
                                <div className="border-r border-amber-100">21 - 32 Years</div>
                                <div className="border-r border-amber-100">
                                    <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full text-xs font-bold">6</span>
                                </div>
                                <div className="text-left pl-3 md:pl-8 font-medium">Graduation from a recognized university</div>
                            </div>

                            {/* OBC Row */}
                            <div className="grid grid-cols-4 text-center border-b border-amber-100 py-2 text-[#5a4a3a] text-sm md:text-base hover:bg-amber-50/50 transition-colors">
                                <div className="font-semibold text-[#6B0F0F] border-r border-amber-100">OBC</div>
                                <div className="border-r border-amber-100">21 - 35 Years</div>
                                <div className="border-r border-amber-100">
                                    <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full text-xs font-bold">9</span>
                                </div>
                                <div className="text-left pl-3 md:pl-10 font-medium text-[#7C604F]">Graduation from a recognized university</div>
                            </div>

                            {/* SC/ST Row with unlimited badge */}
                            <div className="grid grid-cols-4 text-center py-5 text-[#5a4a3a] text-sm md:text-base hover:bg-amber-50/50 transition-colors">
                                <div className="font-semibold text-[#6B0F0F] border-r border-amber-100">SC / ST</div>
                                <div className="border-r border-amber-100">21 - 37 Years</div>
                                <div className="border-r border-amber-100">
                                    <span className="inline-flex items-center justify-center bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full text-xs font-bold">Unlimited</span>
                                </div>
                                <div className="text-left pl-3 md:pl-8 font-medium text-[#7C604F]">Graduation from a recognized university</div>
                            </div>
                        </div>

                        {/* extra note for age relaxation */}
                        <div className="flex flex-wrap gap-3 justify-center items-center mt-6 text-xs md:text-sm text-[#7C604F]">

                            <span className="bg-white/70 rounded-full px-4 py-1.5 shadow-sm flex items-center gap-2">
                                <ClipboardList size={16} className="text-[#6B0F0F]" />
                                <strong>Age relaxation:</strong> +3 years for OBC, +5 years for SC/ST
                            </span>

                            <span className="bg-white/70 rounded-full px-4 py-1.5 shadow-sm flex items-center gap-2">
                                <CalendarDays size={16} className="text-[#6B0F0F]" />
                                <strong>Physical disability:</strong> Additional relaxation as per rules
                            </span>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default RoadMap