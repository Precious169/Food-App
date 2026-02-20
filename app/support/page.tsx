"use client";

import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SupportPage() {
    const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([
        { text: "Hello! I'm your MPR Assistant. How can I help you today?", sender: "bot" }
    ]);
    const [inputText, setInputText] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMessage = inputText;
        setMessages(prev => [...prev, { text: userMessage, sender: "user" }]);
        setInputText("");

        // Mock Bot Response
        setTimeout(() => {
            let botResponse = "I can help with that. Could you provide more details?";
            if (userMessage.toLowerCase().includes("order")) {
                botResponse = "I can help you track an existing order or place a new one. What would you like to do?";
            } else if (userMessage.toLowerCase().includes("refund")) {
                botResponse = "For refunds, please provide your Order ID. Our team will review it shortly.";
            } else if (userMessage.toLowerCase().includes("allergen") || userMessage.toLowerCase().includes("allergy")) {
                botResponse = "You can find full allergen information on our menu page by clicking on individual items, or ask me about a specific product.";
            }

            setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
        }, 1000);
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header />
            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 md:px-10 py-12 flex flex-col">
                <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full bg-white dark:bg-[#2d1a1c] rounded-[2.5rem] border border-[#e5dcdd] dark:border-[#3d2a2d] shadow-xl overflow-hidden h-[70vh]">
                    {/* Chat Header */}
                    <div className="bg-primary p-6 text-white flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                            <span className="material-symbols-outlined text-2xl">support_agent</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-black">Customer Support</h1>
                            <p className="text-white/80 text-sm">We're here to help 24/7</p>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#f8f5f2] dark:bg-[#261618]">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[80%] p-4 rounded-2xl ${msg.sender === "user"
                                        ? "bg-primary text-white rounded-tr-none"
                                        : "bg-white dark:bg-[#2d1a1c] text-[#181112] dark:text-white border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-tl-none"
                                    } shadow-sm`}>
                                    <p className="leading-relaxed">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white dark:bg-[#2d1a1c] border-t border-[#e5dcdd] dark:border-[#3d2a2d]">
                        <form onSubmit={handleSendMessage} className="flex gap-4">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 h-14 px-6 rounded-full bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                            />
                            <button
                                type="submit"
                                disabled={!inputText.trim()}
                                className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-105 disabled:opacity-50 disabled:scale-100 transition-all"
                            >
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
