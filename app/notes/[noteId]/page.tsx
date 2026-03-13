import PDFViewer from '@/components/PDFViewer';
import { Download, FileText } from 'lucide-react';
import BackButton from '@/components/BackButton';

export default async function NotesPage({ params }: { params: Promise<{ noteId: string }> }) {
  const { noteId } = await params;
  const pdfUrl = decodeURIComponent(noteId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <BackButton />
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Document Viewer</h1>
              <p className="text-zinc-500 text-sm">Review your study material and notes.</p>
            </div>
          </div>
        </div>

        <a 
          href={pdfUrl} 
          download 
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-indigo-500/20"
        >
          <Download className="w-5 h-5" />
          Download PDF
        </a>
      </div>

      <PDFViewer url={pdfUrl} />
    </div>
  );
}
