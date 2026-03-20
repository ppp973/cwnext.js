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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ scale: 1.03 }}
      className="group"
    >
      <Link href={`/batch/${batch.id}`}>
        <div className="relative flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden">
          
          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10" />

          {/* Profile Image */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0 group-hover:border-emerald-400 transition">
            <Image
              src={personalPhoto}
              alt="Batch"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content */}
          <div className="flex-grow min-w-0">
            
            {/* 🔥 SHORT TITLE */}
            <h3 className="text-sm font-semibold text-white truncate group-hover:text-emerald-400 transition">
              {batch.name}
            </h3>

            {/* Small Subtitle */}
            <p className="text-[10px] text-zinc-400 truncate">
              Premium Batch
            </p>
          </div>

          {/* Arrow */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 text-zinc-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition shrink-0">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
