import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  Sparkles,
  Terminal,
} from "lucide-react";

const technologies = [
  { name: "REACT", angle: 0 },
  { name: "NODE.JS", angle: 60 },
  { name: "PYTHON", angle: 120 },
  { name: "POSTGRESQL", angle: 180 },
  { name: "JAVASCRIPT", angle: 240 },
  { name: "EXPRESS", angle: 300 },
];

const expertise = [
  {
    number: "01",
    title: "FULL STACK",
    description:
      "Building responsive interfaces and full-stack web applications.",
    icon: Code2,
  },
  {
    number: "02",
    title: "BACKEND SYSTEMS",
    description: "Developing APIs, server logic and database-driven systems.",
    icon: Database,
  },
  {
    number: "03",
    title: "AI INTEGRATION",
    description:
      "Exploring intelligent features within practical web products.",
    icon: Cpu,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

function IdentityVisual({ booted }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      {/* Ambient glow */}
      <div className="absolute inset-[15%] rounded-full bg-cyan-500/[0.08] blur-[90px]" />
      <div className="absolute inset-[25%] rounded-full bg-violet-500/[0.10] blur-[80px]" />

      {/* Outer orbital rings */}
      <motion.div
        animate={booted ? { rotate: 360 } : { rotate: 0 }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[4%] rounded-full border border-white/[0.08]"
      >
        <span className="absolute left-[16%] top-[16%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
      </motion.div>

      <motion.div
        animate={booted ? { rotate: -360 } : { rotate: 0 }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[14%] rounded-full border border-dashed border-violet-400/20"
      >
        <span className="absolute right-[12%] top-[25%] h-1.5 w-1.5 rounded-full bg-violet-400" />
      </motion.div>

      {/* Floating technology labels */}
      {technologies.map((tech, index) => {
        const angle = (tech.angle * Math.PI) / 180;
        const radius = 42;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;

        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={
              booted
                ? {
                    opacity: 1,
                    scale: 1,
                    y: [0, -5, 0],
                  }
                : { opacity: 0, scale: 0.7 }
            }
            transition={{
              opacity: { duration: 0.5, delay: 0.2 + index * 0.1 },
              scale: { duration: 0.5, delay: 0.2 + index * 0.1 },
              y: {
                duration: 4 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            <div className="whitespace-nowrap border border-white/10 bg-[#080808]/90 px-2 py-2 font-mono text-[7px] tracking-[0.1em] text-neutral-300 shadow-[0_0_30px_rgba(0,0,0,0.4)] sm:px-3 sm:text-[9px]">
              <span className="mr-1.5 text-cyan-400">●</span>
              {tech.name}
            </div>
          </motion.div>
        );
      })}

      {/* Central identity structure */}
      <div className="absolute inset-[25%] flex items-center justify-center">
        <motion.div
          animate={
            booted
              ? {
                  rotate: 360,
                  scale: [1, 1.04, 1],
                }
              : { rotate: 0, scale: 0.85 }
          }
          transition={{
            rotate: {
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative aspect-square w-full"
        >
          <div className="absolute inset-[8%] rotate-45 border border-cyan-400/30" />
          <div className="absolute inset-[20%] rotate-45 border border-violet-400/30" />

          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />

          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />

          {/* PK core */}
          <div className="absolute inset-[30%] flex items-center justify-center border border-white/10 bg-[#080808]">
            <motion.div
              animate={
                booted
                  ? {
                      opacity: [0.5, 1, 0.5],
                      scale: [0.9, 1.1, 0.9],
                    }
                  : { opacity: 0, scale: 0.7 }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-full w-full items-center justify-center"
            >
              <span className="font-mono text-2xl font-bold tracking-[-0.1em] text-white sm:text-3xl">
                PK<span className="text-cyan-400">.</span>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Technical annotations */}
      <div className="absolute left-0 top-[35%] hidden font-mono text-[8px] leading-5 tracking-[0.15em] text-neutral-500 sm:block">
        <div>IDENTITY_CORE</div>
        <div className="text-cyan-400">ACTIVE / 001</div>
      </div>

      <div className="absolute bottom-[23%] right-0 hidden text-right font-mono text-[8px] leading-5 tracking-[0.15em] text-neutral-500 sm:block">
        <div>ENGINEERING_MODE</div>
        <div className="text-violet-400">BUILDING / 002</div>
      </div>

      {/* Corner coordinates */}
      <div className="absolute left-[8%] top-[8%] h-3 w-3 border-l border-t border-cyan-400/40" />
      <div className="absolute right-[8%] top-[8%] h-3 w-3 border-r border-t border-cyan-400/40" />
      <div className="absolute bottom-[8%] left-[8%] h-3 w-3 border-b border-l border-violet-400/40" />
      <div className="absolute bottom-[8%] right-[8%] h-3 w-3 border-b border-r border-violet-400/40" />
    </div>
  );
}

export default function Hero() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setBooted(true);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* INITIAL LOADING SCREEN */}
      <AnimatePresence>
        {!booted && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.02,
              filter: "blur(8px)",
            }}
            transition={{ duration: 0.55 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
          >
            <div className="w-[280px] max-w-[80vw]">
              <div className="mb-3 flex items-center justify-between font-mono text-[9px] tracking-[0.3em] text-neutral-400">
                <span>INITIALIZING WORKSPACE</span>
                <span>01</span>
              </div>

              <div className="h-[2px] overflow-hidden bg-white/10">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1.25,
                    ease: "easeInOut",
                  }}
                  className="h-full bg-cyan-400"
                />
              </div>

              <div className="mt-4 font-mono text-[8px] tracking-[0.25em] text-neutral-500">
                LOADING PRATIKSHA.SYSTEM...
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background system */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute -left-[15%] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.035] blur-[150px]" />

        <div className="absolute -right-[10%] bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/[0.04] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(255,255,255,0.7) 4px)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-center px-5 pb-24 pt-32 sm:px-8 lg:px-12">
        {/* Intro label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={booted ? "visible" : "hidden"}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-wrap items-center gap-3 font-mono text-[9px] tracking-[0.25em] text-neutral-400 sm:text-xs"
        >
          <span className="h-px w-8 bg-cyan-400/70" />
          <span>PRATIKSHA KADAM</span>
          <span className="text-neutral-600">/</span>
          <span>DIGITAL WORKSPACE</span>

          <span className="ml-1 flex items-center gap-2 text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            OPEN TO INTERNSHIPS
          </span>
        </motion.div>

        {/* Main hero grid */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
          {/* Left side */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={booted ? "visible" : "hidden"}
            className="relative z-20"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="mb-5 flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] text-cyan-400 sm:text-xs sm:tracking-[0.25em]"
            >
              <Sparkles size={14} />
              SOFTWARE ENGINEERING / WEB / AI
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.9 }}
              className="text-[17vw] font-black leading-[0.78] tracking-[-0.09em] sm:text-[13vw] lg:text-[8.5vw] xl:text-[8.2rem]"
            >
              <span className="block text-white">PRATIKSHA</span>
              <span className="mt-3 block text-white/[0.13]">
                KADAM<span className="text-cyan-400">.</span>
              </span>
            </motion.h1>

            {/* Role and description */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="mt-9"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-sm text-cyan-400">&gt;_</span>
                <h2 className="text-sm font-semibold tracking-[0.1em] text-white sm:text-lg sm:tracking-[0.13em]">
                  FULL STACK DEVELOPER
                </h2>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-300 sm:text-base">
                I create modern web experiences and build the systems behind
                them. Focused on full stack development, thoughtful interfaces,
                and integrating AI into practical applications.
              </p>
            </motion.div>

            {/* Technical details */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="mt-8 grid max-w-xl grid-cols-2 border border-white/10 sm:grid-cols-3"
            >
              <div className="border-b border-r border-white/10 p-4 sm:border-b-0">
                <div className="mb-3 font-mono text-[8px] tracking-[0.18em] text-neutral-500">
                  EDUCATION
                </div>
                <div className="text-xs font-medium text-white">MCA</div>
                <div className="mt-1 font-mono text-[9px] text-neutral-400">
                  2025 — 2027
                </div>
              </div>

              <div className="border-b border-white/10 p-4 sm:border-b-0 sm:border-r">
                <div className="mb-3 font-mono text-[8px] tracking-[0.18em] text-neutral-500">
                  LOCATION
                </div>
                <div className="text-xs font-medium text-white">Bengaluru</div>
                <div className="mt-1 font-mono text-[9px] text-neutral-400">
                  India
                </div>
              </div>

              <div className="col-span-2 p-4 sm:col-span-1">
                <div className="mb-3 font-mono text-[8px] tracking-[0.18em] text-neutral-500">
                  CURRENT FOCUS
                </div>
                <div className="text-xs font-medium text-white">
                  Full Stack + AI
                </div>
                <div className="mt-1 font-mono text-[9px] text-neutral-400">
                  Product Engineering
                </div>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="group flex items-center gap-3 bg-white px-5 py-4 font-mono text-[10px] font-bold tracking-[0.12em] text-black transition hover:bg-cyan-400 sm:px-6 sm:tracking-[0.16em]"
              >
                VIEW SELECTED WORK
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 border border-white/15 px-5 py-4 font-mono text-[10px] tracking-[0.12em] text-neutral-300 transition hover:border-cyan-400/40 hover:text-white sm:px-6 sm:tracking-[0.16em]"
              >
                TECHNICAL RESUME
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side identity visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={
              booted
                ? { opacity: 1, scale: 1, x: 0 }
                : { opacity: 0, scale: 0.92, x: 30 }
            }
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <IdentityVisual booted={booted} />

            <div className="mx-auto mt-2 flex max-w-[540px] items-center justify-between border-t border-white/10 pt-4 font-mono text-[8px] tracking-[0.12em] text-neutral-500 sm:text-[9px] sm:tracking-[0.16em]">
              <span className="flex items-center gap-2">
                <Terminal size={12} className="text-cyan-400" />
                DEVELOPER_IDENTITY
              </span>
              <span className="text-violet-400">SYSTEM / 2026</span>
            </div>
          </motion.div>
        </div>

        {/* Expertise strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={booted ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid border-y border-white/10 md:mt-16 md:grid-cols-3"
        >
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className={`group relative p-5 transition hover:bg-white/[0.02] sm:p-6 ${
                  index !== 2
                    ? "border-b border-white/10 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-500">
                    {item.number} / EXPERTISE
                  </span>
                  <Icon
                    size={16}
                    className="text-neutral-500 transition group-hover:text-cyan-400"
                  />
                </div>

                <h3 className="text-sm font-semibold tracking-[0.12em] text-white">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xs text-xs leading-6 text-neutral-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between font-mono text-[8px] tracking-[0.2em] text-neutral-500 sm:left-8 sm:right-8 lg:left-12 lg:right-12">
        <span className="hidden sm:block">PK / PORTFOLIO</span>

        <button
          onClick={() => scrollTo("projects")}
          className="group flex items-center gap-3 transition hover:text-white"
        >
          SCROLL TO EXPLORE
          <span className="flex h-8 w-8 items-center justify-center border border-white/10 transition group-hover:border-cyan-400/40 group-hover:text-cyan-400">
            <ArrowDown
              size={13}
              className="transition-transform group-hover:translate-y-1"
            />
          </span>
        </button>

        <span className="hidden sm:block">01 / 05</span>
      </div>
    </section>
  );
}
