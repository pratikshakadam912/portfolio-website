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
    <div className="bg-black text-white font-[Poppins]">
      <CursorGlow />
      <Home />
    </div>
  );
}

export default App;