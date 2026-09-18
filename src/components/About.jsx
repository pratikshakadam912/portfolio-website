import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Code2,
  Cpu,
  Database,
  Globe2,
  Layers3,
  Terminal,
  Zap,
} from "lucide-react";

const skillsData = {
  frontend: {
    label: "FRONTEND",
    code: "UI_ENGINE",
    icon: <Globe2 size={17} />,
    description:
      "Building responsive interfaces with component-driven architecture, modern JavaScript and performance-focused UI systems.",
    skills: [
      { name: "React", level: "CORE" },
      { name: "JavaScript", level: "CORE" },
      { name: "HTML5", level: "CORE" },
      { name: "CSS3", level: "CORE" },
      { name: "Tailwind CSS", level: "CORE" },
    ],
  },

  backend: {
    label: "BACKEND",
    code: "SERVER_ENGINE",
    icon: <Database size={17} />,
    description:
      "Developing APIs, authentication systems and backend services that connect applications to data and external services.",
    skills: [
      { name: "Node.js", level: "CORE" },
      { name: "Express.js", level: "CORE" },
      { name: "MongoDB", level: "CORE" },
      { name: "PostgreSQL", level: "LEARNING" },
    ],
  },

  ai: {
    label: "AI / ML",
    code: "INTELLIGENCE_LAYER",
    icon: <Cpu size={17} />,
    description:
      "Exploring machine learning and intelligent systems while connecting them with practical full-stack applications.",
    skills: [
      { name: "Python", level: "CORE" },
      { name: "Machine Learning", level: "LEARNING" },
      { name: "Scikit-learn", level: "LEARNING" },
      { name: "Data Processing", level: "LEARNING" },
    ],
  },
};

