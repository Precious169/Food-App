"use client";

import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          {/* HeroSection */}
          <section className="max-w-[1440px] mx-auto px-4 md:px-10 py-6">
            <div className="@container">
              <div className="relative overflow-hidden rounded-xl md:rounded-xl lg:rounded-xl">
                <div
                  className="flex min-h-[600px] flex-col gap-8 bg-cover bg-center bg-no-repeat items-start justify-center px-8 md:px-20 py-20"
                  style={{
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 70%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfXsYXYNSLJHH3R-0wkhh8iNLG1vcZsOtv94U8IZSxjOoOcWdfkt42ySHPuqWHukLFDxhgAyxH4RVR79piIR2icFbxA4-gHLBXbBv0XsQmhrm3DJFGIJecJ8dBvZgarnCMV4-qr9fvz3D8vDNlCAAe9BQN8MOetAfAKhwuOcQW38CoGK3xgCl_Fz1iiBMre5jO0MBDbwvlyNRlIxBJLEPYvRAdrTuH5Hxm1hpQls65pbxJuscJWll2U5TXaUJH-b9Ia2TXwjt4Hehs")`,
                  }}
                >
                  <div className="flex flex-col gap-6 max-w-[640px]">
                    <div className="inline-flex items-center gap-2 bg-secondary/90 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      <span className="material-symbols-outlined text-sm">local_fire_department</span>
                      Freshly Prepared
                    </div>
                    <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight">
                      Fresh, Hot & <span className="text-secondary">Delicious</span> - Delivered to Your Door
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed">
                      Experience the best fried chicken in the UK, prepared fresh with our secret 11-spice blend and delivered piping hot.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <Link href="/our-menu" className="flex min-h-[56px] min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-white text-lg font-black leading-normal tracking-[0.015em] hover:scale-105 transition-all shadow-xl shadow-primary/30">
                        <span className="truncate">Order Now</span>
                      </Link>
                      <Link href="/auth/signup" className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white text-lg font-black leading-normal tracking-[0.015em] hover:bg-white/20 transition-all">
                        <span className="truncate">Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SectionHeader: Featured */}
          <section className="max-w-[1440px] mx-auto px-6 md:px-10 pt-16">
            <div className="flex items-end justify-between border-b border-[#e5dcdd] dark:border-[#3d2a2d] pb-6">
              <div>
                <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Popular Choices</p>
                <h2 className="text-[#181112] dark:text-white text-4xl font-black leading-tight">Our Featured Menu</h2>
              </div>
              <Link className="text-primary font-bold flex items-center gap-2 hover:underline" href="/our-menu">
                View Full Menu <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </section>

          {/* ImageGrid: Menu Items */}
          <section className="max-w-[1440px] mx-auto px-6 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
              {/* Item 1 - Signature Fried Chicken */}
              <div className="flex flex-col bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-2xl overflow-hidden group cursor-pointer transition-all hover:scale-[1.05] hover:shadow-2xl hover:border-primary">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&q=80")` }}></div>
                <div className="p-4">
                  <h3 className="text-[#181112] dark:text-white text-sm font-bold truncate">Signature Fried Chicken</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-primary text-sm font-black">£5.99</p>
                    <span className="material-symbols-outlined text-secondary transition-transform group-hover:scale-110">add_circle</span>
                  </div>
                </div>
              </div>
              {/* Item 2 - Spicy Zinger Burger */}
              <div className="flex flex-col bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-2xl overflow-hidden group cursor-pointer transition-all hover:scale-[1.05] hover:shadow-2xl hover:border-primary">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80")` }}></div>
                <div className="p-4">
                  <h3 className="text-[#181112] dark:text-white text-sm font-bold truncate">Spicy Zinger Burger</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-primary text-sm font-black">£5.99</p>
                    <span className="material-symbols-outlined text-secondary transition-transform group-hover:scale-110">add_circle</span>
                  </div>
                </div>
              </div>
              {/* Item 3 - Crispy Hot Wings */}
              <div className="flex flex-col bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-2xl overflow-hidden group cursor-pointer transition-all hover:scale-[1.05] hover:shadow-2xl hover:border-primary">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80")` }}></div>
                <div className="p-4">
                  <h3 className="text-[#181112] dark:text-white text-sm font-bold truncate">Crispy Hot Wings</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-primary text-sm font-black">£4.49</p>
                    <span className="material-symbols-outlined text-secondary transition-transform group-hover:scale-110">add_circle</span>
                  </div>
                </div>
              </div>
              {/* Item 4 - Family Feast */}
              <div className="flex flex-col bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-2xl overflow-hidden group cursor-pointer transition-all hover:scale-[1.05] hover:shadow-2xl hover:border-primary">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1610614819513-58e34989848b?w=400&q=80")` }}></div>
                <div className="p-4">
                  <h3 className="text-[#181112] dark:text-white text-sm font-bold truncate">Family Feast</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-primary text-sm font-black">£15.99</p>
                    <span className="material-symbols-outlined text-secondary transition-transform group-hover:scale-110">add_circle</span>
                  </div>
                </div>
              </div>
              {/* Item 5 - Large Fries */}
              <div className="flex flex-col bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-2xl overflow-hidden group cursor-pointer transition-all hover:scale-[1.05] hover:shadow-2xl hover:border-primary">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&q=80")` }}></div>
                <div className="p-4">
                  <h3 className="text-[#181112] dark:text-white text-sm font-bold truncate">Large Fries</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-primary text-sm font-black">£2.49</p>
                    <span className="material-symbols-outlined text-secondary transition-transform group-hover:scale-110">add_circle</span>
                  </div>
                </div>
              </div>
              {/* Item 6 - Mango Smoothie */}
              <div className="flex flex-col bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-2xl overflow-hidden group cursor-pointer transition-all hover:scale-[1.05] hover:shadow-2xl hover:border-primary">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&q=80")` }}></div>
                <div className="p-4">
                  <h3 className="text-[#181112] dark:text-white text-sm font-bold truncate">Mango Smoothie</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-primary text-sm font-black">£3.99</p>
                    <span className="material-symbols-outlined text-secondary transition-transform group-hover:scale-110">add_circle</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FeatureSection: Why Choose Us */}
          <section className="bg-white dark:bg-[#1a0d0f] py-20 mt-10">
            <div className="max-w-[1440px] mx-auto px-6 md:px-10">
              <div className="flex flex-col gap-12 @container">
                <div className="flex flex-col gap-4 items-center text-center">
                  <h2 className="text-[#181112] dark:text-white text-4xl md:text-5xl font-black leading-tight max-w-[720px]">
                    The Secrets Behind Our Taste
                  </h2>
                  <p className="text-[#886369] dark:text-[#a88d91] text-lg font-normal max-w-[720px]">
                    We take pride in every meal we serve, ensuring quality and taste in every bite.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col gap-5 rounded-xl border border-[#e5dcdd] dark:border-[#3d2a2d] bg-background-light dark:bg-background-dark p-8 hover:border-primary transition-colors">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-3xl">eco</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#181112] dark:text-white text-xl font-bold leading-tight">Fresh Ingredients</h3>
                      <p className="text-[#886369] dark:text-[#a88d91] text-base font-normal leading-relaxed">
                        We use only 100% fresh, farm-raised chicken, delivered daily to our kitchens. Never frozen.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 rounded-xl border border-[#e5dcdd] dark:border-[#3d2a2d] bg-background-light dark:bg-background-dark p-8 hover:border-primary transition-colors">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-3xl">delivery_dining</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#181112] dark:text-white text-xl font-bold leading-tight">Fast Delivery</h3>
                      <p className="text-[#886369] dark:text-[#a88d91] text-base font-normal leading-relaxed">
                        Our optimized delivery network ensures your food arrives piping hot in under 30 minutes.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 rounded-xl border border-[#e5dcdd] dark:border-[#3d2a2d] bg-background-light dark:bg-background-dark p-8 hover:border-primary transition-colors">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-3xl">restaurant_menu</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#181112] dark:text-white text-xl font-bold leading-tight">Authentic Recipe</h3>
                      <p className="text-[#886369] dark:text-[#a88d91] text-base font-normal leading-relaxed">
                        Our secret blend of 11 herbs and spices has been perfected since 1995 for that unique MPR flavor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-20 max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">How It Works</h2>
              <p className="text-[#886369] max-w-2xl mx-auto">Getting your favorite chicken is easier than ever. Just three simple steps to deliciousness.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center text-3xl font-black mb-6 shadow-xl shadow-secondary/20">1</div>
                <h3 className="text-xl font-bold mb-2">Pick Your Favorites</h3>
                <p className="text-[#886369]">Browse our extensive menu of chicken, burgers, and wraps.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-black mb-6 shadow-xl shadow-primary/20">2</div>
                <h3 className="text-xl font-bold mb-2">We Cook Fresh</h3>
                <p className="text-[#886369]">Our chefs prepare your order immediately with high-quality ingredients.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center text-3xl font-black mb-6 shadow-xl shadow-secondary/20">3</div>
                <h3 className="text-xl font-bold mb-2">Hot Delivery</h3>
                <p className="text-[#886369]">Your meal is packed in thermal bags and rushed to your location.</p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="bg-background-light dark:bg-background-dark py-20 border-t border-[#e5dcdd] dark:border-[#3d2a2d]">
            <div className="max-w-[1440px] mx-auto px-6 md:px-10">
              <h2 className="text-4xl font-black text-center mb-16">What Our Fans Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-[#2d1a1c] p-8 rounded-xl shadow-sm border border-[#e5dcdd] dark:border-[#3d2a2d]">
                  <div className="flex gap-1 text-secondary mb-4">
                    {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined fill-1">star</span>)}
                  </div>
                  <p className="text-[#181112] dark:text-white font-medium italic mb-6">"The best fried chicken in Manchester! It's always crunchy on the outside and incredibly juicy on the inside."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cover" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0R86D9Of0MV4TUGmmz5mz1cLJHZxAJGA18LNAjzXvcHeh4mjjyyoyRp-CVbVe128p551Crb4ih_C_0uNo3ivznL6Nwed9Ey_uEL9ttAQNrbzVzB3wAiutfCNiG3F10Spt1JE235GorWQzzkWiK-X8585mqcn_AD2uRAU3d4MFLIq5wZ1zKpKmZU2kDMnH_Mgiy5RIDDVQXZ3ZXMrIk68F-xnN4IHTqgBcbvUoAu356buB4O4YAyGz7KslOqcC3P4Iy_soVuRK3fII")` }}></div>
                    <div>
                      <p className="font-bold">David Smith</p>
                      <p className="text-xs text-[#886369]">Salford, Manchester</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#2d1a1c] p-8 rounded-xl shadow-sm border border-[#e5dcdd] dark:border-[#3d2a2d]">
                  <div className="flex gap-1 text-secondary mb-4">
                    {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined fill-1">star</span>)}
                  </div>
                  <p className="text-[#181112] dark:text-white font-medium italic mb-6">"The Spicy Zinger Burger is actual perfection. Delivery was super fast even during Friday night rush!"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cover" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4W0WId9I0fQaHcJ53HRdMv7WO5UmKjuCHCOcCCGwVOsPRSzOi8-BEaDjaY3G8Ohmvf0qH7eWStu99bGJpPBB1cfvBC10BKve-StLNIfZTOCpY8PjZeQGL_92MB1zJFy5tkA2L3vVOH0fXzh1r8uQqKvBbKyGgZoFukknkUewMSA2lIt0VRRPpntZKJRsWArmRKjUhhmUTCCnwaGeq5R5x5W_P5RfeJBPEeXeFT4txYLWvBQgdzDJ5nIgy-1Hy4bJQkYn6NxsIZq2E")` }}></div>
                    <div>
                      <p className="font-bold">Sarah Jenkins</p>
                      <p className="text-xs text-[#886369]">Deansgate, Manchester</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#2d1a1c] p-8 rounded-xl shadow-sm border border-[#e5dcdd] dark:border-[#3d2a2d]">
                  <div className="flex gap-1 text-secondary mb-4">
                    {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined fill-1">star</span>)}
                  </div>
                  <p className="text-[#181112] dark:text-white font-medium italic mb-6">"Family Feast is our weekend tradition. Great value for money and the sides are just as good as the chicken."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cover" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHpEP88N13UZf5tyWU7IBRiAlbjRQFsT-3hevWw3aifm2kPehiqeCA-PeE7AvM6I2JSzh6Vzub2GACoAQABdxev7PsyGPe1YZsSc3YZSiDEIzk0N6iPzHU0ySDRJoucZdeWR6u0AzDGtoByItOUQ8ge_vSS77W59TWJZg-iibqD2l82MjdrjOf5OqkfPve6abA0uzjOu916Fzzcv7jJqEFTsNGQfEMLOdMgKsmOyNT6cXIY41sDo5wuELpPbmKft3BCLFgvVCm4Fs9")` }}></div>
                    <div>
                      <p className="font-bold">Michael Roe</p>
                      <p className="text-xs text-[#886369]">Old Trafford</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
