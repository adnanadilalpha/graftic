"use client";

import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
    const [isToggled, setToggle] = useState(false); // Initialize state to false

    const handleClick = () => {
        setToggle(!isToggled); // Toggle the state on button click
    };

    return (
        <nav className="fixed z-10  flex pl-8 pr-3 py-3 left-4 right-4 md:left-16 md:right-16 bg-white/25 rounded-lg border border-lime-200">
            <div className="w-full flex justify-between items-center text-white">
                <div>
                    <Link href="/">
                        <img src="/logos/logo.svg" alt="Logo" />
                    </Link>
                </div>
                <div className="hidden xl:flex">
                    <ul className="hidden xl:flex gap-8">
                        <li className="hover:text-lime-200 uppercase hover:border-b-2 hover:border-lime-200 sm:text-base md:text-lg xl:text-xl font-bold font-space-grotesk leading-normal ease-linear">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-lime-200 uppercase hover:border-b-2 hover:border-lime-200 sm:text-base md:text-lg xl:text-xl font-bold font-space-grotesk leading-normal ease-linear">
                            <Link href="/">Work</Link>
                        </li>
                        <li className="hover:text-lime-200 uppercase hover:border-b-2 hover:border-lime-200 sm:text-base md:text-lg xl:text-xl font-bold font-space-grotesk leading-normal ease-linear">
                            <Link href="/">Services</Link>
                        </li>
                        <li className="hover:text-lime-200 uppercase hover:border-b-2 hover:border-lime-200 sm:text-base md:text-lg xl:text-xl font-bold font-space-grotesk leading-normal ease-linear">
                            <Link href="/">About</Link>
                        </li>
                    </ul>
                </div>
                <div>
                        <button className="hover:text-white hidden  text-black px-6 py-4 rounded-lg border bg-amber-300 border-amber-300 justify-center items-center gap-2.5 xl:inline-flex hover:bg-transparent">
                            <h4 className="text-xl font-bold font-space-grotesk leading-normal">
                                Contact Us
                            </h4>
                        </button>
                    </div>
                <div className="flex xl:hidden">
                    <div onClick={handleClick} className={`${isToggled ? "hidden" : "flex"}`}>
                        <img src="/menu.svg" alt="Menu" />
                    </div>
                    <div onClick={handleClick} className={`${isToggled ? "flex" : "hidden"}`}>
                     <img src="/close.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className={`${isToggled ? "flex" : "hidden"} fixed left-0 top-32 right-0 bg-white/25 rounded-lg w-screen h-screen border-2 border-lime-200 
           ease-in transsition duration-100 py-8 px-8 justify-center items-center`}>
                <div className="flex flex-col gap-16">
                    <ul className="xl:hidden flex gap-8 flex-col items-center">
                        <li className="active:text-lime-200 hover:text-lime-200 uppercase hover:border-b-2 hover:border-lime-200  text-xl font-bold font-space-grotesk leading-normal ease-linear">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-lime-200 uppercase hover:border-b-2 hover:border-lime-200 text-xl  font-bold font-space-grotesk leading-normal ease-linear">
                            <Link href="/">Work</Link>
                        </li>
                        <li className="hover:text-lime-200 uppercase hover:border-b-2 hover:border-lime-200 text-xl  font-bold font-space-grotesk leading-normal ease-linear">
                            <Link href="/">Services</Link>
                        </li>
                        <li className="hover:text-lime-200 uppercase hover:border-b-2 hover:border-lime-200 text-xl  font-bold font-space-grotesk leading-normal ease-linear">
                            <Link href="/">About</Link>
                        </li>
                    </ul>
                    <div>
                        <button className="hover:text-white text-black px-6 py-4 rounded-lg border bg-amber-300 border-amber-300 justify-center items-center gap-2.5 inline-flex hover:bg-transparent xl:flex">
                            <h4 className="text-xl font-bold font-space-grotesk leading-normal">
                                Contact Us
                            </h4>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
