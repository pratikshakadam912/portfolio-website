import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Code2,
  Mail,
  Send,
  Terminal,
  Circle,
} from "lucide-react";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_za79i9h",
        "template_3g76ep1",
        form.current,
        "TAp9ld3NZHI3AMQNo",
      )
      .then(() => {
        setLoading(false);
        setStatus("success");
        form.current.reset();
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* =====================================================
          BACKGROUND SYSTEM
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
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
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.5) 4px)",
          }}
        />

        {/* Cyan ambient */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            opacity: [0.08, 0.14, 0.08],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[160px]"
        />

        {/* Violet ambient */}
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[160px]"
        />

        {/* Horizontal system line */}
        <div className="absolute left-0 right-0 top-[18%] h-px bg-white/[0.04]" />
        <div className="absolute left-0 right-0 bottom-[18%] h-px bg-white/[0.04]" />
      </div>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col px-5 py-24 sm:px-8 lg:px-12">
        {/* TOP SYSTEM BAR */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex items-center justify-between border-b border-white/10 pb-5"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] text-neutral-500">
            <span className="text-cyan-400">05</span>
            <span>/</span>
            <span>CONTACT</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-neutral-600">
            <Circle size={7} fill="currentColor" className="text-cyan-400" />
            CONNECTION_READY
          </div>
        </motion.div>

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-cyan-400">
              <Terminal size={14} />
              OPEN_CONNECTION
            </div>

            <h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
              LET'S
              <br />
              <span className="text-neutral-500">BUILD.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l border-white/10 pl-5"
          >
            <p className="font-mono text-[11px] leading-6 tracking-[0.08em] text-neutral-500">
              Have a project, internship opportunity, freelance requirement, or
              collaboration in mind?
            </p>

            <p className="mt-4 font-mono text-[11px] leading-6 tracking-[0.08em] text-neutral-600">
              SEND A MESSAGE.
              <br />
              LET'S START A CONVERSATION.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            CONTENT GRID
        ====================================================== */}

        <div className="grid flex-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* =================================================
              LEFT — SYSTEM INFO
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Identity terminal */}

            <div className="border border-white/10 bg-[#080808]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                  <Code2 size={13} />
                  CONTACT_NODE
                </div>

                <span className="font-mono text-[9px] text-cyan-400">
                  ONLINE
                </span>
              </div>

              <div className="space-y-6 p-6">
                <div>
                  <p className="mb-2 font-mono text-[9px] tracking-[0.2em] text-neutral-600">
                    CURRENT_ROLE
                  </p>

                  <p className="font-mono text-sm text-white">
                    FULL STACK DEVELOPER
                  </p>
                </div>

                <div>
                  <p className="mb-2 font-mono text-[9px] tracking-[0.2em] text-neutral-600">
                    FOCUS
                  </p>

                  <p className="font-mono text-sm text-neutral-300">
                    WEB + AI / ML
                  </p>
                </div>

                <div>
                  <p className="mb-2 font-mono text-[9px] tracking-[0.2em] text-neutral-600">
                    BASE
                  </p>

                  <p className="font-mono text-sm text-neutral-300">
                    BENGALURU / INDIA
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-cyan-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    AVAILABLE FOR OPPORTUNITIES
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}

            <a
              href="mailto:kadampratiksha869@gmail.com"
              className="group mt-5 flex items-center justify-between border border-white/10 bg-[#080808] px-5 py-4 transition-colors duration-300 hover:border-cyan-400/40"
            >
              <div className="flex items-center gap-4">
                <Mail
                  size={17}
                  className="text-neutral-500 transition-colors group-hover:text-cyan-400"
                />

                <div>
                  <p className="font-mono text-[9px] tracking-[0.2em] text-neutral-600">
                    EMAIL
                  </p>

                  <p className="mt-1 text-sm text-neutral-300">
                    kadampratiksha869@gmail.com
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={16}
                className="text-neutral-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
              />
            </a>

            {/* Socials */}

            <div className="mt-auto pt-8">
              <p className="mb-4 font-mono text-[9px] tracking-[0.25em] text-neutral-600">
                EXTERNAL_NODES
              </p>

              <div className="grid grid-cols-2 gap-px bg-white/10">
                <a
                  href="https://www.linkedin.com/in/pratiksha-kadam-a639872a3?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between bg-[#050505] px-5 py-4 transition-colors hover:bg-[#0b0b0b]"
                >
                  <div className="flex items-center gap-3">
                    <Code2
                      size={15}
                      className="text-neutral-500 group-hover:text-cyan-400"
                    />
                    <span className="font-mono text-[10px] tracking-[0.15em] text-neutral-400">
                      LINKEDIN
                    </span>
                  </div>

                  <ArrowUpRight
                    size={13}
                    className="text-neutral-700 group-hover:text-cyan-400"
                  />
                </a>

                <a
                  href="https://github.com/pratikshakadam912"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between bg-[#050505] px-5 py-4 transition-colors hover:bg-[#0b0b0b]"
                >
                  <div className="flex items-center gap-3">
                    <Code2
                      size={15}
                      className="text-neutral-500 group-hover:text-cyan-400"
                    />
                    <span className="font-mono text-[10px] tracking-[0.15em] text-neutral-400">
                      GITHUB
                    </span>
                  </div>

                  <ArrowUpRight
                    size={13}
                    className="text-neutral-700 group-hover:text-cyan-400"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — CONTACT TERMINAL
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="relative h-full border border-white/10 bg-[#080808]"
            >
              {/* Terminal header */}

              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-neutral-700" />
                    <span className="h-2 w-2 rounded-full bg-neutral-700" />
                    <span className="h-2 w-2 rounded-full bg-neutral-700" />
                  </div>

                  <span className="font-mono text-[10px] tracking-[0.15em] text-neutral-500">
                    message.exe
                  </span>
                </div>

                <span className="font-mono text-[9px] text-neutral-700">
                  SECURE_CHANNEL
                </span>
              </div>

              {/* Form */}

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="mb-8 font-mono text-xs text-neutral-600">
                  <span className="text-cyan-400">pratiksha@portfolio</span>
                  <span className="text-neutral-700">:</span>
                  <span className="text-neutral-400">~$</span>{" "}
                  <span className="text-neutral-500">initialize_message</span>
                </div>

                {/* Name */}

                <div className="mb-7">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block font-mono text-[9px] tracking-[0.2em] text-neutral-600"
                  >
                    01 / IDENTIFIER
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full border-b border-white/10 bg-transparent px-0 py-3 font-mono text-sm text-white outline-none transition-colors placeholder:text-neutral-700 focus:border-cyan-400"
                  />
                </div>

                {/* Email */}

                <div className="mb-7">
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block font-mono text-[9px] tracking-[0.2em] text-neutral-600"
                  >
                    02 / RETURN_ADDRESS
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full border-b border-white/10 bg-transparent px-0 py-3 font-mono text-sm text-white outline-none transition-colors placeholder:text-neutral-700 focus:border-cyan-400"
                  />
                </div>

                {/* Message */}

                <div className="mb-8">
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block font-mono text-[9px] tracking-[0.2em] text-neutral-600"
                  >
                    03 / PAYLOAD
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    placeholder="Tell me what you're building..."
                    required
                    className="w-full resize-none border-b border-white/10 bg-transparent px-0 py-3 font-mono text-sm leading-7 text-white outline-none transition-colors placeholder:text-neutral-700 focus:border-cyan-400"
                  />
                </div>

                {/* Submit */}

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-between border border-cyan-400/30 bg-cyan-400/[0.04] px-5 py-4 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span className="flex items-center gap-3 font-mono text-xs tracking-[0.15em] text-cyan-400">
                    <Send size={15} />
                    {loading ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-cyan-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </motion.button>

                {/* Status */}

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-5 flex items-center gap-3 border border-cyan-400/20 bg-cyan-400/[0.04] px-4 py-3"
                    >
                      <Check size={15} className="text-cyan-400" />

                      <span className="font-mono text-[10px] tracking-[0.1em] text-cyan-400">
                        MESSAGE_TRANSMITTED_SUCCESSFULLY
                      </span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-5 border border-red-400/20 bg-red-400/[0.04] px-4 py-3"
                    >
                      <span className="font-mono text-[10px] tracking-[0.1em] text-red-400">
                        TRANSMISSION_FAILED — PLEASE_RETRY
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Corner labels */}

              <div className="absolute bottom-2 left-3 font-mono text-[8px] text-neutral-800">
                ENCRYPTED
              </div>

              <div className="absolute bottom-2 right-3 font-mono text-[8px] text-neutral-800">
                PORT_443
              </div>
            </form>
          </motion.div>
        </div>

        {/* =====================================================
            FOOTER SYSTEM LINE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 font-mono text-[9px] tracking-[0.2em] text-neutral-700 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>05 / 05 — CONTACT_INTERFACE</span>

          <span>ENDPOINT_READY // AWAITING_INPUT</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
