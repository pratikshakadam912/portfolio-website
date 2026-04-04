import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

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
                "TAp9ld3NZHI3AMQNo"
            )
            .then(() => {
                setLoading(false);
                setStatus("✅ Message sent successfully!");
                form.current.reset();
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                setStatus("❌ Failed to send. Try again.");
            });
    };

    return (
        <section
            id="contact"
            name="contact"
            className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center"
        >
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">

                {/* LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let’s Work Together 🚀
                    </h2>

                    <p className="text-gray-400 mb-6">
                        I’m a <span className="text-blue-400">Front-End Developer</span>{" "}
                        passionate about building modern web apps and integrating{" "}
                        <span className="text-purple-400">AI solutions</span>.
                    </p>

                    <p className="text-gray-500 mb-8">
                        Have a project idea, internship opportunity, or collaboration?
                        Let’s connect and create something amazing.
                    </p>

                    <div className="flex gap-6 text-2xl">
                        <a href="https://www.linkedin.com/in/pratiksha-kadam-a639872a3" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a href="mailto:kadampratiksha869@gmail.com">
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>

                {/* FORM */}
                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="relative bg-[#0f0f0f] p-8 rounded-2xl border border-gray-800 shadow-xl"
                >
                    <div className="relative z-10">

                        <input type="text" name="name" placeholder="Your Name" required className="w-full mb-4 p-3 bg-transparent border-b border-gray-600" />
                        <input type="email" name="email" placeholder="Your Email" required className="w-full mb-4 p-3 bg-transparent border-b border-gray-600" />
                        <textarea name="message" rows="4" placeholder="Your Message" required className="w-full mb-4 p-3 bg-transparent border-b border-gray-600" />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                        {status && <p className="mt-4 text-green-400">{status}</p>}
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;