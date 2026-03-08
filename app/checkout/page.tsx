"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import AppSidebar from "../components/AppSidebar";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CheckoutPage() {
    const router = useRouter();
    const [cart, setCart] = useState<any[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [orderType, setOrderType] = useState<"delivery" | "collection">("delivery");
    const [paymentMethod, setPaymentMethod] = useState<"card" | "cash" | "paypal">("card");
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        const savedCart = sessionStorage.getItem("cart");
        const userData = sessionStorage.getItem("user");
        
        if (userData) {
            setUser(JSON.parse(userData));
        }

        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
        setIsLoaded(true);

        if (savedCart && JSON.parse(savedCart).length === 0) {
            router.push("/cart");
        }
    }, [router]);

    const subtotal = cart.reduce((acc, item) => acc + (item.price * (item.qty || item.quantity || 0)), 0);
    const deliveryFee = orderType === "delivery" ? 2.50 : 0;
    const total = subtotal + deliveryFee;

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            sessionStorage.removeItem("cart");
            router.push("/order-tracking");
        }, 1500);
    };

    if (!isLoaded) return null;

    if (cart.length === 0 && isLoaded) {
        return (
            <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
                <Header />
                <AppSidebar username={user?.name || user?.username} email={user?.email}>
                    <main className="flex-1 flex flex-col items-center justify-center p-6 text-center h-full min-h-[60vh]">
                        <span className="material-symbols-outlined text-7xl text-[#886369] mb-4">shopping_cart_off</span>
                        <h2 className="text-2xl font-black mb-2">Your cart is empty</h2>
                        <p className="text-[#886369] mb-8">Add some delicious items to get started!</p>
                        <Link href="/dashboard/menu" className="bg-primary text-white px-8 py-3 rounded-xl font-bold">Go to Menu</Link>
                    </main>
                </AppSidebar>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header />
            <AppSidebar username={user?.name || user?.username} email={user?.email}>
                <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-10 py-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-3">
                            <Link href="/cart" className="w-10 h-10 rounded-full bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] flex items-center justify-center text-[#886369] hover:text-primary transition-all shadow-sm">
                                <span className="material-symbols-outlined text-xl">arrow_back</span>
                            </Link>
                            <h1 className="text-3xl font-black text-[#181112] dark:text-white">Checkout</h1>
                        </div>
                        <Link href="/dashboard" className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors group">
                            <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">dashboard_customize</span>
                            Back to Dashboard
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column: Forms */}
                        <form onSubmit={handlePlaceOrder} className="lg:col-span-8 space-y-6">
                            {/* Order Type Selection */}
                            <div className="bg-white dark:bg-[#2d1a1c] p-1 rounded-2xl border border-[#e5dcdd] dark:border-[#3d2a2d] flex flex-row shadow-sm">
                                <button 
                                    type="button"
                                    onClick={() => setOrderType("delivery")}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${orderType === "delivery" ? "bg-primary text-white shadow-lg" : "text-[#886369] hover:bg-background-light dark:hover:bg-background-dark"}`}
                                >
                                    <span className="material-symbols-outlined text-xl">delivery_dining</span>
                                    Delivery
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => setOrderType("collection")}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${orderType === "collection" ? "bg-primary text-white shadow-lg" : "text-[#886369] hover:bg-background-light dark:hover:bg-background-dark"}`}
                                >
                                    <span className="material-symbols-outlined text-xl">store</span>
                                    Collection
                                </button>
                            </div>

                            {/* Details Section */}
                            <div className="bg-white dark:bg-[#2d1a1c] p-6 rounded-[2.5rem] border border-[#e5dcdd] dark:border-[#3d2a2d] shadow-sm">
                                <h2 className="text-xl font-black mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">1</span>
                                    Contact Details
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#886369] ml-1">Full Name</label>
                                        <input required type="text" placeholder="Your Name" value={user?.name || ""} className="w-full h-12 px-5 rounded-xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] outline-none focus:ring-2 focus:ring-primary transition-all" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold uppercase tracking-wider text-[#886369] ml-1">Phone Number</label>
                                        <input required type="tel" placeholder="0123 456 7890" className="w-full h-12 px-5 rounded-xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] outline-none focus:ring-2 focus:ring-primary transition-all" />
                                    </div>
                                </div>

                                {orderType === "delivery" && (
                                    <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-top-2">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold uppercase tracking-wider text-[#886369] ml-1">Delivery Address</label>
                                            <input required type="text" placeholder="Street Address" className="w-full h-12 px-5 rounded-xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] outline-none focus:ring-2 focus:ring-primary transition-all" />
                                            <div className="grid grid-cols-2 gap-3 mt-3">
                                                <input required type="text" placeholder="City" className="h-12 px-5 rounded-xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] outline-none focus:ring-2 focus:ring-primary transition-all" />
                                                <input required type="text" placeholder="Postcode" className="h-12 px-5 rounded-xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d] outline-none focus:ring-2 focus:ring-primary transition-all" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Payment Selection */}
                            <div className="bg-white dark:bg-[#2d1a1c] p-6 rounded-[2.5rem] border border-[#e5dcdd] dark:border-[#3d2a2d] shadow-sm">
                                <h2 className="text-xl font-black mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">2</span>
                                    Payment Method
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    <button 
                                        type="button"
                                        onClick={() => setPaymentMethod("card")}
                                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all gap-2 ${paymentMethod === "card" ? "border-primary bg-primary/5 shadow-md" : "border-[#e5dcdd] dark:border-[#3d2a2d] grayscale opacity-60"}`}
                                    >
                                        <span className="material-symbols-outlined text-3xl">credit_card</span>
                                        <span className="font-bold text-sm">Card</span>
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={() => setPaymentMethod("cash")}
                                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all gap-2 ${paymentMethod === "cash" ? "border-primary bg-primary/5 shadow-md" : "border-[#e5dcdd] dark:border-[#3d2a2d] grayscale opacity-60"}`}
                                    >
                                        <span className="material-symbols-outlined text-3xl">payments</span>
                                        <span className="font-bold text-sm">Cash</span>
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={() => setPaymentMethod("paypal")}
                                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all gap-2 ${paymentMethod === "paypal" ? "border-primary bg-primary/5 shadow-md" : "border-[#e5dcdd] dark:border-[#3d2a2d] grayscale opacity-60"}`}
                                    >
                                        <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
                                        <span className="font-bold text-sm">PayPal</span>
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* Right Column: Order Summary */}
                        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-10">
                            <div className="bg-white dark:bg-[#2d1a1c] p-6 rounded-[2.5rem] border border-[#e5dcdd] dark:border-[#3d2a2d] shadow-md">
                                <h2 className="text-xl font-black mb-6">Order Summary</h2>
                                <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                                    {cart.map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center text-sm">
                                            <div className="flex gap-3">
                                                <span className="font-black text-primary">{item.qty || item.quantity}x</span>
                                                <span className="text-[#886369] dark:text-[#a88d91] font-medium">{item.name}</span>
                                            </div>
                                            <span className="font-bold">£{((item.price || 0) * (item.qty || item.quantity || 1)).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3 pt-6 border-t border-[#e5dcdd] dark:border-[#3d2a2d]">
                                    <div className="flex justify-between text-[#886369] dark:text-[#a88d91] text-sm">
                                        <span>Subtotal</span>
                                        <span>£{subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-[#886369] dark:text-[#a88d91] text-sm">
                                        <span>Delivery Fee</span>
                                        <span>{orderType === "delivery" ? `£${deliveryFee.toFixed(2)}` : "FREE"}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-black pt-2">
                                        <span>Total</span>
                                        <span className="text-primary">£{total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button 
                                    onClick={handlePlaceOrder}
                                    disabled={isProcessing}
                                    className="w-full mt-8 h-14 bg-primary text-white font-black text-lg rounded-2xl shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:grayscale transition-none"
                                >
                                    {isProcessing ? (
                                        <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    ) : (
                                        <>Place Order <span className="material-symbols-outlined">shopping_basket</span></>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </AppSidebar>
        </div>
    );
}
