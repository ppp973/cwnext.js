import Link from 'next/link';
import { PlayCircle, Github, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <PlayCircle className="w-8 h-8 text-indigo-500" />
              <span className="text-2xl font-bold tracking-tight font-display">Career Will</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              The ultimate learning platform for modern students. Stream high-quality lectures, access PDF notes, and master your subjects with ease.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">All Courses</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Live Batches</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Free Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-indigo-500/20 transition-all">
                <Twitter className="w-5 h-5 text-zinc-400" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-indigo-500/20 transition-all">
                <Github className="w-5 h-5 text-zinc-400" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-indigo-500/20 transition-all">
                <Youtube className="w-5 h-5 text-zinc-400" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>© 2026 Career Will. All rights reserved.</p>
          <p>Powered by Raj</p>
        </div>
      </div>
    </footer>
  );
}
