'use client';

import { ChevronLeft } from 'lucide-react';

export default function BackButton() {
  return (
    <button 
      onClick={() => window.history.back()}
      className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-6 group"
    >
      <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      Back
    </button>
  );
}
