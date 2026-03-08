"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import AppSidebar from "../../components/AppSidebar";
import { useRouter } from "next/navigation";

const locations = [
    {
        name: "Manchester Central",
        address: "123 Deansgate, Manchester, M3 2BQ",
        hours: "11:00 – 23:00 Everyday",
        badge: "Flagship",
        status: "Open Now",
        statusColor: "text-green-500",
    },
    {
        name: "Old Trafford",
        address: "56 Sir Matt Busby Way, Salford, M16 0QG",
        hours: "10:00 – 01:00 Everyday",
        badge: "Open Late",
        status: "Open Now",
        statusColor: "text-green-500",
    },
    {
        name: "Salford Quays",
        address: "8 Waterfront Way, Salford, M50 3UB",
        hours: "11:00 – 22:00 Everyday",
        badge: "Waterfront",
        status: "Closes Soon",
        statusColor: "text-orange-500",
    },
];

export default function AppLocationPage() {
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
                    <div className="mb-10 text-left">
                        <h1 className="text-3xl md:text-5xl font-black mb-4 text-[#181112] dark:text-white">Our Locations</h1>
                        <p className="text-[#886369] text-lg">Find the nearest MPR Foods and come visit us today.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {locations.map((loc) => (
                            <div key={loc.name} className="bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-3xl p-6 md:p-8 hover:border-primary transition-all group shadow-sm flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-black mb-1">{loc.name}</h3>
                                        <span className={`text-xs font-bold uppercase tracking-widest ${loc.statusColor}`}>{loc.status}</span>
                                    </div>
                                    <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">{loc.badge}</span>
                                </div>
                                
                                <div className="space-y-4 mb-8 flex-1">
                                    <div className="flex gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">location_on</span>
                                        <p className="text-sm text-[#886369] leading-6">{loc.address}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="material-symbols-outlined text-secondary text-xl mt-0.5">timer</span>
                                        <p className="text-sm text-[#886369] leading-6">{loc.hours}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <button className="h-12 rounded-xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] text-sm font-bold flex items-center justify-center gap-2 hover:bg-white dark:hover:bg-[#3d2a2d] transition-all">
                                        <span className="material-symbols-outlined text-lg">directions</span>
                                        Directions
                                    </button>
                                    <button className="h-12 rounded-xl bg-primary text-white text-sm font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all">
                                        <span className="material-symbols-outlined text-lg">restaurant_menu</span>
                                        Menu
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-br from-[#2d1a1c] to-[#1a0d0f] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                         <div className="relative z-10">
                            <h2 className="text-2xl font-black mb-3">Live Map Coming Soon</h2>
                            <p className="text-white/60 max-w-md">We're working on a live delivery tracking map so you can see your food in real-time. Stay tuned!</p>
                         </div>
                         <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-20 hidden md:block">
                            <span className="material-symbols-outlined text-8xl">map</span>
                         </div>
                    </div>
                </main>
            </AppSidebar>
        </div>
    );
}
