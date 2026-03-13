export default function SkeletonCard() {
  return (
    <div className="glass p-6 rounded-2xl h-48 animate-pulse">
      <div className="w-12 h-12 bg-white/5 rounded-xl mb-4" />
      <div className="h-6 bg-white/5 rounded-md w-3/4 mb-2" />
      <div className="h-4 bg-white/5 rounded-md w-1/2" />
      <div className="mt-8 flex justify-between">
        <div className="h-4 bg-white/5 rounded-md w-1/4" />
        <div className="w-8 h-8 bg-white/5 rounded-full" />
      </div>
    </div>
  );
}
