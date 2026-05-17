import Link from "next/link";
import { brands, ecosystem } from "../data/brands";
import { roadmap } from "../data/roadmap";
import { capabilities } from "../data/modules";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-50" />
        <div className="relative z-10 max-w-4xl flex flex-col items-center gap-8">
          <div className="px-4 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">
            {ecosystem.governance} Compliant
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
            {ecosystem.name}
          </h1>
          <p className="text-lg md:text-2xl text-neutral-400 max-w-2xl leading-relaxed">
            {ecosystem.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link href="/cityhall-connect" className="btn-primary bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20">
              Explore CITYHALLConnect
            </Link>
            <Link href="/acool-ai" className="btn-primary bg-emerald-600 hover:emerald-500 text-white shadow-lg shadow-emerald-900/20">
              Explore ACoolAI
            </Link>
            <Link href="/acool-collector" className="btn-primary bg-[#E8520F] hover:bg-[#ff5f1f] text-white shadow-lg shadow-orange-900/20">
              Explore ACoolCOLLECTOR
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Grid Section */}
      <section className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">Ecosystem Brands</h2>
          <p className="text-neutral-500">Core entities powering the ACool architecture.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div key={brand.id} className="card-premium group relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                style={{ backgroundColor: brand.accent }} 
              />
              <div className="relative z-10 flex flex-col gap-4 h-full">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: brand.accent }}
                >
                  {brand.name[0]}
                </div>
                <h3 className="text-xl font-bold text-white">{brand.name}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed flex-grow">
                  {brand.description}
                </p>
                {brand.href && (
                  <Link href={brand.href} className="text-xs font-bold uppercase tracking-widest text-neutral-100 hover:text-white mt-4 flex items-center gap-2">
                    Learn More <span>→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capability Grid */}
      <section className="bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-12">
          <div className="flex flex-col gap-2 items-center text-center">
            <h2 className="text-3xl font-bold text-white tracking-tight">Capabilities</h2>
            <p className="text-neutral-500 max-w-xl">Deep domain expertise across the ACoolECOSYSTEM service spectrum.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-neutral-900 bg-neutral-900/20">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400">
                  {/* Icon placeholder */}
                  <div className="w-6 h-6 border-2 border-current rounded-sm opacity-50" />
                </div>
                <h4 className="font-semibold text-white">{cap.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">Implementation Roadmap</h2>
          <p className="text-neutral-500">The 90-day trajectory for ACoolECOSYSTEM deployment.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmap.map((step) => (
            <div key={step.phase} className="flex flex-col gap-4 p-6 border-l-2 border-neutral-800 hover:border-orange-500 transition-colors">
              <div className="text-xs font-bold uppercase tracking-widest text-orange-500">{step.phase}</div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <ul className="flex flex-col gap-2">
                {step.items.map((item) => (
                  <li key={item} className="text-sm text-neutral-500 flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* AI Agent Stack */}
      <section className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-12">
         <div className="p-12 rounded-3xl bg-gradient-to-br from-emerald-950/20 to-blue-950/20 border border-neutral-800 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex flex-col gap-6 flex-1">
              <h2 className="text-4xl font-bold text-white tracking-tight">AI Agent Stack</h2>
              <p className="text-neutral-400 text-lg">
                The ecosystem is powered by a proprietary agent infrastructure designed for civic intelligence, market valuation, and automated knowledge management.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["ACoolPROMPT Agent", "ACoolDATASET Agent", "CITYHALL Civic Agent", "COLLECTOR Agent"].map(agent => (
                  <div key={agent} className="px-4 py-2 rounded-lg bg-black/40 border border-neutral-800 text-sm font-medium text-neutral-300">
                    {agent}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-700 font-mono text-xs overflow-hidden relative">
               {/* Visual Abstract */}
               <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 p-4 opacity-20">
                  {Array.from({length: 36}).map((_, i) => (
                    <div key={i} className="border border-current rounded-sm" />
                  ))}
               </div>
               <span className="z-10 bg-black px-4 py-2 rounded-full border border-neutral-800">AGENT_INFRA_LAYER_v2.0</span>
            </div>
         </div>
      </section>

      {/* GovCon Positioning */}
      <section className="max-w-7xl mx-auto px-6 w-full py-12 flex flex-col items-center text-center gap-6">
        <h2 className="text-2xl font-bold text-white uppercase tracking-[0.3em]">Government Contracting Readiness</h2>
        <p className="text-neutral-500 max-w-2xl">
          Positioned for LA28 civic infrastructure and local government digital modernization.
          Exploring NAICS 541511, 541512, and 541611 registrations.
        </p>
        <Link href="/capabilities" className="text-orange-500 font-bold hover:underline">View GovCon Capability Sheet →</Link>
      </section>
    </div>
  );
}