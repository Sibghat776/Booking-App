import React from 'react';
import Logo from "../assets/Logo.png"

const Navbar = () => {
    return (
        <>
            <nav className="bg-[#132a13] border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src={Logo}
                            className="h-10 rounded-full size-auto"
                            alt="BOOKING APP logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#F7FFF4]">
                            Booking App
                        </span>
                    </a>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0">

                            <li>
                                <a href="#" className="block py-2 px-3 text-[#F7FFF4] hover:text-[#fff]">
                                    Register
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-[#F7FFF4] hover:text-[#fff]">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
