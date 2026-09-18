import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  GraduationCap,
  Terminal,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const roles = [
  "FULL STACK DEVELOPER",
  "REACT DEVELOPER",
  "AI / ML DEVELOPER",
  "SOFTWARE ENGINEER",
];

const stack = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "Tailwind",
];

const projects = [
  {
    name: "EUPHORIA",
    type: "FULL STACK E-COMMERCE",
    description:
      "Luxury fashion e-commerce platform with authentication, admin management and product systems.",
    url: "https://euphoria-nine-swart.vercel.app",
  },
  {
    name: "AI WEATHER",
    type: "AI / FULL STACK",
    description:
      "Weather prediction platform combining React, Flask, OpenWeather and machine learning.",
    url: "https://ai-weather-prediction-system.vercel.app",
  },
  {
    name: "REVIO",
    type: "AI RESUME ANALYZER",
    description:
      "AI-powered resume analysis platform focused on ATS scoring, skills and career insights.",
    url: "#",
  },
];

/* =========================================================
   PARTICLES
========================================================= */

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    };

    resize();

    const particles = Array.from({ length: 85 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.4,
      speed: Math.random() * 0.35 + 0.08,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    let animationFrame;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.y -= particle.speed;

        if (particle.y < -10) {
          particle.y = height + 10;
          particle.x = Math.random() * width;
        }

        ctx.beginPath();

        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255,255,255,${particle.opacity})`;

        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-50"
    />
  );
}

/* =========================================================
   SYSTEM ERROR / GLITCH
   The name stays completely clean.
========================================================= */

function SystemGlitch({ glitch }) {
  return (
    <AnimatePresence>
      {glitch && (
        <>
          {/* Main screen displacement */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0.4, 0],
              x: [0, -7, 5, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-[90] pointer-events-none"
          >
            <div className="absolute inset-0 border-y border-violet-400/40" />

            <div className="absolute top-[31%] left-0 w-full h-[2px] bg-violet-400/40" />

            <div className="absolute top-[67%] left-0 w-full h-[1px] bg-cyan-400/30" />
          </motion.div>

          {/* Error message */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [40, 0, 3, -20],
            }}
            transition={{
              duration: 0.65,
            }}
            className="fixed right-8 top-28 z-[95] pointer-events-none font-mono"
          >
            <div className="border border-red-400/30 bg-black/80 px-4 py-3 backdrop-blur-md">
              <div className="text-[8px] tracking-[0.3em] text-red-400">
                SYSTEM ERROR
              </div>

              <div className="mt-1 text-[9px] tracking-[0.2em] text-white/40">
                SIGNAL INTERRUPTED // 0x7F
              </div>
            </div>
          </motion.div>

          {/* Random horizontal slices */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.7, 0, 0.5, 0],
              x: [0, 25, -18, 8, 0],
            }}
            transition={{
              duration: 0.4,
            }}
            className="fixed top-[44%] left-0 w-full h-[5px] bg-white/10 z-[92] pointer-events-none"
          />

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.6, 0, 0.4, 0],
              x: [0, -35, 20, -8, 0],
            }}
            transition={{
              duration: 0.32,
              delay: 0.08,
            }}
            className="fixed top-[53%] left-0 w-full h-[2px] bg-violet-400/20 z-[92] pointer-events-none"
          />

          {/* Screen scan */}

          <motion.div
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            animate={{
              y: "100%",
              opacity: [0, 0.35, 0],
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
            className="fixed left-0 top-0 w-full h-[18%] bg-gradient-to-b from-transparent via-violet-400/10 to-transparent z-[91] pointer-events-none"
          />
        </>
      )}
    </AnimatePresence>
  );
}

/* =========================================================
   BACKGROUND
========================================================= */

function Background() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 25,
  });

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 25,
  });

  useEffect(() => {
    const move = (event) => {
      mouseX.set(event.clientX - window.innerWidth / 2);
      mouseY.set(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(100,70,180,0.10), transparent 45%)",
        }}
      />

      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="absolute w-[500px] h-[500px] rounded-full blur-[130px] bg-violet-600/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Scanlines */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, white 4px)",
        }}
      />

      <ParticleCanvas />
    </div>
  );
}

/* =========================================================
   NAVIGATION
========================================================= */

function SystemNav({ scrollTo }) {
  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="relative z-30 flex items-center justify-between px-6 md:px-10 lg:px-16 py-6"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 border border-white/20 flex items-center justify-center font-black text-sm">
          PK
        </div>

        <div className="hidden sm:block">
          <p className="text-[10px] tracking-[0.35em] text-white/40">
            DIGITAL WORKSPACE
          </p>

          <p className="text-xs text-white/80 tracking-wider">
            PRATIKSHA // SYSTEM
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.25em] text-white/45">
        <button
          onClick={() => scrollTo("projects")}
          className="hover:text-white transition"
        >
          WORK
        </button>

        <button
          onClick={() => scrollTo("about")}
          className="hover:text-white transition"
        >
          ABOUT
        </button>

        <button
          onClick={() => scrollTo("contact")}
          className="hover:text-white transition"
        >
          CONTACT
        </button>
      </div>

      <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-emerald-400">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        AVAILABLE
      </div>
    </motion.nav>
  );
}

/* =========================================================
   TERMINAL
========================================================= */

function TerminalWindow() {
  const [command, setCommand] = useState("whoami");

  const outputs = {
    whoami: (
      <div className="space-y-2">
        <div className="text-violet-400">// IDENTITY</div>

        <div>
          <span className="text-white/30">01</span>{" "}
          <span className="text-white">Pratiksha Kadam</span>
        </div>

        <div>
          <span className="text-white/30">02</span>{" "}
          <span className="text-white/60">MCA · Garden City University</span>
        </div>

        <div>
          <span className="text-white/30">03</span>{" "}
          <span className="text-white/60">Full Stack Developer</span>
        </div>

        <div>
          <span className="text-white/30">04</span>{" "}
          <span className="text-white/60">Bengaluru, India</span>
        </div>
      </div>
    ),

    stack: (
      <div className="space-y-2">
        <div className="text-cyan-400">// STACK</div>

        <div className="flex flex-wrap gap-2 pt-2">
          {stack.map((item) => (
            <span
              key={item}
              className="px-2 py-1 border border-white/10 bg-white/[0.03] text-white/70 text-[10px]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),

    projects: (
      <div className="space-y-3">
        <div className="text-pink-400">// PROJECTS</div>

        {projects.map((project, index) => (
          <div key={project.name} className="flex gap-3">
            <span className="text-white/20">0{index + 1}</span>

            <div>
              <div className="text-white text-xs">{project.name}</div>

              <div className="text-white/40 text-[10px]">{project.type}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.9,
        delay: 1.1,
      }}
      className="relative w-full max-w-[470px]"
    >
      <div className="absolute -inset-1 bg-violet-500/10 blur-2xl" />

      <div className="relative border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
        <div className="h-10 border-b border-white/10 flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />

            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />

            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>

          <div className="text-[9px] tracking-[0.3em] text-white/30">
            PRATIKSHA_TERMINAL
          </div>

          <Terminal className="w-3.5 h-3.5 text-white/30" />
        </div>

        <div className="flex border-b border-white/10 overflow-hidden">
          {["whoami", "stack", "projects"].map((item) => (
            <button
              key={item}
              onClick={() => setCommand(item)}
              className={`px-4 py-3 text-[10px] font-mono transition ${
                command === item
                  ? "text-white bg-white/[0.07]"
                  : "text-white/35 hover:text-white/70"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="min-h-[220px] p-5 font-mono text-xs">
          <div className="flex items-center gap-2 mb-5 text-white/40">
            <span className="text-emerald-400">pratiksha@dev</span>

            <span>~$</span>

            <span className="text-white">{command}</span>

            <span className="w-1.5 h-3 bg-white/70 animate-pulse" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={command}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              {outputs[command]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="border-t border-white/10 px-4 py-3 flex items-center justify-between text-[9px] tracking-wider text-white/25">
          <span>STATUS: ONLINE</span>

          <span>SYS_2026</span>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   FALLING IDENTITY
========================================================= */

function FallingIdentity() {
  const items = [
    {
      number: "01",
      label: "NAME",
      value: "PRATIKSHA KADAM",
    },
    {
      number: "02",
      label: "ROLE",
      value: "FULL STACK DEVELOPER",
    },
    {
      number: "03",
      label: "FOCUS",
      value: "WEB + AI / ML",
    },
    {
      number: "04",
      label: "EDUCATION",
      value: "MCA · GARDEN CITY UNIVERSITY",
    },
    {
      number: "05",
      label: "LOCATION",
      value: "BENGALURU / INDIA",
    },
  ];

  return (
    <div className="absolute right-[-5%] top-[18%] hidden xl:block w-[340px] pointer-events-none">
      {items.map((item, index) => (
        <motion.div
          key={item.number}
          initial={{
            opacity: 0,
            y: -160 - index * 60,
            rotateX: 65,
            scale: 0.7,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            delay: 1.25 + index * 0.13,
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
          className="relative border-l border-white/10 py-4 pl-5 mb-2"
        >
          <motion.div
            initial={{
              y: -40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.35 + index * 0.13,
              duration: 0.5,
            }}
            className="absolute left-[-9px] top-5 w-4 h-4 bg-black border border-white/20 text-[7px] flex items-center justify-center text-white/40"
          >
            {item.number}
          </motion.div>

          <div className="text-[8px] tracking-[0.35em] text-white/25 mb-1">
            {item.label}
          </div>

          <motion.div
            animate={{
              x: [0, -2, 2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.4,
            }}
            className="text-xs font-semibold tracking-[0.18em] text-white/65"
          >
            {item.value}
          </motion.div>

          <motion.div
            initial={{
              scaleX: 0,
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              delay: 1.5 + index * 0.13,
              duration: 0.8,
            }}
            className="origin-left mt-2 h-[1px] w-full bg-gradient-to-r from-violet-500/50 to-transparent"
          />
        </motion.div>
      ))}

      <motion.div
        initial={{
          height: 0,
        }}
        animate={{
          height: "100%",
        }}
        transition={{
          duration: 1.8,
          delay: 1.2,
        }}
        className="absolute left-0 top-0 w-px bg-gradient-to-b from-violet-500/60 via-cyan-400/20 to-transparent"
      />
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const [booted, setBooted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [systemGlitch, setSystemGlitch] = useState(false);

  /* Boot */

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooted(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  /* Role typing */

  useEffect(() => {
    if (!booted) return;

    const currentRole = roles[roleIndex];

    let index = 0;

    setTypedRole("");

    const interval = setInterval(() => {
      if (index < currentRole.length) {
        setTypedRole(currentRole.slice(0, index + 1));

        index++;
      } else {
        clearInterval(interval);

        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1800);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [booted, roleIndex]);

  /* =======================================================
     SYSTEM ERROR EVENT
     
     The whole interface briefly shifts.
     The name itself is untouched.
  ======================================================= */

  useEffect(() => {
    if (!booted) return;

    let timeout;

    const triggerGlitch = () => {
      setSystemGlitch(true);

      timeout = setTimeout(() => {
        setSystemGlitch(false);
      }, 650);
    };

    const schedule = () => {
      const next = Math.random() * 7000 + 6000;

      timeout = setTimeout(() => {
        triggerGlitch();

        schedule();
      }, next);
    };

    schedule();

    return () => {
      clearTimeout(timeout);
    };
  }, [booted]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050507] text-white"
    >
      {/* SYSTEM GLITCH */}

      <SystemGlitch glitch={systemGlitch} />

      {/* =================================================
          BOOT
      ================================================= */}

      <AnimatePresence>
        {!booted && (
          <motion.div
            initial={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.05,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.7,
            }}
            className="fixed inset-0 z-[100] bg-[#050507] flex items-center justify-center"
          >
            <div className="w-[280px]">
              <div className="flex items-center justify-between mb-3 text-[9px] tracking-[0.3em] text-white/40">
                <span>INITIALIZING WORKSPACE</span>

                <span>01</span>
              </div>

              <div className="h-[2px] bg-white/10 overflow-hidden">
                <motion.div
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                  className="h-full bg-white"
                />
              </div>

              <div className="mt-4 text-[8px] tracking-[0.25em] text-white/25">
                LOADING PRATIKSHA.SYSTEM...
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Background />

      <SystemNav scrollTo={scrollTo} />

      <FallingIdentity />

      {/* =================================================
          MAIN HERO
      ================================================= */}

      <div className="relative z-10 min-h-[calc(100vh-90px)] px-6 md:px-10 lg:px-16 flex items-center">
        <div className="w-full max-w-[1500px] mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          {/* LEFT */}

          <div className="relative">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: booted ? 1 : 0,
                y: booted ? 0 : 20,
              }}
              transition={{
                duration: 0.6,
                delay: 1.1,
              }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-violet-500" />

              <span className="text-[9px] tracking-[0.4em] text-white/30">
                SYSTEM / 001
              </span>

              <span className="text-[9px] tracking-[0.3em] text-emerald-400">
                ONLINE
              </span>
            </motion.div>

            {/* CLEAN NAME */}

            <div className="relative">
              <motion.h1
                initial={{
                  y: 140,
                  opacity: 0,
                  filter: "blur(14px)",
                }}
                animate={{
                  y: booted ? 0 : 140,
                  opacity: booted ? 1 : 0,
                  filter: booted ? "blur(0px)" : "blur(14px)",
                }}
                transition={{
                  duration: 1,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 70,
                }}
                className="text-[15vw] lg:text-[9.5vw] xl:text-[8.5rem] leading-[0.78] font-black tracking-[-0.08em]"
              >
                PRATIKSHA
              </motion.h1>

              <motion.h1
                initial={{
                  y: 140,
                  opacity: 0,
                  filter: "blur(14px)",
                }}
                animate={{
                  y: booted ? 0 : 140,
                  opacity: booted ? 1 : 0,
                  filter: booted ? "blur(0px)" : "blur(14px)",
                }}
                transition={{
                  duration: 1,
                  delay: 0.95,
                  type: "spring",
                  stiffness: 70,
                }}
                className="text-[15vw] lg:text-[9.5vw] xl:text-[8.5rem] leading-[0.85] font-black tracking-[-0.08em] text-white/10"
              >
                KADAM
              </motion.h1>
            </div>

            {/* ROLE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: booted ? 1 : 0,
                y: booted ? 0 : 20,
              }}
              transition={{
                duration: 0.6,
                delay: 1.35,
              }}
              className="mt-10 flex items-center gap-3"
            >
              <span className="text-violet-400 font-mono text-sm">&gt;_</span>

              <span className="text-xl md:text-2xl tracking-[0.12em] font-light">
                {typedRole}
              </span>

              <span className="w-[2px] h-6 bg-violet-400 animate-pulse" />
            </motion.div>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: booted ? 1 : 0,
                y: booted ? 0 : 20,
              }}
              transition={{
                duration: 0.6,
                delay: 1.55,
              }}
              className="mt-7 max-w-[650px] text-sm md:text-base leading-7 text-white/45"
            >
              I build modern full-stack web applications with React, Node.js and
              Python — while exploring the intersection of software engineering
              and AI.
            </motion.p>

            {/* STACK */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: booted ? 1 : 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.8,
              }}
              className="mt-7 flex flex-wrap gap-2 max-w-[700px]"
            >
              {stack.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.8 + index * 0.05,
                  }}
                  className="px-3 py-1.5 border border-white/10 bg-white/[0.025] text-[9px] tracking-[0.15em] text-white/40 hover:text-white hover:border-white/25 transition"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            {/* BUTTONS */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: booted ? 1 : 0,
                y: booted ? 0 : 20,
              }}
              transition={{
                duration: 0.7,
                delay: 2,
              }}
              className="flex flex-wrap items-center gap-3 mt-10"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="group flex items-center gap-3 px-6 py-3.5 bg-white text-black text-[10px] font-bold tracking-[0.2em] hover:bg-violet-400 transition"
              >
                VIEW PROJECTS
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition" />
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3.5 border border-white/15 text-white/70 text-[10px] font-bold tracking-[0.2em] hover:bg-white/5 hover:text-white transition"
              >
                RESUME
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/pratikshakadam912"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3.5 border border-white/10 text-white/40 hover:text-white transition"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </motion.div>

            {/* META */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: booted ? 1 : 0,
              }}
              transition={{
                duration: 0.8,
                delay: 2.2,
              }}
              className="mt-12 flex flex-wrap gap-8 text-[9px] tracking-[0.25em] text-white/25"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" />
                MCA · 2025 — 2027
              </div>

              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" />
                OPEN TO OPPORTUNITIES
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px]">
              <TerminalWindow />

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: booted ? 1 : 0,
                  y: booted ? 0 : 30,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.6,
                }}
                className="mt-4 grid grid-cols-3 border border-white/10 bg-white/[0.015]"
              >
                <div className="p-4 border-r border-white/10">
                  <div className="text-[8px] tracking-[0.25em] text-white/25">
                    BUILD
                  </div>

                  <div className="mt-2 text-xs text-white/70">FULL STACK</div>
                </div>

                <div className="p-4 border-r border-white/10">
                  <div className="text-[8px] tracking-[0.25em] text-white/25">
                    FOCUS
                  </div>

                  <div className="mt-2 text-xs text-white/70">WEB + AI</div>
                </div>

                <div className="p-4">
                  <div className="text-[8px] tracking-[0.25em] text-white/25">
                    STATUS
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-xs text-emerald-400">
                    <Check className="w-3 h-3" />
                    ONLINE
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          BOTTOM
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: booted ? 1 : 0,
        }}
        transition={{
          duration: 1,
          delay: 2.5,
        }}
        className="absolute bottom-7 left-6 right-6 md:left-10 md:right-10 lg:left-16 lg:right-16 z-20 flex items-end justify-between"
      >
        <div className="hidden md:block text-[8px] tracking-[0.3em] text-white/20">
          PRATIKSHA.KADAM / 2026
        </div>

        <button
          onClick={() => scrollTo("projects")}
          className="group flex items-center gap-3 text-[9px] tracking-[0.3em] text-white/30 hover:text-white transition"
        >
          SCROLL TO EXPLORE
          <span className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition" />
          </span>
        </button>

        <div className="hidden md:block text-[8px] tracking-[0.25em] text-white/20">
          01 / 05
        </div>
      </motion.div>
    </section>
  );
}
