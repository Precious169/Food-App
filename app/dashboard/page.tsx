"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";

const sidebarLinks = [
    { href: "/dashboard", icon: "home", label: "Dashboard", active: true },
    { href: "/dashboard/menu", icon: "restaurant_menu", label: "Order Food" },
    { href: "/cart", icon: "shopping_cart", label: "My Cart" },
    { href: "/order-tracking", icon: "local_shipping", label: "Track Order" },
    { href: "/deals", icon: "local_offer", label: "Deals & Offers" },
    { href: "/menu", icon: "menu_book", label: "Full Menu" },
    { href: "/support", icon: "support_agent", label: "Customer Support" },
    { href: "/contact", icon: "contact_mail", label: "Contact Us" },
    { href: "/location", icon: "location_on", label: "Locations" },
];

export default function Dashboard() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const userData = sessionStorage.getItem("user");
        if (!userData) {
            router.push("/auth/login");
        } else {
            setUser(JSON.parse(userData));
        }
    }, [router]);

    const handleLogout = () => {
        sessionStorage.removeItem("user");
        window.dispatchEvent(new Event("user-update"));
        router.push("/");
    };

    if (!user) return null;

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <>
                    {/* Mobile overlay */}
                    {sidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-40 xl:hidden"
                            onClick={() => setSidebarOpen(false)}
                        />
                    )}

                    <aside className={`fixed xl:sticky top-[65px] xl:top-0 left-0 z-50 xl:z-auto h-[calc(100vh-65px)] xl:h-[calc(100vh-65px)] w-64 bg-white dark:bg-[#2d1a1c] border-r border-[#e5dcdd] dark:border-[#3d2a2d] flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}`}>
                        {/* User Profile Summary */}
                        <div className="p-6 border-b border-[#e5dcdd] dark:border-[#3d2a2d]">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl flex-shrink-0">
                                    {(user.name || user.username || "U")[0].toUpperCase()}
                                </div>
                                <div className="overflow-hidden">
                                    <p className="font-black text-[#181112] dark:text-white truncate">{user.name || user.username}</p>
                                    <p className="text-xs text-[#886369] truncate">{user.email || "member@mprfoods.com"}</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                            <p className="text-xs font-bold uppercase tracking-widest text-[#886369] px-4 pb-2 pt-2">Main Menu</p>
                            {sidebarLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${link.active ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-[#886369] hover:bg-background-light dark:hover:bg-background-dark hover:text-primary"}`}
                                >
                                    <span className="material-symbols-outlined text-xl">{link.icon}</span>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Logout */}
                        <div className="p-4 border-t border-[#e5dcdd] dark:border-[#3d2a2d]">
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all"
                            >
                                <span className="material-symbols-outlined text-xl">logout</span>
                                Sign Out
                            </button>
                        </div>
                    </aside>
                </>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto">
                    {/* Mobile sidebar toggle */}
                    <div className="xl:hidden flex items-center gap-4 px-6 py-4 border-b border-[#e5dcdd] dark:border-[#3d2a2d]">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="w-10 h-10 rounded-xl bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] flex items-center justify-center hover:border-primary transition-colors"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <p className="font-bold text-[#886369]">Menu</p>
                    </div>

                    <div className="max-w-5xl mx-auto px-6 md:px-10 py-10">
                        {/* Welcome Section */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-black text-[#181112] dark:text-white mb-2">
                                    {user.isNewUser ? `Welcome, ${user.name || user.username}!` : `Welcome back, ${user.username || user.name}!`}
                                </h1>
                                <p className="text-[#886369] dark:text-[#a88d91] font-medium text-lg">Ready for some crispy goodness today?</p>
                            </div>
                            <div className="flex gap-4">
                                <Link href="/dashboard/menu" className="h-14 px-8 bg-primary text-white font-bold rounded-full flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-all outline-none gap-2">
                                    <span className="material-symbols-outlined">restaurant_menu</span>
                                    Order Now
                                </Link>
                            </div>
                        </div>

                        {user.isNewUser ? (
                            /* Empty State for New Users */
                            <div className="space-y-8">
                                <div className="flex flex-col items-center justify-center py-16 text-center bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-[2rem]">
                                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                        <span className="material-symbols-outlined text-5xl">shopping_cart_checkout</span>
                                    </div>
                                    <h2 className="text-3xl font-black mb-4">You haven't ordered yet!</h2>
                                    <p className="text-[#886369] dark:text-[#a88d91] max-w-md mb-10 text-lg">Your order history is empty. Time to discover your next favorite meal from our menu!</p>
                                    <Link href="/dashboard/menu" className="h-14 px-12 bg-primary text-white font-black text-xl rounded-full flex items-center justify-center shadow-xl shadow-primary/30 hover:scale-105 transition-all">
                                        Explore Menu
                                    </Link>
                                </div>

                                {/* Quick Links for New Users */}
                                <div>
                                    <h2 className="text-2xl font-black mb-6">Get Started</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            { href: "/dashboard/menu", icon: "restaurant_menu", label: "Browse Menu", desc: "Explore our full menu" },
                                            { href: "/deals", icon: "local_offer", label: "View Deals", desc: "Today's offers & discounts" },
                                            { href: "/support", icon: "support_agent", label: "Get Support", desc: "Chat with our team" },
                                        ].map((item) => (
                                            <Link key={item.href} href={item.href} className="flex items-center gap-4 p-6 bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-2xl hover:border-primary hover:shadow-lg transition-all group">
                                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                    <span className="material-symbols-outlined">{item.icon}</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-[#181112] dark:text-white">{item.label}</p>
                                                    <p className="text-sm text-[#886369]">{item.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Populated State for Returning Users */
                            <>
                                {/* Stats Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                    <div className="bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] p-8 rounded-3xl">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <span className="material-symbols-outlined">shopping_bag</span>
                                        </div>
                                        <h3 className="text-[#886369] dark:text-[#a88d91] font-bold mb-1">Total Orders</h3>
                                        <p className="text-4xl font-black">12</p>
                                    </div>
                                    <div className="bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] p-8 rounded-3xl">
                                        <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                                            <span className="material-symbols-outlined">stars</span>
                                        </div>
                                        <h3 className="text-[#886369] dark:text-[#a88d91] font-bold mb-1">Loyalty Points</h3>
                                        <p className="text-4xl font-black">850</p>
                                    </div>
                                    <div className="bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] p-8 rounded-3xl">
                                        <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                                            <span className="material-symbols-outlined">local_shipping</span>
                                        </div>
                                        <h3 className="text-[#886369] dark:text-[#a88d91] font-bold mb-1">Next Free Delivery</h3>
                                        <p className="text-4xl font-black">2 Orders</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

                                        <div className="bg-gradient-to-br from-primary to-[#b01128] p-8 rounded-3xl text-white relative overflow-hidden group">
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
        </div>
    );
}