const stats = [
  {
    value: "03",
    label: "PROJECTS",
    detail: "FULL STACK BUILDS",
  },
  {
    value: "08+",
    label: "TECHNOLOGIES",
    detail: "ACTIVE STACK",
  },
  {
    value: "2025",
    label: "MCA START",
    detail: "GARDEN CITY UNIVERSITY",
  },
  {
    value: "01",
    label: "FOCUS",
    detail: "WEB + AI / ML",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [activeLine, setActiveLine] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % 5);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const activeData = skillsData[activeTab];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* =========================================================
          BACKGROUND SYSTEM
      ========================================================= */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Cyan ambient glow */}
        <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.035] blur-[140px]" />

        {/* Violet ambient glow */}
        <div className="absolute right-[-10%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.035] blur-[150px]" />

        {/* Horizontal scanline */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          animate={{
            y: ["0vh", "100vh"],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Fine scanlines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(255,255,255,0.7) 4px)",
          }}
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-cyan-400/70 sm:text-xs">
            <span className="h-px w-8 bg-cyan-400/50" />
            02 / ABOUT
            <span className="text-neutral-600">SYSTEM PROFILE</span>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                BUILDING
                <br />
                <span className="text-neutral-500">WITH INTENT.</span>
              </h2>
            </div>

            <div className="max-w-sm font-mono text-xs leading-6 text-neutral-500">
              <span className="text-cyan-400">&gt;</span> SYSTEM_PROFILE
              <br />
              <span className="text-neutral-700">
                ------------------------------------------------
              </span>
              <br />
              developer.identity = "Pratiksha Kadam"
              <br />
              discipline = "Full Stack Development"
              <br />
              focus = "Web + AI / ML"
              <br />
              status = <span className="text-cyan-400">"BUILDING"</span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            INTRO / PROFILE GRID
        ===================================================== */}

        <div className="grid gap-px overflow-hidden border border-[#202020] bg-[#202020] lg:grid-cols-[1.35fr_0.65fr]">
          {/* Main intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-[#080808] p-7 sm:p-10 lg:p-14"
          >
            {/* Corner markers */}
            <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-cyan-400/50" />
            <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-cyan-400/50" />
            <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-cyan-400/50" />
            <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-cyan-400/50" />

            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] text-neutral-500">
                <Terminal size={15} className="text-cyan-400" />
                IDENTITY_CORE
              </div>

              <span className="font-mono text-[9px] tracking-[0.2em] text-cyan-400/60">
                ONLINE
              </span>
            </div>

            <h3 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              I build{" "}
              <span className="text-cyan-400">modern web applications</span>{" "}
              where strong engineering meets intelligent digital experiences.
            </h3>

            <div className="mt-8 grid gap-6 border-t border-[#1d1d1d] pt-8 sm:grid-cols-2">
              <p className="text-sm leading-7 text-neutral-500">
                I'm an MCA student and Full Stack Developer focused on building
                practical products with React, Node.js and Python.
              </p>

              <p className="text-sm leading-7 text-neutral-500">
                I'm also exploring Machine Learning and finding ways to
                integrate intelligent systems into real-world web products.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "REACT",
                "NODE.JS",
                "PYTHON",
                "MONGODB",
                "POSTGRESQL",
                "AI / ML",
              ].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="border border-[#252525] bg-[#0b0b0b] px-3 py-2 font-mono text-[9px] tracking-[0.18em] text-neutral-400 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* System profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative bg-[#060606] p-7 sm:p-10"
          >
            <div className="mb-8 flex items-center justify-between border-b border-[#1d1d1d] pb-5">
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-500">
                SYSTEM_PROFILE
              </span>

              <Cpu size={15} className="text-cyan-400/70" />
            </div>

            <div className="space-y-1">
              {[
                ["NAME", "PRATIKSHA KADAM"],
                ["ROLE", "FULL STACK DEVELOPER"],
                ["EDUCATION", "MCA · 2025 — 2027"],
                ["LOCATION", "BENGALURU / INDIA"],
                ["FOCUS", "WEB + AI / ML"],
                ["AVAILABILITY", "OPEN TO OPPORTUNITIES"],
              ].map(([label, value], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.08 }}
                  className="group flex flex-col gap-1 border-b border-[#151515] py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-600">
                    {label}
                  </span>

                  <span className="text-xs font-medium tracking-wide text-neutral-300 transition-colors group-hover:text-cyan-300 sm:text-right">
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-cyan-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              SYSTEM ONLINE
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            STATS
        ===================================================== */}

        <div className="mt-px grid grid-cols-2 gap-px bg-[#202020] md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group bg-[#080808] p-6 transition-colors hover:bg-[#0b0b0b] sm:p-8"
            >
              <div className="mb-5 font-mono text-[9px] tracking-[0.2em] text-neutral-600">
                0{index + 1}
              </div>

              <div className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                {stat.value}
              </div>

              <div className="mt-2 font-mono text-[9px] tracking-[0.18em] text-cyan-400/70">
                {stat.label}
              </div>

              <div className="mt-1 text-[10px] text-neutral-600">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            SKILL SYSTEM
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          {/* Header */}
          <div className="mb-8 flex flex-col justify-between gap-5 border-b border-[#1d1d1d] pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-cyan-400/70">
                <Layers3 size={14} />
                02.01 / TECHNICAL STACK
              </div>

              <h3 className="text-3xl font-medium tracking-[-0.035em] text-white sm:text-4xl">
                THE TOOLKIT
              </h3>
            </div>

            <div className="font-mono text-[9px] tracking-[0.2em] text-neutral-600">
              SELECT MODULE // {activeData.code}
            </div>
          </div>

          {/* Tabs */}
          <div className="grid gap-px bg-[#202020] md:grid-cols-3">
            {Object.entries(skillsData).map(([key, data], index) => {
              const active = activeTab === key;

              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`group relative overflow-hidden bg-[#080808] p-6 text-left transition-colors sm:p-7 ${
                    active ? "bg-[#0c0c0c]" : "hover:bg-[#0a0a0a]"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeSkillLine"
                      className="absolute left-0 top-0 h-full w-[2px] bg-cyan-400"
                    />
                  )}

                  <div className="mb-8 flex items-center justify-between">
                    <div
                      className={`flex h-9 w-9 items-center justify-center border ${
                        active
                          ? "border-cyan-400/30 text-cyan-400"
                          : "border-[#252525] text-neutral-600"
                      }`}
                    >
                      {data.icon}
                    </div>

                    <span className="font-mono text-[9px] text-neutral-700">
                      0{index + 1}
                    </span>
                  </div>

                  <div
                    className={`font-mono text-xs tracking-[0.2em] ${
                      active ? "text-white" : "text-neutral-500"
                    }`}
                  >
                    {data.label}
                  </div>

                  <div className="mt-2 font-mono text-[9px] tracking-[0.15em] text-neutral-700">
                    {data.code}
                  </div>

                  <div
                    className={`mt-6 h-px w-full ${
                      active ? "bg-cyan-400/30" : "bg-[#181818]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active skill panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="border-x border-b border-[#202020] bg-[#070707]"
            >
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                {/* Description */}
                <div className="border-b border-[#202020] p-7 sm:p-10 lg:border-b-0 lg:border-r">
                  <div className="mb-6 font-mono text-[9px] tracking-[0.2em] text-neutral-600">
                    MODULE_DESCRIPTION
                  </div>

                  <p className="max-w-md text-sm leading-7 text-neutral-500">
                    {activeData.description}
                  </p>

                  <div className="mt-8 flex items-center gap-3 border-t border-[#1a1a1a] pt-6 font-mono text-[9px] tracking-[0.15em] text-neutral-600">
                    <Zap size={13} className="text-cyan-400" />
                    ACTIVE DEVELOPMENT MODULE
                  </div>
                </div>

                {/* Skill list */}
                <div className="p-7 sm:p-10">
                  <div className="mb-6 grid grid-cols-[40px_1fr_auto] gap-4 border-b border-[#1a1a1a] pb-4 font-mono text-[9px] tracking-[0.15em] text-neutral-700">
                    <span>ID</span>
                    <span>TECHNOLOGY</span>
                    <span>STATE</span>
                  </div>

                  <div>
                    {activeData.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="grid grid-cols-[40px_1fr_auto] items-center gap-4 border-b border-[#141414] py-4"
                      >
                        <span className="font-mono text-[9px] text-neutral-700">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="flex items-center gap-3">
                          <Code2 size={14} className="text-neutral-600" />
                          <span className="text-sm text-neutral-300">
                            {skill.name}
                          </span>
                        </div>

                        <span
                          className={`flex items-center gap-2 font-mono text-[8px] tracking-[0.12em] ${
                            skill.level === "CORE"
                              ? "text-cyan-400/80"
                              : "text-neutral-600"
                          }`}
                        >
                          {skill.level === "CORE" && <Check size={11} />}
                          {skill.level}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* =====================================================
            BOTTOM TERMINAL
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden border border-[#202020] bg-[#060606]"
        >
          {/* top bar */}
          <div className="flex items-center justify-between border-b border-[#1c1c1c] px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400/50" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/50" />
              <span className="h-2 w-2 rounded-full bg-green-400/50" />

              <span className="ml-3 font-mono text-[9px] tracking-[0.2em] text-neutral-600">
                ABOUT_TERMINAL
              </span>
            </div>

            <span className="font-mono text-[8px] tracking-[0.15em] text-neutral-700">
              SYS_2026
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_0.8fr]">
            <div className="p-6 sm:p-8">
              <div className="space-y-2 font-mono text-[10px] leading-6 sm:text-xs">
                <div className="text-neutral-600">
                  <span className="text-cyan-400">&gt;</span> cat
                  developer_profile.json
                </div>

                <div className="pl-4 text-neutral-500">
                  <span className="text-violet-400">{"{"}</span>
                </div>

                {[
                  ['"name"', '"Pratiksha Kadam"'],
                  ['"role"', '"Full Stack Developer"'],
                  ['"education"', '"MCA / Garden City University"'],
                  ['"location"', '"Bengaluru, India"'],
                  ['"focus"', '"Web Development + AI / ML"'],
                ].map(([key, value], index) => (
                  <motion.div
                    key={key}
                    animate={{
                      opacity: activeLine === index ? 1 : 0.55,
                    }}
                    className="pl-8"
                  >
                    <span className="text-cyan-300/70">{key}</span>
                    <span className="text-neutral-700"> : </span>
                    <span className="text-neutral-400">{value}</span>
                    {index < 4 && <span className="text-neutral-700">,</span>}
                  </motion.div>
                ))}

                <div className="pl-4 text-neutral-500">
                  <span className="text-violet-400">{"}"}</span>
                </div>

                <div className="pt-3 text-neutral-700">
                  <span className="text-cyan-400">&gt;</span>{" "}
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between border-t border-[#1c1c1c] p-6 sm:p-8 lg:border-l lg:border-t-0">
              <div>
                <div className="mb-5 font-mono text-[9px] tracking-[0.2em] text-neutral-600">
                  CURRENT_OBJECTIVE
                </div>

                <p className="text-lg leading-7 text-neutral-300">
                  Build products that are technically strong, visually
                  distinctive and genuinely useful.
                </p>
              </div>

              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between font-mono text-[8px] tracking-[0.15em] text-neutral-600">
                  <span>SYSTEM_PROGRESS</span>
                  <span>ACTIVE</span>
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <motion.span
                      key={index}
                      animate={{
                        opacity: index < 16 ? [0.3, 1, 0.3] : 0.15,
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: index * 0.04,
                      }}
                      className="h-1 flex-1 bg-cyan-400/70"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* bottom line */}
          <div className="flex items-center justify-between border-t border-[#1c1c1c] px-5 py-3 font-mono text-[8px] tracking-[0.15em] text-neutral-700">
            <span>PRATIKSHA.KADAM</span>

            <span className="hidden sm:block">DEVELOP / LEARN / BUILD</span>

            <span className="flex items-center gap-2 text-cyan-400/70">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              ONLINE
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            SECTION FOOTER
        ===================================================== */}

        <div className="mt-8 flex items-center justify-between font-mono text-[9px] tracking-[0.2em] text-neutral-700">
          <span>02 / 05</span>

          <div className="flex items-center gap-2">
            SCROLL TO WORK
            <ArrowUpRight size={12} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
