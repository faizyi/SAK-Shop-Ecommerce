"use client"; // Ensure this is at the top if you're using Next.js or similar
// import { toogleMode } from '@/app/redux/mode/modeSlice';
import { showSidebar } from '@/app/redux/openSidebar/OSSlice';
import React, { useState } from 'react';
import { FaUserCircle, FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
    const dispatch = useDispatch();
    // const { theme, bg,} = useSelector((state) => state.mode);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const handleClick = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <header className={`fixed top-0 z-50 w-full border-b bg-slate-950 dark:border-gray-700`}>
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <button
                            aria-controls="logo-sidebar"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                        >
                        <span 
                        onClick={() => dispatch(showSidebar())}
                        ><FaBars /></span>
                        </button>
                        <a href="/addproduct" className="flex ms-2 md:me-24">
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">E-commerce</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                            <span 
                            // onClick={() => dispatch(toogleMode())} 
                            className="text-2xl cursor-pointer text-gray-700 dark:text-gray-300">
                            {/* {theme === "light" ? <FaMoon/> : <FaSun/>} */}
                            </span>
                        </div>
                        <div className="cursor-pointer flex items-center ms-3 relative" onClick={handleClick}>
                        <p className="mr-2 font-bold text-sm text-gray-900 dark:text-white">Neil Sims</p>
                            <button
                                type="button"
                                className="flex text-sm bg-gray-800 rounded-full ring-4 ring-gray-300 dark:ring-gray-600"
                            >
                                <span className="sr-only">Open user menu</span>
                                <FaUserCircle className="w-8 h-8 text-white" />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 top-11 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <div className="px-4 py-3">
                                        <p className="text-sm text-gray-900 dark:text-white">Neil Sims</p>
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">neil.sims@flowbite.com</p>
                                    </div>
                                    <ul className="py-1">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
