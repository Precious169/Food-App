"use client";

import Header from "../components/Header";
import AppSidebar from "../components/AppSidebar";
import Link from "next/link";

const locations = [
    {
        name: "Manchester Central",
        address: "123 Deansgate, Manchester, M3 2BQ",
        hours: "Mon–Thu: 11:00–23:00 | Fri–Sun: 11:00–01:00",
        phone: "0161 555 0101",
        badge: "Flagship Store",
        badgeColor: "bg-primary",
    },
    {
        name: "Old Trafford",
        address: "56 Sir Matt Busby Way, Stretford, M16 0QG",
        hours: "Mon–Sun: 10:00–01:00",
        phone: "0161 555 0202",
        badge: "Open Late",
        badgeColor: "bg-secondary",
    },
    {
        name: "Salford Quays",
        address: "8 Waterfront Way, Salford, M50 3UB",
        hours: "Mon–Fri: 11:00–22:00 | Sat–Sun: 10:00–23:00",
        phone: "0161 555 0303",
        badge: "Drive-Through",
        badgeColor: "bg-green-600",
    },
    {
        name: "Piccadilly Gardens",
        address: "22 Piccadilly, Manchester, M1 1PL",
        hours: "Mon–Sun: 09:00–00:00",
        phone: "0161 555 0404",
        badge: "City Centre",
        badgeColor: "bg-blue-600",
    },
];

export default function LocationPage() {
    return (
        <div className="flex flex-col h-[100dvh] overflow-hidden bg-background-light dark:bg-background-dark">
            <Header />
            <AppSidebar>
                <main className="flex-1 p-6 md:p-10 overflow-y-auto">
                    <h1 className="text-3xl font-black mb-2 text-[#181112] dark:text-white">Our Locations</h1>
                    <p className="text-[#886369] mb-10">Find your nearest MPR Foods restaurant and come taste the difference.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {locations.map((loc) => (
                            <div
                                key={loc.name}
                                className="bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-3xl p-8 hover:border-primary hover:shadow-lg transition-all group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h2 className="text-xl font-black text-[#181112] dark:text-white">{loc.name}</h2>
                                    <span className={`text-xs font-bold text-white px-3 py-1 rounded-full ${loc.badgeColor}`}>
                                        {loc.badge}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-3 text-sm text-[#886369] mb-6">
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                                        <span>{loc.address}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">schedule</span>
                                        <span>{loc.hours}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-green-600 text-lg mt-0.5">call</span>
                                        <span>{loc.phone}</span>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-all">
                                        <span className="material-symbols-outlined text-lg">map</span>
                                        View on Map
                                    </button>
                                    <Link
                                        href="/dashboard/menu"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all"
                                    >
                                        <span className="material-symbols-outlined text-lg">restaurant_menu</span>
                                        Order Here
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Delivery Zones Banner */}
                    <div className="mt-10 bg-gradient-to-r from-primary to-[#b01128] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle at 70% 50%, white, transparent)" }} />
                        <div>
                            <h2 className="text-2xl font-black mb-1">Delivery Available Across Greater Manchester</h2>
                            <p className="text-white/80">Order online for fast delivery to your door — available 7 days a week.</p>
                        </div>
                        <Link
                            href="/dashboard/menu"
                            className="flex-shrink-0 bg-white text-primary font-black px-8 py-3 rounded-full hover:scale-105 transition-all shadow-lg"
                        >
                            Order Now
                        </Link>
                    </div>
                </main>
            </AppSidebar>
        </div>
    );
}
