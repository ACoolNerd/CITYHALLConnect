"use client";
import { useState } from "react";
import { cityServices } from "../../data/appData";
import { Send, CheckCircle } from "lucide-react";

export default function IssueIntake() {
  const [submitted, setSubmitted] = useState(false);
  
  if (submitted) {
    return (
      <div className="p-12 rounded-3xl bg-blue-900/10 border border-blue-500/20 flex flex-col items-center text-center gap-4">
        <CheckCircle className="w-12 h-12 text-emerald-500" />
        <h3 className="text-2xl font-bold text-white">Issue Reported</h3>
        <p className="text-neutral-400">Your report has been routed to the correct department via the ACool Civic Engine.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-4 px-6 py-2 rounded-lg bg-blue-600 text-white font-bold"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold text-white">Civic Issue Intake</h3>
        <p className="text-sm text-neutral-500">Route your concerns directly to city departments.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Service Category</label>
          <select className="bg-black border border-neutral-800 rounded-lg p-3 text-sm text-white focus:border-blue-500 outline-none">
            {cityServices.map(service => (
              <option key={service.id} value={service.id}>{service.name}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Location</label>
          <input type="text" placeholder="Street Address or GPS" className="bg-black border border-neutral-800 rounded-lg p-3 text-sm text-white focus:border-blue-500 outline-none" />
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Description</label>
        <textarea rows={4} placeholder="Describe the issue..." className="bg-black border border-neutral-800 rounded-lg p-3 text-sm text-white focus:border-blue-500 outline-none resize-none" />
      </div>

      <button 
        onClick={() => setSubmitted(true)}
        className="btn-primary bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" /> Submit to Civic Engine
      </button>
    </div>
  );
}
