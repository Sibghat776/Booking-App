import Logo from "../assets/Logo.png"
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#132a13] border-gray-200">
            <div className="max-w-screen-xl mx-[10%] flex flex-wrap items-center justify-between px-4 py-4">
                {/* Logo + Title */}
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-10 rounded-full" alt="Booking App Logo" />
                    <span className="text-2xl font-semibold whitespace-nowrap text-[#F7FFF4]">
                        Booking App
                    </span>
                </a>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-[#F7FFF4] rounded-lg md:hidden hover:bg-[#183a1a] focus:outline-none"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Navigation Links */}
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-medium">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-[#F7FFF4] hover:text-white"
                            >
                                Register
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-[#F7FFF4] hover:text-white"
                            >
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;