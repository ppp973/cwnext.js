'use client';

import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      <div className="absolute inset-0 bg-emerald-500/10 blur-3xl -z-10 rounded-full" />
      <div className="relative glass rounded-2xl p-2 flex items-center gap-2 border border-white/10 shadow-2xl transition-all duration-300 hover:border-white/20 hover:shadow-emerald-500/10 hover:shadow-2xl">
        <Search className="w-6 h-6 text-zinc-400 ml-4 shrink-0" />
        <input 
          type="text" 
          placeholder="Search for your favorite batch..." 
          className="bg-transparent border-none focus:ring-0 text-white placeholder:text-zinc-500 w-full py-3 px-2 text-lg outline-none"
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] shrink-0">
          Search
        </button>
      </div>
    </div>
  );
}
