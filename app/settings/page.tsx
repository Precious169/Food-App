"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import AppSidebar from "../components/AppSidebar";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [saved, setSaved] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        notifications: true,
        newsletter: false,
        darkMode: false,
    });

    useEffect(() => {
        const userData = sessionStorage.getItem("user");
        if (!userData) {
            router.push("/auth/login");
        } else {
            const parsed = JSON.parse(userData);
            setUser(parsed);
            setForm((f) => ({
                ...f,
                name: parsed.name || parsed.username || "",
                email: parsed.email || "",
            }));
        }
    }, [router]);

    const handleSave = () => {
        if (!user) return;
        const updated = { ...user, name: form.name, email: form.email };
        sessionStorage.setItem("user", JSON.stringify(updated));
        window.dispatchEvent(new Event("user-update"));
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    const handleLogout = () => {
        sessionStorage.removeItem("user");
        window.dispatchEvent(new Event("user-update"));
        router.push("/");
    };

    if (!user) return null;

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header />
            <AppSidebar username={user.name || user.username} email={user.email}>
                <main className="flex-1 p-6 md:p-10">
                    <h1 className="text-3xl font-black mb-2 text-[#181112] dark:text-white">Settings</h1>
                    <p className="text-[#886369] mb-10">Manage your account preferences and personal details.</p>

                    <div className="max-w-2xl flex flex-col gap-8">

                        {/* Profile Section */}
                        <div className="bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-3xl p-8">
                            <h2 className="text-xl font-black mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                                Profile Information
                            </h2>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-[#181112] dark:text-white">Display Name</label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="h-12 px-4 rounded-xl border border-[#e5dcdd] dark:border-[#3d2a2d] bg-background-light dark:bg-background-dark text-[#181112] dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-[#181112] dark:text-white">Email Address</label>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="h-12 px-4 rounded-xl border border-[#e5dcdd] dark:border-[#3d2a2d] bg-background-light dark:bg-background-dark text-[#181112] dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-[#181112] dark:text-white">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        className="h-12 px-4 rounded-xl border border-[#e5dcdd] dark:border-[#3d2a2d] bg-background-light dark:bg-background-dark text-[#181112] dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="+44 7700 000000"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Preferences */}
                        <div className="bg-white dark:bg-[#2d1a1c] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-3xl p-8">
                            <h2 className="text-xl font-black mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-secondary rounded-full"></span>
                                Preferences
                            </h2>
                            <div className="flex flex-col gap-4">
                                {[
                                    { key: "notifications", label: "Order Notifications", desc: "Get push notifications for order updates" },
                                    { key: "newsletter", label: "Email Newsletter", desc: "Receive deals and new menu items by email" },
                                    { key: "darkMode", label: "Dark Mode", desc: "Switch between light and dark interface" },
                                ].map(({ key, label, desc }) => (
                                    <div key={key} className="flex items-center justify-between p-4 rounded-2xl border border-[#e5dcdd] dark:border-[#3d2a2d]">
                                        <div>
                                            <p className="font-bold text-sm text-[#181112] dark:text-white">{label}</p>
                                            <p className="text-xs text-[#886369] mt-0.5">{desc}</p>
                                        </div>
                                        <button
                                            onClick={() => setForm((f) => ({ ...f, [key]: !f[key as keyof typeof f] }))}
                                            className={`relative w-12 h-6 rounded-full transition-all ${(form as any)[key] ? "bg-primary" : "bg-[#e5dcdd] dark:bg-[#3d2a2d]"}`}
                                        >
                                            <span
                                                className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${(form as any)[key] ? "left-7" : "left-1"}`}
                                            />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Save Button */}
                        <button
                            onClick={handleSave}
                            className={`w-full h-14 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 ${saved ? "bg-green-500 text-white" : "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"}`}
                        >
                            <span className="material-symbols-outlined">{saved ? "check_circle" : "save"}</span>
                            {saved ? "Saved Successfully!" : "Save Changes"}
                        </button>

                        {/* Danger Zone */}
                        <div className="bg-white dark:bg-[#2d1a1c] border border-red-200 dark:border-red-900/40 rounded-3xl p-8">
                            <h2 className="text-xl font-black mb-2 text-red-500 flex items-center gap-2">
                                <span className="material-symbols-outlined">warning</span>
                                Account Actions
                            </h2>
                            <p className="text-sm text-[#886369] mb-6">These actions affect your session and account.</p>
                            <button
                                onClick={handleLogout}
                                className="w-full h-12 rounded-xl border-2 border-red-500 text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined">logout</span>
                                Sign Out of Account
                            </button>
                        </div>
                    </div>
                </main>
            </AppSidebar>
        </div>
    );
}
