"use client";

import Header from "../components/Header";
import AppSidebar from "../components/AppSidebar";
import Link from "next/link";

const deals = [
    {
        id: 1,
        title: "Buy One Get One Bucket",
        description: "Order any signature bucket and get the second one for half price.",
        code: "BUCKET50",
        badge: "LIMITED TIME",
        gradient: "from-primary to-orange-600",
        textColor: "text-primary",
    },
    {
        id: 2,
        title: "£5.00 Zinger Meal",
        description: "Complete meal deal including burger, small fries, and a drink.",
        code: "ZINGER5",
        badge: "LUNCH SPECIAL",
        gradient: "from-secondary to-yellow-500",
        textColor: "text-secondary",
    },
    {
        id: 3,
        title: "Free Wings Friday",
        description: "Order over £15 on Fridays and get 6 free wings added to your order.",
        code: "WINGFRI",
        badge: "FRIDAY ONLY",
        gradient: "from-purple-600 to-pink-500",
        textColor: "text-purple-600",
    },
    {
        id: 4,
        title: "Family Feast Special",
        description: "Big family bucket, 4 sides, 4 drinks — all for the price of 3.",
        code: "FAMILY4",
        badge: "BEST VALUE",
        gradient: "from-green-600 to-teal-500",
        textColor: "text-green-600",
    },
];

export default function DealsPage() {
    return (
        <div className="flex flex-col h-[100dvh] overflow-hidden bg-background-light dark:bg-background-dark">
            <Header />
            <AppSidebar>
                <main className="flex-1 p-6 md:p-10">
                    <h1 className="text-3xl font-black mb-2 text-[#181112] dark:text-white">Today's Hot Deals</h1>
                    <p className="text-[#886369] mb-10">Use these codes at checkout to save big on your next order.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {deals.map((deal) => (
                            <div key={deal.id} className={`bg-gradient-to-r ${deal.gradient} p-8 rounded-3xl text-white relative overflow-hidden group`}>
                                <span className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-xs font-bold">{deal.badge}</span>
                                <h3 className="text-2xl font-black mb-2">{deal.title}</h3>
                                <p className="text-white/80 mb-6 text-sm">{deal.description}</p>
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/30 px-4 py-2 rounded-xl">
                                        <p className="text-xs text-white/70 mb-0.5">Promo Code</p>
                                        <p className="font-black text-white tracking-widest">{deal.code}</p>
                                    </div>
                                    <Link href="/dashboard/menu" className={`bg-white ${deal.textColor} font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-all text-sm`}>
                                        Order Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Loyalty Banner */}
                    <div className="bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                            <span className="material-symbols-outlined text-3xl">stars</span>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-black mb-1">Earn Loyalty Points</h3>
                            <p className="text-[#886369]">Every £1 spent = 1 point. Redeem for free food and exclusive discounts.</p>
                        </div>
                        <Link href="/dashboard/menu" className="h-12 px-8 bg-primary text-white font-bold rounded-full hover:scale-105 transition-all flex items-center justify-center text-sm whitespace-nowrap">
                            Start Earning
                        </Link>
                    </div>
                </main>
            </AppSidebar>
        </div>
    );
}
