import { getBatchDetails } from '@/lib/api';
import TopicCard from '@/components/TopicCard';
import { ChevronLeft, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

export default async function BatchPage({ params }: { params: Promise<{ batchId: string }> }) {
  const { batchId } = await params;
  const details = await getBatchDetails(batchId);

  if (!details) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Batch Not Found</h2>
        <p className="text-zinc-500 mb-8">We couldn&apos;t find the batch details you&apos;re looking for.</p>
        <Link href="/" className="text-indigo-400 hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-6 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Batches
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-2">
              {details.batch_name}
            </h1>
            <p className="text-zinc-500">Explore topics and start learning.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm font-medium text-indigo-400">
            <LayoutGrid className="w-4 h-4" />
            {details.topics.length} Topics Available
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
}
