"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const steps = [
    { id: 1, name: "Order Confirmed", icon: "task_alt", time: "19:40" },
    { id: 2, name: "Preparing Food", icon: "restaurant", time: "19:45" },
    { id: 3, name: "Out for Delivery", icon: "delivery_dining", time: "20:05" },
    { id: 4, name: "Arrived", icon: "home_pin", time: "20:15" }
];

export default function OrderTracking() {
    const [currentStep, setCurrentStep] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep(prev => (prev < 4 ? prev + 1 : prev));
        }, 15000); // Simulate progress every 15 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header />
            <main className="flex-1 py-12 max-w-[1440px] mx-auto w-full px-6 md:px-10">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Live Progress */}
                    <div className="flex-1">
                        <div className="bg-white dark:bg-[#2d1a1c] p-10 rounded-[3rem] border border-[#e5dcdd] dark:border-[#3d2a2d] shadow-xl shadow-black/5">
                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <h1 className="text-4xl font-black mb-2">Track Order</h1>
                                    <p className="text-[#a88d91] font-bold">ESTIMATED ARRIVAL: <span className="text-primary ml-2 uppercase">20:15 - 20:25</span></p>
                                </div>
                                <div className="hidden md:block">
                                    <span className="px-6 py-2 bg-green-500/10 text-green-600 rounded-full font-bold text-sm border border-green-500/20">ORDER ID: #MPR-10293</span>
                                </div>
                            </div>

                            <div className="relative">
                                {/* Connection Line */}
                                <div className="absolute left-[27px] top-0 bottom-0 w-1 bg-[#e5dcdd] dark:bg-[#3d2a2d]"></div>
                                <div
                                    className="absolute left-[27px] top-0 w-1 bg-primary transition-all duration-1000"
                                    style={{ height: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                                ></div>

                                <div className="flex flex-col gap-12 relative">
                                    {steps.map((step) => (
                                        <div key={step.id} className="flex items-center gap-8 group">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center z-10 transition-all duration-500 shadow-lg ${step.id <= currentStep ? 'bg-primary text-white scale-110' : 'bg-white dark:bg-[#2d1a1c] text-[#a88d91] border-2 border-[#e5dcdd] dark:border-[#3d2a2d]'}`}>
                                                <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-xl font-black transition-colors ${step.id <= currentStep ? 'text-[#181112] dark:text-white' : 'text-[#a88d91]'}`}>{step.name}</h3>
                                                <p className="text-[#886369] font-medium">{step.id <= currentStep ? `Processed at ${step.time}` : 'Pending'}</p>
                                            </div>
                                            {step.id === currentStep && (
                                                <div className="flex gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce"></span>
                                                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.2s]"></span>
                                                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.4s]"></span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Driver Card */}
                        <div className="mt-8 bg-white dark:bg-[#2d1a1c] p-6 rounded-3xl border border-[#e5dcdd] dark:border-[#3d2a2d] flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0R86D9Of0MV4TUGmmz5mz1cLJHZxAJGA18LNAjzXvcHeh4mjjyyoyRp-CVbVe128p551Crb4ih_C_0uNo3ivznL6Nwed9Ey_uEL9ttAQNrbzVzB3wAiutfCNiG3F10Spt1JE235GorWQzzkWiK-X8585mqcn_AD2uRAU3d4MFLIq5wZ1zKpKmZU2kDMnH_Mgiy5RIDDVQXZ3ZXMrIk68F-xnN4IHTqgBcbvUoAu356buB4O4YAyGz7KslOqcC3P4Iy_soVuRK3fII")` }}></div>
                                <div>
                                    <h4 className="font-bold text-lg">Michael is your driver</h4>
                                    <p className="text-[#a88d91] text-sm flex items-center gap-1"><span className="material-symbols-outlined text-secondary text-sm">stars</span> 4.9 Rating</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className="w-12 h-12 rounded-2xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] flex items-center justify-center text-primary transition-all active:scale-95"><span className="material-symbols-outlined">call</span></button>
                                <button className="w-12 h-12 rounded-2xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] flex items-center justify-center text-primary transition-all active:scale-95"><span className="material-symbols-outlined">chat_bubble</span></button>
                            </div>
                        </div>
                    </div>

                    {/* Order Details */}
                    <div className="w-full lg:w-[400px]">
                        <div className="bg-white dark:bg-[#2d1a1c] p-8 rounded-[2.5rem] border border-[#e5dcdd] dark:border-[#3d2a2d]">
                            <h2 className="text-2xl font-black mb-6">Delivery Address</h2>
                            <div className="flex gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <p className="font-bold">Home</p>
                                    <p className="text-sm text-[#886369] leading-relaxed">24 Baker Street, London, NW1 6XE, United Kingdom</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-black mb-6">Order Summary</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between text-[#886369] text-sm">
                                    <span>Spicy Zinger Burger x 1</span>
                                    <span className="font-bold text-[#181112] dark:text-white">£5.99</span>
                                </div>
                                <div className="flex justify-between text-[#886369] text-sm">
                                    <span>Large Fries x 2</span>
                                    <span className="font-bold text-[#181112] dark:text-white">£4.98</span>
                                </div>
                                <div className="h-px bg-[#e5dcdd] dark:border-[#3d2a2d] my-2"></div>
                                <div className="flex justify-between font-black">
                                    <span>Total Paid</span>
                                    <span className="text-primary">£13.47</span>
                                </div>
                            </div>
                            <Link href="/dashboard" className="mt-10 w-full h-14 bg-background-light dark:bg-background-dark text-[#181112] dark:text-white font-bold rounded-xl border border-[#e5dcdd] dark:border-[#3d2a2d] flex items-center justify-center hover:bg-[#e5dcdd] dark:hover:bg-[#3d2a2d] transition-all">
                                Return to Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
