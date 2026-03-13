import { getBatches } from '@/lib/api';
import SearchBarWrapper from '@/components/SearchBarWrapper';
import { Sparkles, Crown, Zap } from 'lucide-react';
import { Suspense } from 'react';

async function BatchesSection() {
  const batches = await getBatches();
  return <SearchBarWrapper initialBatches={batches} />;
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen pb-20">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[30%] h-[60%] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[60%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Hero Section */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <Crown className="w-3 h-3" />
            Career Will Official
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black font-display tracking-tighter leading-[1.1]">
            Master Your <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent italic">
              Future Today
            </span>
          </h1>
          
          <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Access exclusive expert-led batches and comprehensive study materials designed by Raj for high achievers.
          </p>

          <div className="flex items-center justify-center gap-6 pt-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">500+</span>
              <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Batches</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">10k+</span>
              <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Students</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">24/7</span>
              <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Support</span>
            </div>
          </div>
        </div>

        {/* Search & Batches Section */}
        <div className="relative">
          <div className="absolute -top-10 left-0 flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
            <Zap className="w-3 h-3 text-indigo-500" />
            Available Batches
          </div>
          <Suspense fallback={<div className="min-h-[50vh]" />}>
            <BatchesSection />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
