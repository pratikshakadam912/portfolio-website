import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "AI & ML Enthusiast",
  "Frontend Developer",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let timeout;

    if (charIndex < roles[roleIndex].length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 60);
    } else {
      timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1800);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:py-20">
      {/* Cursor Glow */}
      <div
        className="hidden md:block pointer-events-none fixed w-[320px] h-[320px] rounded-full bg-purple-500/20 blur-[120px]"
        style={{
          left: mousePos.x - 160,
          top: mousePos.y - 160,
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Lights */}
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-blue-600/20 blur-[140px]" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[450px] h-[450px] bg-purple-600/20 blur-[140px]" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
        {/* LEFT */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

            <span className="text-xs sm:text-sm text-gray-300">
              Available for Internship & Freelance
            </span>
          </motion.div>

          <p className="text-blue-400 tracking-wide mb-3 text-base sm:text-lg">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight break-words">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 text-transparent bg-clip-text">
              Pratiksha
            </span>

            <br />

            <span>Kadam</span>
          </h1>

          {/* Typing */}
          <div className="mt-5 h-12 flex justify-center lg:justify-start items-center">
            <span className="text-base sm:text-xl md:text-2xl text-gray-300 font-medium">
              {text}
            </span>

            <span className="animate-pulse text-blue-400 text-2xl ml-1">|</span>
          </div>

          {/* Tech Stack */}

          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mt-6">
            {["React", "Node.js", "PostgreSQL", "Python", "AI"].map((item) => (
              <span
                key={item}
                className="px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 hover:border-blue-400 transition"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Description */}

          <p className="mt-6 text-sm sm:text-lg text-gray-400 leading-7 max-w-xl mx-auto lg:mx-0">
            Passionate about building scalable full-stack web applications using
            modern technologies and integrating AI to create intelligent,
            user-focused digital experiences.
          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10 justify-center lg:justify-start">
            {/* Projects */}
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative overflow-hidden rounded-2xl px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                🚀 View Projects
              </span>

              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>
            </motion.button>

            {/* Resume */}
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-lg hover:bg-white hover:text-black text-white font-semibold transition-all duration-300 shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
            >
              📄 Resume
            </motion.a>

            {/* Contact */}
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group rounded-2xl px-8 py-4 border border-blue-500/40 bg-blue-500/10 hover:bg-blue-500 hover:text-white text-blue-300 font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20 w-full sm:w-auto"
            >
              ✉ Contact Me
            </motion.button>
          </div>
        </div>
        {/* RIGHT */}
        {/* RIGHT */}
        <div className="flex justify-center mt-12 lg:mt-0">
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-8 shadow-2xl w-full max-w-sm sm:max-w-md"
          >
            {/* Window Dots */}
            <div className="flex gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>

            {/* Code */}
            <pre className="text-green-400 text-xs sm:text-sm leading-6 overflow-x-auto whitespace-pre-wrap break-words">
              {`const developer = {

  name: "Pratiksha Kadam",

  role: "Full Stack Developer",

  stack: [
    "React",
    "Node.js",
    "PostgreSQL",
    "Python"
  ],

  currentlyLearning:
    "Machine Learning",

  motto:
    "Build. Learn. Improve."

};`}
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
