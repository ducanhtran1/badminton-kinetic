"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, Bolt, Target, Zap, Trophy } from "lucide-react";
import { PRODUCTS } from "@/constants";

const steps = [
  {
    id: 1,
    question: "What is your primary playstyle?",
    options: [
      { label: "Offensive (Power Smashes)", value: "power", icon: Zap },
      { label: "Defensive (Control & Net)", value: "control", icon: Target },
      { label: "All-Round (Balanced)", value: "balanced", icon: Trophy }
    ]
  },
  {
    id: 2,
    question: "What is your skill level?",
    options: [
      { label: "Beginner", value: "beginner" },
      { label: "Intermediate", value: "intermediate" },
      { label: "Professional", value: "pro" }
    ]
  },
  {
    id: 3,
    question: "Preferred racket weight?",
    options: [
      { label: "Light (Easy handling)", value: "light" },
      { label: "Heavy (More power)", value: "heavy" },
      { label: "Standard", value: "standard" }
    ]
  }
];

export const RacketFinder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);
  const router = useRouter();

  const handleOptionSelect = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate result
      const recommended = PRODUCTS.find(p => p.category === "Rackets") || PRODUCTS[0];
      setResult(recommended);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-12">
      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-md space-y-8"
          >
            <div className="text-center space-y-2">
              <span className="text-primary font-bold text-xs tracking-widest uppercase">Step {currentStep + 1} of {steps.length}</span>
              <h2 className="text-3xl font-black font-headline tracking-tighter">{steps[currentStep].question}</h2>
            </div>

            <div className="grid gap-4">
              {steps[currentStep].options.map((option) => {
                const OptionIcon = "icon" in option ? option.icon : undefined;
                return (
                <button
                  key={option.value}
                  onClick={() => handleOptionSelect(option.value)}
                  className="group flex items-center justify-between p-6 bg-white rounded-2xl border-2 border-transparent hover:border-primary hover:shadow-xl transition-all text-left"
                >
                  <div className="flex items-center gap-4">
                    {OptionIcon ? <OptionIcon className="text-primary group-hover:scale-110 transition-transform" /> : null}
                    <span className="font-bold text-lg">{option.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </button>
                );
              })}
            </div>

            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex items-center gap-2 text-slate-500 font-bold text-sm mx-auto hover:text-primary transition-colors"
              >
                <ChevronLeft size={16} /> Back
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg bg-white p-8 rounded-[2.5rem] shadow-2xl text-center space-y-8"
          >
            <div className="space-y-2">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bolt size={40} className="text-primary" />
              </div>
              <h2 className="text-3xl font-black font-headline tracking-tighter">Your Perfect Match</h2>
              <p className="text-slate-500">Based on your playstyle, we recommend:</p>
            </div>

            <div className="bg-surface-container-low p-6 rounded-3xl flex items-center gap-6 text-left">
              <img src={result.image} alt={result.name} className="w-24 h-24 object-cover rounded-xl shadow-md" />
              <div>
                <h3 className="font-headline font-bold text-xl leading-tight">{result.name}</h3>
                <p className="text-primary font-black text-lg mt-1">${result.price}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => router.push(`/product/${result.id}`)}
                className="bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-container transition-colors"
              >
                View Details
              </button>
              <button 
                onClick={() => {
                  setResult(null);
                  setCurrentStep(0);
                  setAnswers([]);
                }}
                className="bg-surface-container-high text-on-surface py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
