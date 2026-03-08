"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import AppSidebar from "../../components/AppSidebar";
import { useRouter } from "next/navigation";

export default function AppContactPage() {
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
                    <div className="mb-12">
                        <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Support Hub</p>
                        <h1 className="text-4xl md:text-5xl font-black mb-4 text-[#181112] dark:text-white">Contact Our Team</h1>
                        <p className="text-[#886369] text-lg">We&apos;re here to help with your orders, account, or any other inquiries.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                        <div className="flex flex-col gap-6">
                            <div className="bg-white dark:bg-[#2d1a1c] p-6 rounded-[2rem] border border-[#e5dcdd] dark:border-[#3d2a2d] shadow-sm">
                                <h3 className="text-xl font-black mb-6">Immediate Assistance</h3>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-5 p-4 rounded-2xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d]">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <span className="material-symbols-outlined text-2xl">support_agent</span>
                                        </div>
                                        <div>
                                            <p className="font-bold">Live Chat</p>
                                            <p className="text-[#886369] text-sm">Average response time: 2 mins</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 p-4 rounded-2xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d]">
                                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                                            <span className="material-symbols-outlined text-2xl">call</span>
                                        </div>
                                        <div>
                                            <p className="font-bold">Priority Line</p>
                                            <p className="text-[#886369] text-sm">0161 555 7777 (App Users Only)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-[2rem] border border-primary/20">
                                <h4 className="font-black text-lg mb-2">Our Promise</h4>
                                <p className="text-[#886369] dark:text-[#a88d91] leading-relaxed">
                                    As a registered member, your inquiries are prioritized. We aim to resolve all order-related issues within 2 hours of contact.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-[#2d1a1c] p-8 md:p-10 rounded-[2.5rem] border border-[#e5dcdd] dark:border-[#3d2a2d] shadow-xl">
                            <h3 className="text-xl font-black mb-6">Send a Message</h3>
                            <form className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-bold text-sm ml-1">Order Number (Optional)</label>
                                    <input className="bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary h-12" placeholder="#MPR-12345" type="text" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-bold text-sm ml-1">Subject</label>
                                    <select className="bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary h-12">
                                        <option>Issue with current order</option>
                                        <option>Reward point inquiry</option>
                                        <option>Account feedback</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-bold text-sm ml-1">Details</label>
                                    <textarea className="bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]" placeholder="Explain your situation..."></textarea>
                                </div>
                                <button className="bg-primary text-white text-base font-black py-4 rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 mt-4 h-14">
                                    Submit Ticket
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
            </AppSidebar>
        </div>
    );
}
