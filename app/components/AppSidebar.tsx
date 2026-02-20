"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const sidebarLinks = [
    { href: "/dashboard", icon: "home", label: "Dashboard" },
    { href: "/dashboard/menu", icon: "restaurant_menu", label: "Order Food" },
    { href: "/cart", icon: "shopping_cart", label: "My Cart" },
    { href: "/order-tracking", icon: "local_shipping", label: "Track Order" },
    { href: "/deals", icon: "local_offer", label: "Deals & Offers" },
    { href: "/menu", icon: "menu_book", label: "Full Menu" },
    { href: "/support", icon: "support_agent", label: "Customer Support" },
    { href: "/contact", icon: "contact_mail", label: "Contact Us" },
    { href: "/location", icon: "location_on", label: "Locations" },
    { href: "/settings", icon: "settings", label: "Settings" },
];

interface AppSidebarProps {
    children: React.ReactNode;
    username?: string;
    email?: string;
}

export default function AppSidebar({ children, username, email }: AppSidebarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem("user");
        window.dispatchEvent(new Event("user-update"));
        router.push("/");
    };

    return (
        <div className="flex flex-1 overflow-hidden min-h-[calc(100vh-65px)]">
            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 xl:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed xl:sticky top-[65px] xl:top-0 left-0 z-50 xl:z-auto h-full w-64 bg-white dark:bg-[#2d1a1c] border-r border-[#e5dcdd] dark:border-[#3d2a2d] flex flex-col flex-shrink-0 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}`}>
                {/* User Profile */}
                {username && (
                    <div className="p-5 border-b border-[#e5dcdd] dark:border-[#3d2a2d]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-lg flex-shrink-0">
                                {username[0].toUpperCase()}
                            </div>
                            <div className="overflow-hidden">
                                <p className="font-black text-sm text-[#181112] dark:text-white truncate">{username}</p>
                                {email && <p className="text-xs text-[#886369] truncate">{email}</p>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#886369] px-3 py-2 pt-3">Navigation</p>
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-sm transition-all ${isActive
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "text-[#886369] hover:bg-background-light dark:hover:bg-background-dark hover:text-primary"
                                    }`}
                            >
                                <span className="material-symbols-outlined text-xl">{link.icon}</span>
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Sign Out */}
                <div className="p-3 border-t border-[#e5dcdd] dark:border-[#3d2a2d]">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all"
                    >
                        <span className="material-symbols-outlined text-xl">logout</span>
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Page Content */}
            <div className="flex-1 flex flex-col overflow-y-auto min-w-0">
                {/* Mobile sidebar toggle bar */}
                <div className="xl:hidden flex items-center gap-4 px-5 py-3 border-b border-[#e5dcdd] dark:border-[#3d2a2d] bg-white dark:bg-[#2d1a1c] flex-shrink-0">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="w-9 h-9 rounded-xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] flex items-center justify-center hover:border-primary transition-colors"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <p className="font-bold text-sm text-[#886369]">Menu</p>
                </div>
                {children}
            </div>
        </div>
    );
}
