"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

// Mock Data - In a real app, this would come from a database/API
const menuItems = [
    {
        id: 1,
        name: "Spicy Zinger Burger",
        description: "Crispy chicken breast with spicy coating, lettuce, and fiery mayo.",
        price: "5.99",
        category: "Burgers",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSrXROfr1hIh7bvLq2U6ZJb34KAJr6UsqoMYT2rxRv3SbWKkT0M2H7Smu9dW16Uqlrnq4jT7WBv4Oeu7e3Nd54gwqY6NKaSMuR3UMtHKMmv3EKBy6K3w-XAhLaAlwY-8LfsK_vYJqvK5DGzNe5442780DmHoy-ZzK4KkhBIxol3q3Dbxi68frG7weci4cdmTqah9rOcOeuorBuXWdE0uYBf6unoq-7ySqWWi_IWBHJ26h20--D4giYp19xifE7gFuoi4w4kAHFKtlo",
        spicy: true
    },
    {
        id: 2,
        name: "6pc Hot Wings",
        description: "Our signature spicy breaded wings, cooked to golden perfection.",
        price: "4.49",
        category: "Chicken",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvZg-UBT7f7uTJvPAI-yGgbS1c1jAA0Hh9ZIY7RucdDJvBn9RX0ma-UByEzJ66eahGYaTZYmw1Y1cc5O6s-F8k2OBcVJmaNRxUthDH_P5OxResg5louijRFOxtTHhHSyW0x8SYyHzBnld9ZwPF238ridLhQTKl8XlVL_0mqN6t6h5mF0fUbtnzTXIeg8063i_40Zc-nLnGL0aFaUMrYeiqsuhb6ELVG3XwB4DrOtv1TRfLrwZoSAITBqSSiZf9d7pRY9AiHc3RQ9un"
    },
    {
        id: 3,
        name: "Classic Fillet Burger",
        description: "Tender chicken fillet in original recipe breading with mayo.",
        price: "5.49",
        category: "Burgers",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnipkOnmEyAnyBZv7XLHfl49trJAT_oLq7Q29TwqEM8-z18RgMr-KobRcmAcr-GXzVZPaHS8T1pWJDr4LTGi_-MJluAMEXD06xbGP9Rg9K07zCmethdfLtLxBi1dgtABCMhDKLpLHK52i-CXTgmze9iKziJq3aznnlgeThNKpwjSSpNb0YXHK2Aa-PLbA0hJ_c6_uzHsMzAuVVfoouaGKl9LH2V47SpPGNpr1gJWF9460ES8PtHQIpTS8gOpyfjk3jyGrI7XW_SIe7"
    },
    {
        id: 4,
        name: "Large Popcorn Chicken",
        description: "Bite-sized pieces of real chicken breast in crunchy coating.",
        price: "4.99",
        category: "Chicken",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/KFC_Original_Recipe_chicken_in_bucket.jpg/640px-KFC_Original_Recipe_chicken_in_bucket.jpg"
    },
    {
        id: 5,
        name: "Veggie Deluxe",
        description: "Crispy veggie patty with fresh salad and classic sauce.",
        price: 5.29,
        category: "Burgers",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Vegetarian_burger.jpg",
        veggie: true
    },
    {
        id: 6,
        name: "Large Fries",
        description: "Golden, crispy potato fries lightly salted.",
        price: 2.49,
        category: "Sides",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fries_2.jpg"
    },
    {
        id: 7,
        name: "Onion Rings (8pc)",
        description: "Thick-cut onion rings in a beer batter coating.",
        price: 3.49,
        category: "Sides",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Onion_rings_mostly_eaten.jpg/640px-Onion_rings_mostly_eaten.jpg"
    },
    {
        id: 8,
        name: "Mozzarella Sticks",
        description: "Gooey mozzarella cheese in a herb-infused breadcrumb coating.",
        price: 3.99,
        category: "Sides",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Mozzarella_Sticks_%2816914569422%29.jpg/640px-Mozzarella_Sticks_%2816914569422%29.jpg"
    },
    {
        id: 9,
        name: "Coca-Cola (500ml)",
        description: "Classic refreshing cola.",
        price: 1.99,
        category: "Drinks",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Glass_of_Cola.jpg/640px-Glass_of_Cola.jpg"
    },
    {
        id: 10,
        name: "Mango Smoothie",
        description: "Freshly blended mango with a splash of orange juice.",
        price: 3.99,
        category: "Drinks",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mango_Lassi.jpg/640px-Mango_Lassi.jpg"
    },
    {
        id: 11,
        name: "Mighty Bucket for One",
        description: "2pc chicken, 2pc wings, 1 small popcorn, regular fries & drink.",
        price: 8.99,
        category: "Deals",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/KFC_Original_Recipe_chicken_in_bucket.jpg/640px-KFC_Original_Recipe_chicken_in_bucket.jpg"
    },
    {
        id: 12,
        name: "Tower Burger Box Meal",
        description: "Tower burger, 1pc chicken, regular side, fries & drink.",
        price: 9.99,
        category: "Deals",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Chicken_burger_with_potato_wedges.jpg/640px-Chicken_burger_with_potato_wedges.jpg"
    }
];

