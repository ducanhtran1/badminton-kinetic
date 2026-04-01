import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bolt, Chrome, Apple } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Mobile: compact hero strip */}
      <div className="md:hidden relative h-44 w-full overflow-hidden bg-slate-900">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7n6G87-9SCwXOtQSiCg-kdoA0Lfl78WdOu7gzKdApE4VBaa3gwFIesWPD93OqBTKtDha16xIXmQIbnqLezQhBuFjTpWRqt9qwC_i-3FtcSz4xCqklJ8Ng6SV9s5INO46mJgSsVykhznPfuIqXV03JzyNTMTdHDb9h_kq2qCd-HkuYDu_HQspg06npD7oPYegY04xPRphxZeRMktJRBRMt-jW1HIGmc-0PX8K0c8BLyFWZ4laM8lSbzlnES9rAGHnWiSvtuH-OnSw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-slate-900/40 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <p className="font-headline font-black text-2xl text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.65)]">KINETIC</p>
          <p className="text-white/85 text-sm font-medium">Sign in to your locker</p>
        </div>
      </div>

      {/* Left Side: Aesthetic Imagery (Kinetic Branding) */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-primary items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Performance Badminton" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7n6G87-9SCwXOtQSiCg-kdoA0Lfl78WdOu7gzKdApE4VBaa3gwFIesWPD93OqBTKtDha16xIXmQIbnqLezQhBuFjTpWRqt9qwC_i-3FtcSz4xCqklJ8Ng6SV9s5INO46mJgSsVykhznPfuIqXV03JzyNTMTdHDb9h_kq2qCd-HkuYDu_HQspg06npD7oPYegY04xPRphxZeRMktJRBRMt-jW1HIGmc-0PX8K0c8BLyFWZ4laM8lSbzlnES9rAGHnWiSvtuH-OnSw" 
          />
        </div>
        <div className="relative z-10 p-12 text-white max-w-lg">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-headline text-6xl font-black italic tracking-tighter mb-6 leading-none"
          >
            KINETIC<br />PRECISION
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-light opacity-90 leading-relaxed mb-8"
          >
            Engineered for those who thrive in the speed of the court. Experience the aerodynamic edge of professional badminton gear.
          </motion.p>
          <div className="flex gap-4">
            <div className="w-12 h-1 bg-white/30 rounded-full"></div>
            <div className="w-12 h-1 bg-white rounded-full"></div>
            <div className="w-12 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>
        {/* Asymmetric Floating Element */}
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-primary-container rounded-full blur-[120px] opacity-40"></div>
      </div>

      {/* Right Side: Auth Forms */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-10 md:py-12">
        <div className="w-full max-w-md">
          {/* Logo for Mobile */}
          {/* Header */}
          <div className="mb-10 text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface mb-2">Welcome Back</h2>
            <p className="text-on-surface-variant font-medium">Access your high-performance locker.</p>
          </div>

          {/* Tabbed Navigation */}
          <div className="flex p-1 bg-surface-container-low rounded-xl mb-8">
            <button 
              onClick={() => setActiveTab("login")}
              className={cn(
                "flex-1 py-3 text-sm font-bold rounded-lg transition-all",
                activeTab === "login" ? "bg-white shadow-sm text-primary" : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              Login
            </button>
            <button 
              onClick={() => setActiveTab("register")}
              className={cn(
                "flex-1 py-3 text-sm font-bold rounded-lg transition-all",
                activeTab === "register" ? "bg-white shadow-sm text-primary" : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="block text-xs font-black tracking-widest text-on-surface-variant uppercase" htmlFor="identifier">Email or Phone</label>
              <div className="relative group">
                <input 
                  className="w-full bg-white border border-slate-200/90 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all px-4 py-4 rounded-xl placeholder:text-outline/50 min-h-[52px]" 
                  id="identifier" 
                  placeholder="pro@kinetic.com" 
                  type="text" 
                  required
                />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-focus-within:w-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-black tracking-widest text-on-surface-variant uppercase" htmlFor="password">Password</label>
                <button type="button" className="text-xs font-bold text-primary hover:underline">Forgot?</button>
              </div>
              <div className="relative group">
                <input 
                  className="w-full bg-white border border-slate-200/90 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all px-4 py-4 rounded-xl placeholder:text-outline/50 min-h-[52px]" 
                  id="password" 
                  placeholder="••••••••" 
                  type="password" 
                  required
                />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-focus-within:w-full"></div>
              </div>
            </div>
            <button 
              className="btn-kinetic w-full py-5 text-base" 
              type="submit"
            >
              <span>LAUNCH SESSION</span>
              <Bolt size={22} strokeWidth={2.25} />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant opacity-20"></div></div>
            <div className="relative flex justify-center text-xs uppercase font-black tracking-widest bg-surface px-4 text-outline">
              OR CONTINUE WITH
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 px-4 bg-white border border-outline-variant/10 rounded-xl hover:bg-surface-container-low transition-colors group">
              <Chrome className="w-5 h-5 group-hover:scale-110 transition-transform text-red-500" />
              <span className="text-sm font-bold text-on-surface">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-3 px-4 bg-white border border-outline-variant/10 rounded-xl hover:bg-surface-container-low transition-colors group">
              <Apple className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold text-on-surface">Apple</span>
            </button>
          </div>

          {/* Footer Note */}
          <p className="mt-12 text-center text-xs text-on-surface-variant font-medium">
            By continuing, you agree to the <button className="underline hover:text-primary">Terms of Service</button> and <button className="underline hover:text-primary">Privacy Policy</button>.
          </p>
        </div>
      </div>
    </main>
  );
};
