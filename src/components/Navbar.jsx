import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { id: "home", label: "HOME" },
  { id: "projects", label: "WORK" },
  { id: "about", label: "ABOUT" },
  { id: "contact", label: "CONTACT" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // =========================================================
  // SCROLL + ACTIVE SECTION DETECTION
  // =========================================================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.35) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================================================
  // CLOSE MOBILE MENU ON RESIZE
  // =========================================================
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // =========================================================
  // PREVENT PAGE SCROLL WHEN MOBILE MENU IS OPEN
  // =========================================================
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // =========================================================
  // SMOOTH SCROLL
  // =========================================================
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const offset = 80;

    const position =
      section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });

    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/95 backdrop-blur-xl border-b border-[#181818]"
            : "bg-transparent"
        }`}
      >
        <div className="relative max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="h-[76px] flex items-center justify-between">
            {/* =================================================
                LEFT — SYSTEM IDENTITY
            ================================================= */}
            <button
              onClick={() => scrollToSection("home")}
              className="group flex items-center gap-3"
              aria-label="Go to home"
            >
              {/* PK BOX */}
              <div className="relative w-9 h-9 flex items-center justify-center border border-[#292929] bg-[#080808] group-hover:border-cyan-400/60 transition-colors duration-300">
                <span className="text-[11px] font-bold tracking-tight text-white">
                  PK
                </span>

                {/* Corner markers */}
                <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-cyan-400" />

                <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-cyan-400" />
              </div>

              {/* TITLE */}
              <div className="hidden sm:block text-left">
                <div className="text-[10px] tracking-[0.28em] font-medium text-white">
                  DIGITAL WORKSPACE
                </div>

                <div className="mt-0.5 text-[8px] tracking-[0.22em] text-[#555]">
                  PRATIKSHA // SYSTEM
                </div>
              </div>
            </button>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1 p-1 border border-[#1b1b1b] bg-[#080808]">
                {navItems
                  .filter((item) => item.id !== "home")
                  .map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="relative px-5 py-2.5 text-[9px] tracking-[0.24em] font-medium transition-colors duration-300"
                      >
                        {/* Active background */}
                        {isActive && (
                          <motion.span
                            layoutId="activeNav"
                            className="absolute inset-0 bg-[#111111] border border-[#242424]"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}

                        {/* Active cyan indicator */}
                        {isActive && (
                          <motion.span
                            layoutId="activeDot"
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                          />
                        )}

                        <span
                          className={`relative z-10 ${
                            isActive
                              ? "text-white"
                              : "text-[#555] hover:text-white"
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* =================================================
                RIGHT — SYSTEM STATUS
            ================================================= */}
            <div className="hidden md:flex items-center gap-5">
              {/* Version */}
              <div className="text-[8px] tracking-[0.2em] text-[#3f3f3f]">
                SYS_2026
              </div>

              {/* Available */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />

                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </span>

                <span className="text-[8px] tracking-[0.2em] text-[#666]">
                  AVAILABLE
                </span>
              </div>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center border border-[#292929] bg-[#080808] text-white"
              aria-label="Open navigation"
            >
              <Menu size={17} strokeWidth={1.5} />

              {/* Corner markers */}
              <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-cyan-400" />

              <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-cyan-400" />
            </button>
          </div>
        </div>

        {/* Technical bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
      </motion.nav>

      {/* =====================================================
          MOBILE SYSTEM MENU
      ===================================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[10000] bg-[#050505]"
          >
            {/* Background technical grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
            />

            {/* Moving scanline */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 right-0 h-px bg-cyan-400/20"
            />

            {/* =================================================
                MOBILE HEADER
            ================================================= */}
            <div className="relative h-[76px] px-5 sm:px-8 flex items-center justify-between border-b border-[#181818]">
              <div className="flex items-center gap-3">
                {/* PK */}
                <div className="relative w-9 h-9 flex items-center justify-center border border-[#292929] bg-[#080808]">
                  <span className="text-[11px] font-bold text-white">PK</span>

                  <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-cyan-400" />

                  <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-cyan-400" />
                </div>

                <div>
                  <div className="text-[10px] tracking-[0.28em] text-white">
                    DIGITAL WORKSPACE
                  </div>

                  <div className="text-[8px] tracking-[0.2em] text-[#444] mt-0.5">
                    NAVIGATION // 01
                  </div>
                </div>
              </div>

              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="relative w-10 h-10 flex items-center justify-center border border-[#292929] bg-[#080808] text-white"
                aria-label="Close navigation"
              >
                <X size={18} strokeWidth={1.5} />

                <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-cyan-400" />

                <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-cyan-400" />
              </button>
            </div>

            {/* =================================================
                MOBILE LINKS
            ================================================= */}
            <div className="relative min-h-[calc(100vh-76px)] flex flex-col justify-center px-6 sm:px-12">
              {/* Header */}
              <div className="mb-10">
                <div className="text-[8px] tracking-[0.3em] text-cyan-400/70 mb-3">
                  SYSTEM NAVIGATION
                </div>

                <div className="h-px w-16 bg-cyan-400/40" />
              </div>

              {/* Links */}
              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      initial={{
                        x: 30,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        opacity: 1,
                      }}
                      transition={{
                        delay: index * 0.07,
                        duration: 0.35,
                      }}
                      onClick={() => scrollToSection(item.id)}
                      className={`group relative w-full flex items-center justify-between py-5 px-4 border-b border-[#171717] text-left transition-colors ${
                        isActive ? "bg-[#0b0b0b]" : "hover:bg-[#080808]"
                      }`}
                    >
                      <div className="flex items-center gap-5">
                        {/* Number */}
                        <span
                          className={`text-[9px] tracking-[0.2em] ${
                            isActive ? "text-cyan-400" : "text-[#333]"
                          }`}
                        >
                          0{index + 1}
                        </span>

                        {/* Label */}
                        <span
                          className={`text-xl sm:text-2xl tracking-[0.18em] font-light ${
                            isActive
                              ? "text-white"
                              : "text-[#666] group-hover:text-white"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>

                      {/* Arrow */}
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.2}
                        className={`transition-all duration-300 ${
                          isActive
                            ? "text-cyan-400 opacity-100"
                            : "text-[#333] opacity-0 group-hover:opacity-100 group-hover:text-[#888]"
                        }`}
                      />

                      {/* Active line */}
                      {isActive && (
                        <motion.div
                          layoutId="mobileActiveLine"
                          className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-400"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* =================================================
                  MOBILE FOOTER
              ================================================= */}
              <div className="mt-12 flex items-center justify-between">
                <div>
                  <div className="text-[8px] tracking-[0.22em] text-[#444]">
                    PRATIKSHA.KADAM
                  </div>

                  <div className="text-[8px] tracking-[0.22em] text-[#292929] mt-1">
                    SYS_2026
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />

                  <span className="text-[8px] tracking-[0.2em] text-[#444]">
                    SYSTEM ONLINE
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
