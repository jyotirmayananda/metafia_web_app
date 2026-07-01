"use client";

import { useState } from "react";
import Link from "next/link";
import { Sprout, ArrowRight, ShieldCheck, Mail, Send, CheckCircle2 } from "lucide-react";

export default function Agro() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="relative w-full overflow-hidden min-h-[80vh] flex items-center bg-slate-50 py-16 text-slate-700 font-sans">
      {/* Background glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-slate-100 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center space-y-10">
        
        {/* Animated Sprout Icon */}
        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 shadow-sm text-slate-500">
          <Sprout className="w-8 h-8 animate-pulse" />
        </div>

        {/* Heading */}
        <div className="space-y-4 max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-slate-500 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200">
            Corporate Expansion
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight font-display">
            Agro Division
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-bold font-display">
            Sustainable agricultural inputs & infrastructure solutions &mdash; coming soon.
          </p>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Metafia Industries is currently engineering a modern agro-resources framework. 
            Focusing on organic soil enhancers, high-efficiency crop protection supplies, and sustainable farming trade pipelines in Odisha.
          </p>
        </div>

        {/* Informational Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full pt-4">
          <div className="glass-card p-6 rounded-2xl border border-slate-200 bg-white text-left space-y-2 shadow-sm">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 font-display">
              <ShieldCheck className="w-4 h-4 text-slate-500" />
              Quality Testing
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Standard-compliant, laboratory-certified crop nutrition formulas and agricultural raw materials.
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-slate-200 bg-white text-left space-y-2 shadow-sm">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 font-display">
              <Sprout className="w-4 h-4 text-slate-500" />
              Eco-Friendly Footprint
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Formulated to minimize long-term soil toxicity and support resilient regional farm yields.
            </p>
          </div>
        </div>

        {/* Subscription / Updates Form */}
        <div className="max-w-md w-full pt-4">
          <div className="glass-card p-8 rounded-2xl border border-slate-200 bg-white text-left space-y-4 shadow-md">
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm font-display">Register for Division Announcements</h3>
              <p className="text-[11px] text-slate-500 mt-1 font-semibold">
                Receive notifications when bulk agro-trading and pesticide supply operations go active.
              </p>
            </div>

            {submitted ? (
              <div className="flex items-center gap-2 p-3 bg-slate-100 border border-slate-200 text-slate-700 text-xs rounded-lg">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-slate-500" />
                <span className="font-bold">Thank you. You've been subscribed for launch updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 text-slate-800 text-xs pl-10 pr-4 py-3 rounded-lg outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-3 btn-primary text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Back to Home CTA */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-650 hover:text-slate-850 border-b border-slate-200 hover:border-slate-400 pb-1 transition-all duration-200"
          >
            Back to Home
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </div>
  );
}
