import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClear } from "react-icons/md";
import { useLocation } from "react-router-dom";

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

                        <ul className="text-black font-medium p-4 space-y-1 bg-[#FDF6EC]">

                            <li>
                                <a
                                    href="/courses"
                                    className={`block px-4 py-2 rounded transition-all duration-300
                ${location.pathname === "/courses"
                                            ? "bg-[#c37a7a] text-white shadow-sm"
                                            : "text-[#c87b7b] hover:bg-[#f3e2d2]"
                                        }
            `}
                                >
                                    Courses
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/blog"
                                    className={`block px-4 py-2 rounded transition-all duration-300
                ${location.pathname === "/blog"
                                            ? "bg-[#c37a7a] text-white shadow-sm"
                                            : "text-[#c87b7b] hover:bg-[#f3e2d2]"
                                        }
            `}
                                >
                                    Blog
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/my-courses"
                                    className={`block px-4 py-2 rounded transition-all duration-300
                ${location.pathname === "/my-courses"
                                            ? "bg-[#c37a7a] text-white shadow-sm"
                                            : "text-[#c87b7b] hover:bg-[#f3e2d2]"
                                        }
            `}
                                >
                                    My Course
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/about"
                                    className={`block px-4 py-2 rounded transition-all duration-300
                ${location.pathname === "/about"
                                            ? "bg-[#c37a7a] text-white shadow-sm"
                                            : "text-[#c87b7b] hover:bg-[#f3e2d2]"
                                        }
            `}
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/contact"
                                    className={`block px-3 py-2 rounded transition-all duration-300
                                          ${location.pathname === "/contact"
                                            ? "bg-[#c37a7a] text-white shadow-sm"
                                            : "text-[#c87b7b] hover:bg-[#f3e2d2]"
                                        }
            `}
                                >
                                    Contact
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