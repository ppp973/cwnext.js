import { getTopicDetails } from '@/lib/api';
import TopicContentWrapper from '@/components/TopicContentWrapper';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default async function TopicPage({ params }: { params: Promise<{ batchId: string, topicId: string }> }) {
  const { batchId, topicId } = await params;
  const details = await getTopicDetails(batchId, topicId);

  if (!details) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Topic Details Not Found</h2>
        <p className="text-zinc-500 mb-8">We couldn&apos;t fetch the content for this topic.</p>
        <Link href={`/batch/${batchId}`} className="text-indigo-400 hover:underline">Back to Topics</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <Link 
          href={`/batch/${batchId}`} 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-6 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Topics
        </Link>
        
        <h1 className="text-3xl font-bold font-display text-white mb-8">
          Course Content
        </h1>
      </div>

      <TopicContentWrapper details={details} />
    </div>
  );
}
