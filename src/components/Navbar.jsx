import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );

    const navItems = ["home", "about", "projects", "contact"];

    // THEME APPLY
    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <>
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 right-0 w-full z-[9999] bg-white dark:bg-black shadow-md">

                <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">

                    {/* LOGO */}
                    <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Pratiksha portfolio
                    </h1>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex gap-8 font-medium text-black dark:text-white">
                        {navItems.map((section) => (
                            <li key={section} className="relative group cursor-pointer">

                                <Link
                                    to={section}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    spy={true}
                                    activeClass="text-blue-500"
                                >
                                    {section.toUpperCase()}
                                </Link>

                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-4">

                        {/* THEME */}
                        <button
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className="text-lg sm:text-xl text-black dark:text-white"
                        >
                            {theme === "dark" ? <FaSun /> : <FaMoon />}
                        </button>

                        {/* MOBILE MENU BUTTON */}
                        <div className="md:hidden text-xl text-black dark:text-white">
                            <button onClick={() => setIsOpen(true)}>
                                <FaBars />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 w-full h-screen z-[9998] bg-white dark:bg-black flex flex-col items-center justify-center gap-8 text-lg text-black dark:text-white"
                    >
                        {/* CLOSE */}
                        <button
                            className="absolute top-6 right-6 text-2xl"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaTimes />
                        </button>

                        {/* LINKS */}
                        {navItems.map((section) => (
                            <Link
                                key={section}
                                to={section}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                spy={true}
                                activeClass="text-blue-500"
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer hover:text-blue-400 text-2xl"
                            >
                                {section.toUpperCase()}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;