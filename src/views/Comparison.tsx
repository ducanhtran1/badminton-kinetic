"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X, Plus, ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/constants";

export const Comparison = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const router = useRouter();

  const selectedProducts = PRODUCTS.filter(p => selectedIds.includes(p.id));

  const toggleProduct = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else if (selectedIds.length < 3) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6 pb-32">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-black font-headline tracking-tighter uppercase">Gear Comparison</h1>
            <p className="text-slate-500 font-medium">Side-by-side technical analysis of your top choices.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {selectedProducts.map(p => (
                <img key={p.id} src={p.image} className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-lg" alt={p.name} />
              ))}
            </div>
            <span className="text-sm font-black text-primary">{selectedIds.length}/3 Selected</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Spec Labels */}
          <div className="hidden md:flex flex-col gap-12 pt-[300px]">
            <div className="h-12 flex items-center font-black text-xs uppercase tracking-widest text-slate-400">Technical Specs</div>
            <div className="space-y-12">
              <div className="h-12 flex items-center font-bold text-slate-600">Weight Class</div>
              <div className="h-12 flex items-center font-bold text-slate-600">Balance Point</div>
              <div className="h-12 flex items-center font-bold text-slate-600">Shaft Stiffness</div>
              <div className="h-12 flex items-center font-bold text-slate-600">Max Tension</div>
            </div>
            <div className="h-12 flex items-center font-black text-xs uppercase tracking-widest text-slate-400">Performance Metrics</div>
            <div className="space-y-12">
              <div className="h-12 flex items-center font-bold text-slate-600">Repulsion Power</div>
              <div className="h-12 flex items-center font-bold text-slate-600">Control Precision</div>
              <div className="h-12 flex items-center font-bold text-slate-600">Swing Speed</div>
            </div>
          </div>

          {/* Comparison Cards */}
          {selectedIds.map(id => {
            const product = PRODUCTS.find(p => p.id === id)!;
            return (
              <motion.div 
                key={id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[2.5rem] p-8 shadow-xl relative group overflow-hidden"
              >
                <button 
                  onClick={() => toggleProduct(id)}
                  className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-red-500 hover:text-white transition-all z-10"
                >
                  <X size={16} />
                </button>

                <div className="space-y-8">
                  <div className="space-y-4 text-center">
                    <img src={product.image} className="w-full aspect-square object-cover rounded-3xl shadow-lg group-hover:scale-105 transition-transform duration-500" alt={product.name} />
                    <h3 className="font-headline font-black text-xl leading-tight h-14 flex items-center justify-center">{product.name}</h3>
                    <p className="text-primary font-black text-2xl">${product.price}</p>
                  </div>

                  <div className="md:hidden font-black text-xs uppercase tracking-widest text-slate-400 text-center">Technical Specs</div>
                  
                  <div className="space-y-12">
                    {product.specs?.map((spec, idx) => (
                      <div key={idx} className="h-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1">
                        <span className="md:hidden text-[10px] font-bold text-slate-400 uppercase">{spec.label}</span>
                        <span className="font-black text-lg text-slate-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="md:hidden font-black text-xs uppercase tracking-widest text-slate-400 text-center">Performance Metrics</div>

                  <div className="space-y-12">
                    {product.performance?.map((perf, idx) => (
                      <div key={idx} className="h-12 flex flex-col items-center justify-center gap-2">
                        <div className="flex items-center justify-between w-full px-2">
                          <span className="md:hidden text-[10px] font-bold text-slate-400 uppercase">{perf.label}</span>
                          <span className="font-black text-primary">{perf.value}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${perf.value}%` }}
                            className="h-full bg-primary"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => router.push(`/product/${product.id}`)}
                    className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 group/btn"
                  >
                    View Details
                    <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}

          {/* Add Placeholder */}
          {selectedIds.length < 3 && (
            <button 
              onClick={() => setIsAdding(true)}
              className="border-4 border-dashed border-slate-200 rounded-[2.5rem] p-8 flex flex-col items-center justify-center gap-4 hover:border-primary hover:bg-primary/5 transition-all group min-h-[600px]"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Plus size={32} />
              </div>
              <span className="font-black text-slate-400 group-hover:text-primary uppercase tracking-widest text-sm">Add Gear to Compare</span>
            </button>
          )}
        </div>
      </div>

      {/* Selection Modal */}
      <AnimatePresence>
        {isAdding && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col max-h-[80vh]"
            >
              <div className="p-8 border-b flex items-center justify-between bg-surface-container-low">
                <h2 className="text-2xl font-black font-headline">Select Gear</h2>
                <button onClick={() => setIsAdding(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X />
                </button>
              </div>
              <div className="p-8 overflow-y-auto grid grid-cols-2 md:grid-cols-3 gap-6">
                {PRODUCTS.filter(p => !selectedIds.includes(p.id)).map(product => (
                  <button 
                    key={product.id}
                    onClick={() => {
                      toggleProduct(product.id);
                      setIsAdding(false);
                    }}
                    className="p-4 rounded-3xl hover:bg-slate-50 transition-all text-left space-y-4 group"
                  >
                    <img src={product.image} className="w-full aspect-square object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform" alt={product.name} />
                    <div>
                      <h4 className="font-bold leading-tight">{product.name}</h4>
                      <p className="text-primary font-black">${product.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
