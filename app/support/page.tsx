"use client";

import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import AppSidebar from "../components/AppSidebar";
import Link from "next/link";

const faqs = [
    {
        q: "How do I track my order?",
        a: "Go to 'Track Order' in the sidebar. You'll see real-time updates on your order status, from preparation to delivery."
    },
    {
        q: "Can I modify or cancel my order?",
        a: "Orders can be modified or cancelled within 5 minutes of placing. After that, the kitchen starts preparing your food."
    },
    {
        q: "How do I request a refund?",
        a: "Chat with us below and provide your Order ID. Our team will review and process refunds within 3-5 business days."
    },
    {
        q: "Do you have allergen information?",
        a: "Yes! Full allergen info is available on each menu item page. You can also ask our chatbot below for specific products."
    },
    {
        q: "What are your delivery hours?",
        a: "We deliver Mon–Thu 11:00–23:00, Fri–Sat 11:00–01:00, and Sundays 12:00–22:00."
    },
    {
        q: "How do I earn loyalty points?",
        a: "You earn 1 point for every £1 spent. Points can be redeemed for discounts on future orders from your dashboard."
    },
];

export default function SupportPage() {
    const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([
        { text: "Hello! I'm your MPR Assistant. How can I help you today? You can also check the FAQs above for quick answers.", sender: "bot" }
    ]);
    const [inputText, setInputText] = useState("");
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMessage = inputText;
        setMessages(prev => [...prev, { text: userMessage, sender: "user" }]);
        setInputText("");

        setTimeout(() => {
            let botResponse = "I can help with that! Could you provide more details so I can assist you better?";
            if (userMessage.toLowerCase().includes("order")) {
                botResponse = "I can help you track an existing order or place a new one. Head to 'Track Order' in the sidebar or provide your Order ID here!";
            } else if (userMessage.toLowerCase().includes("refund")) {
                botResponse = "For refunds, please provide your Order ID. Our team will review it and process within 3-5 business days.";
            } else if (userMessage.toLowerCase().includes("allergen") || userMessage.toLowerCase().includes("allergy")) {
                botResponse = "Full allergen info is on each menu item page. Is there a specific product you'd like me to check?";
            } else if (userMessage.toLowerCase().includes("cancel")) {
                botResponse = "Orders can be cancelled within 5 minutes of placing. After that, the kitchen has already started. Please provide your Order ID and I'll check the status for you.";
            } else if (userMessage.toLowerCase().includes("point") || userMessage.toLowerCase().includes("loyalt")) {
                botResponse = "You earn 1 loyalty point per £1 spent. They can be redeemed from your dashboard. Keep ordering to unlock better rewards!";
            }
            setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
        }, 800);
    };

    return (
        <div className="flex flex-col h-[100dvh] overflow-hidden bg-background-light dark:bg-background-dark">
            <Header />
            <AppSidebar>
                <main className="flex-1 p-6 md:p-10 overflow-y-auto">
                    <h1 className="text-3xl font-black mb-2 text-[#181112] dark:text-white">Customer Support</h1>
                    <p className="text-[#886369] mb-10">We're here to help — browse the FAQs or chat with our assistant.</p>

                    {/* FAQs Section */}
                    <section className="mb-10">
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                            Frequently Asked Questions
                        </h2>
                        <div className="flex flex-col gap-3">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-2xl overflow-hidden cursor-pointer"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <div className="flex items-center justify-between p-5">
                                        <span className="font-bold text-[#181112] dark:text-white pr-4">{faq.q}</span>
                                        <span className={`material-symbols-outlined text-primary flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}>
                                            expand_more
                                        </span>
                                    </div>
                                    {openFaq === i && (
                                        <div className="px-5 pb-5 text-[#886369] dark:text-[#a88d91] border-t border-[#e5dcdd] dark:border-[#3d2a2d] pt-4">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Chatbot */}
                    <section>
                        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-secondary rounded-full"></span>
                            Live Chat Assistant
                        </h2>
                        <div className="bg-white dark:bg-[#2d1a1c] rounded-[2rem] border border-[#e5dcdd] dark:border-[#3d2a2d] shadow-sm overflow-hidden" style={{ height: "420px", display: "flex", flexDirection: "column" }}>
                            {/* Chat Header */}
                            <div className="bg-primary px-6 py-4 text-white flex items-center gap-3 flex-shrink-0">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                                    <span className="material-symbols-outlined text-xl">support_agent</span>
                                </div>
                                <div>
                                    <p className="font-black">MPR Assistant</p>
                                    <p className="text-white/80 text-xs">Typically replies instantly</p>
                                </div>
                                <span className="ml-auto text-xs bg-green-400 text-white px-2 py-0.5 rounded-full font-bold">Online</span>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#f8f5f2] dark:bg-[#261618]">
                                {messages.map((msg, index) => (
                                    <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                        <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm ${msg.sender === "user"
                                            ? "bg-primary text-white rounded-tr-none"
                                            : "bg-white dark:bg-[#2d1a1c] text-[#181112] dark:text-white border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-tl-none"
                                            } shadow-sm`}>
                                            <p className="leading-relaxed">{msg.text}</p>
                                        </div>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            <div className="p-4 bg-white dark:bg-[#2d1a1c] border-t border-[#e5dcdd] dark:border-[#3d2a2d] flex-shrink-0">
                                <form onSubmit={handleSendMessage} className="flex gap-3">
                                    <input
                                        type="text"
                                        value={inputText}
                                        onChange={(e) => setInputText(e.target.value)}
                                        placeholder="Type your message..."
                                        className="flex-1 h-12 px-5 rounded-full bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] focus:ring-2 focus:ring-primary focus:outline-none text-sm transition-all"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!inputText.trim()}
                                        className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-105 disabled:opacity-50 disabled:scale-100 transition-all"
                                    >
                                        <span className="material-symbols-outlined">send</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
            </AppSidebar>
        </div>
    );
}
