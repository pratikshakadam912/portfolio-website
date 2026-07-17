import React from "react";
import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
      relative overflow-hidden
      bg-white dark:bg-black
      text-gray-900 dark:text-white
      transition-colors duration-500
      px-6 pt-12 pb-6
      border-t border-pink-200 dark:border-gray-800"
    >
      {/* Background Grid */}

      <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(circle,#f9a8d4_1px,transparent_1px)] dark:bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Glow */}

      <div className="absolute top-[-120px] left-[-80px] w-[350px] h-[350px] bg-pink-300/30 dark:bg-blue-600/20 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-purple-300/30 dark:bg-purple-600/20 blur-[120px]" />

      <div className="relative z-10">
        {/* TOP LINE */}

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 dark:via-blue-500 to-transparent mb-8"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* BRAND */}

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold gradient-text">
              Pratiksha Kadam
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              Full Stack Developer • AI & ML Enthusiast
            </p>
          </div>

          {/* NAVIGATION */}

          <div className="flex gap-6 text-sm font-medium">
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-blue-400 transition"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-blue-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-blue-400 transition"
            >
              Contact
            </a>
          </div>

          {/* SOCIAL */}

          <div className="flex gap-5 text-2xl">
            <a
              href="https://www.linkedin.com/in/pratiksha-kadam-a639872a3?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-pink-500 dark:hover:text-blue-400 transition duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/pratikshakadam912"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-pink-500 dark:hover:text-blue-400 transition duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}

        <div className="text-center mt-10 text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Pratiksha Kadam</span>. Built with ❤️
          using React & Tailwind CSS.
        </div>

        {/* BACK TO TOP */}

        <div className="flex justify-center mt-8">
          <a
            href="#home"
            className="
            w-12 h-12
            flex items-center justify-center
            rounded-full
            bg-gradient-to-r
            from-pink-500
            via-fuchsia-500
            to-purple-500
            dark:from-blue-500
            dark:via-cyan-500
            dark:to-purple-600
            text-white
            shadow-lg
            hover:scale-110
            transition-all duration-300"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
