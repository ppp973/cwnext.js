import { getBatchDetails } from '@/lib/api';
import TopicCard from '@/components/TopicCard';
import { ChevronLeft, LayoutGrid, Sparkles, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default async function BatchPage({ params }: { params: Promise<{ batchId: string }> }) {
  const { batchId } = await params;
  const details = await getBatchDetails(batchId);

  if (!details) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4 border border-red-500/20">
          <ChevronLeft className="w-8 h-8 text-red-500" />
        </div>
        <h2 className="text-xl font-black text-white mb-2 tracking-tight">Batch Not Found</h2>
        <p className="text-zinc-500 text-sm mb-6 max-w-xs">The resources you are looking for might have been moved or deleted.</p>
        <Link href="/" className="px-6 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-zinc-800 transition-all">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#050505]">
      {/* Subtle Glow Effect */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-600/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        
        {/* Compact Navigation */}
        <div className="mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-emerald-400 transition-colors mb-6 group text-[10px] font-bold uppercase tracking-widest"
          >
            <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-900 pb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black text-emerald-400 uppercase tracking-tighter">
                  Unlocked
                </span>
                <span className="text-zinc-600 text-[9px] font-bold uppercase tracking-[0.2em]">Premium Course</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none italic uppercase">
                {details.batch_name}
              </h1>
              <p className="text-zinc-500 text-[11px] font-medium max-w-xl">
                Select a module to access high-quality lectures and notes.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800/50 rounded-lg text-[10px] font-bold text-zinc-300">
                <LayoutGrid className="w-3 h-3 text-emerald-500" />
                {details.topics.length} MODULES
              </div>
            </div>
          </div>
        </div>

        {/* COMPACT GRID: 2 columns on mobile, 4-5 on PC */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {details.topics.map((topic, index) => (
            <TopicCard 
              key={topic.id} 
              topic={topic} 
              batchId={batchId} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
