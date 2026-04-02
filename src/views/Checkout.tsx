"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, X, Trash2, Minus, Plus, CreditCard, Wallet, Shield, Bolt, Rocket, ShieldCheck, Leaf } from "lucide-react";
import { motion } from "motion/react";
import { PRODUCTS } from "@/constants";

export const Checkout = () => {
  const router = useRouter();
  const cartItems = [
    { ...PRODUCTS[0], quantity: 1 },
    { ...PRODUCTS[5], quantity: 2 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="pb-32 min-h-screen bg-background">
      {/* Top Navigation Anchor */}
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-slate-200/70 h-16 flex items-center px-6">
        <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
          <button 
            onClick={() => router.back()}
            className="p-2 -ml-2 hover:bg-blue-50 transition-colors rounded-full active:scale-95 duration-150"
          >
            <ArrowLeft size={24} className="text-slate-600" />
          </button>
          <h1 className="text-2xl font-black italic tracking-tighter text-primary font-headline uppercase">KINETIC</h1>
          <button 
            onClick={() => router.push("/")}
            className="p-2 -mr-2 hover:bg-blue-50 transition-colors rounded-full active:scale-95 duration-150"
          >
            <X size={24} className="text-slate-600" />
          </button>
        </div>
      </header>

      <main className="mt-20 px-4 space-y-10 max-w-screen-md mx-auto pb-4">
        {/* Progress Stepper */}
        <section className="flex justify-between items-center px-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs ring-4 ring-primary/10">1</div>
            <span className="text-[10px] font-label font-bold uppercase tracking-widest text-primary">Cart</span>
          </div>
          <div className="h-[2px] flex-grow bg-primary mx-2 rounded-full"></div>
          <div className="flex flex-col items-center gap-2 opacity-50">
            <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-xs">2</div>
            <span className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Shipping</span>
          </div>
          <div className="h-[2px] flex-grow bg-surface-container-high mx-2 rounded-full"></div>
          <div className="flex flex-col items-center gap-2 opacity-50">
            <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-xs">3</div>
            <span className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Payment</span>
          </div>
        </section>

        {/* Cart Summary Section */}
        <section className="space-y-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[var(--shadow-card)]">
          <div className="flex items-end justify-between px-0">
            <h2 className="font-headline text-2xl font-black tracking-tight text-on-surface">Your Gear</h2>
            <span className="font-label text-xs font-bold text-primary bg-primary/12 px-3 py-1.5 rounded-lg uppercase tracking-wider">3 Items</span>
          </div>

          <div className="space-y-3">
            {cartItems.map((item) => (
              <motion.div 
                layout
                key={item.id}
                className="bg-surface-container-low/60 p-4 rounded-xl flex gap-4 border border-slate-200/70 group"
              >
                <div className="w-24 h-24 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={item.image} alt={item.name} />
                </div>
                <div className="flex flex-col justify-between flex-grow py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-on-surface leading-tight tracking-tight">{item.name}</h3>
                      <button className="text-outline hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="text-xs text-on-surface-variant/75 font-medium mt-1 uppercase tracking-wider">{item.category}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center bg-surface-container-low rounded-lg p-1">
                      <button className="w-6 h-6 flex items-center justify-center text-primary hover:bg-white rounded transition-colors"><Minus size={14} /></button>
                      <span className="px-3 text-sm font-bold">{item.quantity}</span>
                      <button className="w-6 h-6 flex items-center justify-center text-primary hover:bg-white rounded transition-colors"><Plus size={14} /></button>
                    </div>
                    <span className="font-headline font-black text-lg text-tertiary tabular-nums">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Checkout Form Section */}
        <section className="space-y-6 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[var(--shadow-card)]">
          <h2 className="font-headline text-xl font-black tracking-tight text-on-surface">Shipping Details</h2>
          <div className="space-y-4">
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] font-bold text-primary uppercase tracking-widest">Full Name</label>
              <input className="w-full bg-surface-container-low border-none border-b-2 border-primary rounded-lg px-4 py-4 text-sm font-medium focus:ring-0 focus:border-primary transition-all" type="text" defaultValue="Alex Rivera" />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Shipping Address</label>
              <input className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary rounded-lg px-4 py-4 text-sm font-medium focus:ring-0 transition-all" placeholder="123 Velocity Lane" type="text" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">City</label>
                <input className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary rounded-lg px-4 py-4 text-sm font-medium focus:ring-0 transition-all" placeholder="Portland" type="text" />
              </div>
              <div className="relative">
                <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Zip Code</label>
                <input className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary rounded-lg px-4 py-4 text-sm font-medium focus:ring-0 transition-all" placeholder="97201" type="text" />
              </div>
            </div>
          </div>
        </section>

        {/* Payment Selection */}
        <section className="space-y-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[var(--shadow-card)]">
          <h2 className="font-headline text-xl font-black tracking-tight text-on-surface">Payment Method</h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border-2 border-primary ring-4 ring-primary/5 transition-all">
              <CreditCard size={24} className="text-primary mb-2" />
              <span className="text-xs font-bold uppercase tracking-widest">Card</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-container-low border-2 border-transparent hover:bg-surface-container-high transition-all">
              <Wallet size={24} className="text-on-surface-variant mb-2" />
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Wallet</span>
            </button>
          </div>
          
          <div className="bg-surface-container-low p-4 rounded-xl space-y-4">
            <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-3">
              <CreditCard size={20} className="text-blue-600" />
              <span className="text-sm font-bold">•••• •••• •••• 4242</span>
              <button className="ml-auto text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">Change</button>
            </div>
            <div className="flex justify-between text-xs font-medium text-on-surface-variant">
              <span>Expires 12/26</span>
              <span>CVC •••</span>
            </div>
          </div>
        </section>

        {/* Order Summary */}
        <section className="bg-surface-container-high/90 border border-slate-200/80 p-6 rounded-2xl space-y-4">
          <h3 className="font-headline font-bold uppercase tracking-wider text-xs text-on-surface-variant/80">Order recap</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant">Subtotal</span>
              <span className="font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant">Shipping (Express)</span>
              <span className="font-bold text-primary">FREE</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant">Estimated Tax</span>
              <span className="font-bold">${tax.toFixed(2)}</span>
            </div>
            <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center">
              <span className="font-headline font-bold text-lg">Total</span>
              <div className="text-right">
                <span className="font-headline font-black text-2xl text-tertiary tabular-nums">${total.toFixed(2)}</span>
                <p className="text-[10px] text-on-surface-variant/65 font-medium uppercase tracking-wide">USD incl. estimated tax · saved securely at checkout</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Action Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-background/95 backdrop-blur-md z-50 p-4 pb-8 border-t border-slate-200/80 rounded-t-xl shadow-[0_-8px_28px_rgba(0,57,168,0.08)]">
        <div className="max-w-screen-md mx-auto space-y-4">
          <div className="flex items-center gap-2 px-2">
            <ShieldCheck size={16} className="text-primary shrink-0" />
            <span className="text-[10px] font-label font-semibold uppercase tracking-widest text-on-surface-variant/75">Secure AES-256 encrypted checkout</span>
          </div>
          <button type="button" className="btn-kinetic w-full py-6 text-base md:text-lg min-h-[56px] group">
            COMPLETE ORDER
            <Bolt size={22} strokeWidth={2.25} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex justify-center items-center gap-8 opacity-40 grayscale">
            <Rocket size={24} />
            <Shield size={24} />
            <Leaf size={24} />
          </div>
        </div>
      </footer>
    </div>
  );
};
