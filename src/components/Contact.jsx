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
        "TAp9ld3NZHI3AMQNo",
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
      className="relative overflow-hidden min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500 px-6 py-20 flex items-center justify-center"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(circle,#f9a8d4_1px,transparent_1px)] dark:bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[420px] h-[420px] bg-pink-300/30 dark:bg-blue-600/20 blur-[140px]" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[420px] h-[420px] bg-purple-300/30 dark:bg-purple-600/20 blur-[140px]" />

      <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Work Together 🚀
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-8">
            I'm a{" "}
            <span className="text-pink-500 dark:text-blue-400 font-semibold">
              Full Stack Developer
            </span>{" "}
            passionate about building modern web applications and integrating{" "}
            <span className="text-fuchsia-500 dark:text-purple-400 font-semibold">
              AI & Machine Learning
            </span>{" "}
            to solve real-world problems.
          </p>

          <p className="text-gray-500 dark:text-gray-500 mb-8 leading-7">
            Whether you have an internship opportunity, freelance work,
            collaboration, or just want to say hello, I'd love to hear from you.
          </p>

          {/* SOCIAL LINKS */}

          <div className="flex gap-6 text-2xl text-gray-700 dark:text-white">
            <a
              href="https://www.linkedin.com/in/pratiksha-kadam-a639872a3?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 dark:hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/pratikshakadam912"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 dark:hover:text-blue-400 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:kadampratiksha869@gmail.com"
              className="hover:text-pink-500 dark:hover:text-blue-400 transition duration-300"
            >
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
          viewport={{ once: true }}
          className="relative bg-pink-50 dark:bg-[#0f0f0f] p-8 rounded-3xl border border-pink-200 dark:border-gray-800 shadow-xl transition-colors duration-500"
        >
          <div className="relative z-10">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full mb-5 p-3 bg-transparent border-b border-pink-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 dark:focus:border-blue-400 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full mb-5 p-3 bg-transparent border-b border-pink-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 dark:focus:border-blue-400 transition"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full mb-5 p-3 bg-transparent border-b border-pink-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 dark:focus:border-blue-400 transition resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white
              bg-gradient-to-r
              from-pink-500
              via-fuchsia-500
              to-purple-500
              dark:from-blue-500
              dark:via-cyan-500
              dark:to-purple-600
              shadow-lg
              hover:shadow-xl
              transition-all duration-300
              disabled:opacity-70
              disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-5 text-center font-medium ${
                  status.includes("✅")
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-500 dark:text-red-400"
                }`}
              >
                {status}
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
