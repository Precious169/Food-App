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

    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5dcdd] dark:border-[#3d2a2d] px-4 md:px-10 py-3 md:py-4 sticky top-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md z-[100]">
            {/* Logo */}
            <Link href={isLoggedIn ? "/dashboard" : "/"} className="flex items-center gap-2 md:gap-3 text-primary flex-shrink-0 z-[110]">
                <div className="size-7 md:size-8">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                </div>
                <h2 className="text-primary text-lg md:text-2xl font-black leading-tight tracking-tight uppercase">MPR Foods</h2>
            </Link>

            {/* Center nav (logged-out only, hidden on mobile) */}
            <div className={`hidden lg:flex items-center transition-opacity duration-300 ${!mounted ? 'opacity-0' : 'opacity-100'}`}>
                {!isLoggedIn && (
                    <nav className="flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/">Home</Link>
                        <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/our-menu">Menu</Link>
                        <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/deals">Deals</Link>
                        <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/location">Locations</Link>
                        <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/contact">Contact Us</Link>
                    </nav>
                )}
            </div>

            {/* Right side */}
            <div className="flex flex-1 justify-end gap-2 md:gap-4 items-center">
                {/* Search Bar - hidden on small mobile */}
                <label className="hidden sm:flex flex-col min-w-32 !h-9 max-w-56">
                    <div className="flex w-full flex-1 items-stretch rounded-full h-full">
                        <div className="text-[#886369] flex border-none bg-white dark:bg-[#2d1a1c] items-center justify-center pl-3 rounded-l-full">
                            <span className="material-symbols-outlined text-lg">search</span>
                        </div>
                        <input className="form-input flex w-full min-w-0 flex-1 border-none bg-white dark:bg-[#2d1a1c] focus:ring-0 rounded-r-full text-[#181112] dark:text-white placeholder:text-[#886369] px-3 pl-2 text-sm" placeholder="Find your flavor..." />
                    </div>
                </label>

                <div className={`flex items-center transition-opacity duration-300 ${!mounted ? 'opacity-0' : 'opacity-100'}`}>
                    {isLoggedIn ? (
                        /* Logged in: show Cart only */
                        <div className="flex items-center gap-2 md:gap-3">
                            <Link href="/cart" className="flex items-center gap-1.5 h-9 px-3 md:px-4 bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-full text-sm font-bold hover:border-primary hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-lg">shopping_cart</span>
                                <span className="hidden sm:block">Cart</span>
                            </Link>
                        </div>
                    ) : (
                        /* Logged out: show Login / Sign Up on Desktop */
                        <div className="hidden lg:flex items-center gap-2 md:gap-4">
                            <Link href="/auth/login" className="text-sm font-bold text-[#181112] dark:text-white hover:text-primary transition-colors whitespace-nowrap">
                                Log In
                            </Link>
                            <Link href="/auth/signup" className="flex items-center justify-center rounded-full h-9 px-4 md:px-6 bg-white dark:bg-[#2d1a1c] text-[#181112] dark:text-white border border-[#e5dcdd] dark:border-[#3d2a2d] text-sm font-bold hover:bg-background-light dark:hover:bg-background-dark transition-all whitespace-nowrap">
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden z-[110] size-9 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all"
                >
                    <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[100] bg-background-light dark:bg-background-dark animate-in fade-in slide-in-from-top-4 duration-300">
                    <nav className="flex flex-col h-full pt-20 px-6 gap-2">
                        <Link className="flex items-center gap-4 py-4 border-b border-[#e5dcdd] dark:border-[#3d2a2d] text-lg font-black text-[#181112] dark:text-white hover:text-primary" href="/">
                            <span className="material-symbols-outlined text-primary">home</span> Home
                        </Link>
                        <Link className="flex items-center gap-4 py-4 border-b border-[#e5dcdd] dark:border-[#3d2a2d] text-lg font-black text-[#181112] dark:text-white hover:text-primary" href="/our-menu">
                            <span className="material-symbols-outlined text-primary">restaurant_menu</span> Menu
                        </Link>
                        <Link className="flex items-center gap-4 py-4 border-b border-[#e5dcdd] dark:border-[#3d2a2d] text-lg font-black text-[#181112] dark:text-white hover:text-primary" href="/deals">
                            <span className="material-symbols-outlined text-primary">local_offer</span> Deals
                        </Link>
                        <Link className="flex items-center gap-4 py-4 border-b border-[#e5dcdd] dark:border-[#3d2a2d] text-lg font-black text-[#181112] dark:text-white hover:text-primary" href="/location">
                            <span className="material-symbols-outlined text-primary">location_on</span> Locations
                        </Link>
                        <Link className="flex items-center gap-4 py-4 border-b border-[#e5dcdd] dark:border-[#3d2a2d] text-lg font-black text-[#181112] dark:text-white hover:text-primary" href="/contact">
                            <span className="material-symbols-outlined text-primary">contact_mail</span> Contact Us
                        </Link>

                        {!isLoggedIn ? (
                            <div className="flex flex-col gap-3 mt-6">
                                <Link href="/auth/login" className="flex items-center justify-center h-14 rounded-2xl bg-background-light dark:bg-background-dark border-2 border-primary text-primary font-black text-lg">
                                    Log In
                                </Link>
                                <Link href="/auth/signup" className="flex items-center justify-center h-14 rounded-2xl bg-primary text-white font-black text-lg shadow-lg shadow-primary/20">
                                    Sign Up
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3 mt-6">
                                <Link href="/cart" className="flex items-center justify-center h-14 rounded-2xl bg-primary text-white font-black text-lg shadow-lg shadow-primary/20">
                                    View Cart
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center justify-center h-14 rounded-2xl bg-background-light dark:bg-background-dark border-2 border-red-500 text-red-500 font-black text-lg"
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
}
