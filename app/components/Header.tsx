import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5dcdd] dark:border-[#3d2a2d] px-10 py-4 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
            <div className="flex items-center gap-12">
                <div className="flex items-center gap-3 text-primary">
                    <div className="size-8">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-primary text-2xl font-black leading-tight tracking-tight uppercase">MPR Foods</h2>
                </div>
                <nav className="hidden lg:flex items-center gap-8">
                    <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/">Home</Link>
                    <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/menu">Menu</Link>
                    <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/deals">Deals</Link>
                    <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/location">Locations</Link>
                    <Link className="text-[#181112] dark:text-white text-sm font-semibold hover:text-primary transition-colors" href="/contact">Contact Us</Link>
                </nav>
            </div>
            <div className="flex flex-1 justify-end gap-6 items-center">
                <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
                    <div className="flex w-full flex-1 items-stretch rounded-full h-full">
                        <div className="text-[#886369] flex border-none bg-white dark:bg-[#2d1a1c] items-center justify-center pl-4 rounded-l-full">
                            <span className="material-symbols-outlined text-xl">search</span>
                        </div>
                        <input className="form-input flex w-full min-w-0 flex-1 border-none bg-white dark:bg-[#2d1a1c] focus:ring-0 rounded-r-full text-[#181112] dark:text-white placeholder:text-[#886369] px-4 pl-2 text-sm" placeholder="Find your flavor..." />
                    </div>
                </label>
                <Link href="/auth/login" className="text-sm font-bold text-[#181112] dark:text-white hover:text-primary transition-colors">Log In</Link>
                <Link href="/auth/signup" className="flex items-center justify-center rounded-full h-10 px-6 bg-white dark:bg-[#2d1a1c] text-[#181112] dark:text-white border border-[#e5dcdd] dark:border-[#3d2a2d] text-sm font-bold hover:bg-background-light dark:hover:bg-background-dark transition-all">
                    Sign Up
                </Link>
            </div>
        </header>
    );
}
