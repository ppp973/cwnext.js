import { getBatches } from '@/lib/api';
import SearchBarWrapper from '@/components/SearchBarWrapper';
import { Sparkles, Crown, Zap } from 'lucide-react';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

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
            VIPSTUDY 
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black font-display tracking-tighter leading-[1.1]">
            CAREER WILL  <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent italic">
              PAID BATCHES FREE
            </span>
          </h1>
        </div> {/* Added missing closing div */}

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
      </div> {/* Added missing closing div */}
    </div>
  );
}

