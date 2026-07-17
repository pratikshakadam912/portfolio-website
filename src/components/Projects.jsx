import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import websiteImg from "../assets/website.png";
import weatherImg from "../assets/weather.jpeg";
import resumeImg from "../assets/resume.jpeg";

const projects = [
  {
    title: "Euphoria E-Commerce",
    desc: "A full-stack fashion e-commerce platform with secure authentication, product management, shopping cart, checkout, admin dashboard, and responsive user interface.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    category: "Full Stack",
    github: "https://github.com/pratikshakadam912/Euphoria",
    live: "https://euphoria-nine-swart.vercel.app",
    image: websiteImg,
  },

  {
    title: "AI Weather Prediction System",
    desc: "A weather forecasting application that combines real-time weather data with Machine Learning to predict future weather conditions through a modern dashboard.",
    tech: ["React", "Python", "Flask", "Machine Learning", "OpenWeather API"],
    category: "AI / ML",
    github: "YOUR_GITHUB_LINK",
    live: "YOUR_VERCEL_LINK",
    image: weatherImg,
  },

  {
    title: "AI Resume Analyzer",
    desc: "An intelligent resume analyzer that evaluates resumes, extracts key information, and provides suggestions using Python and AI-based text processing.",
    tech: ["React", "Python", "Flask", "SQLite", "AI"],
    category: "AI / ML",
    github: "YOUR_GITHUB_LINK",
    live: "YOUR_RENDER_OR_VERCEL_LINK",
    image: resumeImg,
  },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-5 sm:px-8 lg:px-12 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <Card key={proj.title} proj={proj} index={index} />
        ))}
      </div>
    </section>
  );
};

/* ================= CARD ================= */

const Card = ({ proj, index }) => {
  const ref = useRef(null);

  // ⚡ FLOAT + MAGNETIC EFFECT
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const card = ref.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 12;
    const rotateY = (x / rect.width - 0.5) * 12;

    const moveX = (x / rect.width - 0.5) * 20;
    const moveY = (y / rect.height - 0.5) * 20;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translate(${moveX}px, ${moveY}px)
    `;
  };

  const reset = () => {
    ref.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translate(0px, 0px)
    `;
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="relative rounded-2xl overflow-hidden h-full flex flex-col
                 bg-white/5 backdrop-blur-xl border border-white/10
                 hover:border-blue-500/40
                 transition-all duration-300 group"
    >
      {/* 💎 GLASS GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl"></div>
      </div>

      {/* IMAGE */}
      <div className="h-52 sm:h-56 overflow-hidden">
        <img
          src={proj.image}
          alt={proj.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full w-fit">
          {proj.category}
        </span>

        <h3 className="text-xl font-semibold mt-3 mb-2">{proj.title}</h3>

        <p className="text-gray-400 text-sm mb-4 flex-grow">{proj.desc}</p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mb-4">
          {proj.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-white/10 border border-white/10 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between items-center mt-auto">
          <a
            href={proj.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-gray-300 transition"
          >
            <FaGithub /> Code
          </a>

          <a
            href={proj.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
