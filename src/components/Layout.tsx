import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, Receipt, User, Menu, ShoppingCart, BarChart2, Zap, Heart } from "lucide-react";
import { cn } from "../lib/utils";

export const BottomNav = () => {
  const location = useLocation();
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: ShoppingBag, label: "Shop", path: "/shop" },
    { icon: BarChart2, label: "Compare", path: "/comparison" },
    { icon: Zap, label: "Finder", path: "/racket-finder" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  // Hide bottom nav on checkout and auth pages
  const hideNav = ["/checkout", "/login"].includes(location.pathname);
  if (hideNav) return null;

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe bg-white/90 backdrop-blur-md z-50 rounded-t-xl border-t border-slate-200/80 shadow-[0_-8px_24px_rgba(0,57,168,0.06)] md:hidden">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center py-2 px-4 transition-all duration-300 ease-out",
              isActive 
                ? "bg-primary text-white rounded-lg scale-105 shadow-md shadow-primary/25" 
                : "text-slate-500 hover:text-primary"
            )}
          >
            <item.icon size={22} strokeWidth={2.25} className={isActive ? "opacity-100" : "opacity-90"} />
            <span className="font-manrope text-[10px] uppercase tracking-widest mt-1 font-bold">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export const Header = () => {
  const location = useLocation();
  const isDetail = location.pathname.startsWith("/product/");
  const isCheckout = location.pathname === "/checkout";
  const isAuth = location.pathname === "/login";

  if (isAuth) return null;

  return (
    <header className="fixed top-0 w-full z-50 border-b border-slate-200/70 bg-background/90 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-screen-xl mx-auto">
        <div className="flex items-center gap-4">
          <button className="text-slate-600 p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Menu size={24} />
          </button>
          <Link to="/" className="text-2xl font-black italic tracking-tighter text-primary font-headline">
            KINETIC
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-slate-600 hover:text-primary font-bold font-headline transition-colors">Home</Link>
          <Link to="/shop" className="text-slate-600 hover:text-primary font-bold font-headline transition-colors">Shop</Link>
          <Link to="/comparison" className="text-slate-600 hover:text-primary font-bold font-headline transition-colors">Compare</Link>
          <Link to="/racket-finder" className="text-slate-600 hover:text-primary font-bold font-headline transition-colors">Finder</Link>
          <Link to="/profile" className="text-slate-600 hover:text-primary font-bold font-headline transition-colors">Profile</Link>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/wishlist" className="text-slate-600 p-2 hover:bg-slate-100 rounded-full transition-colors relative">
            <Heart size={24} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </Link>
          <Link to="/checkout" className="text-slate-600 p-2 hover:bg-slate-100 rounded-full transition-colors relative">
            <ShoppingCart size={24} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-tertiary rounded-full"></span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 pb-24 md:pb-0">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};
