"use client";

import { useState } from "react";
import Header from "../components/Header";
import AppSidebar from "../components/AppSidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const initialCart = [
    {
        id: 1,
        name: "Spicy Zinger Burger",
        price: 5.99,
        quantity: 1,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSrXROfr1hIh7bvLq2U6ZJb34KAJr6UsqoMYT2rxRv3SbWKkT0M2H7Smu9dW16Uqlrnq4jT7WBv4Oeu7e3Nd54gwqY6NKaSMuR3UMtHKMmv3EKBy6K3w-XAhLaAlwY-8LfsK_vYJqvK5DGzNe5442780DmHoy-ZzK4KkhBIxol3q3Dbxi68frG7weci4cdmTqah9rOcOeuorBuXWdE0uYBf6unoq-7ySqWWi_IWBHJ26h20--D4giYp19xifE7gFuoi4w4kAHFKtlo"
    },
    {
        id: 6,
        name: "Large Fries",
        price: 2.49,
        quantity: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fries_2.jpg"
    }
];

export default function CartPage() {
    const [cart, setCart] = useState(initialCart);
    const router = useRouter();

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryFee = 2.50;
    const total = subtotal + deliveryFee;

    const updateQuantity = (id: number, delta: number) => {
        setCart(prev => prev.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeItem = (id: number) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header />
            <AppSidebar>
                <main className="flex-1 p-6 md:p-10">
                    <h1 className="text-3xl font-black mb-2 flex items-center gap-3">
                        Your Basket
                        <span className="text-base font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">{cart.length} Items</span>
                    </h1>
                    <p className="text-[#886369] mb-8">Review your items and proceed to checkout.</p>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Cart Items */}
                        <div className="flex-1">
                            {cart.length > 0 ? (
                                <div className="flex flex-col gap-4">
                                    {cart.map((item) => (
                                        <div key={item.id} className="bg-white dark:bg-[#2d1a1c] p-5 rounded-3xl border border-[#e5dcdd] dark:border-[#3d2a2d] flex items-center gap-5 group">
                                            <div className="w-20 h-20 rounded-2xl bg-cover bg-center shrink-0" style={{ backgroundImage: `url("${item.image}")` }}></div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-base font-bold truncate">{item.name}</h3>
                                                <p className="text-primary font-black mt-0.5">£{item.price.toFixed(2)}</p>
                                            </div>
                                            <div className="flex items-center gap-3 bg-background-light dark:bg-background-dark p-1.5 rounded-2xl border border-[#e5dcdd] dark:border-[#3d2a2d]">
                                                <button onClick={() => updateQuantity(item.id, -1)} className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white dark:hover:bg-[#2d1a1c] transition-colors">
                                                    <span className="material-symbols-outlined text-sm">remove</span>
                                                </button>
                                                <span className="font-bold w-4 text-center text-sm">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)} className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white dark:hover:bg-[#2d1a1c] transition-colors">
                                                    <span className="material-symbols-outlined text-sm">add</span>
                                                </button>
                                            </div>
                                            <button onClick={() => removeItem(item.id)} className="text-[#886369] hover:text-primary transition-colors p-1">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-[#2d1a1c] rounded-[2rem] border border-[#e5dcdd] dark:border-[#3d2a2d]">
                                    <span className="material-symbols-outlined text-6xl text-[#e5dcdd] mb-4">shopping_basket</span>
                                    <h3 className="text-2xl font-bold mb-2">Your basket is empty</h3>
                                    <p className="text-[#886369] mb-8">Hungry? Add some delicious items to your basket!</p>
                                    <Link href="/dashboard/menu" className="h-12 px-10 bg-primary text-white font-bold rounded-full flex items-center justify-center shadow-lg">
                                        Browse Menu
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Order Summary */}
                        <div className="w-full lg:w-[360px]">
                            <div className="bg-white dark:bg-[#2d1a1c] p-7 rounded-[2.5rem] border border-[#e5dcdd] dark:border-[#3d2a2d] sticky top-24">
                                <h2 className="text-xl font-black mb-5">Order Summary</h2>
                                <div className="flex flex-col gap-3 mb-7">
                                    <div className="flex justify-between text-[#886369] dark:text-[#a88d91] text-sm">
                                        <span>Subtotal</span>
                                        <span className="font-bold text-[#181112] dark:text-white">£{subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-[#886369] dark:text-[#a88d91] text-sm">
                                        <span>Delivery Fee</span>
                                        <span className="font-bold text-[#181112] dark:text-white">£{deliveryFee.toFixed(2)}</span>
                                    </div>
                                    <div className="h-px bg-[#e5dcdd] dark:bg-[#3d2a2d]"></div>
                                    <div className="flex justify-between text-lg font-black">
                                        <span>Total</span>
                                        <span className="text-primary">£{total.toFixed(2)}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => router.push("/checkout")}
                                    disabled={cart.length === 0}
                                    className="w-full h-14 bg-primary text-white font-black text-lg rounded-full shadow-xl shadow-primary/30 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
                                >
                                    Checkout <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                                <div className="mt-4 flex items-center gap-3 text-xs text-[#886369] dark:text-[#a88d91]">
                                    <span className="material-symbols-outlined text-green-500">verified_user</span>
                                    Secure payment powered by MPR Pay
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </AppSidebar>
        </div>
    );
}
