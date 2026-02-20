"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
    const [user, setUser] = useState<any>(null);
    const [mounted, setMounted] = useState(false);
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

    const handleLogout = () => {
        sessionStorage.removeItem("user");
        setUser(null);
        window.dispatchEvent(new Event("user-update"));
        router.push("/");
    };

    const isLoggedIn = mounted && !!user;

    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5dcdd] dark:border-[#3d2a2d] px-4 md:px-10 py-3 md:py-4 sticky top-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md z-50">
            {/* Logo */}
            <Link href={isLoggedIn ? "/dashboard" : "/"} className="flex items-center gap-2 md:gap-3 text-primary flex-shrink-0">
                <div className="size-7 md:size-8">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                </div>
                <h2 className="text-primary text-lg md:text-2xl font-black leading-tight tracking-tight uppercase">MPR Foods</h2>
            </Link>

            {/* Center nav (logged-out only, hidden on mobile) */}
            {!isLoggedIn && (
                <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/">Home</Link>
                    <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/menu">Menu</Link>
                    <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/deals">Deals</Link>
                    <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/location">Locations</Link>
                    <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/contact">Contact Us</Link>
                </nav>
            )}

            {/* Right side */}
            <div className="flex flex-1 justify-end gap-2 md:gap-4 items-center">
                {/* Search Bar - always shown */}
                <label className="hidden md:flex flex-col min-w-32 !h-9 max-w-56">
                    <div className="flex w-full flex-1 items-stretch rounded-full h-full">
                        <div className="text-[#886369] flex border-none bg-white dark:bg-[#2d1a1c] items-center justify-center pl-3 rounded-l-full">
                            <span className="material-symbols-outlined text-lg">search</span>
                        </div>
                        <input className="form-input flex w-full min-w-0 flex-1 border-none bg-white dark:bg-[#2d1a1c] focus:ring-0 rounded-r-full text-[#181112] dark:text-white placeholder:text-[#886369] px-3 pl-2 text-sm" placeholder="Find your flavor..." />
                    </div>
                </label>

                {isLoggedIn ? (
                    /* Logged in: show Cart and Settings only (Logout is in the sidebar) */
                    <div className="flex items-center gap-2 md:gap-3">
                        <Link href="/cart" className="flex items-center gap-1.5 h-9 px-3 md:px-4 bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-full text-sm font-bold hover:border-primary hover:text-primary transition-all">
                            <span className="material-symbols-outlined text-lg">shopping_cart</span>
                            <span className="hidden sm:block">Cart</span>
                        </Link>
                        <Link href="/dashboard" className="flex items-center gap-1.5 h-9 px-3 md:px-4 bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-full text-sm font-bold hover:border-primary hover:text-primary transition-all">
                            <span className="material-symbols-outlined text-lg">settings</span>
                            <span className="hidden sm:block">Settings</span>
                        </Link>
                    </div>
                ) : (
                    /* Logged out: show Login / Sign Up */
                    <div className="flex items-center gap-2 md:gap-4">
                        <Link href="/auth/login" className="text-sm font-bold text-[#181112] dark:text-white hover:text-primary transition-colors whitespace-nowrap">
                            Log In
                        </Link>
                        <Link href="/auth/signup" className="flex items-center justify-center rounded-full h-9 px-4 md:px-6 bg-white dark:bg-[#2d1a1c] text-[#181112] dark:text-white border border-[#e5dcdd] dark:border-[#3d2a2d] text-sm font-bold hover:bg-background-light dark:hover:bg-background-dark transition-all whitespace-nowrap">
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
