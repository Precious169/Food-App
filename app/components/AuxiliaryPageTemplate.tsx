"use client";
import Header from "./Header";
import Footer from "./Footer";

export default function AuxiliaryPage({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-background-light dark:bg-background-dark py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-black mb-8 text-[#181112] dark:text-white">{title}</h1>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-[#886369] dark:text-[#a88d91]">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
