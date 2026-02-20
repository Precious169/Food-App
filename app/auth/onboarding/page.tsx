"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const steps = [
    {
        title: "Your Favorites",
        subtitle: "What do you crave the most?",
        options: ["Signature Chicken", "Spicy Burgers", "Crispy Wraps", "Fresh Salads"],
    },
    {
        title: "Spicy Level",
        subtitle: "How much heat can you handle?",
        options: ["Mild", "Medium", "Extra Hot", "Ghost Pepper"],
    }
];

export default function OnboardingPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [selections, setSelections] = useState<string[]>([]);

    const handleNext = (option: string) => {
        const nextSelections = [...selections, option];
        setSelections(nextSelections);

        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Save preferences and go to dashboard
            const user = JSON.parse(sessionStorage.getItem("user") || "{}");
            sessionStorage.setItem("user", JSON.stringify({ ...user, preferences: nextSelections }));
            router.push("/dashboard");
        }
    };

    return (
        <div className="bg-white/90 dark:bg-[#2d1a1c]/90 backdrop-blur-xl border border-white/20 p-10 rounded-[3rem] shadow-2xl text-center">
            <div className="mb-8">
                <div className="flex justify-center gap-2 mb-6">
                    {steps.map((_, i) => (
                        <div key={i} className={`h-1.5 w-12 rounded-full transition-all ${i <= currentStep ? "bg-primary" : "bg-[#e5dcdd] dark:bg-[#3d2a2d]"}`}></div>
                    ))}
                </div>
                <h1 className="text-4xl font-black mb-2 text-[#181112] dark:text-white">{steps[currentStep].title}</h1>
                <p className="text-[#886369] dark:text-[#a88d91]">{steps[currentStep].subtitle}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {steps[currentStep].options.map((option) => (
                    <button
                        key={option}
                        onClick={() => handleNext(option)}
                        className="h-24 bg-white dark:bg-[#1a0d0f] border-2 border-[#e5dcdd] dark:border-[#3d2a2d] rounded-2xl p-4 font-bold hover:border-primary hover:bg-primary/5 transition-all text-sm md:text-base flex items-center justify-center text-[#181112] dark:text-white"
                    >
                        {option}
                    </button>
                ))}
            </div>

            <button
                onClick={() => router.push("/dashboard")}
                className="mt-10 text-[#886369] dark:text-[#a88d91] font-bold hover:text-primary transition-colors"
            >
                Skip for now
            </button>
        </div>
    );
}
