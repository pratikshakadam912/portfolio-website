import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Layers3,
  Terminal,
  Zap,
} from "lucide-react";

import websiteImg from "../assets/website.png";
import weatherImg from "../assets/weather.jpeg";
import resumeImg from "../assets/resume.png";

const projects = [
  {
    id: "01",
    title: "EUPHORIA",
    subtitle: "FULL STACK E-COMMERCE",
    category: "FULL STACK",
    status: "LIVE",
    description:
      "A luxury fashion e-commerce platform with authentication, product management, shopping flows and an admin dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind"],
    image: websiteImg,
    github: "https://github.com/pratikshakadam912/Euphoria",
    live: "https://euphoria-nine-swart.vercel.app",
    accent: "cyan",
    features: [
      "Firebase Authentication",
      "MongoDB product system",
      "Admin dashboard",
      "Cloudinary image uploads",
      "Product filtering",
      "Order management",
    ],
  },

  {
    id: "02",
    title: "AI WEATHER",
    subtitle: "AI / FULL STACK",
    category: "AI / ML",
    status: "LIVE",
    description:
      "A weather prediction platform combining real-time weather data with machine learning inside a modern dashboard.",
    tech: [
      "React",
      "Python",
      "Flask",
      "Machine Learning",
      "OpenWeather",
      "Tailwind",
    ],
    image: weatherImg,
    github: "https://github.com/pratikshakadam912/AI-weather-prediction-system",
    live: "https://ai-weather-prediction-system.vercel.app",
    accent: "violet",
    features: [
      "OpenWeather API",
      "Flask backend",
      "Prediction system",
      "Weather history",
      "Analytics dashboard",
      "React frontend",
    ],
  },

  {
    id: "03",
    title: "REVIO",
    subtitle: "AI RESUME ANALYZER",
    category: "AI / PRODUCT",
    status: "IN DEVELOPMENT",
    description:
      "An AI-powered resume platform designed to analyze resumes, identify skills, generate insights and help candidates understand their career positioning.",
    tech: ["Next.js", "Python", "PostgreSQL", "Prisma", "AI"],
    image: resumeImg,
    github: "#",
    live: "#",
    accent: "cyan",
    features: [
      "ATS score analysis",
      "Skill extraction",
      "Role suggestions",
      "AI career insights",
      "Resume templates",
      "Credit-based system",
    ],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Ambient cyan */}
        <div className="absolute left-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.035] blur-[150px]" />

        {/* Ambient violet */}
        <div className="absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.035] blur-[150px]" />

        {/* Scanlines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(255,255,255,0.7) 4px)",
          }}
        />

        {/* Moving scan */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          animate={{
            y: ["0vh", "100vh"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* =========================================================
          MAIN
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-cyan-400/70 sm:text-xs">
            <span className="h-px w-8 bg-cyan-400/50" />
            02 / WORK
            <span className="text-neutral-600">SELECTED BUILDS</span>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                THINGS
                <br />
                <span className="text-neutral-500">I BUILD.</span>
              </h2>
            </div>

            <div className="max-w-sm font-mono text-xs leading-6 text-neutral-500">
              <span className="text-cyan-400">&gt;</span> PROJECT_DATABASE
              <br />
              <span className="text-neutral-700">
                -----------------------------------------------
              </span>
              <br />
              total_projects = 03
              <br />
              primary_stack = "FULL STACK"
              <br />
              secondary_focus = "AI / ML"
              <br />
              deployment = <span className="text-cyan-400">"ACTIVE"</span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            PROJECT SELECTOR
        ===================================================== */}

        <div className="grid gap-px bg-[#202020] lg:grid-cols-[320px_1fr]">
          {/* LEFT INDEX */}
          <div className="bg-[#070707]">
            <div className="flex items-center justify-between border-b border-[#1d1d1d] px-5 py-4">
              <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-600">
                PROJECT_INDEX
              </span>

              <Layers3 size={14} className="text-neutral-700" />
            </div>

            <div>
              {projects.map((project) => {
                const active = activeProject.id === project.id;

                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    className={`group relative w-full border-b border-[#151515] p-6 text-left transition-colors ${
                      active
                        ? "bg-[#0b0b0b]"
                        : "bg-[#070707] hover:bg-[#0a0a0a]"
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="projectActiveLine"
                        className="absolute left-0 top-0 h-full w-[2px] bg-cyan-400"
                      />
                    )}

                    <div className="mb-8 flex items-center justify-between">
                      <span
                        className={`font-mono text-[9px] tracking-[0.2em] ${
                          active ? "text-cyan-400" : "text-neutral-700"
                        }`}
                      >
                        PROJECT_{project.id}
                      </span>

                      <ArrowUpRight
                        size={14}
                        className={`transition-all ${
                          active
                            ? "translate-x-0 text-cyan-400 opacity-100"
                            : "translate-x-[-4px] text-neutral-700 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      />
                    </div>

                    <h3
                      className={`text-lg font-medium tracking-[-0.02em] ${
                        active ? "text-white" : "text-neutral-500"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-2 font-mono text-[8px] tracking-[0.16em] text-neutral-700">
                      {project.category}
                    </p>

                    <div className="mt-6 flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          project.status === "LIVE"
                            ? "bg-cyan-400"
                            : "bg-violet-400"
                        }`}
                      />

                      <span className="font-mono text-[8px] tracking-[0.15em] text-neutral-600">
                        {project.status}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="hidden p-6 lg:block">
              <div className="font-mono text-[8px] leading-5 tracking-[0.12em] text-neutral-700">
                <div>DATABASE_STATUS</div>
                <div className="mt-2 text-cyan-400/60">● CONNECTION ACTIVE</div>
                <div>● 03 RECORDS FOUND</div>
                <div>● 02 DEPLOYED</div>
                <div>● 01 IN DEVELOPMENT</div>
              </div>
            </div>
          </div>

          {/* RIGHT PROJECT DISPLAY */}
          <div className="min-w-0 bg-[#060606]">
            <AnimatePresence mode="wait">
              <ProjectDisplay key={activeProject.id} project={activeProject} />
            </AnimatePresence>
          </div>
        </div>

        {/* =====================================================
            BOTTOM PROJECT COUNTER
        ===================================================== */}

        <div className="mt-8 flex items-center justify-between border-t border-[#181818] pt-5 font-mono text-[9px] tracking-[0.2em] text-neutral-700">
          <span>WORK / SELECTED PROJECTS</span>

          <span className="hidden sm:block">BUILD / DEPLOY / ITERATE</span>

          <span>02 / 05</span>
        </div>
      </div>
    </section>
  );
};

/* =============================================================
   PROJECT DISPLAY
============================================================= */

const ProjectDisplay = ({ project }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    if (window.innerWidth < 1024) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 3;
    const rotateY = (x / rect.width - 0.5) * 3;

    card.style.transform = `
      perspective(1400px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = `
      perspective(1400px)
      rotateX(0deg)
      rotateY(0deg)
    `;
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -15 }}
      transition={{ duration: 0.4 }}
      className="relative transition-transform duration-200"
    >
      {/* =====================================================
          IMAGE / VISUAL
      ===================================================== */}

      <div className="relative aspect-[16/8] overflow-hidden border-b border-[#202020] bg-[#090909]">
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-65 grayscale-[20%] transition duration-700 hover:scale-[1.025] hover:opacity-80"
        />

        {/* Image overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#060606]/30 via-transparent to-[#060606]/20" />

        {/* Technical frame */}
        <div className="absolute inset-4 border border-white/[0.08]" />

        {/* Top label */}
        <div className="absolute left-7 top-7 flex items-center gap-3">
          <span className="bg-[#050505]/80 px-3 py-2 font-mono text-[9px] tracking-[0.18em] text-cyan-400 backdrop-blur-sm">
            {project.id} / {project.category}
          </span>
        </div>

        {/* Status */}
        <div className="absolute right-7 top-7 flex items-center gap-2 bg-[#050505]/80 px-3 py-2 font-mono text-[8px] tracking-[0.15em] text-neutral-300 backdrop-blur-sm">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              project.status === "LIVE" ? "bg-cyan-400" : "bg-violet-400"
            }`}
          />
          {project.status}
        </div>

        {/* Project name over image */}
        <div className="absolute bottom-7 left-7 right-7">
          <div className="mb-2 font-mono text-[9px] tracking-[0.25em] text-cyan-400/70">
            {project.subtitle}
          </div>

          <h3 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h3>
        </div>
      </div>

      {/* =====================================================
          PROJECT CONTENT
      ===================================================== */}

      <div className="grid lg:grid-cols-[1fr_0.85fr]">
        {/* DESCRIPTION */}
        <div className="border-b border-[#202020] p-7 sm:p-10 lg:border-b-0 lg:border-r">
          <div className="mb-6 flex items-center gap-3 font-mono text-[9px] tracking-[0.2em] text-neutral-600">
            <Terminal size={14} className="text-cyan-400/70" />
            PROJECT_DESCRIPTION
          </div>

          <p className="max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
            {project.description}
          </p>

          {/* Feature list */}
          <div className="mt-10">
            <div className="mb-4 font-mono text-[9px] tracking-[0.2em] text-neutral-700">
              CORE_FEATURES
            </div>

            <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="flex items-center gap-3 text-xs text-neutral-500"
                >
                  <span className="font-mono text-[8px] text-cyan-400/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* TECH + LINKS */}
        <div className="p-7 sm:p-10">
          <div className="mb-5 font-mono text-[9px] tracking-[0.2em] text-neutral-700">
            TECHNOLOGY_STACK
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="border border-[#242424] bg-[#0a0a0a] px-3 py-2 font-mono text-[9px] tracking-[0.08em] text-neutral-400 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="my-9 h-px bg-[#1a1a1a]" />

          {/* Build status */}
          <div className="mb-7">
            <div className="mb-3 flex items-center justify-between font-mono text-[8px] tracking-[0.15em] text-neutral-700">
              <span>BUILD_STATUS</span>
              <span className="text-cyan-400/70">
                {project.status === "LIVE" ? "DEPLOYED" : "ACTIVE"}
              </span>
            </div>

            <div className="flex gap-1">
              {Array.from({ length: 16 }).map((_, index) => (
                <span
                  key={index}
                  className={`h-1 flex-1 ${
                    project.status === "LIVE"
                      ? "bg-cyan-400/60"
                      : index < 11
                        ? "bg-violet-400/60"
                        : "bg-neutral-800"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-2 sm:grid-cols-2">
            {project.github !== "#" ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border border-[#252525] bg-[#090909] px-4 py-4 transition-all hover:border-cyan-400/40 hover:bg-[#0c0c0c]"
              >
                <div className="flex items-center gap-3">
                  <Code2 size={15} className="text-neutral-500" />

                  <span className="font-mono text-[9px] tracking-[0.15em] text-neutral-400">
                    SOURCE CODE
                  </span>
                </div>

                <ArrowUpRight
                  size={14}
                  className="text-neutral-700 transition-colors group-hover:text-cyan-400"
                />
              </a>
            ) : (
              <div className="flex items-center gap-3 border border-[#181818] bg-[#080808] px-4 py-4 opacity-50">
                <Code2 size={15} className="text-neutral-700" />

                <span className="font-mono text-[9px] tracking-[0.15em] text-neutral-700">
                  SOURCE / PRIVATE
                </span>
              </div>
            )}

            {project.live !== "#" ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border border-cyan-400/20 bg-cyan-400/[0.035] px-4 py-4 transition-all hover:border-cyan-400/50 hover:bg-cyan-400/[0.07]"
              >
                <div className="flex items-center gap-3">
                  <ExternalLink size={15} className="text-cyan-400/70" />

                  <span className="font-mono text-[9px] tracking-[0.15em] text-cyan-300/80">
                    LIVE SYSTEM
                  </span>
                </div>

                <ArrowUpRight
                  size={14}
                  className="text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ) : (
              <div className="flex items-center gap-3 border border-[#181818] bg-[#080808] px-4 py-4 opacity-50">
                <Zap size={15} className="text-violet-400/50" />

                <span className="font-mono text-[9px] tracking-[0.15em] text-neutral-700">
                  BUILD IN PROGRESS
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom technical line */}
      <div className="flex items-center justify-between border-t border-[#1c1c1c] px-5 py-3 font-mono text-[8px] tracking-[0.15em] text-neutral-700">
        <span>PROJECT_{project.id}</span>

        <span className="hidden sm:block">
          {project.title.replaceAll(" ", "_")}
        </span>

        <span className="flex items-center gap-2">
          <Code2 size={11} />
          FULL_STACK_SYSTEM
        </span>
      </div>
    </motion.div>
  );
};

export default Projects;
