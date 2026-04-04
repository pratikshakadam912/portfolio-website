import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = ["Front-End Developer", "AI & ML Enthusiast", "React Developer"];

const Hero = () => {
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    // Cursor glow state
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        let typingTimeout;

        if (charIndex < roles[roleIndex].length) {
            typingTimeout = setTimeout(() => {
                setText((prev) => prev + roles[roleIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 50);
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
        <section className="h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

            {/* 🔥 CURSOR GLOW */}
            <div
                className="pointer-events-none fixed w-[300px] h-[300px] rounded-full bg-purple-500/20 blur-3xl"
                style={{
                    left: mousePos.x - 150,
                    top: mousePos.y - 150,
                }}
            />

            {/* SUBTLE GRID */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:40px_40px]" />

            {/* SOFT GRADIENT LIGHT */}
            <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[120px] top-[-150px] left-[-150px]" />

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full z-10">

                {/* LEFT */}
                <div>
                    <p className="text-gray-400 mb-3 tracking-wide">
                        👋 Hey, I'm
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                            Pratiksha
                        </span>
                        <br />
                        <span className="text-white">Kadam</span>
                    </h1>

                    <p className="text-xl text-gray-400 mt-4 h-[30px]">
                        {text}
                        <span className="animate-pulse">|</span>
                    </p>

                    <p className="mt-4 text-gray-500 max-w-md">
                        I build modern, scalable web apps and explore AI to create impactful digital experiences.
                    </p>

                    {/* BUTTONS (UNCHANGED) */}
                    <div className="flex gap-4 mt-8">

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            View Work
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-white hover:text-black transition"
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Contact
                        </motion.button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="relative flex justify-center">

                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl"
                    >
                        <pre className="text-green-400 text-sm">
                            {`const developer = {
  name: "Pratiksha",
  focus: ["React", "AI"],
  goal: "Clean + Creative UI"
};`}
                        </pre>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;