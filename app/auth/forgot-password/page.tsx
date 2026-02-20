"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;
        setSubmitted(true);
    };

    return (
        <div className="bg-white/80 dark:bg-[#2d1a1c]/80 backdrop-blur-xl border border-white/20 dark:border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
            {!submitted ? (
                <>
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="material-symbols-outlined text-3xl text-primary">lock_reset</span>
                        </div>
                        <h1 className="text-3xl font-black mb-3 text-[#181112] dark:text-white">Forgot Password?</h1>
                        <p className="text-[#886369] dark:text-[#a88d91]">Enter your email and we'll send you a reset link.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#181112] dark:text-white px-1">Email Address</label>
                            <input
                                type="email"
                                required
                                placeholder="john@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-14 px-6 rounded-2xl bg-white dark:bg-[#1a0d0f] border border-[#e5dcdd] dark:border-[#3d2a2d] focus:border-primary outline-none transition-all dark:text-white"
                            />
                        </div>
                        <button
                            type="submit"
                            className="h-14 bg-primary text-white font-black text-lg rounded-2xl shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all transform active:scale-[0.98]"
                        >
                            Send Reset Link
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <Link href="/auth/login" className="text-secondary font-bold hover:underline text-sm flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Login
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <div className="text-center py-4">
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-5xl text-green-500">mark_email_read</span>
                        </div>
                        <h1 className="text-3xl font-black mb-3 text-[#181112] dark:text-white">Check Your Email!</h1>
                        <p className="text-[#886369] dark:text-[#a88d91] mb-2">We sent a reset link to:</p>
                        <p className="font-black text-primary text-xl mb-6">{email}</p>
                        <p className="text-[#886369] text-sm mb-8">Didn't receive it? Check your spam folder or try again.</p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="text-secondary font-bold hover:underline text-sm"
                        >
                            Try a different email
                        </button>
                    </div>
                    <div className="mt-6 text-center">
                        <Link href="/auth/login" className="flex items-center justify-center gap-2 text-[#886369] hover:text-primary font-bold text-sm transition-colors">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Login
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}
