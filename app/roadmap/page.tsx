import Link from "next/link";
import { roadmap } from "../../data/roadmap";

export default function RoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <div className="text-orange-500 font-bold uppercase tracking-widest text-sm">Trajectory</div>
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase">Roadmap</h1>
        <p className="text-xl text-neutral-400 leading-relaxed">
          The 90-day implementation strategy for the ACoolECOSYSTEM.
        </p>
      </header>

      <section className="flex flex-col gap-12">
        {roadmap.map((phase, idx) => (
          <div key={phase.phase} className="relative flex gap-8">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full border-4 border-neutral-950 flex items-center justify-center text-xs font-bold ${phase.status === 'completed' ? 'bg-orange-500 text-black' : phase.status === 'in-progress' ? 'bg-orange-500/20 text-orange-500' : 'bg-neutral-800 text-neutral-500'}`}>
                {idx + 1}
              </div>
              {idx < roadmap.length - 1 && <div className="w-1 flex-grow bg-neutral-900 my-2" />}
            </div>
            <div className="flex flex-col gap-4 pb-12">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">{phase.title}</h2>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${phase.status === 'completed' ? 'border-orange-500/50 text-orange-500 bg-orange-500/5' : phase.status === 'in-progress' ? 'border-emerald-500/50 text-emerald-500 bg-emerald-500/5' : 'border-neutral-800 text-neutral-500'}`}>
                  {phase.status}
                </span>
              </div>
              <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs">{phase.phase}</p>
              <ul className="flex flex-col gap-3">
                {phase.items.map(item => (
                  <li key={item} className="text-neutral-400 text-sm flex items-start gap-3">
                    <span className="text-orange-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-current" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <div className="flex gap-4">
        <Link href="/" className="px-6 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-bold transition-all">← Back to Home</Link>
      </div>
    </div>
  );
}
