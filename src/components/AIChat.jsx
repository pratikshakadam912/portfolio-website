import React, { useEffect, useRef, useState } from "react";
import {
  Bot,
  ChevronDown,
  Code2,
  MessageSquare,
  Send,
  Sparkles,
  Trash2,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/* =========================================================
   QUICK QUESTIONS
========================================================= */

const quickQuestions = [
  "What projects have you built?",
  "What are your skills?",
  "How can I contact you?",
];

/* =========================================================
   AI RESPONSES
========================================================= */

const getReply = (message) => {
  const msg = message.toLowerCase().trim();

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return "Hey! I'm Pratiksha's portfolio assistant. Ask me about her projects, skills, education, experience, or how to get in touch.";
  }

  if (
    msg.includes("project") ||
    msg.includes("projects") ||
    msg.includes("built") ||
    msg.includes("portfolio")
  ) {
    return "Pratiksha currently showcases Euphoria, a full-stack fashion e-commerce platform; AI Weather, a weather prediction application; and Revio, an AI-powered resume analyzer currently in development.";
  }

  if (
    msg.includes("euphoria") ||
    msg.includes("e-commerce") ||
    msg.includes("ecommerce")
  ) {
    return "Euphoria is a full-stack fashion e-commerce platform built with React, Node.js, Express, MongoDB, Firebase and Tailwind. It includes authentication, product management, filtering, an admin dashboard and order management.";
  }

  if (msg.includes("weather") || msg.includes("prediction")) {
    return "AI Weather is a full-stack weather prediction system using React, Python, Flask, OpenWeather and machine learning. It includes weather data, predictions, history and analytics.";
  }

  if (
    msg.includes("revio") ||
    msg.includes("resume analyzer") ||
    msg.includes("resume")
  ) {
    return "Revio is an AI resume analyzer in development. The planned stack includes Next.js, Python, PostgreSQL and Prisma, with features such as ATS analysis, skill extraction, role suggestions and AI career insights.";
  }

  if (
    msg.includes("skill") ||
    msg.includes("skills") ||
    msg.includes("technology") ||
    msg.includes("tech stack") ||
    msg.includes("stack")
  ) {
    return "Pratiksha works with React, JavaScript, Node.js, Express, Python, MongoDB, PostgreSQL and Tailwind. She's also developing her AI/ML skills and integrating AI into full-stack applications.";
  }

  if (
    msg.includes("react") ||
    msg.includes("javascript") ||
    msg.includes("node") ||
    msg.includes("python")
  ) {
    return "Her current development stack includes React and JavaScript on the frontend, Node.js and Express for backend development, and Python for AI/ML and backend work.";
  }

  if (
    msg.includes("education") ||
    msg.includes("study") ||
    msg.includes("degree") ||
    msg.includes("college")
  ) {
    return "Pratiksha is pursuing an MCA at Garden City University in Bengaluru, from 2025 to 2027. She previously completed a BBA(CA) from Tuljaram Chaturchand College, Baramati.";
  }

  if (
    msg.includes("experience") ||
    msg.includes("work experience") ||
    msg.includes("job")
  ) {
    return "Pratiksha is currently focused on building production-style full-stack and AI-integrated projects while preparing for Full Stack Developer opportunities and internships.";
  }

  if (
    msg.includes("contact") ||
    msg.includes("email") ||
    msg.includes("hire") ||
    msg.includes("reach")
  ) {
    return "You can reach Pratiksha through the Contact section of this portfolio, or email her directly at kadampratiksha869@gmail.com.";
  }

  if (msg.includes("github") || msg.includes("source code")) {
    return "You can explore Pratiksha's source code and development work on GitHub at github.com/pratikshakadam912.";
  }

  if (msg.includes("linkedin")) {
    return "Pratiksha's LinkedIn profile is available through the LinkedIn link in the portfolio navigation and contact section.";
  }

  if (
    msg.includes("ai") ||
    msg.includes("machine learning") ||
    msg.includes("ml")
  ) {
    return "Pratiksha is exploring AI/ML alongside full-stack development. Her goal is to build practical web products where AI is part of the application rather than treating AI as a separate data-science workflow.";
  }

  if (
    msg.includes("hire") ||
    msg.includes("available") ||
    msg.includes("opportunity")
  ) {
    return "Pratiksha is open to Full Stack Developer, Web Developer and related software development opportunities.";
  }

  if (msg.includes("location") || msg.includes("where")) {
    return "Pratiksha is based in Bengaluru, India.";
  }

  return "I don't have a specific answer for that yet. Try asking about projects, skills, education, AI/ML, GitHub, or contact information.";
};

/* =========================================================
   MESSAGE COMPONENT
========================================================= */

