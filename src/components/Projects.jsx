import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Weather App",
        desc: "Real-time weather app with API integration.",
        tech: ["React", "API"],
        category: "Frontend",
        github: "#",
        live: "#",
        image: "/images/weather.jpg",
    },
    {
        title: "Portfolio Website",
        desc: "Animated portfolio with modern UI.",
        tech: ["React", "Tailwind"],
        category: "Full Stack",
        github: "#",
        live: "#",
        image: "/images/portfolio.jpg",
    },
    {
        title: "Chat App",
        desc: "Realtime chat with authentication.",
        tech: ["Firebase", "React"],
        category: "Full Stack",
        github: "#",
        live: "#",
        image: "/images/chat.jpg",
    },
];

const Projects = () => {
    const [hovered, setHovered] = useState(null);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y / rect.height - 0.5) * 10;
        const rotateY = (x / rect.width - 0.5) * 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetTilt = (e) => {
        e.currentTarget.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };

    return (
        <section
            id="projects"
            name="projects"
            className="min-h-screen bg-black text-white px-6 py-20"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {projects.map((proj, index) => (
                    <div key={proj.title} className="perspective">
                        <motion.div
                            onMouseMove={handleMouseMove}
                            onMouseLeave={resetTilt}
                            onMouseEnter={() => setHovered(index)}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative bg-[#111] rounded-xl p-6 transition duration-300 transform-gpu will-change-transform"
                            style={{
                                transform:
                                    typeof window !== "undefined" &&
                                        window.innerWidth < 768
                                        ? "none"
                                        : undefined,
                            }}
                        >
                            {/* IMAGE PREVIEW */}
                            {hovered === index && (
                                <motion.img
                                    src={proj.image}
                                    alt="preview"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 0.2, scale: 1 }}
                                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                                />
                            )}

                            <div className="relative z-10">
                                {/* CATEGORY */}
                                <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                                    {proj.category}
                                </span>

                                {/* TITLE */}
                                <h3 className="text-2xl font-semibold mt-4 mb-2">
                                    {proj.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-gray-400 mb-4">
                                    {proj.desc}
                                </p>

                                {/* TECH */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {proj.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-gray-800 px-2 py-1 rounded"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* BUTTONS */}
                                <div className="flex gap-4">
                                    <a
                                        href={proj.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 hover:text-gray-300"
                                    >
                                        <FaGithub /> Code
                                    </a>

                                    <a
                                        href={proj.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                                    >
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;