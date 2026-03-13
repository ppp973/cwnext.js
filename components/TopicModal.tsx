'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, ArrowRight, LockKeyhole } from 'lucide-react';

interface TopicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  topicName: string;
}

export default function TopicModal({ isOpen, onClose, onContinue, topicName }: TopicModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Premium Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-emerald-500/20 blur-[50px] pointer-events-none" />

            <button 
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-full transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 space-y-8 relative z-10">
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <LockKeyhole className="w-8 h-8 text-emerald-400" />
                </div>
                
                <div>
                  <div className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3">
                    Premium Access
                  </div>
                  <h2 className="text-2xl font-black text-white leading-tight mb-2">
                    {topicName}
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed px-2">
                    Join our exclusive WhatsApp channel to unlock premium notes, updates, and direct support for this topic.
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href="https://whatsapp.com/channel/0029VbAvDSX0QeahEg4kkE3U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full px-6 py-4 bg-emerald-500 hover:bg-emerald-400 text-black rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Join WhatsApp Channel
                </a>
                
                <button
                  onClick={onContinue}
                  className="group flex items-center justify-center gap-2 w-full px-6 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold transition-all"
                >
                  Continue to Topic
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
