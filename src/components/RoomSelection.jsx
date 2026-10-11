import { Plus, Minus } from 'lucide-react';

export default function RoomSelection({ rooms, onUpdateQuantity }) {
  const roomTotal = rooms.reduce((acc, r) => acc + r.cost * r.quantity, 0);

  return (
    <section id="venue-section" className="space-y-6 pt-4">
      <div className="bg-sky-950/80 border border-sky-800 p-3 text-center rounded-xl">
        <h2 className="text-xl font-bold text-sky-200">Venue Room Selection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden flex flex-col justify-between p-4 shadow-lg space-y-3">
            <div className="space-y-2">
              <div className="h-40 bg-slate-900 rounded-lg overflow-hidden">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-center text-slate-100">{room.name}</h3>
              <p className="text-xs text-center text-slate-400">(Capacity:{room.capacity})</p>
              <p className="text-center font-bold text-amber-400">${room.cost}</p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => onUpdateQuantity(room.id, -1)}
                className="p-1.5 bg-cyan-500 text-slate-950 font-bold rounded hover:bg-cyan-400 transition"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold w-6 text-center text-slate-100">{room.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(room.id, 1)}
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
          Total Cost: <span className="text-emerald-400">${roomTotal}</span>
        </div>
      </div>
    </section>
  );
}