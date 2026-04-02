import React from "react";
import { ArrowRight, Star, Zap, Shield, Truck, BarChart2, Target, Bolt, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { PRODUCTS } from "../constants";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export const Home = () => {
  const navigate = useNavigate();
  const featuredProducts = PRODUCTS.slice(0, 4);
  const topDeals = PRODUCTS.slice(4, 7);

  return (
    <div className="space-y-16 pb-20 overflow-x-hidden">
      {/* Hero Section - Asymmetric Layout */}
      <section className="relative h-[85vh] flex items-center px-6 md:px-12 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[70%] h-full bg-primary/20 skew-x-[-15deg] translate-x-20" />
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5 }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsr5lfhEdVu5kYfvnwiDmH-1gU-335qF_ZHgs62bnW0B-PDsYNkXs8yCvWjukdcgHCj4OMRGq3mSWzv_K5yWibd9oWK7RAzE_-x_VJ7vBIu7mmNulKj5VAz4heY4tLBRCAbWydcP2A4ByowYkWqnZ4GwVh5o3F_3HliWxKtUOUQR9ceWerOJwKL5BK8YyFhTKk7D72DHFQ9LiWevigvyk41kPYZI5rxSOhwQ-f1tUg17dt7ylfV81nBNhOc_YR84sqvHPzEO63Weo" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-screen-xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-2 rounded-full">
              <Zap size={16} className="text-primary" />
              <span className="text-primary font-black text-xs uppercase tracking-widest">New Season Arrival</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black font-headline text-white leading-[0.8] tracking-tighter uppercase">
              Smash the <br />
              <span className="text-primary text-glow drop-shadow-2xl">Limits</span>
            </h1>
            <p className="text-slate-200 text-lg md:text-xl max-w-md font-medium leading-relaxed drop-shadow-md">
              Engineered for the elite. Experience the next generation of aerodynamic performance with the Kinetic Series.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate("/shop")}
                className="btn-kinetic"
              >
                Shop Collection <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => navigate("/racket-finder")}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all"
              >
                Find Your Racket
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-screen-xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Pro Athletes", value: "500+", icon: Star },
          { label: "Countries", value: "45+", icon: Target },
          { label: "Tech Patents", value: "120+", icon: Zap },
          { label: "Warranty", value: "2 Years", icon: Shield },
        ].map((stat, idx) => (
          <div key={idx} className="card-kinetic flex flex-col items-center text-center space-y-4 group">
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-3xl font-black font-headline tracking-tight">{stat.value}</p>
              <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Racket Finder Banner */}
      <section className="max-w-screen-xl mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="space-y-6 relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black font-headline text-white leading-none tracking-tighter uppercase">
              Not sure which <br /> racket to choose?
            </h2>
            <p className="text-white/80 font-medium text-lg max-w-md">
              Take our 30-second quiz and find the perfect gear for your unique playstyle.
            </p>
            <button 
              onClick={() => navigate("/racket-finder")}
              className="btn-kinetic bg-white text-primary hover:text-white"
            >
              Start Racket Finder
            </button>
          </div>
          <div className="relative z-10 w-full max-w-sm">
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-8 rounded-[2.5rem] rotate-3 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary">
                  <Zap size={24} />
                </div>
                <span className="text-white font-black uppercase tracking-widest text-sm">AI Recommendation</span>
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-white/20 rounded-full w-3/4" />
                <div className="h-4 bg-white/20 rounded-full w-full" />
                <div className="h-4 bg-white/20 rounded-full w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-[3rem] p-12 flex flex-col justify-between items-start space-y-8 group overflow-hidden relative kinetic-border">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
          <BarChart2 size={48} className="text-primary" />
          <div className="space-y-4 relative z-10">
            <h3 className="text-3xl font-black font-headline text-white uppercase tracking-tighter">Side-by-Side Comparison</h3>
            <p className="text-slate-400 font-medium">Analyze technical specs and performance metrics of up to 3 products at once.</p>
          </div>
          <button 
            onClick={() => navigate("/comparison")}
            className="btn-kinetic bg-white text-slate-900 hover:text-white"
          >
            Open Comparison Tool
          </button>
        </div>

        <div className="bg-surface-container-low rounded-[3rem] p-12 flex flex-col justify-between items-start space-y-8 group overflow-hidden relative border border-slate-200 kinetic-border">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-tertiary/10 blur-[80px] rounded-full translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
          <Truck size={48} className="text-tertiary" />
          <div className="space-y-4 relative z-10">
            <h3 className="text-3xl font-black font-headline uppercase tracking-tighter">Global Express Shipping</h3>
            <p className="text-slate-500 font-medium">Free express delivery on all orders over $200. Track your gear in real-time.</p>
          </div>
          <button 
            onClick={() => navigate("/shop")}
            className="btn-kinetic bg-slate-900"
          >
            Start Shopping
          </button>
        </div>
      </section>

      {/* New Arrivals - Horizontal Scroll */}
      <section className="space-y-8">
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-end">
          <div className="space-y-2">
            <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">The Collection</span>
            <h2 className="text-5xl font-black font-headline tracking-tighter uppercase">New Arrivals</h2>
          </div>
          <Link to="/shop" className="text-slate-900 font-black flex items-center gap-2 hover:text-primary transition-colors group">
            View All <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="flex gap-8 overflow-x-auto px-6 md:px-12 pb-12 no-scrollbar scroll-smooth">
          {featuredProducts.map((product) => (
            <motion.div 
              key={product.id} 
              whileHover={{ y: -10 }}
              className="min-w-[320px] card-kinetic group"
            >
              <div className="relative aspect-square mb-6 overflow-hidden rounded-3xl bg-slate-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {product.category}
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-headline font-black text-xl leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{product.category}</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-black/5">
                  <p className="text-tertiary font-black text-2xl">${product.price}</p>
                  <button 
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center hover:bg-primary transition-all"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAB */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-xl flex items-center justify-center active:scale-95 transition-transform z-40">
        <MessageCircle size={24} />
      </button>
    </div>
  );
};
