'use client';

import Link from 'next/link';
import { PlayCircle, Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:bg-indigo-500 transition-colors">
                <PlayCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight font-display bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Career Will
              </span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="#" className="hover:text-white transition-colors">My Courses</Link>
              <Link href="#" className="hover:text-white transition-colors">Explore</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Search batches..." 
                className="bg-zinc-900/50 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 w-64 transition-all"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
              <User className="w-5 h-5 text-zinc-400" />
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <Link href="/" className="block text-zinc-400 hover:text-white py-2">Home</Link>
              <Link href="#" className="block text-zinc-400 hover:text-white py-2">My Courses</Link>
              <Link href="#" className="block text-zinc-400 hover:text-white py-2">Explore</Link>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-zinc-900/50 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm w-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
