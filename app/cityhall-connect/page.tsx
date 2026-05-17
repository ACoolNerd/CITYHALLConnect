import Link from "next/link";
import IssueIntake from "../../components/civic/IssueIntake";
import MeetingTracker from "../../components/civic/MeetingTracker";

export default function CityHallConnectPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col gap-24">
      <header className="flex flex-col gap-4">
        <div className="text-blue-500 font-bold uppercase tracking-widest text-sm">Civic Intelligence</div>
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase">CITYHALLConnect</h1>
        <p className="text-xl text-neutral-400 leading-relaxed">
          The civic intelligence platform designed to bridge the gap between residents and local government through AI-driven navigation and issue tracking.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">Mission</h2>
          <p className="text-neutral-400 text-sm">
            To provide every resident with a high-fidelity interface to their city&apos;s services, public data, and decision-making processes.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">Audience</h2>
          <ul className="text-neutral-400 text-sm list-disc list-inside">
            <li>Local Residents</li>
            <li>City Officials</li>
            <li>Community Organizers</li>
            <li>Small Businesses</li>
          </ul>
        </div>
      </section>

      {/* Feature Sections */}
      <IssueIntake />
      <MeetingTracker />

      <section className="p-8 rounded-2xl bg-blue-900/10 border border-blue-900/30 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-white">Implementation Roadmap</h2>
        <p className="text-neutral-400 text-sm">
          Currently in Phase 2: Alpha development of the Civic Engine and Issue Intake UI. Targeted beta launch for local community testing in Q3 2026.
        </p>
      </section>

      <div className="flex gap-4">
        <Link href="/" className="px-6 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-bold">← Back to Ecosystem</Link>
        <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold">Request Demo</button>
      </div>
    </div>
  );
}
