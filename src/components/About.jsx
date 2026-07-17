import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiScikitlearn,
} from "react-icons/si";

const skillsData = {
  frontend: [
    { name: "HTML5", level: 95, icon: <FaHtml5 /> },
    { name: "React", level: 90, icon: <FaReact /> },
    { name: "JavaScript", level: 85, icon: <FaJs /> },
    { name: "CSS3", level: 85, icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss /> },
  ],

  backend: [
    { name: "Node.js", level: 80, icon: <FaNodeJs /> },
    { name: "Express.js", level: 75, icon: <SiExpress /> },
    { name: "MongoDB", level: 75, icon: <SiMongodb /> },
    { name: "PostgreSQL", level: 70, icon: <SiPostgresql /> },
  ],

  ai: [
    { name: "Python", level: 80, icon: <FaPython /> },
    { name: "Machine Learning", level: 70, icon: <SiScikitlearn /> },
  ],
};

const About = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-5 sm:px-6 lg:px-8 py-20"
    >
      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center"
      >
        About Me
      </motion.h2>

      {/* Description */}

      <p className="max-w-3xl text-center text-gray-400 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 mb-6 px-2">
        I'm an{" "}
        <span className="text-blue-400 font-semibold">
          Full Stack Developer
        </span>{" "}
        who builds scalable web applications and loves integrating{" "}
        <span className="text-purple-400 font-semibold">
          AI & Machine Learning
        </span>{" "}
        to create smarter digital experiences.
      </p>

      <p className="text-gray-500 text-center max-w-2xl text-sm sm:text-base mb-10 px-2">
        I work across frontend and backend technologies and I'm currently
        exploring Machine Learning to combine intelligent systems with modern
        web development.
      </p>

      {/* Filter Buttons */}

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
        {["frontend", "backend", "ai"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border transition text-sm sm:text-base ${
              activeTab === tab
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-600 text-gray-400 hover:border-blue-500"
            }`}
          >
            {tab === "ai" ? "AI / ML" : tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Skills */}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
        {skillsData[activeTab].map((skill, index) => {
          const radius = 40;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (skill.level / 100) * circumference;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              {/* Continue in Part 2 */}

              {/* CIRCLE PROGRESS */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                <svg
                  className="absolute w-full h-full rotate-[-90deg]"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    stroke="#333"
                    strokeWidth="6"
                    fill="transparent"
                  />

                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    stroke="#3b82f6"
                    strokeWidth="6"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    whileInView={{
                      strokeDashoffset: offset,
                    }}
                    transition={{
                      duration: 1.5,
                    }}
                  />
                </svg>

                {/* ICON */}
                <div className="text-2xl sm:text-3xl z-10">{skill.icon}</div>
              </div>

              {/* NAME */}
              <p className="mt-3 text-sm sm:text-base text-gray-300 text-center">
                {skill.name}
              </p>

              {/* PERCENT */}
              <p className="text-xs sm:text-sm text-blue-400">{skill.level}%</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
