"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhcb-VCadDD3F8-AdXFWz6tG6g-kAJ3BXMKDWAs0Z5TV2BigOayLusIVGzUOLWD0KYPi-txuXtk5wxOrx1tjhjrOTuog1oinCln_NrKHmYuD_sCiUYIMrgaJuKecV8-1Pft3qptVcJXM4x7jaYih_JLgu1pt0RLK4CALg-e1Lv0VyIm7la1-SaYAJLWPKp0OzqgMyoqIl6YchOfA6IT6fpyha2VeC5mwUBEmpPqbivsstsF3Vlw_GmVZlUFTGHe-ONckrP-x_McrOB"
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

    const handleCheckout = () => {
        // Mock checkout process
        router.push("/order-tracking");
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header />
            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 md:px-10 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Cart Items */}
                    <div className="flex-1">
                        <h1 className="text-4xl font-black mb-8 flex items-center gap-3">
                            Your Basket
                            <span className="text-lg font-bold bg-primary/10 text-primary px-4 py-1 rounded-full">{cart.length} Items</span>
                        </h1>

                        {cart.length > 0 ? (
                            <div className="flex flex-col gap-6">
                                {cart.map((item) => (
                                    <div key={item.id} className="bg-white dark:bg-[#2d1a1c] p-6 rounded-3xl border border-[#e5dcdd] dark:border-[#3d2a2d] flex items-center gap-6 group">
                                        <div className="w-24 h-24 rounded-2xl bg-cover bg-center shrink-0" style={{ backgroundImage: `url("${item.image}")` }}></div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-xl font-bold truncate">{item.name}</h3>
                                            <p className="text-primary font-black mt-1">£{item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center gap-4 bg-background-light dark:bg-background-dark p-2 rounded-2xl border border-[#e5dcdd] dark:border-[#3d2a2d]">
                                            <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 rounded-xl flex items-center justify-center hover:bg-white dark:hover:bg-[#2d1a1c] transition-colors"><span className="material-symbols-outlined text-sm">remove</span></button>
                                            <span className="font-bold w-4 text-center">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 rounded-xl flex items-center justify-center hover:bg-white dark:hover:bg-[#2d1a1c] transition-colors"><span className="material-symbols-outlined text-sm">add</span></button>
                                        </div>
                                        <button onClick={() => removeItem(item.id)} className="text-[#886369] hover:text-primary transition-colors p-2">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/20">
                                <span className="material-symbols-outlined text-6xl text-[#e5dcdd] mb-4">shopping_basket</span>
                                <h3 className="text-2xl font-bold mb-2">Your basket is empty</h3>
                                <p className="text-[#886369] mb-8">Hungry? Add some delicious items to your basket!</p>
                                <Link href="/menu" className="h-14 px-10 bg-primary text-white font-bold rounded-full flex items-center justify-center shadow-lg">Browse Menu</Link>
                            </div>
                        )}
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-[400px]">
                        <div className="bg-white dark:bg-[#2d1a1c] p-8 rounded-[2.5rem] border border-[#e5dcdd] dark:border-[#3d2a2d] sticky top-32">
                            <h2 className="text-2xl font-black mb-6">Order Summary</h2>
                            <div className="flex flex-col gap-4 mb-8">
                                <div className="flex justify-between text-[#886369] dark:text-[#a88d91]">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-[#181112] dark:text-white">£{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-[#886369] dark:text-[#a88d91]">
                                    <span>Delivery Fee</span>
                                    <span className="font-bold text-[#181112] dark:text-white">£{deliveryFee.toFixed(2)}</span>
                                </div>
                                <div className="h-px bg-[#e5dcdd] dark:border-[#3d2a2d] my-2"></div>
                                <div className="flex justify-between text-xl font-black">
                                    <span>Total</span>
                                    <span className="text-primary">£{total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                disabled={cart.length === 0}
                                className="w-full h-16 bg-primary text-white font-black text-xl rounded-full shadow-xl shadow-primary/30 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3"
                            >
                                Checkout <span className="material-symbols-outlined">arrow_forward</span>
                            </button>

                            <div className="mt-6 flex items-center gap-4 text-xs text-[#886369] dark:text-[#a88d91]">
                                <span className="material-symbols-outlined text-green-500">verified_user</span>
                                Secure payment powered by MPR Pay
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
