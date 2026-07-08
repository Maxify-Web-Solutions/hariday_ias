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
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6B0F0F] tracking-tight">
                            UPSC Civil Services <span className="text-[#6B0F0F]">Examination</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#6B0F0F] to-amber-500 rounded-full mx-auto mt-4 mb-5"></div>

                    </div>

                    {/* STAGES - Enhanced with modern cards, gradients, and better visual hierarchy */}
                    {/* UPSC 3 Stages */}
                    <div className="mt-10 space-y-8">

                        {/* Stage 1 */}
                        <div className="bg-[#F3EFE6] rounded-[30px] overflow-hidden border border-[#d8cfc1] shadow-sm">
                            <div className="bg-[#6B0F0F] py-4 text-center">
                                <h3 className="text-white text-2xl md:text-3xl font-bold uppercase">
                                    Stage 1 : Prelims Examination
                                </h3>
                            </div>

                            <div className="overflow-x-auto px-2">
                                <table className="w-full text-center">
                                    <thead>
                                        <tr className="border-b border-[#d8cfc1] text-[#6B0F0F]">
                                            <th className="py-3 font-semibold text-xl">EXAM</th>
                                            <th className="py-3 font-semibold text-xl">EACH PAPER (200 MARKS)</th>
                                            <th className="py-3 font-semibold text-xl">DETAILS</th>
                                        </tr>
                                    </thead>

                                    <tbody className="text-[#3f3f3f]">
                                        <tr className="border-b border-[#d8cfc1]">
                                            <td className="py-3 text-lg">Paper 1</td>
                                            <td className='text-lg'>General Studies</td>
                                            <td className='text-lg'>100 Qs. (Merit Based)</td>
                                        </tr>

                                        <tr>
                                            <td className="py-3 text-lg">Paper 2</td>
                                            <td className='text-lg'>CSAT</td>
                                            <td className='text-lg'>80 Qs. (Qualifying)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="text-center py-3 border-t border-[#d8cfc1] text-[#2F4A8A] text-base md:text-lg">
                                (EXAM TYPE : MCQ Based, Time : 2 Hours, 1/3rd Negative Marking)
                            </div>

                            <div className="p-4 text-[#2F4A8A] font-medium text-base md:text-lg">
                                Note : Marks scored in Prelims Exam are not counted in Final Selection.
                            </div>
                        </div>

                        {/* Stage 2 */}
                        <div className="bg-[#F3EFE6] rounded-[30px] overflow-hidden border border-[#d8cfc1] shadow-sm">
                            <div className="bg-[#6B0F0F] py-4 text-center">
                                <h3 className="text-white text-2xl md:text-3xl font-bold uppercase">
                                    Stage 2 : Mains Examination
                                </h3>
                            </div>

                            <div className="overflow-x-auto px-2 ">
                                <table className="w-full text-center min-w-[900px] mb-2">
                                    <thead>
                                        <tr className="border-b border-[#d8cfc1] text-[#6B0F0F]">
                                            <th className="py-3 text-xl">EXAM</th>
                                            <th className='text-xl'>SUBJECTS</th>
                                            <th className='text-xl'>MARKS</th>
                                            <th className='text-xl'>NOTE</th>
                                            <th className='text-xl'>MIN %</th>
                                        </tr>
                                    </thead>

                                    <tbody className="text-[#3f3f3f]">
                                        <tr className="border-b border-[#d8cfc1]">
                                            <td className='text-lg'>Paper A</td>
                                            <td className="text-left text-lg px-3">
                                                Any one Language from Schedule - 8
                                            </td>
                                            <td >300</td>
                                            <td className='text-lg'>300</td>
                                            <td rowSpan="2" className='text-lg'>Qualifying Paper</td>
                                            <td rowSpan="2" className='text-lg'>25% Each</td>
                                        </tr>

                                        <tr className="border-b border-[#d8cfc1]">
                                            <td className='text-lg'>Paper B</td>
                                            <td className="text-left text-lg px-3">English Language</td>
                                            <td className='text-lg'>300</td>
                                        </tr>

                                        <tr className="border-b border-[#d8cfc1]">
                                            <td >Essay</td>
                                            <td className='text-lg'>Essay</td>
                                            <td className="text-left text-lg px-3">
                                                Essay (125 marks each)
                                            </td>
                                            <td className='text-lg'>250</td>
                                            <td rowSpan="6" className='text-lg'>
                                                Paper Counted for final Merit
                                            </td>
                                            <td rowSpan="6" className='text-lg'>10% Each</td>
                                        </tr>

                                        <tr className="border-b border-[#d8cfc1]">
                                            <td className='text-lg'>GS 1</td>
                                            <td className="text-left text-lg px-3">
                                                Indian Heritage and Culture, History and Geography of the World and Society
                                            </td>
                                            <td className='text-lg'>250</td>
                                        </tr>

                                        <tr className="border-b border-[#d8cfc1]">
                                            <td className='text-lg'>GS 2</td>
                                            <td className="text-left text-lg px-3">
                                                Governance, Constitution, Polity, Social Justice and International Relations
                                            </td>
                                            <td className='text-lg'>250</td>
                                        </tr>

                                        <tr className="border-b border-[#d8cfc1]">
                                            <td className='text-lg'>GS 3</td>
                                            <td className="text-left text-lg px-3">
                                                Technology, Economic Development, Biodiversity, Environment, Security and Disaster Management
                                            </td>
                                            <td className='text-lg'>250</td>
                                        </tr>

                                        <tr className="border-b border-[#d8cfc1]">
                                            <td className='text-lg'>GS 4</td>
                                            <td className="text-left text-lg px-3">
                                                Ethics, Integrity, and Aptitude
                                            </td>
                                            <td className='text-lg'>250</td>
                                        </tr>

                                        <tr className="border-b border-[#d8cfc1] px-2">
                                            <td className='text-lg'>Optional</td>
                                            <td className="text-left px-3 text-lg">
                                                2 Papers of Same Subject (250 × 2)
                                            </td>
                                            <td className='text-lg'>500</td>
                                        </tr>

                                        <tr className="font-bold text-black">
                                            <td></td>
                                            <td>TOTAL</td>
                                            <td>1750</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Stage 3 */}
                        <div className="bg-[#F3EFE6] rounded-[30px] overflow-hidden border border-[#d8cfc1] shadow-sm">
                            <div className="bg-[#6B0F0F] py-4 text-center">
                                <h3 className="text-white text-2xl md:text-3xl font-bold uppercase">
                                    Stage 3 : Interview
                                </h3>
                            </div>

                            <div className="p-8 text-center">
                                <h4 className="text-2xl md:text-4xl font-bold text-[#5B1E1E]">
                                    (Personality Test of 275 Marks)
                                </h4>

                                <p className="mt-5 text-lg md:text-2xl text-[#3f3f3f] leading-relaxed max-w-4xl mx-auto">
                                    In Civil Services Interview, personality is tested on
                                    parameters like confidence, empathy, balanced opinion,
                                    mature and independent thoughts.
                                </p>
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
                                    <p className="text-[#7C604F] leading-relaxed text-lg md:text-xl">
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
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-amber-100 mt-7">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1200px] border-collapse">
                                <thead>
                                    <tr className="bg-gradient-to-r from-[#6B0F0F] to-[#8B2A2A] text-white">
                                        <th className="p-5 text-xl border-r border-amber-300/30 whitespace-nowrap">
                                            Category
                                        </th>
                                        <th className="p-5 text-xl border-r border-amber-300/30 whitespace-nowrap">
                                            Age Limit
                                        </th>
                                        <th className="p-5 text-xl border-r border-amber-300/30 whitespace-nowrap">
                                            Attempts
                                        </th>
                                        <th className="p-5 text-xl whitespace-nowrap w-[420px]">
                                            Qualification
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="text-[#5a4a3a]">
                                    {/* General / EWS */}
                                    <tr className="border-b border-amber-100 hover:bg-amber-50/50 transition-colors">
                                        <td className="p-5 text-lg font-semibold text-[#6B0F0F] text-center whitespace-nowrap">
                                            General / EWS
                                        </td>

                                        <td className="p-5 text-lg text-center whitespace-nowrap">
                                            21 - 32 Years
                                        </td>

                                        <td className="p-5 text-center whitespace-nowrap">
                                            <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-lg font-bold">
                                                6
                                            </span>
                                        </td>

                                        <td className="p-5 text-lg whitespace-nowrap">
                                            Graduation from a recognized university
                                        </td>
                                    </tr>

                                    {/* OBC */}
                                    <tr className="border-b border-amber-100 hover:bg-amber-50/50 transition-colors">
                                        <td className="p-5 text-lg font-semibold text-[#6B0F0F] text-center whitespace-nowrap">
                                            OBC
                                        </td>

                                        <td className="p-5 text-lg text-center whitespace-nowrap">
                                            21 - 35 Years
                                        </td>

                                        <td className="p-5 text-center whitespace-nowrap">
                                            <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-lg font-bold">
                                                9
                                            </span>
                                        </td>

                                        <td className="p-5 text-lg whitespace-nowrap">
                                            Graduation from a recognized university
                                        </td>
                                    </tr>

                                    {/* SC / ST */}
                                    <tr className="hover:bg-amber-50/50 transition-colors">
                                        <td className="p-5 text-lg font-semibold text-[#6B0F0F] text-center whitespace-nowrap">
                                            SC / ST
                                        </td>

                                        <td className="p-5 text-lg text-center whitespace-nowrap">
                                            21 - 37 Years
                                        </td>

                                        <td className="p-5 text-center whitespace-nowrap">
                                            <span className="inline-flex items-center justify-center bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-lg font-bold whitespace-nowrap">
                                                Unlimited
                                            </span>
                                        </td>

                                        <td className="p-5 text-lg whitespace-nowrap">
                                            Graduation from a recognized university
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default RoadMap