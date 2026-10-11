import { Plus, Minus } from 'lucide-react';

export default function AddonSelection({ addons, onUpdateQuantity }) {
  const addonTotal = addons.reduce((acc, a) => acc + a.cost * a.quantity, 0);

  return (
    <section id="addons-section" className="space-y-6 pt-8">
      <div className="bg-sky-950/80 border border-sky-800 p-3 text-center rounded-xl">
        <h2 className="text-xl font-bold text-sky-200">Add-ons Selection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {addons.map((addon) => (
          <div key={addon.id} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden flex flex-col justify-between p-4 shadow-lg space-y-3">
            <div className="space-y-2">
              <div className="h-40 bg-slate-900 rounded-lg overflow-hidden">
                <img src={addon.image} alt={addon.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-center text-slate-100">{addon.name}</h3>
              <p className="text-center font-bold text-amber-400">${addon.cost}</p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => onUpdateQuantity(addon.id, -1)}
                className="p-1.5 bg-cyan-500 text-slate-950 font-bold rounded hover:bg-cyan-400 transition"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold w-6 text-center text-slate-100">{addon.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(addon.id, 1)}
                className="p-1.5 bg-sky-600 text-white font-bold rounded hover:bg-sky-500 transition"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="bg-slate-800 border border-slate-700 px-8 py-3 rounded-xl font-bold text-lg">
          Total Cost: <span className="text-emerald-400">${addonTotal}</span>
        </div>
      </div>
    </section>
  );
}