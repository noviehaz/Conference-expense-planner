import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import RoomSelection from './components/RoomSelection';
import AddonSelection from './components/AddonSelection';
import MealSelection from './components/MealSelection';
import SummaryModal from './components/SummaryModal';

import { initialRooms, initialAddons, initialMeals } from './data/initialData';

export default function App() {
  const [showProductSelection, setShowProductSelection] = useState(false);
  const [rooms, setRooms] = useState(initialRooms);
  const [addons, setAddons] = useState(initialAddons);
  const [meals, setMeals] = useState(initialMeals);
  const [numberOfPeople, setNumberOfPeople] = useState(50);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const handleUpdateRoomQuantity = (id, delta) => {
    setRooms((prev) =>
      prev.map((r) => (r.id === id ? { ...r, quantity: Math.max(0, r.quantity + delta) } : r))
    );
  };

  const handleUpdateAddonQuantity = (id, delta) => {
    setAddons((prev) =>
      prev.map((a) => (a.id === id ? { ...a, quantity: Math.max(0, a.quantity + delta) } : a))
    );
  };

  const handleToggleMeal = (id) => {
    setMeals((prev) =>
      prev.map((m) => (m.id === id ? { ...m, selected: !m.selected } : m))
    );
  };

  const roomTotal = rooms.reduce((acc, r) => acc + r.cost * r.quantity, 0);
  const addonTotal = addons.reduce((acc, a) => acc + a.cost * a.quantity, 0);
  const mealTotal = meals
    .filter((m) => m.selected)
    .reduce((acc, m) => acc + m.cost * numberOfPeople, 0);

  const totalEventCost = roomTotal + addonTotal + mealTotal;

  if (!showProductSelection) {
    return <LandingPage onGetStarted={() => setShowProductSelection(true)} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-12">
      <Navbar onOpenSummary={() => setIsSummaryOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        <RoomSelection rooms={rooms} onUpdateQuantity={handleUpdateRoomQuantity} />
        <AddonSelection addons={addons} onUpdateQuantity={handleUpdateAddonQuantity} />
        <MealSelection
          meals={meals}
          numberOfPeople={numberOfPeople}
          setNumberOfPeople={setNumberOfPeople}
          onToggleMeal={handleToggleMeal}
        />
      </main>

      <SummaryModal
        isOpen={isSummaryOpen}
        onClose={() => setIsSummaryOpen(false)}
        rooms={rooms}
        addons={addons}
        meals={meals}
        numberOfPeople={numberOfPeople}
        totalEventCost={totalEventCost}
      />
    </div>
  );
}