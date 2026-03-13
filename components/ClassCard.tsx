'use client';

import { motion } from 'motion/react';
import { Play, Clock, ExternalLink } from 'lucide-react';
import { Class } from '@/lib/api';

interface ClassCardProps {
  cls: Class;
  index: number;
}

export default function ClassCard({ cls, index }: ClassCardProps) {
  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    // We need to fetch the video details to get the file_url
    // But since this is a client component and we want immediate redirect,
    // we'll redirect to a proxy or just handle it here.
    // Actually, the user said "Remove the UI where we are redirected to the video, meaning the watch and video ID."
    // And "When someone clicks on it, they will be automatically redirected."
    
    // To get the file_url, we still need to call the API.
    // I'll create a small utility or just use the existing one.
    window.location.href = `/api/video-redirect?videoId=${cls.video_url}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <button 
        onClick={handlePlay}
        className="w-full text-left"
      >
        <div className="glass glass-hover p-4 rounded-xl flex items-center gap-4 group">
          <div className="relative w-32 aspect-video bg-zinc-800 rounded-lg overflow-hidden shrink-0">
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
            </div>
            <div className="absolute bottom-1 right-1 bg-black/80 text-[10px] px-1 rounded font-medium text-white">
              Lec {cls.class_no}
            </div>
          </div>
          
          <div className="flex-grow">
            <h4 className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors line-clamp-2">
              {cls.title}
            </h4>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                <Clock className="w-3 h-3" />
                <span>Video Lecture</span>
              </div>
              <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
