import { getBatches } from '@/lib/api';
import SearchBarWrapper from '@/components/SearchBarWrapper';
import { Crown, Zap, Sparkles } from 'lucide-react';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

async function BatchesSection() {
  const batches = await getBatches();
  return <SearchBarWrapper initialBatches={batches} />;
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen pb-20 bg-black text-white overflow-hidden">
      
      {/* 🔥 Premium Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[140px]" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] bg-emerald-600/20 rounded-full blur-[140px]" />
      </div>

      {/* 🔥 Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* 🚀 Hero Section */}
        <div className="text-center mb-16 space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Crown className="w-3 h-3" />
            VIP STUDY
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight">
            Unlock Your <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent italic">
              Premium Batches
            </span>
          </h1>

          {/* Sub Text */}
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Access all premium paid batches for free. Fast, clean and organized learning experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-3 pt-4">
            <button className="px-5 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-black hover:opacity-90 transition">
              Explore Now
            </button>
            <button className="px-5 py-2 text-xs font-bold rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* ⚡ Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-zinc-400 text-[11px] font-bold uppercase tracking-widest">
            <Zap className="w-4 h-4 text-indigo-500" />
            Available Batches
          </div>

          <div className="flex items-center gap-1 text-[10px] text-emerald-400">
            <Sparkles className="w-3 h-3" />
            Updated Daily
          </div>
        </div>

        {/* 📦 Batches */}
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <BatchesSection />
        </Suspense>

      </div>
    </div>
  );
}
