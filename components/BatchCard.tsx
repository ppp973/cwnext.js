'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Batch } from '@/lib/api';

interface BatchCardProps {
  batch: Batch;
  index: number;
}

export default function BatchCard({ batch, index }: BatchCardProps) {
  const personalPhoto = `https://th.bing.com/th/id/OIP.4F6qEJS83WVEcmU1jyPOLwHaHa?w=203&h=203&c=7&r=0&o=7&pid=1.7&rm=3`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.02 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Link href={`/batch/${batch.id}`}>
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-200">

          {/* Image */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
            <Image
              src={personalPhoto}
              alt="batch"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[11px] font-semibold text-white truncate leading-tight">
              {batch.name}
            </h3>
            <p className="text-[9px] text-zinc-400 truncate">
              Premium
            </p>
          </div>

          {/* Arrow */}
          <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition" />
        </div>
      </Link>
    </motion.div>
  );
}
