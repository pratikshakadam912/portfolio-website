import React, { useEffect } from "react";
import Home from "./components/Home";

function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", move);

    return () => {
      document.removeEventListener("mousemove", move);
      document.body.removeChild(glow);
    };
  }, []);

  return null;
}

function App() {
  return (
    <div
      className="
    min-h-screen
    font-[Poppins]
    bg-white
    text-gray-900
    transition-colors
    duration-500
    dark:bg-black
    dark:text-white
  "
    >
      <CursorGlow />
      <Home />
    </div>
  );
}

export default App;
