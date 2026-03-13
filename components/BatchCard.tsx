'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Video, FileText } from 'lucide-react';
import { Batch } from '@/lib/api';

interface BatchCardProps {
  batch: Batch;
  index: number;
}

export default function BatchCard({ batch, index }: BatchCardProps) {
  // Personal photo placeholder
  const personalPhoto = `https://th.bing.com/th/id/OIP.4F6qEJS83WVEcmU1jyPOLwHaHa?w=203&h=203&c=7&r=0&o=7&pid=1.7&rm=3`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.03 }}
      whileHover={{ scale: 1.01 }}
      className="group"
    >
      <Link href={`/batch/${batch.id}`}>
        <div className="glass glass-hover py-6 px-5 rounded-2xl flex items-center gap-5 transition-all duration-300 h-full border border-white/5 hover:border-white/10 w-full min-h-[110px]">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/10 shrink-0 group-hover:border-emerald-500/50 transition-colors shadow-lg">
            <Image
              src={personalPhoto}
              alt="Batch Instructor"
              fill
              className="object-cover transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex-grow min-w-0 flex flex-col justify-center">
            <h3 className="text-white font-bold text-lg truncate group-hover:text-emerald-400 transition-colors">
              {batch.name}
            </h3>
          </div>

          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-500 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors shrink-0">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
