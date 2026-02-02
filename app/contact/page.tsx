import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section className="bg-white dark:bg-[#1a0d0f] py-20 px-10">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="flex flex-col gap-8">
                                <div>
                                    <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Get in Touch</p>
                                    <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
                                        We'd Love to <span className="text-primary">Hear</span> from You
                                    </h1>
                                    <p className="text-[#886369] dark:text-[#a88d91] text-xl leading-relaxed">
                                        Have a question about our menu, an issue with an order, or just want to say hi?
                                        Our team is always here to help.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center gap-5 p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d]">
                                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-3xl">mail</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">Email Us</p>
                                            <p className="text-[#886369] dark:text-[#a88d91]">hello@mprfoods.co.uk</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d]">
                                        <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                            <span className="material-symbols-outlined text-3xl">call</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">Call Us</p>
                                            <p className="text-[#886369] dark:text-[#a88d91]">0161 555 0123</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-[#e5dcdd] dark:border-[#3d2a2d]">
                                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-3xl">location_on</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">Visit Us</p>
                                            <p className="text-[#886369] dark:text-[#a88d91]">123 Oxford Street, Manchester, M1 4EE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-background-light dark:bg-background-dark p-10 md:p-16 rounded-3xl border border-[#e5dcdd] dark:border-[#3d2a2d] shadow-2xl">
                                <form className="flex flex-col gap-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="font-bold text-sm">First Name</label>
                                            <input className="bg-white dark:bg-[#1a0d0f] border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary h-14" placeholder="John" type="text" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="font-bold text-sm">Last Name</label>
                                            <input className="bg-white dark:bg-[#1a0d0f] border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary h-14" placeholder="Doe" type="text" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-bold text-sm">Email Address</label>
                                        <input className="bg-white dark:bg-[#1a0d0f] border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary h-14" placeholder="john@example.com" type="email" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-bold text-sm">Subject</label>
                                        <select className="bg-white dark:bg-[#1a0d0f] border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary h-14 appearance-none">
                                            <option>General Inquiry</option>
                                            <option>Order Support</option>
                                            <option>Feedback</option>
                                            <option>Catering Request</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-bold text-sm">Message</label>
                                        <textarea className="bg-white dark:bg-[#1a0d0f] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary min-h-[160px]" placeholder="Tell us how we can help..."></textarea>
                                    </div>
                                    <button className="bg-primary text-white text-lg font-bold py-5 rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 mt-4">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
