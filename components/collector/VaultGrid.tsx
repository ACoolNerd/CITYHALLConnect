import { vaultItems } from "../../data/appData";
import { TrendingUp, ShieldCheck } from "lucide-react";

export default function VaultGrid() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-white uppercase tracking-widest">Collector Vault</h3>
          <p className="text-sm text-neutral-500">Live inventory and valuation intelligence.</p>
        </div>
        <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 flex flex-col">
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Vault Value</span>
                <span className="text-lg font-black text-emerald-500">$14,950,000</span>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vaultItems.map(item => (
          <div key={item.id} className="group flex flex-col gap-4 p-4 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 transition-all">
            <div className="aspect-[3/4] rounded-2xl bg-black overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur border border-white/10 text-[10px] font-black text-white">
                {item.grade}
              </div>
            </div>
            <div className="flex flex-col gap-2 px-2">
              <h4 className="font-bold text-white leading-tight">{item.name}</h4>
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-white">${item.value.toLocaleString()}</span>
                <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold">
                  <TrendingUp className="w-3 h-3" /> +12.4%
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2 pt-4 border-t border-neutral-800">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Provenance Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
