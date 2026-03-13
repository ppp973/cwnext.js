'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { BookOpen, Video, FileText, ChevronRight } from 'lucide-react';
import { Topic } from '@/lib/api';
import TopicModal from './TopicModal';

interface TopicCardProps {
  topic: Topic;
  batchId: string;
  index: number;
}

export default function TopicCard({ topic, batchId, index }: TopicCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleTopicClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleContinue = () => {
    setIsModalOpen(false);
    router.push(`/topic/${batchId}/${topic.id}`);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ scale: 1.02 }}
      >
        <button 
          onClick={handleTopicClick}
          className="w-full text-left"
        >
          <div className="glass glass-hover p-5 rounded-2xl flex items-center gap-4 group">
            <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
              <BookOpen className="w-7 h-7 text-zinc-400 group-hover:text-indigo-400" />
            </div>
            
            <div className="flex-grow min-w-0">
              <h3 className="text-white font-medium truncate mb-1 group-hover:text-indigo-300 transition-colors">
                {topic.topicName}
              </h3>
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <div className="flex items-center gap-1">
                  <Video className="w-3 h-3" />
                  <span>{topic.cls_count} Classes</span>
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  <span>{topic.notes_count} Notes</span>
                </div>
              </div>
            </div>

            <div className="w-8 h-8 flex items-center justify-center text-zinc-600 group-hover:text-indigo-400">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </button>
      </motion.div>

      <TopicModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onContinue={handleContinue}
        topicName={topic.topicName}
      />
    </>
  );
}
