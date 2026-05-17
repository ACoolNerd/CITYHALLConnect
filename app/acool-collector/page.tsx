import Link from "next/link";
import VaultGrid from "../../components/collector/VaultGrid";

export default function ACoolCollectorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-24">
      <header className="flex flex-col gap-4 max-w-4xl">
        <div className="text-orange-500 font-bold uppercase tracking-widest text-sm">Commerce Intelligence</div>
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase">ACoolCOLLECTOR</h1>
        <p className="text-xl text-neutral-400 leading-relaxed">
          The collectibles intelligence platform and data-driven marketplace engine for high-value niche commerce.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">Mission</h2>
          <p className="text-neutral-400 text-sm">
            To professionalize the collectibles market through accurate data, provenance tracking, and automated commerce workflows.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">Capabilities</h2>
          <ul className="text-neutral-400 text-sm list-disc list-inside">
            <li>Inventory Intelligence</li>
            <li>Auction Analytics</li>
            <li>Marketplace Automation</li>
            <li>Provenance Verification</li>
          </ul>
        </div>
      </section>

      <VaultGrid />

      <section className="p-8 rounded-2xl bg-orange-900/10 border border-orange-900/30 flex flex-col gap-4 max-w-4xl">
        <h2 className="text-xl font-bold text-white">Implementation Roadmap</h2>
        <p className="text-neutral-400 text-sm">
          Currently in Phase 1: Building the card database schema and inventory tracking alpha. Targeted public commerce rollout in Q4 2026.
        </p>
      </section>

      <div className="flex gap-4">
        <Link href="/" className="px-6 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-bold">← Back to Ecosystem</Link>
        <button className="px-6 py-2 rounded-lg bg-[#E8520F] hover:bg-[#ff5f1f] text-white text-sm font-bold">Join Waitlist</button>
      </div>
    </div>
  );
}
