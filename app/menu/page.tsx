"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzybN_AwR_IYR_N57Es1yoSDqE8sFsQ88ZGZP0GVpyxmbz3cCXY41e6GWEJuQau-J7EoIX8iBYtNxBp2l4D2FYU9pibdIrBsTPnwpoqf8tbrhqzfr8WmBhbkbzUDDtAReEOQVNC-gGrNS-m1-cW7wKvFycSYXwaMZaJQ4V1oKqbAH20jCAJwLi6IltRWIQZb6MgPWQNHi5ix2wqSGDZL3EcupPY5dqCu-cnCSHOdXj9T55nwVyRpxHrQpLhBZRpBOJwapTPtbkN8sN"
    },
    {
        id: 5,
        name: "Veggie Deluxe",
        description: "Crispy veggie patty with fresh salad and classic sauce.",
        price: "5.29",
        category: "Burgers",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW9U16Dhj3jkOVnpBAEphe67INuDh9jPPQkG3lHZasYpri2odT40awbdseck8tsJ-fhF1KTxaidm2ia3txbYyBjPwZojN1XTdwInTieBaqEOPfgmIbalohE90mSlhTC1fotKuAbmoMYjcl7b5Ww31G59NF_N4-MmefoayeZJiMwYzUxXpHiYBgsAjiIWDlIZa67mqxcGI5j2b9KeksLUyGLcHNGljydjVnr6eQIxW-btJlOOdFEtgwx78aX9OgfRafL-EMHDnIGNTH",
        veggie: true
    },
    {
        id: 6,
        name: "Large Fries",
        description: "Golden, crispy potato fries lightly salted.",
        price: "2.49",
        category: "Sides",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fries_2.jpg"
    },
    {
        id: 7,
        name: "Onion Rings (8pc)",
        description: "Thick-cut onion rings in a beer batter coating.",
        price: "3.49",
        category: "Sides",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/42/OnionRings.JPG"
    },
    {
        id: 8,
        name: "Mozzarella Sticks",
        description: "Gooey mozzarella cheese in a herb-infused breadcrumb coating.",
        price: "3.99",
        category: "Sides",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Mozzarella_sticks.jpg"
    },
    {
        id: 9,
        name: "Coca-Cola (500ml)",
        description: "Classic refreshing cola.",
        price: "1.99",
        category: "Drinks",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/2021-09-28_20_24_19_Tortilla_chips%2C_salsa_and_a_Coca-Cola_bottle_at_the_Asadero_Mexican_Grill_in_Rochelle_Park_Township%2C_Bergen_County%2C_New_Jersey.jpg/320px-2021-09-28_20_24_19_Tortilla_chips%2C_salsa_and_a_Coca-Cola_bottle_at_the_Asadero_Mexican_Grill_in_Rochelle_Park_Township%2C_Bergen_County%2C_New_Jersey.jpg"
    },
    {
        id: 10,
        name: "Mango Smoothie",
        description: "Freshly blended mango with a splash of orange juice.",
        price: "3.99",
        category: "Drinks",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Mango_Thick_Shake.JPG"
    },
    {
        id: 11,
        name: "Mighty Bucket for One",
        description: "2pc chicken, 2pc wings, 1 small popcorn, regular fries & drink.",
        price: "8.99",
        category: "Deals",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Fried_Chicken_Bucket.jpg/640px-Fried_Chicken_Bucket.jpg"
    },
    {
        id: 12,
        name: "Tower Burger Box Meal",
        description: "Tower burger, 1pc chicken, regular side, fries & drink.",
        price: "9.99",
        category: "Deals",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Chicken_burger_with_potato_wedges.jpg/640px-Chicken_burger_with_potato_wedges.jpg"
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
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 md:px-10 py-12">
                <div className="flex flex-col gap-12">
                    {/* Menu Hero */}
                    <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhcb-VCadDD3F8-AdXFWz6tG6g-kAJ3BXMKDWAs0Z5TV2BigOayLusIVGzUOLWD0KYPi-txuXtk5wxOrx1tjhjrOTuog1oinCln_NrKHmYuD_sCiUYIMrgaJuKecV8-1Pft3qptVcJXM4x7jaYih_JLgu1pt0RLK4CALg-e1Lv0VyIm7la1-SaYAJLWPKp0OzqgMyoqIl6YchOfA6IT6fpyha2VeC5mwUBEmpPqbivsstsF3Vlw_GmVZlUFTGHe-ONckrP-x_McrOB")` }}
                        ></div>
                        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
                            <h1 className="text-white text-4xl md:text-6xl font-black mb-4 tracking-tight">Our Full Menu</h1>
                            <p className="text-white/80 text-lg md:text-xl max-w-2xl">Discover our legendary chicken, handcrafted burgers, and delicious sides.</p>
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => { setActiveCategory(cat); setShowAll(false); }}
                                className={`px-8 py-3 rounded-full font-bold transition-all whitespace-nowrap cursor-pointer ${activeCategory === cat ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-white dark:bg-[#2d1a1c] text-[#181112] dark:text-white border border-[#e5dcdd] dark:border-[#3d2a2d] hover:border-primary"}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Menu Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4 min-h-[400px]">
                        {displayedItems.length > 0 ? (
                            displayedItems.map((item) => (
                                <div key={item.id} className="bg-white dark:bg-[#2d1a1c] rounded-2xl overflow-hidden border border-[#e5dcdd] dark:border-[#3d2a2d] hover:shadow-2xl transition-all group flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div
                                        className="h-64 bg-cover bg-center relative"
                                        style={{ backgroundImage: `url("${item.image}")` }}
                                    >
                                        {item.spicy && (
                                            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                                <span className="material-symbols-outlined text-sm">local_fire_department</span> SPICY
                                            </div>
                                        )}
                                        {item.veggie && (
                                            <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                                <span className="material-symbols-outlined text-sm">eco</span> VEGGIE
                                            </div>
                                        )}
                                        {/* Glassmorphism Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all flex items-center justify-center">
                                            <button className="bg-white/90 text-primary font-bold px-6 py-2 rounded-full transform scale-90 group-hover:scale-100 transition-all flex items-center gap-2">
                                                <span className="material-symbols-outlined">zoom_in</span> Quick View
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col items-start gap-4">
                                        <div className="flex justify-between items-start w-full gap-4">
                                            <h3 className="text-xl md:text-2xl font-bold">{item.name}</h3>
                                            <p className="text-primary text-xl md:text-2xl font-black">£{item.price}</p>
                                        </div>
                                        <p className="text-[#886369] dark:text-[#a88d91] leading-relaxed line-clamp-2">{item.description}</p>
                                        <button className="mt-auto w-full bg-background-light dark:bg-background-dark border border-primary text-primary font-bold py-3 rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined">add_shopping_cart</span> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                                <span className="material-symbols-outlined text-6xl text-[#e5dcdd] mb-4">restaurant</span>
                                <h3 className="text-2xl font-bold text-[#886369]">No items found in this category</h3>
                                <p className="text-[#a88d91]">We're currently updating our selection for {activeCategory}.</p>
                            </div>
                        )}
                    </div>

                    {filteredItems.length > 6 && !showAll && (
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={() => setShowAll(true)}
                                className="px-10 py-4 bg-white dark:bg-[#2d1a1c] border-2 border-primary text-primary font-black text-lg rounded-full hover:bg-primary hover:text-white transition-all flex items-center gap-2 shadow-lg hover:shadow-primary/20"
                            >
                                See More Options <span className="material-symbols-outlined">expand_more</span>
                            </button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
