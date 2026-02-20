"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock signup logic
        sessionStorage.setItem("user", JSON.stringify({ ...formData, isAuthenticated: true, isNewUser: true }));
        window.dispatchEvent(new Event("user-update"));
        router.push("/auth/onboarding");
    };

    return (
        <div className="bg-white/80 dark:bg-[#2d1a1c]/80 backdrop-blur-xl border border-white/20 dark:border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-black mb-3 text-[#181112] dark:text-white">Join the <span className="text-primary text-5xl">M</span>PR Family</h1>
                <p className="text-[#886369] dark:text-[#a88d91]">Create an account and start ordering today!</p>
            </div>

            <form onSubmit={handleSignup} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#181112] dark:text-white px-1">Full Name</label>
                    <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="h-14 px-6 rounded-2xl bg-white dark:bg-[#1a0d0f] border border-[#e5dcdd] dark:border-[#3d2a2d] focus:border-primary outline-none transition-all dark:text-white"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#181112] dark:text-white px-1">Email Address</label>
                    <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="h-14 px-6 rounded-2xl bg-white dark:bg-[#1a0d0f] border border-[#e5dcdd] dark:border-[#3d2a2d] focus:border-primary outline-none transition-all dark:text-white"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#181112] dark:text-white px-1">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="••••••••"
                            className="w-full h-14 px-6 rounded-2xl bg-white dark:bg-[#1a0d0f] border border-[#e5dcdd] dark:border-[#3d2a2d] focus:border-primary outline-none transition-all dark:text-white"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#886369] hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined">{showPassword ? "visibility" : "visibility_off"}</span>
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="h-14 bg-primary text-white font-black text-lg rounded-2xl shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all mt-4 transform active:scale-[0.98]"
                >
                    Create Account
                </button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-[#886369] dark:text-[#a88d91]">
                    Already have an account? <Link href="/auth/login" className="text-primary font-bold hover:underline">Log In</Link>
                </p>
            </div>
        </div>
    );
}
