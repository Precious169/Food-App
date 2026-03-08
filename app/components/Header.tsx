"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
    const [user, setUser] = useState<any>(null);
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
        const checkUser = () => {
            try {
                const userData = sessionStorage.getItem("user");
                if (userData) {
                    setUser(JSON.parse(userData));
                } else {
                    setUser(null);
                }
            } catch {
                setUser(null);
            }
        };

        checkUser();
        window.addEventListener("user-update", checkUser);
        window.addEventListener("storage", checkUser);

        return () => {
            window.removeEventListener("user-update", checkUser);
            window.removeEventListener("storage", checkUser);
        };
    }, [pathname]);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const handleLogout = () => {
        sessionStorage.removeItem("user");
        setUser(null);
        window.dispatchEvent(new Event("user-update"));
        router.push("/");
    };

    const isLoggedIn = mounted && !!user;

    // Define which routes are part of the "main app"
    const appRoutes = ["/dashboard", "/menu", "/cart", "/order-tracking", "/support", "/settings"];
    const isAppMode = isLoggedIn && appRoutes.some(route => pathname.startsWith(route));

    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5dcdd] dark:border-[#3d2a2d] px-4 md:px-10 py-3 md:py-4 sticky top-0 bg-background-light dark:bg-background-dark z-[100]">
            {/* Logo & Company Name */}
            <Link href={isLoggedIn ? "/dashboard" : "/"} className="flex items-center gap-2 md:gap-3 text-primary flex-shrink-0 z-[110]">
                <div className="size-7 md:size-8">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                </div>
                <h2 className="text-primary text-lg md:text-2xl font-black leading-tight tracking-tight uppercase">MPR Foods</h2>
            </Link>

            {/* Public Navigation (Desktop) - Only in Public Mode */}
            {!isAppMode && (
                <div className={`hidden lg:flex items-center transition-opacity duration-300 ${!mounted ? 'opacity-0' : 'opacity-100'}`}>
                    <nav className="flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/">Home</Link>
                        <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/our-menu">Menu</Link>
                        <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/deals">Deals</Link>
                        <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/location">Locations</Link>
                        <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/contact">Contact Us</Link>
                    </nav>
                </div>
            )}

            {/* Search Bar - Shown primarily in App Mode, or right side in Public Mode desktop */}
            <div className={`flex flex-1 items-center justify-end md:justify-center gap-4 px-4 ${isAppMode ? 'md:max-w-xl mx-auto' : 'max-w-xs ml-auto hidden lg:flex'}`}>
                <label className="flex flex-col w-full !h-10">
                    <div className="flex w-full flex-1 items-stretch rounded-full h-full border border-[#e5dcdd] dark:border-[#3d2a2d] bg-white dark:bg-[#2d1a1c] overflow-hidden focus-within:border-primary transition-all">
                        <div className="text-[#886369] flex items-center justify-center pl-4">
                            <span className="material-symbols-outlined text-xl">search</span>
                        </div>
                        <input className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-[#181112] dark:text-white placeholder:text-[#886369] px-3 text-sm font-medium" placeholder="Search for food, deals..." />
                    </div>
                </label>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-3 z-[110]">
                {/* Cart Icon - Always shown in App Mode, or if logged in */}
                {(isAppMode || isLoggedIn) && (
                    <Link href="/cart" className="relative p-2 rounded-full hover:bg-background-light dark:hover:bg-background-dark transition-all text-[#181112] dark:text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                        {isAppMode && <span className="hidden sm:inline font-bold text-sm">Cart</span>}
                    </Link>
                )}

                {/* Desktop Auth Links - Public Mode only */}
                {!isAppMode && !isLoggedIn && (
                    <div className="hidden lg:flex items-center gap-4 ml-4">
                        <Link href="/auth/login" className="text-sm font-bold text-[#181112] dark:text-white hover:text-primary transition-colors">
                            Log In
                        </Link>
                        <Link href="/auth/signup" className="flex items-center justify-center rounded-full h-10 px-6 bg-primary text-white text-sm font-black hover:scale-105 transition-all shadow-lg shadow-primary/20">
                            Sign Up
                        </Link>
                    </div>
                )}

                {/* User Menu / Logout (App Mode Desktop) */}
                {isAppMode && (
                    <div className="hidden md:flex items-center gap-3 ml-2 border-l border-[#e5dcdd] dark:border-[#3d2a2d] pl-5">
                        <div className="text-right">
                            <p className="text-sm font-black text-[#181112] dark:text-white">{user?.username || user?.name}</p>
                            <button onClick={handleLogout} className="text-[11px] font-bold text-primary hover:underline uppercase tracking-wider">Log Out</button>
                        </div>
                    </div>
                )}

                {/* Mobile Menu Toggle - Public Mode only */}
                {!isAppMode && (
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden size-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all"
                    >
                        <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                )}
            </div>

            {/* Mobile Menu Dropdown (Public Mode only) */}
            {!isAppMode && isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 z-[1000] bg-white dark:bg-[#1a0d0f] border-t border-[#e5dcdd] dark:border-[#3d2a2d] shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                    <nav className="flex flex-col p-4 max-h-[80vh] overflow-y-auto">
                        {[
                            { href: "/", label: "Home", icon: "home" },
                            { href: "/our-menu", label: "Menu", icon: "restaurant_menu" },
                            { href: "/deals", label: "Deals", icon: "local_offer" },
                            { href: "/location", label: "Locations", icon: "location_on" },
                            { href: "/contact", label: "Contact Us", icon: "contact_mail" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-base font-bold text-[#181112] dark:text-white hover:bg-primary/5 hover:text-primary transition-all"
                            >
                                <span className="material-symbols-outlined text-primary text-xl font-normal">{link.icon}</span>
                                {link.label}
                            </Link>
                        ))}

                        <div className="mt-4 pt-4 border-t border-[#e5dcdd] dark:border-[#3d2a2d]">
                            {!isLoggedIn ? (
                                <div className="grid grid-cols-2 gap-3 p-2">
                                    <Link href="/auth/login" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center h-11 rounded-xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] text-[#181112] dark:text-white font-bold text-sm">
                                        Log In
                                    </Link>
                                    <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center h-11 rounded-xl bg-primary text-white font-bold text-sm shadow-md">
                                        Sign Up
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-2 p-2">
                                    <Link href="/dashboard" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center h-11 rounded-xl bg-primary text-white font-bold text-sm">
                                        Go to Dashboard
                                    </Link>
                                    <button
                                        onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                                        className="flex items-center justify-center h-11 rounded-xl text-red-500 font-bold text-sm hover:bg-red-50 dark:hover:bg-red-900/10"
                                    >
                                        Log Out
                                    </button>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
