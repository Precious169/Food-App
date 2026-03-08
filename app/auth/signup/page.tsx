"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        // Simulating success
        sessionStorage.setItem("user", JSON.stringify({ 
            username: formData.username, 
            email: formData.email, 
            isAuthenticated: true, 
            isNewUser: true 
        }));
        window.dispatchEvent(new Event("user-update"));
        router.push("/auth/onboarding");
    };

    return (
        <div className="relative bg-white/80 dark:bg-[#2d1a1c]/80 backdrop-blur-xl border border-white/20 dark:border-white/10 p-10 rounded-[2.5rem] shadow-2xl max-w-md w-full">
            <Link href="/" className="absolute top-6 left-6 flex items-center gap-2 text-[#886369] hover:text-primary transition-colors font-bold text-sm group">
                <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Back to Home
            </Link>
            
            <div className="text-center mb-10 pt-16">
                <h1 className="text-4xl font-black mb-3 text-[#181112] dark:text-white">Join the <span className="text-primary text-5xl">M</span>PR Family</h1>
                <p className="text-[#886369] dark:text-[#a88d91]">Create an account and start ordering today!</p>
            </div>

            {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500 text-sm font-bold animate-in fade-in slide-in-from-top-1">
                    <span className="material-symbols-outlined text-lg">error</span>
                    {error}
                </div>
            )}

            <form onSubmit={handleSignup} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#181112] dark:text-white px-1">Username</label>
                    <input
                        name="username"
                        type="text"
                        required
                        placeholder="JohnDoe"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="h-14 px-6 rounded-2xl bg-white dark:bg-[#1a0d0f] border border-[#e5dcdd] dark:border-[#3d2a2d] focus:border-primary outline-none transition-all dark:text-white h-14"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#181112] dark:text-white px-1">Email Address</label>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-14 px-6 rounded-2xl bg-white dark:bg-[#1a0d0f] border border-[#e5dcdd] dark:border-[#3d2a2d] focus:border-primary outline-none transition-all dark:text-white h-14"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#181112] dark:text-white px-1">Password</label>
                    <div className="relative">
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="Min. 8 characters"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full h-14 px-6 rounded-2xl bg-white dark:bg-[#1a0d0f] border border-[#e5dcdd] dark:border-[#3d2a2d] focus:border-primary outline-none transition-all dark:text-white h-14"
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

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#181112] dark:text-white px-1">Confirm Password</label>
                    <input
                        name="confirmPassword"
                        type="password"
                        required
                        placeholder="Repeat your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="h-14 px-6 rounded-2xl bg-white dark:bg-[#1a0d0f] border border-[#e5dcdd] dark:border-[#3d2a2d] focus:border-primary outline-none transition-all dark:text-white h-14"
                    />
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
