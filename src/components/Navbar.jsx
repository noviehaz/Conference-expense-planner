export default function Navbar({ onOpenSummary }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-black text-amber-400 tracking-wide">
          Conference Expense Planner
        </h1>

        <nav className="flex items-center gap-6 text-sm font-semibold text-slate-300">
          <button onClick={() => scrollToSection('venue-section')} className="hover:text-amber-400 transition">
            Venue
          </button>
          <button onClick={() => scrollToSection('addons-section')} className="hover:text-amber-400 transition">
            Add-ons
          </button>
          <button onClick={() => scrollToSection('meals-section')} className="hover:text-amber-400 transition">
            Meals
          </button>
          <button
            onClick={onOpenSummary}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-lg font-bold transition shadow"
          >
            Show Details
          </button>
        </nav>
      </div>
    </header>
  );
}