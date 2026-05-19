import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClear } from "react-icons/md";
import { useLocation } from "react-router-dom";
import {
    MdMenuBook,
    MdArticle,
    MdInfo,
    MdCall
} from "react-icons/md";

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            <div className="block md:hidden">

                <button
                    className="mt-2"
                    onClick={() => setIsOpen(true)}
                >
                    <GiHamburgerMenu className="text-[#6B0F0F] text-2xl" />
                </button>

            </div>

            {createPortal(
                <>
                    {/* Overlay */}
                    <div
                        className={`fixed inset-0 bg-black/40 z-[90] transition-opacity duration-300
                            
                            ${isOpen
                                ? "opacity-100 visible"
                                : "opacity-0 invisible"
                            }
                        `}
                        onClick={() => setIsOpen(false)}
                    ></div>

                    {/* Sidebar */}
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-[#FDF6EC] shadow-lg z-[100]
                        transition-transform duration-300 ease-in-out

                        ${isOpen
                                ? "translate-x-0"
                                : "translate-x-full"
                            }
                        `}
                    >

                        <button
                            className="absolute top-5 right-3 text-[#6B0F0F] text-2xl"
                            onClick={() => setIsOpen(false)}
                        >
                            <MdClear />
                        </button>

                        <h1 className="p-4 text-[#6B0F0F] text-xl font-semibold border-b bg-[#FDF6EC]">
                            Hariday IAS
                        </h1>

                        <ul className="text-black font-medium p-4 space-y-2 bg-[#FDF6EC] mt-4">

                            {/* Courses */}
                            <li>
                                <a
                                    href="/courses"
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 group

                                          ${location.pathname === "/courses"
                                            ? "border-l-4  border-[#711716] text-[#711716] bg-[#F5E6D3]"
                                            : "text-[#711716] hover:bg-[#F5E6D3]"
                                        }
                                       `}
                                >
                                    <MdMenuBook className="text-xl" />
                                    <span className="text-base font-bold">
                                        Courses
                                    </span>
                                </a>
                            </li>

                            {/* Blog */}
                            <li>
                                <a
                                    href="/blog"
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 group

            ${location.pathname === "/blog"
                                             ? "border-l-4  border-[#711716] text-[#711716] bg-[#F5E6D3]"
                                            : "text-[#711716] hover:bg-[#F5E6D3]"
                                        }
            `}
                                >
                                    <MdArticle className="text-xl" />
                                    <span className="text-base font-bold">
                                        Blog
                                    </span>
                                </a>
                            </li>

                            {/* About */}
                            <li>
                                <a
                                    href="/about"
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 group

            ${location.pathname === "/about"
                                            ? "border-l-4  border-[#711716] text-[#711716] bg-[#F5E6D3]"
                                            : "text-[#711716] hover:bg-[#F5E6D3]"
                                        }
            `}
                                >
                                    <MdInfo className="text-xl" />
                                    <span className="text-base font-bold">
                                        About
                                    </span>
                                </a>
                            </li>

                            {/* Contact */}
                            <li>
                                <a
                                    href="/contact"
                                    className={`flex items-center gap-3 px-3 py-1.5 rounded-lg transition-all duration-300 group

            ${location.pathname === "/contact"
                                            ? "border-l-4  border-[#711716] text-[#711716] bg-[#F5E6D3]"
                                            : "text-[#711716] hover:bg-[#F5E6D3]"
                                        }
            `}
                                >
                                    <MdCall className="text-xl" />
                                    <span className="text-base font-bold">
                                        Contact
                                    </span>
                                </a>
                            </li>

                        </ul>

                    </div>
                </>,
                document.getElementById("sidebar-root")
            )}
        </>
    );
}