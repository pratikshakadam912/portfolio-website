import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = ["Front-End Developer", "AI & ML Enthusiast", "React Developer"];

const Hero = () => {
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    // Typing Effect
    useEffect(() => {
        let typingTimeout;

        if (charIndex < roles[roleIndex].length) {
            typingTimeout = setTimeout(() => {
                setText((prev) => prev + roles[roleIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 80);
        } else {
            typingTimeout = setTimeout(() => {
                setText("");
                setCharIndex(0);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }, 1500);
        }

        return () => clearTimeout(typingTimeout);
    }, [charIndex, roleIndex]);

    return (
        <section className="h-screen flex items-center justify-center 
        bg-white text-black dark:bg-black dark:text-white 
        relative overflow-hidden font-[Poppins]">

            {/* BACKGROUND GLOW */}
            <motion.div
                animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
                transition={{ repeat: Infinity, duration: 12 }}
                className="absolute w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-500 opacity-20 blur-[120px] top-10 left-10"
            />
            <motion.div
                animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
                transition={{ repeat: Infinity, duration: 14 }}
                className="absolute w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-purple-500 opacity-20 blur-[120px] bottom-10 right-10"
            />

            {/* CONTENT */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.25 } },
                }}
                className="relative z-10 text-center px-4"
            >

                {/* I'M TEXT */}
                <motion.h1
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="text-3xl md:text-5xl text-gray-500 dark:text-gray-400 mb-2"
                >
                    I'm
                </motion.h1>

                {/* NAME */}
                <motion.h1
                    variants={{
                        hidden: { opacity: 0, scale: 0.85 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                    animate={{ x: [0, -2, 2, -1, 1, 0] }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-5xl md:text-8xl font-bold font-[Orbitron] gradient-text glitch"
                >
                    Pratiksha
                </motion.h1>

                {/* ROLE TEXT */}
                <motion.p
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 mt-4 h-[32px]"
                >
                    {text}
                    <span className="animate-pulse">|</span>
                </motion.p>

                {/* BUTTONS */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="flex flex-col md:flex-row gap-4 justify-center mt-8"
                >

                    <button
                        onClick={() => {
                            const section = document.getElementById("projects");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="px-6 py-3 rounded-lg 
  bg-gradient-to-r from-blue-500 to-purple-500 
  hover:scale-110 transition duration-300">
                        View Projects
                    </button>

                    <button
                        onClick={() => {
                            const section = document.getElementById("contact");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="px-6 py-3 rounded-lg 
  border border-gray-400 
  hover:scale-110 transition duration-300">
                        Contact Me
                    </button>

                </motion.div>

                {/* SCROLL */}
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 1.4 }}
                    className="mt-16 text-gray-500 text-sm"
                >
                    ↓ Scroll Down
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Hero;