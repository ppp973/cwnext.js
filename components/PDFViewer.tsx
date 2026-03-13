'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { 
  ChevronLeft, ChevronRight, ZoomIn, ZoomOut, 
  Download, Loader2, Maximize2 
} from 'lucide-react';

// Set worker for pdfjs only on client
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

interface PDFViewerProps {
  url: string;
}

export default function PDFViewer({ url }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => Math.min(Math.max(1, prevPageNumber + offset), numPages || 1));
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-5xl mx-auto">
      {/* Controls */}
      <div className="sticky top-20 z-40 glass p-3 rounded-2xl flex items-center gap-4 md:gap-8 shadow-xl">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => changePage(-1)} 
            disabled={pageNumber <= 1}
            className="p-2 rounded-xl hover:bg-white/5 disabled:opacity-30 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-medium min-w-[80px] text-center">
            Page {pageNumber} of {numPages || '--'}
          </span>
          <button 
            onClick={() => changePage(1)} 
            disabled={pageNumber >= (numPages || 1)}
            className="p-2 rounded-xl hover:bg-white/5 disabled:opacity-30 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="h-6 w-px bg-white/10 hidden md:block" />

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setScale(s => Math.max(0.5, s - 0.1))}
            className="p-2 rounded-xl hover:bg-white/5 transition-all"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <span className="text-sm font-medium min-w-[40px] text-center">
            {Math.round(scale * 100)}%
          </span>
          <button 
            onClick={() => setScale(s => Math.min(2, s + 0.1))}
            className="p-2 rounded-xl hover:bg-white/5 transition-all"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
        </div>

        <div className="h-6 w-px bg-white/10 hidden md:block" />

        <a 
          href={url} 
          download 
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl hover:bg-indigo-500/20 text-indigo-400 transition-all"
        >
          <Download className="w-5 h-5" />
        </a>
      </div>

      {/* Document Container */}
      <div className="w-full glass rounded-3xl overflow-hidden min-h-[600px] flex justify-center p-4 md:p-8 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/50 z-10">
            <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
          </div>
        )}
        
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={null}
          className="shadow-2xl"
        >
          <Page 
            pageNumber={pageNumber} 
            scale={scale} 
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="max-w-full"
          />
        </Document>
      </div>
    </div>
  );
}
