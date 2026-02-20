"use client";

import { useState } from "react";
import Header from "../../components/Header";
import AppSidebar from "../../components/AppSidebar";

const menuItems = [
    {
        id: 1,
        name: "Spicy Zinger Burger",
        description: "Crispy chicken breast with spicy coating, lettuce, and fiery mayo.",
        price: 5.99,
        category: "Burgers",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
        spicy: true
    },
    {
        id: 2,
        name: "6pc Hot Wings",
        description: "Our signature spicy breaded wings, cooked to golden perfection.",
        price: 4.49,
        category: "Chicken",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80"
    },
    {
        id: 3,
        name: "Classic Fillet Burger",
        description: "Tender chicken fillet in original recipe breading with mayo.",
        price: 5.49,
        category: "Burgers",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80"
    },
    {
        id: 4,
        name: "Large Popcorn Chicken",
        description: "Bite-sized pieces of real chicken breast in crunchy coating.",
        price: 4.99,
        category: "Chicken",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80"
    },
    {
        id: 5,
        name: "Veggie Deluxe",
        description: "Crispy veggie patty with fresh salad and classic sauce.",
        price: 5.29,
        category: "Burgers",
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&q=80",
        veggie: true
    },
    {
        id: 6,
        name: "Large Fries",
        description: "Golden, crispy potato fries lightly salted.",
        price: 2.49,
        category: "Sides",
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=600&q=80"
    },
    {
        id: 7,
        name: "Onion Rings (8pc)",
        description: "Thick-cut onion rings in a beer batter coating.",
        price: 3.49,
        category: "Sides",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=80"
    },
    {
        id: 8,
        name: "Mozzarella Sticks",
        description: "Gooey mozzarella cheese in a herb-infused breadcrumb coating.",
        price: 3.99,
        category: "Sides",
        image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=600&q=80"
    },
    {
        id: 9,
        name: "Coca-Cola (500ml)",
        description: "Classic refreshing cola.",
        price: 1.99,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80"
    },
    {
        id: 10,
        name: "Mango Smoothie",
        description: "Freshly blended mango with a splash of orange juice.",
        price: 3.99,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&q=80"
    },
    {
        id: 11,
        name: "Mighty Bucket for One",
        description: "2pc chicken, 2pc wings, 1 small popcorn, regular fries & drink.",
        price: 8.99,
        category: "Deals",
        image: "https://images.unsplash.com/photo-1610614819513-58e34989848b?w=600&q=80"
    },
    {
        id: 12,
        name: "Tower Burger Box Meal",
        description: "Tower burger, 1pc chicken, regular side, fries & drink.",
        price: 9.99,
        category: "Deals",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80"
    }
];

const categories = ["All Items", "Deals", "Chicken", "Burgers", "Sides", "Drinks"];

export default function PremiumMenuPage() {
    const [activeCategory, setActiveCategory] = useState("All Items");
    const [tray, setTray] = useState<{ id: number; name: string; price: number; qty: number }[]>([]);

    const filteredItems = activeCategory === "All Items"
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    const addToTray = (item: typeof menuItems[0]) => {
        setTray(prev => {
            const existing = prev.find(t => t.id === item.id);
            if (existing) return prev.map(t => t.id === item.id ? { ...t, qty: t.qty + 1 } : t);
            return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1 }];
        });
    };

    const trayTotal = tray.reduce((acc, t) => acc + t.price * t.qty, 0);

    return (
        <div className="flex flex-col h-[100dvh] overflow-hidden bg-background-light dark:bg-background-dark">
            <Header />
            <AppSidebar>
                {/* Inner layout: category sidebar + menu items + cart tray */}
                <div className="flex flex-1 overflow-hidden h-full">
                    {/* Category Filter Sidebar */}
                    <div className="w-44 hidden lg:flex flex-col border-r border-[#e5dcdd] dark:border-[#3d2a2d] bg-white dark:bg-[#2d1a1c] p-4 overflow-y-auto flex-shrink-0">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#886369] px-2 pb-3 pt-1">Categories</p>
                        <nav className="space-y-1">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`w-full text-left px-3 py-2.5 rounded-xl font-bold text-sm transition-all ${activeCategory === cat
                                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                                        : 'text-[#886369] hover:bg-background-light dark:hover:bg-background-dark hover:text-primary'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Menu Items */}
                    <main className="flex-1 overflow-y-auto p-5 md:p-7">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h1 className="text-2xl font-black">{activeCategory}</h1>
                                <p className="text-sm text-[#886369]">{filteredItems.length} items available</p>
                            </div>
                            {/* Mobile category dropdown */}
                            <select
                                className="lg:hidden h-10 px-4 rounded-xl bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] font-bold text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                                value={activeCategory}
                                onChange={(e) => setActiveCategory(e.target.value)}
                            >
                                {categories.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            {filteredItems.map(item => (
                                <div key={item.id} className="bg-white dark:bg-[#2d1a1c] rounded-[1.5rem] border border-[#e5dcdd] dark:border-[#3d2a2d] shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all group cursor-pointer flex flex-col overflow-hidden">
                                    <div className="h-44 bg-cover bg-center relative" style={{ backgroundImage: `url("${item.image}")` }}>
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all"></div>
                                        {item.spicy && <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">SPICY 🌶️</div>}
                                        {item.veggie && <div className="absolute top-2 right-2 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">VEGGIE 🌱</div>}
                                    </div>
                                    <div className="p-4 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-bold text-base leading-tight pr-2">{item.name}</h3>
                                            <span className="font-black text-primary whitespace-nowrap">£{item.price.toFixed(2)}</span>
                                        </div>
                                        <p className="text-xs text-[#886369] line-clamp-2 mb-4 flex-1">{item.description}</p>
                                        <button
                                            onClick={() => addToTray(item)}
                                            className="w-full h-9 bg-background-light dark:bg-background-dark text-[#181112] dark:text-white font-bold rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-1.5 text-sm"
                                        >
                                            <span className="material-symbols-outlined text-base">add</span> Add to Tray
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>

                    {/* Cart Tray - right panel */}
                    <div className="w-60 hidden 2xl:flex flex-col border-l border-[#e5dcdd] dark:border-[#3d2a2d] bg-white dark:bg-[#2d1a1c] p-5 flex-shrink-0">
                        <h2 className="text-lg font-black mb-4">Your Tray</h2>
                        {tray.length === 0 ? (
                            <div className="flex-1 flex flex-col items-center justify-center text-center p-4 border-2 border-dashed border-[#e5dcdd] dark:border-[#3d2a2d] rounded-2xl">
                                <span className="material-symbols-outlined text-3xl text-[#886369] mb-2">shopping_basket</span>
                                <p className="text-xs text-[#886369] font-bold">Tap 'Add' to start</p>
                            </div>
                        ) : (
                            <div className="flex-1 overflow-y-auto space-y-2">
                                {tray.map(t => (
                                    <div key={t.id} className="flex justify-between items-center p-2 rounded-xl bg-background-light dark:bg-background-dark">
                                        <div className="min-w-0 flex-1 mr-2">
                                            <p className="font-bold text-xs truncate">{t.name}</p>
                                            <p className="text-xs text-primary">x{t.qty} · £{(t.price * t.qty).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="mt-4 space-y-3 flex-shrink-0">
                            <div className="flex justify-between text-sm">
                                <span className="text-[#886369]">Total</span>
                                <span className="font-black text-lg">£{trayTotal.toFixed(2)}</span>
                            </div>
                            <button
                                disabled={tray.length === 0}
                                className="w-full h-12 bg-primary text-white font-black rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 transition-all"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </AppSidebar>
        </div>
    );
}
