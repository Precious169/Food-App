"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import AppSidebar from "../../components/AppSidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const dealsData = [
    {
        id: 1,
        title: "Buy One Get One Bucket",
        description: "Order any signature bucket and get the second one for half price. Valid for all signature recipes.",
        code: "BUCKET50",
        badge: "LIMITED TIME",
        gradient: "from-primary to-orange-600",
        textColor: "text-primary",
    },
    {
        id: 2,
        title: "£5.00 Zinger Meal",
        description: "Complete meal deal including burger, small fries, and a drink. Perfect for a quick lunch.",
        code: "ZINGER5",
        badge: "LUNCH SPECIAL",
        gradient: "from-secondary to-yellow-500",
        textColor: "text-secondary",
    },
    {
        id: 3,
        title: "Free Wings Friday",
        description: "Order over £15 on Fridays and get 6 free wings added to your order automatically.",
        code: "WINGFRI",
        badge: "FRIDAY ONLY",
        gradient: "from-purple-600 to-pink-500",
        textColor: "text-purple-600",
    },
    {
        id: 4,
        title: "Family Feast Special",
        description: "Big family bucket, 4 sides, 4 drinks — all for the price of 3. Our best value family deal.",
        code: "FAMILY4",
        badge: "BEST VALUE",
        gradient: "from-green-600 to-teal-500",
        textColor: "text-green-600",
    },
];

export default function AppDealsPage() {
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
            <AppSidebar username={user.name || user.username} email={user.email}>
                <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto w-full">
                    <div className="mb-10">
                        <h1 className="text-3xl md:text-5xl font-black mb-4 text-[#181112] dark:text-white">Your Exclusive Deals</h1>
                        <p className="text-[#886369] text-lg">Use these codes at checkout to save big on your next order.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {dealsData.map((deal) => (
                            <div key={deal.id} className={`bg-gradient-to-r ${deal.gradient} p-6 md:p-10 rounded-3xl text-white relative overflow-hidden group shadow-xl flex flex-col justify-between min-h-[320px] md:min-h-0`}>
                                <div className="relative z-10 text-left">
                                    <span className="inline-block mb-4 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{deal.badge}</span>
                                    <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight">{deal.title}</h3>
                                    <p className="text-white/90 mb-6 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">{deal.description}</p>
                                </div>
                                <div className="relative z-10 flex flex-wrap items-center gap-4 md:gap-6 mt-6">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/30 px-4 py-2 rounded-2xl">
                                        <p className="text-[10px] text-white/70 mb-0.5 font-bold uppercase tracking-widest">Promo Code</p>
                                        <p className="font-black text-white text-lg tracking-widest">{deal.code}</p>
                                    </div>
                                    <button className={`bg-white ${deal.textColor} font-black px-6 py-3 md:px-8 md:py-4 rounded-full hover:scale-105 transition-all text-sm md:text-base shadow-lg whitespace-nowrap`}>
                                        Apply Now
                                    </button>
                                </div>
                                {/* Subtle decorative element to prevent visual overlap */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                            </div>
                        ))}
                    </div>

                    {/* Loyalty Banner */}
                    <div className="bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-8 mb-20 shadow-sm transition-all hover:border-primary">
                        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                            <span className="material-symbols-outlined text-4xl">stars</span>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-black mb-2">You have 850 Points!</h3>
                            <p className="text-[#886369] text-lg">You're only 150 points away from a FREE Zinger Meal. Keep ordering to unlock your next reward!</p>
                        </div>
                    </div>
                </main>
            </AppSidebar>
        </div>
    );
}
