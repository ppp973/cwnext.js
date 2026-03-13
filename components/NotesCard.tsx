'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { FileText, Download, Calendar } from 'lucide-react';
import { Note } from '@/lib/api';

interface NotesCardProps {
  note: Note;
  index: number;
}

export default function NotesCard({ note, index }: NotesCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="glass glass-hover p-4 rounded-xl flex items-center justify-between group">
        <Link href={`/notes/${encodeURIComponent(note.view_url)}`} className="flex items-center gap-4 flex-grow">
          <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
            <FileText className="w-5 h-5 text-red-400" />
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors line-clamp-1">
              {note.title}
            </h4>
            <div className="flex items-center gap-2 mt-1 text-[11px] text-zinc-500">
              <Calendar className="w-3 h-3" />
              <span>{note.date}</span>
            </div>
          </div>
        </Link>
        
        <a 
          href={note.download_url} 
          download 
          className="p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-lg transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <Download className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
}
