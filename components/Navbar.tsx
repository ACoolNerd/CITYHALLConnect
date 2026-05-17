import Link from "next/link";
import { Shield, Cpu, ShoppingBag, Map, Layers } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-black text-xs">
            AC
          </div>
          <span className="font-bold tracking-tighter text-white group-hover:text-orange-500 transition-colors">
            ACoolECOSYSTEM
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <Link href="/cityhall-connect" className="hover:text-blue-500 transition-colors flex items-center gap-2">
            <Shield className="w-4 h-4" /> Civic
          </Link>
          <Link href="/acool-ai" className="hover:text-emerald-500 transition-colors flex items-center gap-2">
            <Cpu className="w-4 h-4" /> AI
          </Link>
          <Link href="/acool-collector" className="hover:text-orange-500 transition-colors flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" /> Collector
          </Link>
          <Link href="/ecosystem" className="hover:text-white transition-colors flex items-center gap-2">
            <Map className="w-4 h-4" /> Map
          </Link>
          <Link href="/roadmap" className="hover:text-white transition-colors flex items-center gap-2">
            <Layers className="w-4 h-4" /> Roadmap
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded border border-white/10 hover:bg-white/5 text-white transition-all">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
