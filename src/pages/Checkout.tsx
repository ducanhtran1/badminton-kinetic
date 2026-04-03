import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, X, Trash2, Minus, Plus, CreditCard, Wallet, Shield, Bolt, Rocket, ShieldCheck, Leaf } from "lucide-react";
import { motion } from "motion/react";
import { PRODUCTS } from "../constants";
import { cn } from "../lib/utils";

export const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = [
    { ...PRODUCTS[0], quantity: 1 },
    { ...PRODUCTS[5], quantity: 2 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="pb-32 bg-background">
      {/* Top Navigation Anchor */}
      <header className="fixed top-0 w-full z-50 bg-white shadow-sm h-16 flex items-center px-6">
        <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 hover:bg-blue-50 transition-colors rounded-full active:scale-95 duration-150"
          >
            <ArrowLeft size={24} className="text-slate-600" />
          </button>
          <h1 className="text-2xl font-black italic tracking-tighter text-primary font-headline uppercase">KINETIC</h1>
          <button 
            onClick={() => navigate("/")}
            className="p-2 -mr-2 hover:bg-blue-50 transition-colors rounded-full active:scale-95 duration-150"
          >
            <X size={24} className="text-slate-600" />
          </button>
        </div>
      </header>

      <main className="mt-20 px-4 space-y-10 max-w-screen-md mx-auto">
        {/* Progress Stepper */}
        <section className="flex justify-between items-center px-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm ring-4 ring-primary/10">1</div>
            <span className="text-[10px] font-label font-bold uppercase tracking-widest text-primary">Cart</span>
          </div>
          <div className="h-[2px] flex-grow bg-primary mx-2 rounded-full"></div>
          <div className="flex flex-col items-center gap-2 opacity-50">
            <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-sm">2</div>
            <span className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Shipping</span>
          </div>
          <div className="h-[2px] flex-grow bg-surface-container-high mx-2 rounded-full"></div>
          <div className="flex flex-col items-center gap-2 opacity-50">
            <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-sm">3</div>
            <span className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Payment</span>
          </div>
        </section>

        {/* Cart Summary Section */}
        <section className="space-y-4">
          <div className="flex items-end justify-between px-2">
            <h2 className="font-headline text-2xl font-black tracking-tight uppercase">Your Gear</h2>
            <span className="font-label text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">3 Items</span>
          </div>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <motion.div 
                layout
                key={item.id}
                className="card-kinetic p-4 flex gap-4"
              >
                <div className="w-24 h-24 bg-surface-container-low rounded-xl overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={item.image} alt={item.name} />
                </div>
                <div className="flex flex-col justify-between flex-grow py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-black text-on-surface leading-tight tracking-tight text-lg">{item.name}</h3>
                      <button className="text-outline hover:text-tertiary transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="text-[10px] text-on-surface-variant font-black mt-1 uppercase tracking-widest">{item.category}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center bg-surface-container-low rounded-lg p-1">
                      <button className="w-8 h-8 flex items-center justify-center text-primary hover:bg-white rounded-lg transition-colors"><Minus size={14} /></button>
                      <span className="px-4 text-sm font-black">{item.quantity}</span>
                      <button className="w-8 h-8 flex items-center justify-center text-primary hover:bg-white rounded-lg transition-colors"><Plus size={14} /></button>
                    </div>
                    <span className="font-headline font-black text-xl text-tertiary">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Checkout Form Section */}
        <section className="space-y-6">
          <h2 className="font-headline text-2xl font-black tracking-tight px-2 uppercase">Shipping Details</h2>
          <div className="card-kinetic space-y-6">
            <div className="relative">
              <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] font-black text-primary uppercase tracking-widest z-10">Full Name</label>
              <input className="w-full bg-surface-container-low border-2 border-transparent focus:border-primary rounded-xl px-4 py-4 text-sm font-bold focus:ring-0 transition-all outline-none" type="text" defaultValue="Alex Rivera" />
            </div>
            <div className="relative">
              <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] font-black text-on-surface-variant uppercase tracking-widest z-10">Shipping Address</label>
              <input className="w-full bg-surface-container-low border-2 border-transparent focus:border-primary rounded-xl px-4 py-4 text-sm font-bold focus:ring-0 transition-all outline-none" placeholder="123 Velocity Lane" type="text" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] font-black text-on-surface-variant uppercase tracking-widest z-10">City</label>
                <input className="w-full bg-surface-container-low border-2 border-transparent focus:border-primary rounded-xl px-4 py-4 text-sm font-bold focus:ring-0 transition-all outline-none" placeholder="Portland" type="text" />
              </div>
              <div className="relative">
                <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] font-black text-on-surface-variant uppercase tracking-widest z-10">Zip Code</label>
                <input className="w-full bg-surface-container-low border-2 border-transparent focus:border-primary rounded-xl px-4 py-4 text-sm font-bold focus:ring-0 transition-all outline-none" placeholder="97201" type="text" />
              </div>
            </div>
          </div>
        </section>

        {/* Payment Selection */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl font-black tracking-tight px-2 uppercase">Payment Method</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border-2 border-primary shadow-kinetic ring-4 ring-primary/5 transition-all">
              <CreditCard size={28} className="text-primary mb-2" />
              <span className="text-xs font-black uppercase tracking-widest">Card</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border-2 border-transparent hover:border-primary/20 transition-all shadow-soft">
              <Wallet size={28} className="text-on-surface-variant mb-2" />
              <span className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Wallet</span>
            </button>
          </div>
          
          <div className="card-kinetic space-y-4">
            <div className="flex items-center gap-4 border-b border-black/5 pb-4">
              <div className="w-12 h-8 bg-slate-100 rounded flex items-center justify-center">
                <CreditCard size={20} className="text-blue-600" />
              </div>
              <span className="text-sm font-black">•••• •••• •••• 4242</span>
              <button className="ml-auto text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Change</button>
            </div>
            <div className="flex justify-between text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
              <span>Expires 12/26</span>
              <span>CVC •••</span>
            </div>
          </div>
        </section>

        {/* Order Summary */}
        <section className="card-kinetic bg-slate-900 text-white space-y-6">
          <h3 className="font-headline font-black uppercase tracking-widest text-xs text-primary">Order Recap</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400 font-bold">Subtotal</span>
              <span className="font-black">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400 font-bold">Shipping (Express)</span>
              <span className="font-black text-primary">FREE</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400 font-bold">Estimated Tax</span>
              <span className="font-black">${tax.toFixed(2)}</span>
            </div>
            <div className="pt-6 border-t border-white/10 flex justify-between items-end">
              <span className="font-headline font-black text-xl uppercase italic">Total</span>
              <div className="text-right">
                <span className="font-headline font-black text-4xl text-primary text-glow">${total.toFixed(2)}</span>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-tighter">USD Inc. VAT</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Action Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl z-50 p-6 pb-10 shadow-[0_-20px_40px_rgba(0,55,163,0.1)] rounded-t-[2.5rem] border-t border-black/5">
        <div className="max-w-screen-md mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck size={18} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Secure AES-256 Encrypted Checkout</span>
          </div>
          <button className="btn-kinetic w-full py-6 text-xl tracking-tighter shadow-kinetic-hover">
            COMPLETE ORDER
            <Bolt size={24} className="animate-pulse" />
          </button>
        </div>
      </footer>
    </div>
  );
};
