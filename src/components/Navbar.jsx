import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["home", "about", "projects", "contact"];

  // 🌙 THEME
  useEffect(() => {
    const root = document.documentElement;

    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  // 🔥 SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 
                ${
                  scrolled
                    ? "bg-white/60 dark:bg-black/60 backdrop-blur-2xl shadow-lg border-b border-white/10"
                    : "bg-transparent"
                }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
          {/* LOGO */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text cursor-pointer">
            Pratiksha
          </h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-6 font-medium">
            {navItems.map((section) => (
              <li key={section} className="relative group">
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="active-nav"
                  className="px-4 py-1 rounded-full cursor-pointer transition"
                >
                  {section.toUpperCase()}
                </Link>

                {/* 💎 Animated glow pill */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-md transition"></span>
              </li>
            ))}
          </ul>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* 🌙 THEME TOGGLE */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-md hover:scale-110 transition"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </motion.div>
            </button>

            {/* MOBILE BTN */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-md"
              >
                <FaBars className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998] bg-black/80 flex flex-col items-center justify-center gap-8 text-white"
          >
            {/* CLOSE */}
            <button
              className="absolute top-6 right-6 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>

            {/* LINKS */}
            {navItems.map((section, i) => (
              <motion.div
                key={section}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl hover:text-blue-400 transition"
                >
                  {section.toUpperCase()}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