function ChatMessage({ message }) {
  const isUser = message.sender === "user";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[88%] ${
          isUser
            ? "bg-white text-black"
            : "border border-white/10 bg-white/[0.025] text-neutral-300"
        }`}
      >
        <div
          className={`px-3 py-2.5 text-[11px] leading-5 ${
            isUser ? "font-medium" : ""
          }`}
        >
          {message.text}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   TYPING INDICATOR
========================================================= */

function TypingIndicator() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="flex justify-start"
    >
      <div className="border border-white/10 bg-white/[0.025] px-3 py-3">
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((item) => (
            <motion.span
              key={item}
              animate={{
                opacity: [0.25, 1, 0.25],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: item * 0.15,
              }}
              className="w-1 h-1 rounded-full bg-cyan-400"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

const AIChat = () => {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi! I'm Pratiksha's portfolio assistant. Ask me about her projects, skills, or experience.",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /* =======================================================
     AUTO SCROLL
  ======================================================= */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  /* =======================================================
     FOCUS INPUT
  ======================================================= */

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
    }
  }, [open]);

  /* =======================================================
     SEND MESSAGE
  ======================================================= */

  const sendMessage = (text = input) => {
    const cleanText = text.trim();

    if (!cleanText || typing) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: cleanText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: getReply(cleanText),
      };

      setMessages((prev) => [...prev, botMessage]);
      setTyping(false);
    }, 650);
  };

  /* =======================================================
     ENTER KEY
  ======================================================= */

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  /* =======================================================
     CLEAR CHAT
  ======================================================= */

  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        text: "Chat cleared. What would you like to know about Pratiksha?",
      },
    ]);

    setInput("");
  };

  return (
    <>
      {/* ===================================================
          FLOATING BUTTON
      =================================================== */}

      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        whileHover={{
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="fixed z-[70] bottom-5 right-5 md:bottom-7 md:right-7 group"
      >
        <div className="relative">
          {/* Ambient glow */}

          <div className="absolute -inset-3 bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Button */}

          <div className="relative flex items-center gap-3 border border-white/15 bg-[#050505]/95 backdrop-blur-xl px-3.5 py-3 shadow-2xl">
            <div className="relative w-8 h-8 border border-cyan-400/30 flex items-center justify-center">
              <Bot className="w-4 h-4 text-cyan-400" />

              <span className="absolute -right-1 -top-1 w-2 h-2 bg-emerald-400 border-2 border-[#050505]" />
            </div>

            <div className="hidden sm:block text-left">
              <div className="text-[8px] tracking-[0.25em] text-neutral-500">
                AI ASSISTANT
              </div>

              <div className="text-[10px] tracking-[0.15em] text-white">
                {open ? "CLOSE CHAT" : "ASK ME"}
              </div>
            </div>

            {open ? (
              <X className="w-4 h-4 text-neutral-400" />
            ) : (
              <MessageSquare className="w-4 h-4 text-neutral-400" />
            )}
          </div>
        </div>
      </motion.button>

      {/* ===================================================
          CHAT WINDOW
      =================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed z-[69] bottom-[88px] right-4 left-4 sm:left-auto sm:right-5 md:right-7 w-auto sm:w-[390px] max-w-[calc(100vw-32px)]"
          >
            <div className="relative border border-white/10 bg-[#050505]/98 backdrop-blur-2xl shadow-2xl overflow-hidden">
              {/* Ambient */}

              <div className="absolute -top-20 -right-20 w-48 h-48 bg-violet-500/10 blur-[80px] pointer-events-none" />

              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-cyan-500/[0.07] blur-[80px] pointer-events-none" />

              {/* =================================================
                  HEADER
              ================================================= */}

              <div className="relative border-b border-white/10">
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-cyan-400/30 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-cyan-400" />
                    </div>

                    <div>
                      <div className="text-[10px] tracking-[0.2em] text-white">
                        PRATIKSHA.AI
                      </div>

                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />

                        <span className="text-[8px] tracking-[0.2em] text-neutral-500">
                          SYSTEM ONLINE
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={clearChat}
                      aria-label="Clear chat"
                      className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/5 transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      aria-label="Close chat"
                      className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/5 transition"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* System line */}

                <div className="px-4 pb-3 flex items-center justify-between text-[8px] tracking-[0.2em] text-neutral-500">
                  <span>PORTFOLIO_INTERFACE</span>

                  <span className="text-cyan-400">v1.0</span>
                </div>
              </div>

              {/* =================================================
                  CHAT BODY
              ================================================= */}

              <div className="relative h-[330px] sm:h-[350px] overflow-y-auto px-4 py-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
                <div className="space-y-3">
                  {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}

                  {typing && <TypingIndicator />}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* =================================================
                  QUICK QUESTIONS
              ================================================= */}

              <div className="relative border-t border-white/10 px-4 py-3">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-3 h-3 text-violet-400" />

                  <span className="text-[8px] tracking-[0.2em] text-neutral-500">
                    QUICK_QUERY
                  </span>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => sendMessage(question)}
                      disabled={typing}
                      className="shrink-0 border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-[8px] text-neutral-400 hover:text-white hover:border-cyan-400/30 transition disabled:opacity-40"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* =================================================
                  INPUT
              ================================================= */}

              <div className="relative border-t border-white/10 p-3">
                <div className="flex items-center gap-2 border border-white/10 bg-white/[0.025] focus-within:border-cyan-400/30 transition">
                  <div className="pl-3">
                    <Code2 className="w-3.5 h-3.5 text-neutral-500" />
                  </div>

                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about the portfolio..."
                    disabled={typing}
                    className="flex-1 min-w-0 bg-transparent px-2 py-3 text-[11px] text-white placeholder:text-neutral-600 outline-none disabled:opacity-50"
                  />

                  <button
                    type="button"
                    onClick={() => sendMessage()}
                    disabled={!input.trim() || typing}
                    aria-label="Send message"
                    className="mr-1.5 w-8 h-8 flex items-center justify-center bg-white text-black hover:bg-cyan-400 transition disabled:opacity-20 disabled:hover:bg-white"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="mt-2 flex items-center justify-between px-1">
                  <span className="text-[7px] tracking-[0.2em] text-neutral-600">
                    ENTER TO SEND
                  </span>

                  <div className="flex items-center gap-1 text-[7px] tracking-[0.2em] text-neutral-600">
                    <Zap className="w-2.5 h-2.5" />
                    LOCAL RESPONSE SYSTEM
                  </div>
                </div>
              </div>

              {/* =================================================
                  BOTTOM LINE
              ================================================= */}

              <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
