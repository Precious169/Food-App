"use client";

import { useState } from "react";

export default function SubscribeOverlay() {
    const [email, setEmail] = useState("");
    const [showOverlay, setShowOverlay] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !email.includes("@")) return;
        setShowOverlay(true);
    };

    return (
        <>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                    className="bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:ring-2 focus:ring-primary text-sm text-white placeholder:text-white/50 outline-none"
                    placeholder="Your email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-primary text-white font-bold py-3 rounded-full hover:bg-primary/90 transition-colors"
                >
                    Subscribe
                </button>
            </form>

            {/* Success Overlay */}
            {showOverlay && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-6"
                    onClick={() => setShowOverlay(false)}
                >
                    <div
                        className="bg-white dark:bg-[#2d1a1c] rounded-[2.5rem] p-10 max-w-md w-full text-center shadow-2xl relative animate-[zoom-in_0.3s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-5xl text-green-500">check_circle</span>
                        </div>
                        <h2 className="text-3xl font-black text-[#181112] dark:text-white mb-3">You're In! 🎉</h2>
                        <p className="text-[#886369] dark:text-[#a88d91] mb-2 text-lg">
                            Thanks for subscribing! Exclusive deals and fresh menu updates will land in:
                        </p>
                        <p className="font-black text-primary text-xl mb-8">{email}</p>
                        <button
                            onClick={() => { setShowOverlay(false); setEmail(""); }}
                            className="h-12 px-8 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
