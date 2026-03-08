"use client";

import { useState, useRef, useEffect } from "react";
import Header from "../../components/Header";
import AppSidebar from "../../components/AppSidebar";
import { useRouter } from "next/navigation";

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
    }
];

export default function UnifiedSupportPage() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([
        { text: "Hello! I'm your MPR Assistant. How can I help you today? Check the FAQs or chat with me here.", sender: "bot" }
    ]);
    const [inputText, setInputText] = useState("");
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const userData = sessionStorage.getItem("user");
        if (!userData) {
            router.push("/auth/login");
        } else {
            setUser(JSON.parse(userData));
        }
    }, [router]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
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
                botResponse = "I can help you track an existing order. Head to 'Track Order' in the sidebar or give me your ID!";
            } else if (userMessage.toLowerCase().includes("refund")) {
                botResponse = "For refunds, please provide your Order ID. I'll pass it to our team immediately.";
            }
            setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
        }, 800);
    };

    if (!user) return null;

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header />
            <AppSidebar username={user.name || user.username} email={user.email}>
                <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto w-full">
                    <div className="mb-10">
                        <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Support Hub</p>
                        <h1 className="text-4xl md:text-5xl font-black mb-4 text-[#181112] dark:text-white">Customer Support</h1>
                        <p className="text-[#886369] text-lg">Real-time assistance for all your MPR needs.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                        {/* FAQs Section */}
                        <div className="flex flex-col gap-6">
                            <section className="flex flex-col flex-1">
                                <h2 className="text-xl font-black mb-6 flex items-center gap-3">
                                    <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                                    Popular Questions
                                </h2>
                                <div className="space-y-3">
                                    {faqs.map((faq, i) => (
                                        <div
                                            key={i}
                                            className="bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:border-primary/30 transition-all"
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        >
                                            <div className="flex items-center justify-between p-5 text-sm md:text-base">
                                                <span className="font-bold text-[#181112] dark:text-white">{faq.q}</span>
                                                <span className={`material-symbols-outlined text-primary transition-transform ${openFaq === i ? "rotate-180" : ""}`}>
                                                    expand_more
                                                </span>
                                            </div>
                                            {openFaq === i && (
                                                <div className="px-5 pb-5 text-[#886369] dark:text-[#a88d91] border-t border-[#e5dcdd] dark:border-[#3d2a2d] pt-4 text-sm leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Priority Banner */}
                            <div className="bg-secondary/5 dark:bg-secondary/10 p-6 md:p-8 rounded-[2rem] border border-secondary/20 h-fit">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
                                        <span className="material-symbols-outlined text-xl">workspace_premium</span>
                                    </div>
                                    <h3 className="text-lg font-black">Member Priority</h3>
                                </div>
                                <p className="text-sm text-[#886369] dark:text-[#a88d91] leading-relaxed mb-6">
                                    Your inquiries are automatically prioritized. Expect a response via chat or phone within 20 minutes.
                                </p>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3 text-sm font-bold text-[#181112] dark:text-white">
                                        <span className="material-symbols-outlined text-secondary text-lg">call</span>
                                        0161 555 7788
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-bold text-[#181112] dark:text-white">
                                        <span className="material-symbols-outlined text-secondary text-lg">mail</span>
                                        priority@mprfoods.co.uk
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Live Assistant Section */}
                        <section className="flex flex-col h-full">
                            <h2 className="text-xl font-black mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-secondary rounded-full"></span>
                                Live Assistant
                            </h2>
                            <div className="bg-white dark:bg-[#2d1a1c] rounded-[2.5rem] border border-[#e5dcdd] dark:border-[#3d2a2d] shadow-lg overflow-hidden flex flex-col h-[550px] lg:h-full min-h-[500px]">
                                <div className="bg-primary px-6 py-4 text-white flex items-center gap-4 flex-shrink-0">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                                        <span className="material-symbols-outlined text-xl">support_agent</span>
                                    </div>
                                    <div>
                                        <p className="font-black">Assistant</p>
                                        <p className="text-white/70 text-xs flex items-center gap-1.5">
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                            Online
                                        </p>
                                    </div>
                                </div>
                                <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-background-light dark:bg-[#1a0d0f]/50">
                                    {messages.map((msg, index) => (
                                        <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                            <div className={`max-w-[85%] p-4 rounded-[1.5rem] text-sm ${msg.sender === "user"
                                                ? "bg-primary text-white rounded-tr-none"
                                                : "bg-white dark:bg-[#2d1a1c] text-[#181112] dark:text-white border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-tl-none shadow-sm"
                                                }`}>
                                                <p className="leading-relaxed">{msg.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 bg-white dark:bg-[#2d1a1c] border-t border-[#e5dcdd] dark:border-[#3d2a2d] flex-shrink-0">
                                    <form onSubmit={handleSendMessage} className="flex gap-3">
                                        <input
                                            type="text"
                                            value={inputText}
                                            onChange={(e) => setInputText(e.target.value)}
                                            placeholder="Ask anything..."
                                            className="flex-1 h-12 px-6 rounded-full bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] focus:ring-2 focus:ring-primary focus:outline-none text-sm"
                                        />
                                        <button type="submit" className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                                            <span className="material-symbols-outlined">send</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </AppSidebar>
        </div>
    );
}
