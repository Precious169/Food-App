"use client";

import Header from "../components/Header";
import AppSidebar from "../components/AppSidebar";

export default function ContactPage() {
    return (
        <div className="flex flex-col h-[100dvh] overflow-hidden">
            <Header />
            <AppSidebar>
                <main className="flex-1 overflow-y-auto">
                    <section className="bg-white dark:bg-[#1a0d0f] py-16 px-6 md:px-10 min-h-full">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                                <div className="flex flex-col gap-8">
                                    <div>
                                        <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Get in Touch</p>
                                        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
                                            We&apos;d Love to <span className="text-primary">Hear</span> from You
                                        </h1>
                                        <p className="text-[#886369] dark:text-[#a88d91] text-lg leading-relaxed">
                                            Have a question about our menu, an issue with an order, or just want to say hi?
                                            Our team is always here to help.
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-5 p-5 rounded-2xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d]">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                                <span className="material-symbols-outlined text-2xl">mail</span>
                                            </div>
                                            <div>
                                                <p className="font-bold">Email Us</p>
                                                <p className="text-[#886369] dark:text-[#a88d91] text-sm">hello@mprfoods.co.uk</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-5 p-5 rounded-2xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d]">
                                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                                                <span className="material-symbols-outlined text-2xl">call</span>
                                            </div>
                                            <div>
                                                <p className="font-bold">Call Us</p>
                                                <p className="text-[#886369] dark:text-[#a88d91] text-sm">0161 555 0123</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-5 p-5 rounded-2xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d]">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                                <span className="material-symbols-outlined text-2xl">location_on</span>
                                            </div>
                                            <div>
                                                <p className="font-bold">Visit Us</p>
                                                <p className="text-[#886369] dark:text-[#a88d91] text-sm">123 Oxford Street, Manchester, M1 4EE</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-background-light dark:bg-background-dark p-8 md:p-10 rounded-3xl border border-[#e5dcdd] dark:border-[#3d2a2d] shadow-xl">
                                    <form className="flex flex-col gap-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="flex flex-col gap-2">
                                                <label className="font-bold text-sm">First Name</label>
                                                <input className="bg-white dark:bg-[#1a0d0f] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary h-12" placeholder="John" type="text" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="font-bold text-sm">Last Name</label>
                                                <input className="bg-white dark:bg-[#1a0d0f] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary h-12" placeholder="Doe" type="text" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="font-bold text-sm">Email Address</label>
                                            <input className="bg-white dark:bg-[#1a0d0f] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary h-12" placeholder="john@example.com" type="email" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="font-bold text-sm">Subject</label>
                                            <select className="bg-white dark:bg-[#1a0d0f] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary h-12">
                                                <option>General Inquiry</option>
                                                <option>Order Support</option>
                                                <option>Feedback</option>
                                                <option>Catering Request</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="font-bold text-sm">Message</label>
                                            <textarea className="bg-white dark:bg-[#1a0d0f] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary min-h-[140px]" placeholder="Tell us how we can help..."></textarea>
                                        </div>
                                        <button className="bg-primary text-white text-base font-bold py-4 rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 mt-2">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </AppSidebar>
        </div>
    );
}
