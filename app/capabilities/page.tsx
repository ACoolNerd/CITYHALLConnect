import Link from "next/link";
import { capabilities, modules } from "../../data/modules";
import { Shield, Cpu, Database, ShoppingBag, Zap, Building, LucideIcon } from "lucide-react";

const capIconMap: Record<string, LucideIcon> = {
  "Civic Modernization": Building,
  "AI Agent Architecture": Cpu,
  "Data Intelligence": Database,
  "Collectibles Commerce": ShoppingBag,
  "GovCon Readiness": Shield,
  "Custom Automation": Zap,
};

export default function CapabilitiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col gap-24">
      <header className="flex flex-col gap-4 text-center">
        <div className="text-orange-500 font-bold uppercase tracking-widest text-sm">Offerings</div>
        <h1 className="text-6xl font-black text-white tracking-tighter uppercase">Capabilities</h1>
        <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
          Comprehensive technical and strategic capabilities provided by the ACoolECOSYSTEM to modernize civic, AI, and commerce workflows.
        </p>
      </header>

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-white tracking-tight uppercase">Core Competencies</h2>
            <p className="text-neutral-500">Expertise across the ACoolECOSYSTEM spectrum.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map(cap => {
            const Icon = capIconMap[cap.title] || Zap;
            return (
                <div key={cap.title} className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                        <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{cap.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                        High-fidelity implementation and strategic oversight for {cap.title.toLowerCase()} initiatives.
                    </p>
                </div>
            )
          })}
        </div>
      </section>

      <section className="flex flex-col gap-12 p-12 rounded-[2.5rem] bg-neutral-950 border border-white/5 shadow-2xl">
        <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-white tracking-tight uppercase">GovCon Positioning</h2>
            <p className="text-neutral-500">Official government contracting readiness.</p>
        </div>
        <div className="flex flex-col gap-8 text-neutral-400 text-lg leading-relaxed">
          <p>The ACoolECOSYSTEM is uniquely positioned as a prime small-business partner for local government digital modernization and LA28-related civic infrastructure projects.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
             <div className="p-6 rounded-2xl bg-black/50 border border-neutral-800">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Primary NAICS</span>
                <p className="text-white font-mono mt-2 text-lg tracking-wider">541511, 541512, 541611</p>
             </div>
             <div className="p-6 rounded-2xl bg-black/50 border border-neutral-800">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Certifications</span>
                <p className="text-white font-mono mt-2 text-lg tracking-wider">MBE/WBE Pending</p>
             </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-white tracking-tight uppercase">Platform Modules</h2>
            <p className="text-neutral-500">Specialized technical blocks per brand.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modules.map(brand => (
                <div key={brand.brand} className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col gap-4">
                    <h3 className="text-sm font-black text-white uppercase tracking-widest">{brand.brand}</h3>
                    <ul className="flex flex-col gap-2">
                        {brand.items.map(item => (
                            <li key={item} className="text-xs text-neutral-500 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </section>

      <div className="flex gap-4">
        <Link href="/" className="px-8 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-bold transition-all">
            ← Back to Ecosystem
        </Link>
        <Link href="/docs/CAPABILITY_SHEET.md" className="px-8 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold transition-all shadow-lg shadow-orange-900/20">
            Download Capability Sheet
        </Link>
      </div>
    </div>
  );
}
