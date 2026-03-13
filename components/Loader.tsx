import { Loader2 } from 'lucide-react';

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <Loader2 className="w-12 h-12 text-indigo-500 animate-spin" />
      <p className="text-zinc-500 font-medium animate-pulse">Loading content...</p>
    </div>
  );
}
