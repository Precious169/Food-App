"use client";

import { useState } from "react";
import Header from "../components/Header";
import AppSidebar from "../components/AppSidebar";
import Link from "next/link";

const menuItems = [
    {
        id: 1,
        name: "Spicy Zinger Burger",
        description: "Crispy chicken breast with spicy coating, lettuce, and fiery mayo.",
        price: "5.99",
        category: "Burgers",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
        spicy: true
    },
    {
        id: 2,
        name: "6pc Hot Wings",
        description: "Our signature spicy breaded wings, cooked to golden perfection.",
        price: "4.49",
        category: "Chicken",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80"
    },
    {
        id: 3,
        name: "Classic Fillet Burger",
        description: "Tender chicken fillet in original recipe breading with mayo.",
        price: "5.49",
        category: "Burgers",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80"
    },
    {
        id: 4,
        name: "Fried Chicken Bucket",
        description: "Bite-sized pieces of real chicken breast in crunchy coating.",
        price: "4.99",
        category: "Chicken",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80"
    },
    {
        id: 5,
        name: "Veggie Deluxe",
        description: "Crispy veggie patty with fresh salad and classic sauce.",
        price: "5.29",
        category: "Burgers",
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&q=80",
        veggie: true
    },
    {
        id: 6,
        name: "Large Fries",
        description: "Golden, crispy potato fries lightly salted.",
        price: "2.49",
        category: "Sides",
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=600&q=80"
    },
    {
        id: 7,
        name: "Onion Rings (8pc)",
        description: "Thick-cut onion rings in a beer batter coating.",
        price: "3.49",
        category: "Sides",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=80"
    },
    {
        id: 8,
        name: "Mozzarella Sticks",
        description: "Gooey mozzarella cheese in a herb-infused breadcrumb coating.",
        price: "3.99",
        category: "Sides",
        image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=600&q=80"
    },
    {
        id: 9,
        name: "Coca-Cola (500ml)",
        description: "Classic refreshing cola.",
        price: "1.99",
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80"
    },
    {
        id: 10,
        name: "Mango Smoothie",
        description: "Freshly blended mango with a splash of orange juice.",
        price: "3.99",
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&q=80"
    },
    {
        id: 11,
        name: "Mighty Bucket for One",
        description: "2pc chicken, 2pc wings, 1 small popcorn, regular fries & drink.",
        price: "8.99",
        category: "Deals",
        image: "https://images.unsplash.com/photo-1610614819513-58e34989848b?w=600&q=80"
    },
    {
        id: 12,
        name: "Tower Burger Box Meal",
        description: "Tower burger, 1pc chicken, regular side, fries & drink.",
        price: "9.99",
        category: "Deals",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80"
    }
];

const categories = ["All Items", "Chicken", "Burgers", "Sides", "Drinks", "Deals"];

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("All Items");
    const [showAll, setShowAll] = useState(false);

    const filteredItems = activeCategory === "All Items"
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header />
            <AppSidebar>
                <main className="flex-1 p-6 md:p-10">
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-black mb-2 text-[#181112] dark:text-white">Full Menu</h1>
                        <p className="text-[#886369]">Browse our full range of chicken, burgers, sides and drinks.</p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex gap-3 overflow-x-auto pb-3 mb-8 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => { setActiveCategory(cat); setShowAll(false); }}
                                className={`px-6 py-2.5 rounded-full font-bold transition-all whitespace-nowrap text-sm cursor-pointer flex-shrink-0 ${activeCategory === cat
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "bg-white dark:bg-[#2d1a1c] text-[#181112] dark:text-white border border-[#e5dcdd] dark:border-[#3d2a2d] hover:border-primary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Menu Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {displayedItems.length > 0 ? (
                            displayedItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white dark:bg-[#2d1a1c] rounded-2xl overflow-hidden border border-[#e5dcdd] dark:border-[#3d2a2d] hover:shadow-xl hover:border-primary transition-all group flex flex-col"
                                >
                                    <div
                                        className="h-52 bg-cover bg-center relative flex-shrink-0"
                                        style={{ backgroundImage: `url("${item.image}")` }}
                                    >
                                        {item.spicy && (
                                            <div className="absolute top-3 right-3 bg-red-600 text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                                <span className="material-symbols-outlined text-sm">local_fire_department</span> SPICY
                                            </div>
                                        )}
                                        {item.veggie && (
                                            <div className="absolute top-3 right-3 bg-green-600 text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                                <span className="material-symbols-outlined text-sm">eco</span> VEGGIE
                                            </div>
                                        )}
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all flex items-center justify-center">
                                            <Link
                                                href="/dashboard/menu"
                                                className="bg-white/90 text-primary font-bold px-5 py-2 rounded-full transform scale-90 group-hover:scale-100 transition-all flex items-center gap-2 text-sm"
                                            >
                                                <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                                                Order Now
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col gap-3">
                                        <div className="flex justify-between items-start gap-2">
                                            <h3 className="text-lg font-bold text-[#181112] dark:text-white">{item.name}</h3>
                                            <p className="text-primary text-lg font-black flex-shrink-0">£{item.price}</p>
                                        </div>
                                        <p className="text-[#886369] dark:text-[#a88d91] text-sm leading-relaxed line-clamp-2">{item.description}</p>
                                        <Link
                                            href="/dashboard/menu"
                                            className="mt-auto w-full bg-background-light dark:bg-background-dark border border-primary text-primary font-bold py-2.5 rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 text-sm"
                                        >
                                            <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                                            Add to Cart
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                                <span className="material-symbols-outlined text-6xl text-[#e5dcdd] mb-4">restaurant</span>
                                <h3 className="text-2xl font-bold text-[#886369]">No items in this category</h3>
                                <p className="text-[#a88d91]">We&apos;re updating this section soon!</p>
                            </div>
                        )}
                    </div>

                    {filteredItems.length > 6 && !showAll && (
                        <div className="flex justify-center mt-4 mb-8">
                            <button
                                onClick={() => setShowAll(true)}
                                className="px-10 py-4 bg-white dark:bg-[#2d1a1c] border-2 border-primary text-primary font-black text-base rounded-full hover:bg-primary hover:text-white transition-all flex items-center gap-2 shadow-lg hover:shadow-primary/20"
                            >
                                See More Options <span className="material-symbols-outlined">expand_more</span>
                            </button>
                        </div>
                    )}
                </main>
            </AppSidebar>
        </div>
    );
}
