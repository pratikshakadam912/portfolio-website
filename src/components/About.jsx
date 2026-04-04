import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaJs,
    FaCss3Alt,
    FaPython,
    FaNodeJs,
    FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiTensorflow, SiMongodb } from "react-icons/si";

const skillsData = {
    frontend: [
        { name: "React", level: 90, icon: <FaReact /> },
        { name: "JavaScript", level: 85, icon: <FaJs /> },
        { name: "CSS", level: 80, icon: <FaCss3Alt /> },
        { name: "Tailwind", level: 80, icon: <SiTailwindcss /> },
    ],
    backend: [
        { name: "Node.js", level: 75, icon: <FaNodeJs /> },
        { name: "MongoDB", level: 70, icon: <SiMongodb /> },
        { name: "SQL", level: 65, icon: <FaDatabase /> },
    ],
    ai: [
        { name: "Python", level: 70, icon: <FaPython /> },
        { name: "TensorFlow", level: 60, icon: <SiTensorflow /> },
    ],
};

const About = () => {
    const [activeTab, setActiveTab] = useState("frontend");

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6"
        >
            {/* HEADING */}
            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-6"
            >
                About Me
            </motion.h2>

            {/* DESCRIPTION */}
            <p className="max-w-2xl text-center text-gray-400 mb-6">
                I'm a <span className="text-blue-400">Full Stack Developer</span> who
                builds scalable web applications and loves integrating{" "}
                <span className="text-purple-400">AI & Machine Learning</span> to create
                smarter digital experiences.
            </p>

            <p className="text-gray-500 mb-10 text-center max-w-xl">
                I work across frontend and backend technologies, and I’m currently
                exploring AI-driven applications to combine intelligent systems with
                modern web development.
            </p>

            {/* FILTER BUTTONS */}
            <div className="flex gap-4 mb-10">
                {["frontend", "backend", "ai"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-full border transition ${activeTab === tab
                                ? "bg-blue-500 text-white"
                                : "border-gray-600 text-gray-400 hover:border-blue-500"
                            }`}
                    >
                        {tab.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* SKILLS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {skillsData[activeTab].map((skill, index) => {
                    const radius = 40;
                    const circumference = 2 * Math.PI * radius;
                    const offset =
                        circumference - (skill.level / 100) * circumference;

                    return (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            {/* CIRCLE PROGRESS */}
                            <div className="relative w-28 h-28 flex items-center justify-center">
                                <svg className="absolute w-full h-full rotate-[-90deg]">
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
                                        strokeDasharray={circumference}
                                        strokeDashoffset={circumference}
                                        whileInView={{ strokeDashoffset: offset }}
                                        transition={{ duration: 1.5 }}
                                    />
                                </svg>

                                {/* ICON */}
                                <div className="text-3xl z-10">{skill.icon}</div>
                            </div>

                            {/* NAME */}
                            <p className="mt-3 text-gray-300">{skill.name}</p>

                            {/* PERCENT */}
                            <p className="text-sm text-blue-400">{skill.level}%</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default About;