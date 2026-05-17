import Link from "next/link";
export default function CapabilitiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <div className="text-orange-500 font-bold uppercase tracking-widest text-sm">Offerings</div>
        <h1 className="text-5xl font-black text-white tracking-tighter">Capabilities</h1>
        <p className="text-xl text-neutral-400 leading-relaxed">
          Comprehensive technical and strategic capabilities provided by the ACoolECOSYSTEM.
        </p>
      </header>

      <section className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold text-white border-b border-neutral-800 pb-4">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Civic Modernization", desc: "Digital transformation for local government and community engagement." },
            { title: "AI Agent Design", desc: "Architecture and deployment of specialized LLM-based autonomous agents." },
            { title: "Data Intelligence", desc: "Knowledge graph construction and proprietary dataset management." },
            { title: "Collectibles Commerce", desc: "Valuation, provenance, and automated marketplace workflows." },
            { title: "Prompt Engineering", desc: "High-fidelity meta-prompting and agent orchestration." },
            { title: "Workflow Automation", desc: "End-to-end automation of complex business and creative processes." }
          ].map(cap => (
            <div key={cap.title} className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-white">{cap.title}</h3>
              <p className="text-sm text-neutral-500">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8 p-12 rounded-3xl bg-neutral-900 border border-neutral-800">
        <h2 className="text-2xl font-bold text-white uppercase tracking-widest">GovCon Positioning</h2>
        <div className="flex flex-col gap-4 text-neutral-400 text-sm leading-relaxed">
          <p>The ACoolECOSYSTEM is uniquely positioned to support government initiatives, specifically targeting local digital modernization and LA28-related civic infrastructure.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
             <div className="p-4 rounded-xl bg-black/50 border border-neutral-800">
                <span className="text-xs font-bold text-orange-500 uppercase">Primary NAICS</span>
                <p className="text-white font-mono mt-1">541511, 541512, 541611</p>
             </div>
             <div className="p-4 rounded-xl bg-black/50 border border-neutral-800">
                <span className="text-xs font-bold text-orange-500 uppercase">Certifications</span>
                <p className="text-white font-mono mt-1">MBE/WBE Pending</p>
             </div>
          </div>
        </div>
      </section>

      <div className="flex gap-4">
        <Link href="/" className="px-6 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-bold">← Back to Home</Link>
        <Link href="/docs/CAPABILITY_SHEET.md" className="px-6 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold">Download Full Sheet (MD)</Link>
      </div>
    </div>
  );
}