"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
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
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header />
            <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 text-[#181112] dark:text-white">Our Locations</h1>
                    <p className="text-[#886369] text-lg">Find your nearest MPR Foods restaurant and come taste the difference.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {locations.map((loc) => (
                        <div
                            key={loc.name}
                            className="bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-3xl p-8 md:p-10 hover:border-primary hover:shadow-2xl transition-all group flex flex-col h-full shadow-sm"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <h2 className="text-2xl font-black text-[#181112] dark:text-white">{loc.name}</h2>
                                <span className={`text-xs font-bold text-white px-4 py-1.5 rounded-full shadow-sm ${loc.badgeColor}`}>
                                    {loc.badge}
                                </span>
                            </div>

                            <div className="flex flex-col gap-5 text-base text-[#886369] mb-8 flex-1">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary text-2xl mt-0.5">location_on</span>
                                    <span className="leading-relaxed">{loc.address}</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-secondary text-2xl mt-0.5">schedule</span>
                                    <span className="leading-relaxed">{loc.hours}</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-green-600 text-2xl mt-0.5">call</span>
                                    <span className="leading-relaxed font-bold">{loc.phone}</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                <button className="flex-1 py-4 rounded-2xl bg-primary text-white hover:bg-primary/95 transition-all text-center shadow-lg shadow-primary/10">
                                    <div className="flex items-center justify-center gap-2 font-black text-base">
                                        <span className="material-symbols-outlined text-2xl">map</span>
                                        <span>View on Map</span>
                                    </div>
                                </button>
                                <Link
                                    href="/auth/login"
                                    className="flex-1 py-4 rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-center font-black text-base"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-2xl">restaurant_menu</span>
                                        <span>Order Here</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Delivery Zones Banner */}
                <div className="mb-20 bg-gradient-to-r from-primary to-[#b01128] rounded-[2.5rem] p-10 md:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle at 70% 50%, white, transparent)" }} />
                    <div className="text-center lg:text-left z-10">
                        <h2 className="text-3xl md:text-4xl font-black mb-4">Delivery Available Across Greater Manchester</h2>
                        <p className="text-white/90 text-xl max-w-2xl">Order online for fast delivery to your door — available 7 days a week. We bring the heat to you!</p>
                    </div>
                    <Link
                        href="/auth/signup"
                        className="flex-shrink-0 bg-white text-primary font-black px-12 py-5 rounded-full hover:scale-105 transition-all shadow-xl text-lg z-10"
                    >
                        Order Now
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}

const locationsData = [
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
