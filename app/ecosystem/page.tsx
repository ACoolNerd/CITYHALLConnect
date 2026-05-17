import Link from "next/link";

export default function EcosystemPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <div className="text-neutral-500 font-bold uppercase tracking-widest text-sm">Full View</div>
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase">ACoolECOSYSTEM Map</h1>
        <p className="text-xl text-neutral-400 leading-relaxed">
          The hub-and-spoke architecture of all interconnected brands, data assets, and governance nodes.
        </p>
      </header>

      <section className="p-12 rounded-[3rem] bg-neutral-900 border border-neutral-800 text-center">
        <div className="text-neutral-600 font-mono text-sm mb-12 uppercase tracking-widest">[ VISUAL ECOSYSTEM GRAPH ]</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["Holdings (01)", "Nerd (02)", "Trust (03)", "Academy (04)", "Sing (06)", "Finance (07)"].map(node => (
                <div key={node} className="p-6 rounded-2xl border border-neutral-800 bg-black/40 text-neutral-400 text-xs font-bold uppercase tracking-[0.2em] hover:border-orange-500/50 hover:text-white transition-all cursor-default">
                    {node}
                </div>
            ))}
        </div>
      </section>

      <div className="flex gap-4">
        <Link href="/" className="px-6 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-bold transition-all">← Back to Home</Link>
      </div>
    </div>
  );
}
