"use client";

import React from "react";
import { Edit, Star, ArrowRight, ChevronLeft, ChevronRight, ShoppingBag, User, Bell, CreditCard, ChevronRight as ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";
import { PRODUCTS } from "@/constants";

export const Profile = () => {
  const recentOrders = [
    { ...PRODUCTS[0], date: "12 Oct", orderId: "KN-8921" },
    { ...PRODUCTS[5], date: "05 Oct", orderId: "KN-8755" },
  ];

  const savedGear = PRODUCTS.slice(8, 11).concat(PRODUCTS.slice(4, 6));

  return (
    <div className="pt-8 pb-32 px-4 md:px-8 max-w-screen-xl mx-auto">
      {/* Profile Header: The Asymmetric Hero */}
      <section className="relative mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          {/* Profile Image Break-out */}
          <div className="md:col-span-4 relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square bg-surface-container-high rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10"
            >
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw9avseDAlbR_mt54dS-JUMx4l6hG-q5w00TW2MrxH0hfB8_KX-AJywGJsfkcw7TeGksZaI6CdV5otdSoTaOGBfnEVBgrIazzMEC2kaPeI5n56Yn9MA9BgWq18UKXVNCE6Mg4LE3esueo73lUD6isHdf2OWiBdEftYXOtpECvOnIWwedkSfGuS-SAozlKJKvDoKbYt0WT58YLGa5SDdIbgTtVxRH3exlXQI-g--PViiYiANWSUBjp8l8EnN65KsMGA2cLLtEpQ4do" 
                alt="Profile" 
              />
            </motion.div>
            <button className="absolute -bottom-2 -right-2 bg-primary p-4 rounded-full shadow-lg z-20 active:scale-95 transition-transform cursor-pointer text-white">
              <Edit size={20} />
            </button>
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="md:col-span-8 mb-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-tertiary/10 px-4 py-1 rounded-full mb-4"
            >
              <Star size={14} className="text-tertiary" fill="currentColor" />
              <span className="text-xs font-bold tracking-widest uppercase text-tertiary font-label">Elite Member</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black font-headline tracking-tighter text-on-surface mb-2 leading-none"
            >
              MARCUS<br /><span className="text-primary">CHEN</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-on-surface-variant max-w-md font-medium text-lg"
            >
              Smashing boundaries since 2018. Offensive specialist currently ranked #12 in regional club league.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Bento Grid Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quick Stats Card */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-[var(--shadow-card)] md:col-span-1">
          <h3 className="font-headline font-bold text-sm tracking-widest uppercase mb-6 text-on-surface-variant/70">Performance Specs</h3>
          <div className="space-y-6">
            {[
              { label: "Repulsion Power", value: 94 },
              { label: "Control Accuracy", value: 88 },
              { label: "Swing Speed", value: 91 }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold">{stat.label}</span>
                  <span className="text-sm text-primary font-black">{stat.value}%</span>
                </div>
                <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-primary" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders List */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-[var(--shadow-card)] md:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline font-bold text-sm tracking-widest uppercase text-on-surface-variant/70">Order History</h3>
            <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
              View All <ArrowRight size={14} />
            </button>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors group cursor-pointer">
                <div className="w-16 h-16 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover" src={order.image} alt={order.name} />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold">{order.name}</h4>
                  <p className="text-xs text-on-surface-variant/75">Delivered {order.date} · Order #{order.orderId}</p>
                </div>
                <span className="font-black text-tertiary tabular-nums">${order.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Items */}
        <div className="md:col-span-3">
          <div className="flex justify-between items-center mb-6 px-2">
            <h3 className="font-headline font-bold text-sm tracking-widest uppercase text-on-surface-variant/70">Saved Gear</h3>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-white transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-white transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 -mx-2 px-2">
            {savedGear.map((item) => (
              <div key={item.id} className="min-w-[280px] bg-white p-5 rounded-2xl border border-slate-200/90 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow group flex-shrink-0 flex flex-col">
                <div className="aspect-[4/5] bg-surface rounded-xl mb-4 overflow-hidden relative ring-1 ring-slate-200/80">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={item.image} alt={item.name} />
                  {item.tag && (
                    <span className="absolute top-4 left-4 bg-tertiary text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-widest">
                      {item.tag}
                    </span>
                  )}
                </div>
                <h4 className="font-headline font-black text-lg leading-snug">{item.name}</h4>
                <p className="text-tertiary font-black text-xl tabular-nums mb-4">${item.price.toFixed(2)}</p>
                <button className="btn-kinetic w-full mt-auto py-4 text-xs">
                  <ShoppingBag size={18} strokeWidth={2.25} /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Settings & Preferences */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 bg-surface-container-low/80 border border-slate-200/70 p-8 rounded-2xl">
          <div>
            <h3 className="font-headline font-black text-2xl tracking-tight mb-8">Account Preferences</h3>
            <div className="space-y-2">
              {[
                { icon: User, title: "Personal Information", desc: "Update your height, weight and grip preference" },
                { icon: Bell, title: "Notification Center", desc: "Gear restocks and tournament alerts" },
                { icon: CreditCard, title: "Payment Methods", desc: "Apple Pay connected" }
              ].map((pref) => (
                <div key={pref.title} className="flex items-center justify-between p-4 bg-white rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <pref.icon size={20} className="text-primary" />
                    <div>
                      <p className="font-bold">{pref.title}</p>
                      <p className="text-xs text-on-surface-variant/75">{pref.desc}</p>
                    </div>
                  </div>
                  <ChevronRightIcon size={16} className="opacity-30" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-8 md:p-10 rounded-2xl text-white text-center bg-gradient-to-br from-tertiary via-[#9a3412] to-[#7c2d12] shadow-[0_20px_50px_-12px_rgba(194,65,12,0.45)] ring-1 ring-white/15">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Star size={32} fill="currentColor" strokeWidth={0} />
            </div>
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-white/80 mb-2">UPGRADE TO PRO</p>
            <h4 className="font-headline font-black text-2xl md:text-3xl mb-3 [text-shadow:0_2px_20px_rgba(0,0,0,0.25)]">Pro+ privileges</h4>
            <p className="text-white/85 text-sm mb-8 max-w-xs leading-relaxed">Pro restringing, early drops, and 15% off limited editions — highlighted in its own panel.</p>
            <ul className="text-left w-full max-w-xs space-y-2 mb-8 text-sm text-white/90">
              <li className="flex gap-2"><span className="text-amber-200 font-black">✓</span> Priority restringing</li>
              <li className="flex gap-2"><span className="text-amber-200 font-black">✓</span> Member-only releases</li>
              <li className="flex gap-2"><span className="text-amber-200 font-black">✓</span> 15% off select gear</li>
            </ul>
            <button className="bg-white text-tertiary px-8 py-4 rounded-xl font-black tracking-tight min-h-[52px] w-full max-w-xs hover:brightness-105 transition-all active:scale-[0.98] shadow-lg">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
