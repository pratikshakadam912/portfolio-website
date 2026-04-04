import React from "react";
import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 pt-12 pb-6 border-t border-gray-800">

            {/* TOP LINE GLOW */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8"></div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* LEFT - BRAND */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-blue-400">
                        Pratiksha Kadam
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">
                        Full Stack Developer • AI Enthusiast
                    </p>
                </div>

                {/* CENTER - NAV LINKS */}
                <div className="flex gap-6 text-gray-400 text-sm">
                    <a href="#about" className="hover:text-blue-400 transition">
                        About
                    </a>
                    <a href="#projects" className="hover:text-blue-400 transition">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-blue-400 transition">
                        Contact
                    </a>
                </div>

                {/* RIGHT - SOCIAL */}
                <div className="flex gap-5 text-xl">
                    <a
                        href="https://www.linkedin.com/in/pratiksha-kadam-a639872a3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition hover:scale-110"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/pratikshakadam912"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition hover:scale-110"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="text-center mt-8 text-gray-500 text-sm">
                © {new Date().getFullYear()} Pratiksha Kadam. Built with ❤️ using React & Tailwind.
            </div>

            {/* SCROLL TO TOP */}
            <div className="flex justify-center mt-6">
                <a
                    href="#home"
                    className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition"
                >
                    <FaArrowUp />
                </a>
            </div>
        </footer>
    );
};

export default Footer;