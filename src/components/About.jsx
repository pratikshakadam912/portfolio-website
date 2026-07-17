import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiScikitlearn,
  SiPostgresql,
} from "react-icons/si";

const skillsData = {
  frontend: [
    { name: "HTML5", level: 95, icon: <FaHtml5 /> },
    { name: "React", level: 90, icon: <FaReact /> },
    { name: "JavaScript", level: 88, icon: <FaJs /> },
    { name: "CSS3", level: 90, icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss /> },
  ],

  backend: [
    { name: "Node.js", level: 82, icon: <FaNodeJs /> },
    { name: "Express.js", level: 80, icon: <SiExpress /> },
    { name: "MongoDB", level: 78, icon: <SiMongodb /> },
    { name: "PostgreSQL", level: 72, icon: <SiPostgresql /> },
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
      className="relative bg-black text-white overflow-hidden py-20 px-5 sm:px-8 lg:px-12"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-5"
        />

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl mx-auto text-center text-gray-400 text-base sm:text-lg leading-8"
        >
          I'm an
          <span className="text-blue-400 font-semibold">
            {" "}
            MCA student & Full Stack Developer{" "}
          </span>
          passionate about building modern, scalable web applications using
          React, Node.js and AI-powered solutions. I enjoy solving real-world
          problems through clean code, intuitive user experiences and continuous
          learning in
          <span className="text-purple-400 font-semibold">
            {" "}
            Machine Learning.
          </span>
        </motion.p>

        {/* Filter Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mt-14">
          {["frontend", "backend", "ai"].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300

              ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30"
                  : "bg-white/5 border border-white/10 hover:border-blue-500 text-gray-300"
              }
              `}
            >
              {tab === "ai" ? "AI / ML" : tab.toUpperCase()}
            </motion.button>
          ))}
        </div>
        {/* Skills Grid */}

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillsData[activeTab].map((skill, index) => {
            const radius = 42;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (skill.level / 100) * circumference;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col items-center shadow-lg hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Circle */}

                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg
                    className="absolute w-full h-full -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke="#2d2d2d"
                      strokeWidth="6"
                      fill="none"
                    />

                    <motion.circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke="url(#gradient)"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference}
                      whileInView={{
                        strokeDashoffset: offset,
                      }}
                      transition={{
                        duration: 1.4,
                      }}
                    />

                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Icon */}

                  <div className="text-4xl text-blue-400 z-10">
                    {skill.icon}
                  </div>
                </div>

                {/* Skill Name */}

                <h3 className="mt-5 text-base sm:text-lg font-semibold text-center">
                  {skill.name}
                </h3>

                {/* Percentage */}

                <p className="text-blue-400 mt-2 font-medium">{skill.level}%</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
