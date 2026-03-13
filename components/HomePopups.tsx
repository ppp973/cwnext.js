'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Send } from 'lucide-react';

export default function HomePopups() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenHomePopup');
      if (!hasSeenPopup) {
        setShowWhatsApp(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowWhatsApp(false);
    sessionStorage.setItem('hasSeenHomePopup', 'true');
  };

  return (
    <AnimatePresence>
      {showWhatsApp && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 text-center space-y-6">
              <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-10 h-10 text-emerald-500" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Join Our Community</h2>
                <p className="text-zinc-400 text-sm">
                  Get instant updates on new batches, notes, and exclusive premium content directly on your WhatsApp.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <a
                  href="https://whatsapp.com/channel/yourlink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-emerald-500/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Join WhatsApp Channel
                </a>
                <a
                  href="https://t.me/yourlink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-sky-500/20"
                >
                  <Send className="w-5 h-5" />
                  Join Telegram Group
                </a>
              </div>

              <button 
                onClick={closePopup}
                className="text-zinc-500 text-xs font-medium hover:text-zinc-300 transition-colors uppercase tracking-widest"
              >
                Maybe Later
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
