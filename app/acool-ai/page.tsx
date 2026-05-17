import Link from "next/link";
export default function ACoolAIPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <div className="text-emerald-500 font-bold uppercase tracking-widest text-sm">Intelligence Layer</div>
        <h1 className="text-5xl font-black text-white tracking-tighter">ACoolAI</h1>
        <p className="text-xl text-neutral-400 leading-relaxed">
          The intelligence engine of the ACoolECOSYSTEM, providing specialized AI agents, strategy, and workflow automation.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">Mission</h2>
          <p className="text-neutral-400 text-sm">
            To automate the mundane and supercharge the creative through high-fidelity prompt engineering and agent architecture.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">Offerings</h2>
          <ul className="text-neutral-400 text-sm list-disc list-inside">
            <li>AI Strategy Consulting</li>
            <li>Custom Agent Design</li>
            <li>Workflow Automation</li>
            <li>BI Dashboard Integration</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white">Agent Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "ACoolPROMPT: Meta-prompting engine",
            "ACoolDATASET: Knowledge graph manager",
            "ACoolDASHBOARD: Visual intelligence",
            "ACoolBUSINESS: Operations automation",
            "ACoolCREATOR: Media generation",
            "ACoolCOLLECTOR: Commerce intelligence"
          ].map(agent => (
            <div key={agent} className="px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-300 text-sm">
              {agent}
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 rounded-2xl bg-emerald-900/10 border border-emerald-900/30 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-white">Implementation Roadmap</h2>
        <p className="text-neutral-400 text-sm">
          Currently in Phase 1: Refining the core meta-prompting framework and agent coordination layer. Internal ecosystem deployment slated for Q2 2026.
        </p>
      </section>

      <div className="flex gap-4">
        <Link href="/" className="px-6 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-bold">← Back to Ecosystem</Link>
        <button className="px-6 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold">Inquire About Agents</button>
      </div>
    </div>
  );
}