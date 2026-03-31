import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Star, ShoppingCart, ArrowUpDown, ChevronRight, Zap } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Gear");
  const [sortBy, setSortBy] = useState("featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All Gear" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      return 0;
    });
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-surface-container-lowest pb-32">
      {/* Shop Hero */}
      <section className="relative h-[40vh] bg-slate-900 flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAeaHajFtbc71ZhmvxINiv2uO70chG11VjZMoqhIeyD6QcpAsLGyCNLNrCRqOSrKwA-8bNostEVSww5kxTL8jrW0uHIhvEcsbp6KVsvILW_xiX8l_Bxy8W0_O0gqGlDIfVItmo7312DUWqJBrnYKa1r_eWxmyscIy_4OX-mTQnebmzn6bfBSmf2HCj9Op8ItyOHyUQIjes32GN8lxEBmN9opBVNkt0OnI4a7KfRo6tdOh6VTW7VkrytLONWkQgxS6sPpquRWuMfU" className="w-full h-full object-cover" alt="Shop Hero" />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-black font-headline text-white tracking-tighter uppercase leading-none">
              The <span className="text-primary italic">Pro</span> Shop
            </h1>
            <p className="text-slate-300 font-medium text-lg">
              Curated equipment for every level of play. From casual rallies to championship matches.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 -mt-12 relative z-20">
        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by model, tech, or category..." 
              className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-primary font-bold text-slate-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={cn(
                "flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold transition-all",
                isFilterOpen ? "bg-primary text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              <SlidersHorizontal size={20} />
              Filters
            </button>
            <div className="relative flex-1 md:flex-none">
              <select 
                className="w-full appearance-none bg-slate-100 text-slate-600 px-6 py-4 pr-12 rounded-2xl font-bold border-none focus:ring-2 focus:ring-primary cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ArrowUpDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
            </div>
          </div>
        </div>

        {/* Categories Quick Filter */}
        <div className="flex gap-3 overflow-x-auto py-8 no-scrollbar">
          {["All Gear", ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest whitespace-nowrap transition-all",
                selectedCategory === cat 
                  ? "bg-slate-900 text-white shadow-lg scale-105" 
                  : "bg-white text-slate-500 border border-slate-200 hover:border-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                className="group card-kinetic p-6"
              >
                <div className="relative aspect-square mb-6 overflow-hidden rounded-3xl bg-slate-50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                      {product.category}
                    </div>
                    {product.tag && (
                      <div className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {product.tag}
                      </div>
                    )}
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-primary transition-colors shadow-sm">
                    <Zap size={18} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-tertiary">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-bold">{product.rating || "4.5"}</span>
                      <span className="text-slate-400 text-xs font-medium">({product.reviewsCount || "120"})</span>
                    </div>
                    <h3 className="font-headline font-black text-xl leading-tight group-hover:text-primary transition-colors h-14 flex items-center">
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-2xl font-black text-slate-900">${product.price}</p>
                    <button 
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-primary transition-all group/btn shadow-lg"
                    >
                      <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-32 space-y-6">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
              <Search size={48} className="text-slate-300" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black font-headline">No gear found</h2>
              <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
            <button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Gear");
              }}
              className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-container transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
