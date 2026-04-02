"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Heart, ShoppingCart, Trash2, ChevronRight, ArrowLeft } from "lucide-react";
import { PRODUCTS } from "@/constants";

export const Wishlist = () => {
  const router = useRouter();
  // Mock wishlist data
  const wishlistItems = PRODUCTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-background p-6 pb-32">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => router.back()}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="space-y-1">
              <h1 className="text-4xl font-black font-headline tracking-tighter uppercase">My Wishlist</h1>
              <p className="text-slate-500 font-medium">{wishlistItems.length} items saved for later.</p>
            </div>
          </div>
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Heart size={32} className="text-primary fill-primary" />
          </div>
        </header>

        <div className="grid gap-6">
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-[2.5rem] shadow-xl flex flex-col md:flex-row items-center gap-8 group hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative w-full md:w-48 aspect-square overflow-hidden rounded-3xl shadow-lg">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {item.category}
                  </div>
                </div>

                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black font-headline tracking-tight leading-tight">{item.name}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <span className="text-primary font-black text-2xl">${item.price}</span>
                      <span className="text-slate-400 line-through text-sm font-bold">${item.price + 40}</span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm line-clamp-2 max-w-md">
                    Professional grade equipment designed for maximum performance and durability on the court.
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <button 
                    onClick={() => router.push(`/product/${item.id}`)}
                    className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary transition-all group/btn"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-slate-100 text-slate-500 px-8 py-4 rounded-2xl font-bold hover:bg-red-50 hover:text-red-500 transition-all">
                    <Trash2 size={18} />
                    Remove
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-32 space-y-6">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                <Heart size={48} className="text-slate-300" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-black font-headline">Your wishlist is empty</h2>
                <p className="text-slate-500">Explore our collection and save your favorite gear.</p>
              </div>
              <button 
                onClick={() => router.push("/shop")}
                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-container transition-all"
              >
                Go Shopping
              </button>
            </div>
          )}
        </div>

        {wishlistItems.length > 0 && (
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="space-y-4 relative z-10">
              <h2 className="text-3xl font-black font-headline leading-tight">Ready to upgrade your game?</h2>
              <p className="text-slate-400 font-medium max-w-md">Complete your purchase now and get free express shipping on your entire wishlist.</p>
            </div>
            <button 
              onClick={() => router.push("/checkout")}
              className="bg-primary text-white px-12 py-6 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-primary/20 relative z-10"
            >
              Checkout All Items
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
