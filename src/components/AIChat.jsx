import { useState } from "react";

const AIChat = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi 👋 Ask me about my projects, skills, or experience!" }
    ]);
    const [input, setInput] = useState("");

    const getReply = (msg) => {
        msg = msg.toLowerCase();

        if (msg.includes("project"))
            return "I have built an E-commerce platform, Chat app, and Portfolio website.";

        if (msg.includes("skills"))
            return "I work with React, Node.js, MongoDB, and AI tools.";

        if (msg.includes("contact"))
            return "You can contact me through the contact section below!";

        return "I'm still learning 🤖 but you can explore my portfolio!";
    };

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMsg = { sender: "user", text: input };
        const botMsg = { sender: "bot", text: getReply(input) };

        setMessages([...messages, userMsg, botMsg]);
        setInput("");
    };

    return (
        <>
            {/* BUTTON */}
            <div
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 bg-purple-600 p-4 rounded-full cursor-pointer"
            >
                🤖
            </div>

            {/* CHAT */}
            {open && (
                <div className="fixed bottom-20 right-6 w-80 bg-black border border-gray-700 rounded-xl p-4">

                    <div className="h-40 overflow-y-auto text-sm space-y-2">
                        {messages.map((msg, i) => (
                            <p key={i} className={msg.sender === "user" ? "text-right" : "text-left text-gray-400"}>
                                {msg.text}
                            </p>
                        ))}
                    </div>

                    <div className="flex mt-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask something..."
                            className="flex-1 p-2 bg-gray-900 text-white rounded"
                        />
                        <button onClick={sendMessage} className="ml-2 px-3 bg-purple-600 rounded">
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIChat;