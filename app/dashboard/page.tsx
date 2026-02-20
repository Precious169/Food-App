"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const userData = sessionStorage.getItem("user");
        if (!userData) {
            router.push("/auth/login");
        } else {
            setUser(JSON.parse(userData));
        }
    }, [router]);

    if (!user) return null;

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10">
                    {/* Welcome Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black text-[#181112] dark:text-white mb-2">
                                Welcome back, <span className="text-primary">{user.name === "Returning Member" ? "Friend" : user.name.split(' ')[0]}!</span>
                            </h1>
                            <p className="text-[#886369] dark:text-[#a88d91] font-medium text-lg">Ready for some crispy goodness today?</p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/menu" className="h-14 px-8 bg-primary text-white font-bold rounded-full flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-all outline-none">
                                Order Now
                            </Link>
                        </div>
                    </div>

                    {user.isNewUser ? (
                        /* Empty State for New Users */
                        <div className="flex flex-col items-center justify-center py-20 text-center bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-[3rem]">
                            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <span className="material-symbols-outlined text-5xl">shopping_cart_checkout</span>
                            </div>
                            <h2 className="text-3xl font-black mb-4">You haven't ordered yet!</h2>
                            <p className="text-[#886369] dark:text-[#a88d91] max-w-md mb-10 text-lg">Your order history is empty. Time to discover your next favorite meal from our menu!</p>
                            <Link href="/menu" className="h-16 px-12 bg-primary text-white font-black text-xl rounded-full flex items-center justify-center shadow-xl shadow-primary/30 hover:scale-105 transition-all">
                                Explore Menu
                            </Link>
                        </div>
                    ) : (
                        /* Populated State for Returning Users */
                        <>
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 p-8 rounded-3xl">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                                        <span className="material-symbols-outlined">shopping_bag</span>
                                    </div>
                                    <h3 className="text-[#886369] dark:text-[#a88d91] font-bold mb-1">Total Orders</h3>
                                    <p className="text-4xl font-black">12</p>
                                </div>
                                <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 p-8 rounded-3xl">
                                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                                        <span className="material-symbols-outlined">stars</span>
                                    </div>
                                    <h3 className="text-[#886369] dark:text-[#a88d91] font-bold mb-1">Loyalty Points</h3>
                                    <p className="text-4xl font-black">850</p>
                                </div>
                                <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 p-8 rounded-3xl">
                                    <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                                        <span className="material-symbols-outlined">local_shipping</span>
                                    </div>
                                    <h3 className="text-[#886369] dark:text-[#a88d91] font-bold mb-1">Next Free Delivery</h3>
                                    <p className="text-4xl font-black">2 Orders</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Recent Activity */}
                                <div className="lg:col-span-2 flex flex-col gap-6">
                                    <h2 className="text-2xl font-black flex items-center gap-3">
                                        <span className="w-2 h-8 bg-primary rounded-full"></span>
                                        Recent Orders
                                    </h2>
                                    <div className="bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-3xl overflow-hidden">
                                        {[1, 2, 3].map((_, i) => (
                                            <div key={i} className={`p-6 flex items-center justify-between hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors ${i < 2 ? 'border-b border-[#e5dcdd] dark:border-[#3d2a2d]' : ''}`}>
                                                <div className="flex items-center gap-4">
                                                    <div className="w-14 h-14 rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBycEgTsqtc1h6kFBJD9bDxQ0gq9ELNLKMQVl1ZQ03tPAWntZaA8D9cNiYxA7iZ_dmAQ9oRiHgKKXlyqk6emngb6sy56_nydRPsrtGj38ELm4X1InhFgDaNxO8TL0FOqjneedEiJtNMO-x6U44kpRGRuAvdv96lqhoG3mJeoqT2_3aKI2g8JU1UA30liclQDbsf5DKT9adWVcK3TT99jG6ao3IAED_6B0p1IQeZyYOV8FSQgXYeAyvq1FfSCGVvwKirCaEumhe6mPf5")` }}></div>
                                                    <div>
                                                        <h4 className="font-bold">Family Feast + Extra Dip</h4>
                                                        <p className="text-sm text-[#a88d91]">ID: #9283{i} • Yesterday, 19:40</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-black text-primary">£24.99</p>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-green-500/10 text-green-500 rounded-full">Delivered</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Profile Summary & Suggestions */}
                                <div className="flex flex-col gap-8">
                                    <div>
                                        <h2 className="text-2xl font-black mb-6">Preferred Flavors</h2>
                                        <div className="flex flex-wrap gap-2">
                                            {user.preferences?.map((p: string) => (
                                                <span key={p} className="px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-sm font-bold">{p}</span>
                                            )) || (
                                                    <span className="text-[#a88d91] italic font-medium">No preferences set yet</span>
                                                )}
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-primary to-[#e31837] p-8 rounded-3xl text-white relative overflow-hidden group">
                                        <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
                                        <h3 className="text-2xl font-black mb-2">Friday Special</h3>
                                        <p className="text-white/80 mb-6">Get 20% off all buckets every Friday night!</p>
                                        <Link href="/deals" className="inline-flex h-12 px-6 bg-white text-primary font-bold rounded-xl items-center justify-center hover:scale-105 transition-all">
                                            Claim Deal
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}
