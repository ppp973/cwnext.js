'use client';

import { useState } from 'react';
import { TopicDetails } from '@/lib/api';
import ClassCard from '@/components/ClassCard';
import NotesCard from '@/components/NotesCard';
import { motion, AnimatePresence } from 'motion/react';
import { Video, FileText } from 'lucide-react';

interface TopicContentWrapperProps {
  details: TopicDetails;
}

export default function TopicContentWrapper({ details }: TopicContentWrapperProps) {
  const [activeTab, setActiveTab] = useState<'classes' | 'notes'>('classes');

  return (
    <>
      <div className="flex p-1 glass rounded-2xl w-fit mb-8">
        <button 
          onClick={() => setActiveTab('classes')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === 'classes' ? 'bg-indigo-600 text-white shadow-lg' : 'text-zinc-500 hover:text-white'}`}
        >
          <Video className="w-4 h-4" />
          Classes ({details.classes_total})
        </button>
        <button 
          onClick={() => setActiveTab('notes')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === 'notes' ? 'bg-indigo-600 text-white shadow-lg' : 'text-zinc-500 hover:text-white'}`}
        >
          <FileText className="w-4 h-4" />
          Notes ({details.notes_total})
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {activeTab === 'classes' ? (
            details.classes.length > 0 ? (
              details.classes.map((cls, index) => (
                <ClassCard key={cls.id} cls={cls} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-20 glass rounded-3xl">
                <Video className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
                <p className="text-zinc-500">No video classes available for this topic yet.</p>
              </div>
            )
          ) : (
            details.notes.length > 0 ? (
              details.notes.map((note, index) => (
                <NotesCard key={note.id} note={note} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-20 glass rounded-3xl">
                <FileText className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
                <p className="text-zinc-500">No PDF notes available for this topic yet.</p>
              </div>
            )
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
