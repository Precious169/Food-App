"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            router.push("/order-tracking");
        }, 2000);
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header />
            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 md:px-10 py-12">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-black mb-8">Checkout</h1>

                    <div className="bg-white dark:bg-[#2d1a1c] p-8 rounded-[2.5rem] border border-[#e5dcdd] dark:border-[#3d2a2d] shadow-xl shadow-black/5">
                        <form onSubmit={handlePayment} className="flex flex-col gap-6">
                            <div>
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">location_on</span>
                                    Delivery Address
                                </h2>
                                <input required type="text" placeholder="Street Address" className="w-full h-12 px-4 rounded-xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] focus:ring-2 focus:ring-primary focus:outline-none transition-all mb-3" />
                                <div className="flex gap-3">
                                    <input required type="text" placeholder="City" className="flex-1 h-12 px-4 rounded-xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] focus:ring-2 focus:ring-primary focus:outline-none transition-all" />
                                    <input required type="text" placeholder="Postcode" className="w-1/3 h-12 px-4 rounded-xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] focus:ring-2 focus:ring-primary focus:outline-none transition-all" />
                                </div>
                            </div>

                            <div className="h-px bg-[#e5dcdd] dark:border-[#3d2a2d] my-2"></div>

                            <div>
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">credit_card</span>
                                    Payment Details
                                </h2>
                                <input required type="text" placeholder="Card Number" className="w-full h-12 px-4 rounded-xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] focus:ring-2 focus:ring-primary focus:outline-none transition-all mb-3" />
                                <div className="flex gap-3">
                                    <input required type="text" placeholder="MM/YY" className="flex-1 h-12 px-4 rounded-xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] focus:ring-2 focus:ring-primary focus:outline-none transition-all" />
                                    <input required type="text" placeholder="CVC" className="w-1/3 h-12 px-4 rounded-xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] focus:ring-2 focus:ring-primary focus:outline-none transition-all" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isProcessing}
                                className="mt-6 w-full h-14 bg-primary text-white font-black text-lg rounded-xl shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isProcessing ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Pay & Place Order <span className="material-symbols-outlined">arrow_forward</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
