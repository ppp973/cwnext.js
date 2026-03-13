'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Show for exactly 6 seconds
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 400); // Wait for exit animation
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-between py-12 px-6 overflow-hidden"
        >
          {/* Top Section */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full text-center mt-8"
          >
            <h1 className="text-4xl font-black text-white tracking-tight">
              Career Will
            </h1>
          </motion.div>

          {/* Middle Section */}
          <div className="flex flex-col items-center justify-center flex-grow w-full">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative w-40 h-40 mb-8"
            >
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-full h-full rounded-full border-2 border-white/10 p-1 overflow-hidden bg-zinc-900 shadow-2xl">
                <Image
                  src="https://th.bing.com/th/id/OIP.4F6qEJS83WVEcmU1jyPOLwHaHa?w=203&h=203&c=7&r=0&o=7&pid=1.7&rm=3"
                  alt="Raj"
                  fill
                  className="object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-zinc-400 text-sm font-medium tracking-wide animate-pulse">
                Loading your experience...
              </p>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-full text-center mb-4"
          >
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">
              Powered by <span className="text-white">Raj</span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
