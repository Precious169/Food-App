import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background-dark text-white py-16">
            <div className="max-w-[1440px] mx-auto px-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 text-primary">
                            <div className="size-8">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <h2 className="text-2xl font-black tracking-tight uppercase">MPR Foods</h2>
                        </div>
                        <p className="text-white/60 leading-relaxed">The UK's favorite destination for authentic, fresh, and piping hot fried chicken since 1995.</p>
                        <div className="flex gap-4">
                            <Link className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                                <span className="material-symbols-outlined">social_leaderboard</span>
                            </Link>
                            <Link className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                                <span className="material-symbols-outlined">photo_camera</span>
                            </Link>
                            <Link className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                                <span className="material-symbols-outlined">alternate_email</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold">Find Us</h4>
                        <div className="flex flex-col gap-4 text-white/60">
                            <div className="flex gap-3">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                <p>123 Oxford Street,<br />Manchester, M1 4EE</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="material-symbols-outlined text-primary">call</span>
                                <p>0161 555 0123</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold">Opening Hours</h4>
                        <div className="flex flex-col gap-2 text-white/60">
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span>Mon - Thu</span>
                                <span>11:00 - 23:00</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span>Fri - Sat</span>
                                <span>11:00 - 01:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Sunday</span>
                                <span>12:00 - 22:00</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold">Newsletter</h4>
                        <p className="text-white/60">Get exclusive deals and the latest menu updates.</p>
                        <div className="flex flex-col gap-3">
                            <input className="bg-white/5 border-none rounded-full px-6 py-3 focus:ring-2 focus:ring-primary text-sm" placeholder="Your email address" type="email" />
                            <button className="bg-primary text-white font-bold py-3 rounded-full hover:bg-primary/90 transition-colors">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center py-8 text-white/40 text-sm gap-4">
                    <p>© 2024 MPR Foods UK. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <Link className="hover:text-white" href="/privacy">Privacy Policy</Link>
                        <Link className="hover:text-white" href="/terms">Terms of Service</Link>
                        <Link className="hover:text-white" href="/cookies">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