const categories = ["All Items", "Deals", "Chicken", "Burgers", "Sides", "Drinks"];

export default function PremiumMenuPage() {
    const [activeCategory, setActiveCategory] = useState("All Items");

    // Smooth scroll to category - simplified as filter for now to match request data availability
    const filteredItems = activeCategory === "All Items"
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="flex flex-col min-h-screen bg-[#FDFBF7] dark:bg-[#1a0d0f]">
            <Header />
            <div className="flex flex-1 h-[calc(100vh-80px)] overflow-hidden">
                {/* Sidebar Categories */}
                <aside className="w-64 hidden xl:flex flex-col border-r border-[#e5dcdd] dark:border-[#3d2a2d] bg-white dark:bg-[#2d1a1c] p-6 overflow-y-auto">
                    <h2 className="text-xl font-black mb-6 px-4">Categories</h2>
                    <nav className="space-y-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all flex justify-between items-center ${activeCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-[#886369] hover:bg-[#f5f0f1] dark:hover:bg-[#3d2a2d] hover:text-primary'}`}
                            >
                                {cat}
                                <span className="material-symbols-outlined text-sm">{activeCategory === cat ? 'chevron_right' : ''}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="mt-auto pt-8">
                        <div className="bg-background-light dark:bg-background-dark p-4 rounded-2xl">
                            <h3 className="font-bold text-sm mb-2">Need Help?</h3>
                            <p className="text-xs text-[#886369] mb-4">Contact our support team for allergen info.</p>
                            <Link href="/support" className="flex items-center justify-center text-primary text-xs font-bold border border-primary px-3 py-2 rounded-lg w-full hover:bg-primary hover:text-white transition-all">
                                Support
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h1 className="text-3xl font-black">{activeCategory}</h1>
                                <p className="text-[#886369]">Choose from our delicious selection</p>
                            </div>
                            {/* Mobile Category Dropdown could go here */}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredItems.map(item => (
                                <div key={item.id} className="bg-white dark:bg-[#2d1a1c] rounded-[2rem] p-4 border border-[#e5dcdd] dark:border-[#3d2a2d] shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all group cursor-pointer flex flex-col">
                                    <div className="h-48 rounded-[1.5rem] bg-cover bg-center mb-4 relative overflow-hidden" style={{ backgroundImage: `url("${item.image}")` }}>
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
                                        {item.spicy && <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">SPICY</div>}
                                        {item.veggie && <div className="absolute top-3 right-3 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">VEGGIE</div>}
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-lg leading-tight">{item.name}</h3>
                                            <span className="font-black text-primary">£{item.price}</span>
                                        </div>
                                        <p className="text-sm text-[#886369] line-clamp-2 mb-4 flex-1">{item.description}</p>
                                        <button className="w-full h-10 bg-background-light dark:bg-background-dark text-[#181112] dark:text-white font-bold rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-lg shadow-primary/10">
                                            <span className="material-symbols-outlined text-lg">add</span> Add
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Right Sidebar - Tray/Cart Mini View */}
                <aside className="w-80 hidden 2xl:flex flex-col border-l border-[#e5dcdd] dark:border-[#3d2a2d] bg-white dark:bg-[#2d1a1c] p-6">
                    <h2 className="text-xl font-black mb-6">Your Tray</h2>

                    <div className="flex-1 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-[#e5dcdd] dark:border-[#3d2a2d] rounded-3xl">
                        <div className="w-16 h-16 bg-background-light dark:bg-background-dark rounded-full flex items-center justify-center text-[#886369] mb-4">
                            <span className="material-symbols-outlined text-3xl">shopping_basket</span>
                        </div>
                        <p className="font-bold text-[#181112] dark:text-white">Your tray is empty</p>
                        <p className="text-sm text-[#886369] mt-2">Tap 'Add' on items to start building your meal.</p>
                    </div>

                    <div className="mt-6 space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-[#886369]">Total</span>
                            <span className="font-black text-xl">£0.00</span>
                        </div>
                        <button disabled className="w-full h-14 bg-[#e5dcdd] dark:bg-[#3d2a2d] text-[#886369] font-black rounded-2xl cursor-not-allowed">Checkout</button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
