import React from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Bolt, Truck, ShieldCheck, ArrowUpRight, ChevronLeft, ChevronRight, ShoppingCart, Heart } from "lucide-react";
import { motion } from "motion/react";
import { PRODUCTS, REVIEWS } from "../constants";
import { cn } from "../lib/utils";

export const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  return (
    <div className="pb-24 max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mt-8">
        {/* Asymmetric Image Carousel Section */}
        <div className="md:col-span-7 lg:col-span-8 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square bg-white shadow-sm"
          >
            <img className="w-full h-full object-cover" src={product.image} alt={product.name} />
            <div className="absolute top-6 left-6 flex flex-col gap-3">
              <span className="bg-tertiary text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Limited Edition</span>
              <span className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">New Arrival</span>
            </div>
          </motion.div>
          
          {/* Thumbnail Strip */}
          <div className="flex gap-4 mt-6 overflow-x-auto no-scrollbar pb-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={cn(
                "min-w-[80px] h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer",
                i === 1 ? "border-primary ring-2 ring-primary/20" : "border-transparent opacity-60 hover:opacity-100"
              )}>
                <img className="w-full h-full object-cover" src={product.image} alt={`Thumbnail ${i}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info & Spec Details */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-primary font-bold text-sm tracking-widest uppercase font-label mb-1">Elite Series</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold font-headline leading-none text-on-surface tracking-tighter">
              {product.name}
            </h2>
          </motion.div>

          <div className="flex items-center gap-2 mt-4">
            <div className="flex text-tertiary">
              {[1, 2, 3, 4].map((i) => <Star key={i} size={16} fill="currentColor" />)}
              <Star size={16} />
            </div>
            <span className="text-on-surface-variant text-sm font-medium">({product.reviewsCount} Reviews)</span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-3xl font-black font-headline text-on-surface">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-on-surface-variant line-through text-lg font-medium">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>

          <p className="mt-6 text-on-surface-variant leading-relaxed">
            {product.description}
          </p>

          {/* Technical Specs Bento */}
          <div className="grid grid-cols-2 gap-3 mt-8">
            {product.specs?.map((spec) => (
              <div key={spec.label} className="card-kinetic p-4 rounded-2xl flex flex-col border-none bg-surface-container-low shadow-none hover:shadow-md">
                <span className="text-[10px] text-outline font-bold uppercase tracking-widest mb-1">{spec.label}</span>
                <span className="text-lg font-bold font-headline">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Performance Bars */}
          <div className="mt-8 space-y-4">
            {product.performance?.map((perf) => (
              <div key={perf.label} className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                  <span>{perf.label}</span>
                  <span className="text-primary">{perf.value / 10}</span>
                </div>
                <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${perf.value}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary" 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-10 flex flex-col gap-3">
            <button className="btn-kinetic w-full py-5 rounded-full">
              <span>ADD TO CART</span>
              <Bolt size={20} />
            </button>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant">
                <Truck size={14} />
                <span>FREE DELIVERY</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant">
                <ShieldCheck size={14} />
                <span>1YR WARRANTY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Deep Dive Section */}
      <section className="mt-24">
        <h3 className="text-3xl font-black font-headline tracking-tighter mb-12 border-l-4 border-primary pl-6">THE PHYSICS OF POWER</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "AERO-CORE Frame", desc: "Integrated carbon fiber structure that slices through air with zero flutter for ultra-stable hits.", icon: "cyclone" },
            { title: "NANOMETRIC Beta", desc: "High-elasticity material used in aerospace, providing unmatched snapback velocity.", icon: "layers" },
            { title: "ISOMETRIC Head", desc: "7% larger sweet spot ensures maximum energy transfer even on off-center smashes.", icon: "target" }
          ].map((tech) => (
            <div key={tech.title} className="card-kinetic p-8 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl">{tech.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-3 font-headline">{tech.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* User Reviews */}
      <section className="mt-24">
        <div className="flex justify-between items-end mb-8 px-2">
          <div>
            <h3 className="text-3xl font-black font-headline tracking-tighter leading-none">ELITE FEEDBACK</h3>
            <p className="text-on-surface-variant text-sm mt-2">Validated performance from the community</p>
          </div>
          <button className="text-primary font-bold text-sm underline flex items-center gap-1">
            SEE ALL <ArrowUpRight size={14} />
          </button>
        </div>
        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x px-2">
          {REVIEWS.map((review) => (
            <div key={review.id} className="min-w-[320px] md:min-w-[400px] card-kinetic p-8 snap-start">
              <div className="flex gap-1 text-tertiary mb-4">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <p className="font-bold italic text-lg mb-6 leading-tight">"{review.comment}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center font-bold text-primary">{review.avatar}</div>
                <div>
                  <p className="font-bold text-sm">{review.author}</p>
                  <p className="text-[10px] uppercase text-outline font-bold tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
