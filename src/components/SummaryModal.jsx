import { X } from 'lucide-react';

export default function SummaryModal({ isOpen, onClose, rooms, addons, meals, numberOfPeople, totalEventCost }) {
  if (!isOpen) return null;

  const selectedRooms = rooms.filter((r) => r.quantity > 0);
  const selectedAddons = addons.filter((a) => a.quantity > 0);
  const selectedMeals = meals.filter((m) => m.selected);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-3xl p-6 relative shadow-2xl space-y-6 my-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>

        <div className="text-center space-y-1">
          <h2 className="text-xl font-bold text-slate-200">TOTAL COST FOR THE EVENT</h2>
          <p className="text-4xl font-black text-amber-400">${totalEventCost}</p>
        </div>

        <div className="overflow-x-auto border border-slate-700 rounded-xl">
          <table className="w-full text-left text-sm text-slate-200">
            <thead className="bg-slate-900 border-b border-slate-700 text-xs uppercase font-bold text-slate-400">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Unit Cost</th>
                <th className="p-3">Quantity</th>
                <th className="p-3 text-right">Total Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/60 bg-slate-800/40">
              {/* Selected Rooms */}
              {selectedRooms.map((room) => (
                <tr key={room.id}>
                  <td className="p-3 font-medium">{room.name} (Capacity:{room.capacity})</td>
                  <td className="p-3">${room.cost}</td>
                  <td className="p-3">{room.quantity}</td>
                  <td className="p-3 text-right font-bold text-emerald-400">${room.cost * room.quantity}</td>
                </tr>
              ))}

              {/* Selected Addons */}
              {selectedAddons.map((addon) => (
                <tr key={addon.id}>
                  <td className="p-3 font-medium">{addon.name}</td>
                  <td className="p-3">${addon.cost}</td>
                  <td className="p-3">{addon.quantity}</td>
                  <td className="p-3 text-right font-bold text-emerald-400">${addon.cost * addon.quantity}</td>
                </tr>
              ))}

              {/* Selected Meals */}
              {selectedMeals.map((meal) => (
                <tr key={meal.id}>
                  <td className="p-3 font-medium">{meal.name}</td>
                  <td className="p-3">${meal.cost}</td>
                  <td className="p-3">For {numberOfPeople} people</td>
                  <td className="p-3 text-right font-bold text-emerald-400">${meal.cost * numberOfPeople}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2 rounded-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}