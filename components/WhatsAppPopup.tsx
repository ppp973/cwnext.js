'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';

export default function WhatsAppPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show immediately after mount (which happens when splash screen finishes)
    const hasSeenPopup = sessionStorage.getItem('hasSeenWhatsAppPopup');
    if (!hasSeenPopup) {
      setShow(true); // eslint-disable-line react-hooks/set-state-in-effect
    }
  }, []);

  const closePopup = () => {
    setShow(false);
    sessionStorage.setItem('hasSeenWhatsAppPopup', 'true');
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative w-full max-w-[340px]"
          >
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col items-center text-center gap-4 overflow-hidden">
              {/* Premium Background Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-emerald-500/20 blur-[40px] pointer-events-none" />

              <button
                onClick={closePopup}
                className="absolute top-3 right-3 p-2 text-zinc-500 hover:text-white transition-colors rounded-full hover:bg-white/5 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.2)] relative z-10 mt-2">
                <MessageCircle className="w-7 h-7 text-emerald-400" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-white font-black text-lg mb-1">Join WhatsApp Channel</h3>
                <p className="text-zinc-400 text-sm leading-relaxed px-2">
                  Get instant updates and premium notes directly on WhatsApp.
                </p>
              </div>

              <a
                href="https://whatsapp.com/channel/0029VbAvDSX0QeahEg4kkE3U"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closePopup}
                className="w-full py-3.5 mt-2 bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 relative z-10"
              >
                <MessageCircle className="w-5 h-5" />
                Join Now
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
