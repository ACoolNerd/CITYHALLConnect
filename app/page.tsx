import Link from "next/link";
import { brands, ecosystem } from "../data/brands";
import { roadmap } from "../data/roadmap";
import { capabilities } from "../data/modules";
import { Shield, Cpu, ShoppingBag, Database, GraduationCap, LayoutDashboard, Terminal, BookOpen, ChevronRight, Zap, Building, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "cityhall-connect": Shield,
  "acool-ai": Cpu,
  "acool-collector": ShoppingBag,
  "acool-dataset": Database,
  "acool-academy": GraduationCap,
  "acool-dashboard": LayoutDashboard,
  "acool-prompt": Terminal,
  "acool-knowledgebase": BookOpen,
};

const capIconMap: Record<string, LucideIcon> = {
  "Civic Modernization": Building,
  "AI Agent Architecture": Cpu,
  "Data Intelligence": Database,
  "Collectibles Commerce": ShoppingBag,
  "GovCon Readiness": Shield,
  "Custom Automation": Zap,
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-50" />
        <div className="relative z-10 max-w-5xl flex flex-col items-center gap-8">
          <div className="px-4 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-500 text-xs font-bold uppercase tracking-[0.2em] animate-pulse">
            {ecosystem.governance} Compliant
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase">
            {ecosystem.name}
          </h1>
          <p className="text-lg md:text-2xl text-neutral-400 max-w-3xl leading-relaxed">
            {ecosystem.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/cityhall-connect" className="btn-primary bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20">
              Explore CITYHALLConnect
            </Link>
            <Link href="/acool-ai" className="btn-primary bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20">
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
          <h2 className="text-3xl font-bold text-white tracking-tight uppercase">Ecosystem Brands</h2>
          <p className="text-neutral-500">Core entities powering the ACool architecture.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => {
            const Icon = iconMap[brand.id] || LayoutDashboard;
            return (
              <div key={brand.id} className="card-premium group relative overflow-hidden">
                <div 
                  className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                  style={{ backgroundColor: brand.accent }} 
                />
                <div className="relative z-10 flex flex-col gap-4 h-full">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: brand.accent }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">{brand.name}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed flex-grow">
                    {brand.description}
                  </p>
                  {brand.href && (
                    <Link href={brand.href} className="text-xs font-bold uppercase tracking-widest text-neutral-100 hover:text-white mt-4 flex items-center gap-2">
                      Launch Portal <ChevronRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Capability Grid */}
      <section className="bg-neutral-950 py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-16">
          <div className="flex flex-col gap-4 items-center text-center">
            <h2 className="text-4xl font-bold text-white tracking-tight uppercase">Strategic Capabilities</h2>
            <p className="text-neutral-500 max-w-xl">Deep domain expertise across the ACoolECOSYSTEM service spectrum.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {capabilities.map((cap) => {
                const Icon = capIconMap[cap.title] || Zap;
                return (
                    <div key={cap.title} className="flex flex-col items-center text-center gap-6 p-10 rounded-3xl border border-neutral-900 bg-neutral-900/10 hover:bg-neutral-900/40 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
                        <Icon className="w-8 h-8" />
                        </div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-sm">{cap.title}</h4>
                    </div>
                );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-white tracking-tight uppercase">Implementation Roadmap</h2>
          <p className="text-neutral-500">The 90-day trajectory for ACoolECOSYSTEM deployment.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmap.map((step) => (
            <div key={step.phase} className="flex flex-col gap-4 p-8 rounded-3xl border border-neutral-900 bg-neutral-900/20 hover:border-orange-500/30 transition-colors">
              <div className="text-xs font-bold uppercase tracking-widest text-orange-500">{step.phase}</div>
              <h3 className="text-lg font-bold text-white uppercase">{step.title}</h3>
              <ul className="flex flex-col gap-3">
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
         <div className="p-16 rounded-[3rem] bg-gradient-to-br from-emerald-950/20 via-black to-blue-950/20 border border-white/5 flex flex-col md:flex-row gap-16 items-center">
            <div className="flex flex-col gap-8 flex-1">
              <h2 className="text-5xl font-bold text-white tracking-tighter uppercase">AI Agent Stack</h2>
              <p className="text-neutral-400 text-xl leading-relaxed">
                The ecosystem is powered by a proprietary agent infrastructure designed for civic intelligence, market valuation, and automated knowledge management.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["ACoolPROMPT Agent", "ACoolDATASET Agent", "CITYHALL Civic Agent", "COLLECTOR Agent"].map(agent => (
                  <div key={agent} className="px-5 py-3 rounded-xl bg-black/60 border border-neutral-800 text-xs font-bold uppercase tracking-widest text-neutral-300">
                    {agent}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square rounded-[2rem] bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-700 font-mono text-[10px] overflow-hidden relative">
               <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-4 opacity-10">
                  {Array.from({length: 64}).map((_, i) => (
                    <div key={i} className="border border-current rounded-sm" />
                  ))}
               </div>
               <div className="z-10 flex flex-col items-center gap-4">
                    <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center animate-pulse">
                        <Cpu className="w-10 h-10 text-emerald-500" />
                    </div>
                    <span className="bg-black px-4 py-2 rounded-full border border-neutral-800 tracking-[0.2em]">AGENT_INFRA_v2.0</span>
               </div>
            </div>
         </div>
      </section>

      {/* GovCon Positioning */}
      <section className="max-w-7xl mx-auto px-6 w-full py-12 flex flex-col items-center text-center gap-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-[0.4em] opacity-50">Government Contracting Readiness</h2>
        <p className="text-neutral-400 max-w-2xl text-lg leading-relaxed">
          The ACoolECOSYSTEM is officially positioned for LA28 civic infrastructure support and local government digital modernization.
        </p>
        <Link href="/capabilities" className="btn-primary border border-orange-500/20 bg-orange-500/5 text-orange-500 hover:bg-orange-500/10 uppercase text-xs tracking-widest">
            View GovCon Capability Sheet
        </Link>
      </section>
    </div>
  );
}
