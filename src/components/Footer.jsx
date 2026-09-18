import React from "react";
import { ArrowUpRight, Code2, Terminal, ArrowUp, Circle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
      {/* =====================================================
          BACKGROUND SYSTEM
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Scanlines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.5) 4px)",
          }}
        />

        {/* Cyan ambient */}
        <div className="absolute -bottom-48 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.07] blur-[150px]" />

        {/* Violet ambient */}
        <div className="absolute -top-48 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/[0.05] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-12 sm:px-8 lg:px-12">
        {/* =====================================================
            TOP SYSTEM BAR
        ====================================================== */}

        <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3 font-mono text-[9px] tracking-[0.25em] text-neutral-400">
            <span className="text-cyan-400">SYS</span>
            <span className="text-neutral-600">/</span>
            <span>FOOTER</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-neutral-400">
            <Circle size={6} fill="currentColor" className="text-cyan-400" />
            SYSTEM_ONLINE
          </div>
        </div>

        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}

        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* BRAND */}

          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-white/15 bg-[#080808] font-mono text-xs text-cyan-400">
                PK
              </div>

              <div>
                <p className="font-mono text-xs tracking-[0.18em] text-white">
                  PRATIKSHA KADAM
                </p>

                <p className="mt-1 font-mono text-[8px] tracking-[0.2em] text-neutral-400">
                  DIGITAL WORKSPACE
                </p>
              </div>
            </div>

            <p className="max-w-md font-mono text-[10px] leading-6 tracking-[0.08em] text-neutral-300">
              FULL STACK DEVELOPER BUILDING MODERN WEB APPLICATIONS WITH A FOCUS
              ON PRACTICAL AI / ML INTEGRATION.
            </p>
          </div>

          {/* NAVIGATION */}

          <div>
            <div className="mb-5 flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-neutral-400">
              <Terminal size={12} />
              NAVIGATION
            </div>

            <div className="flex flex-col items-start gap-3">
              <a
                href="#home"
                className="group flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-neutral-300 transition-colors hover:text-cyan-400"
              >
                HOME
                <ArrowUpRight
                  size={11}
                  className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>

              <a
                href="#projects"
                className="group flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-neutral-300 transition-colors hover:text-cyan-400"
              >
                WORK
                <ArrowUpRight
                  size={11}
                  className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>

              <a
                href="#about"
                className="group flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-neutral-300 transition-colors hover:text-cyan-400"
              >
                ABOUT
                <ArrowUpRight
                  size={11}
                  className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>

              <a
                href="#contact"
                className="group flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-neutral-300 transition-colors hover:text-cyan-400"
              >
                CONTACT
                <ArrowUpRight
                  size={11}
                  className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>
            </div>
          </div>

          {/* EXTERNAL LINKS */}

          <div>
            <div className="mb-5 flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-neutral-400">
              <Code2 size={12} />
              EXTERNAL_NODES
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/pratikshakadam912"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] tracking-[0.15em] text-neutral-300 transition-colors hover:text-cyan-400"
              >
                GITHUB
                <ArrowUpRight
                  size={12}
                  className="text-neutral-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/pratiksha-kadam-a639872a3?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] tracking-[0.15em] text-neutral-300 transition-colors hover:text-cyan-400"
              >
                LINKEDIN
                <ArrowUpRight
                  size={12}
                  className="text-neutral-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                />
              </a>

              <a
                href="mailto:kadampratiksha869@gmail.com"
                className="group flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] tracking-[0.15em] text-neutral-300 transition-colors hover:text-cyan-400"
              >
                EMAIL
                <ArrowUpRight
                  size={12}
                  className="text-neutral-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                />
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            SYSTEM STATUS
        ====================================================== */}

        <div className="mt-12 grid border-y border-white/10 py-5 sm:grid-cols-3">
          <div className="border-b border-white/10 pb-4 sm:border-b-0 sm:border-r sm:pb-0">
            <p className="font-mono text-[8px] tracking-[0.2em] text-neutral-500">
              STATUS
            </p>

            <p className="mt-2 font-mono text-[10px] text-cyan-400">
              AVAILABLE
            </p>
          </div>

          <div className="border-b border-white/10 py-4 sm:border-b-0 sm:border-r sm:px-6 sm:py-0">
            <p className="font-mono text-[8px] tracking-[0.2em] text-neutral-500">
              STACK
            </p>

            <p className="mt-2 font-mono text-[10px] text-neutral-300">
              REACT · NODE · PYTHON
            </p>
          </div>

          <div className="pt-4 sm:px-6 sm:pt-0">
            <p className="font-mono text-[8px] tracking-[0.2em] text-neutral-500">
              LOCATION
            </p>

            <p className="mt-2 font-mono text-[10px] text-neutral-300">
              BENGALURU / INDIA
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-mono text-[9px] tracking-[0.15em] text-neutral-400">
            © {new Date().getFullYear()} PRATIKSHA KADAM
            <span className="mx-2 text-neutral-600">//</span>
            BUILT WITH REACT
          </div>

          {/* BACK TO TOP */}

          <a
            href="#home"
            aria-label="Back to top"
            className="group flex h-10 w-10 items-center justify-center border border-white/15 bg-[#080808] transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/[0.05]"
          >
            <ArrowUp
              size={15}
              className="text-neutral-300 transition-all group-hover:-translate-y-1 group-hover:text-cyan-400"
            />
          </a>
        </div>

        {/* FINAL TECHNICAL LINE */}

        <div className="mt-8 flex items-center justify-between font-mono text-[8px] tracking-[0.2em] text-neutral-500">
          <span>PRATIKSHA.DEV</span>

          <span>END_OF_INTERFACE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
