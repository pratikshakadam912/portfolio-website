import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";



export default function Home() {
    return (
        <>
            <Navbar />

            <div className="pt-20">
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
