import { getBatches } from '@/lib/api';
import SearchBarWrapper from '@/components/SearchBarWrapper';
import { Crown, Zap, Sparkles } from 'lucide-react';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

async function BatchesSection() {
  const batches = await getBatches();
  // Note: Aapke SearchBarWrapper ke andar jo card mapping hogi, 
  // wahan grid-cols-2 ya grid-cols-3 (mobile) aur grid-cols-5 (desktop) use karein.
  return <SearchBarWrapper initialBatches={batches} />;
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-100 selection:bg-emerald-500/30 pb-20 overflow-x-hidden">
      
      {/* Abstract Premium Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[70%] bg-emerald-600/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-[5%] right-[-5%] w-[40%] h-[70%] bg-blue-600/10 rounded-full blur-[140px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Compact Hero Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6 shadow-xl">
            <div className="flex -space-x-1">
              <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center border-2 border-zinc-900">
                <Crown className="w-2.5 h-2.5 text-black" />
              </div>
            </div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">
              VIP STUDY PREMIUM
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-4">
            CAREER WILL <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-500 bg-clip-text text-transparent italic drop-shadow-sm">
              PAID BATCHES FREE
            </span>
          </h1>
          
          <p className="text-zinc-500 text-xs md:text-sm font-medium max-w-md tracking-tight">
            Premium quality courses, unlocked for your success. <br className="hidden md:block"/>
            High-speed servers with instant access.
          </p>
        </div>

        {/* Search & Batches Container */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6 border-b border-zinc-800/50 pb-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
              </div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-300">
                Live Batches
              </h2>
            </div>
            
            <div className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">
              <Sparkles className="w-3 h-3" />
              UPDATED TODAY
            </div>
          </div>

          {/* This section will now render your compact cards */}
          <Suspense fallback={
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-32 rounded-xl bg-zinc-900/50 animate-pulse border border-zinc-800" />
              ))}
            </div>
          }>
            <BatchesSection />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
