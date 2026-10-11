export default function MealSelection({ meals, numberOfPeople, setNumberOfPeople, onToggleMeal }) {
  const mealTotal = meals
    .filter((m) => m.selected)
    .reduce((acc, m) => acc + m.cost * numberOfPeople, 0);

  return (
    <section id="meals-section" className="space-y-6 pt-8 pb-12">
      <div className="bg-sky-950/80 border border-sky-800 p-3 text-center rounded-xl">
        <h2 className="text-xl font-bold text-sky-200">Meals Selection</h2>
      </div>

      <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-center gap-3">
          <label className="font-bold text-slate-200">Number of People:</label>
          <input
            type="number"
            min="1"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(Math.max(1, Number(e.target.value)))}
            className="bg-slate-900 border border-slate-700 rounded-lg p-2 w-28 text-center text-amber-400 font-bold text-lg focus:outline-none focus:border-amber-400"
          />
        </div>

        <div className="grid grid-cols-2 gap-6 p-4">
          {meals.map((meal) => (
            <label key={meal.id} className="flex items-center gap-3 cursor-pointer bg-slate-900/60 p-4 rounded-lg border border-slate-700/80 hover:border-slate-600">
              <input
                type="checkbox"
                checked={meal.selected}
                onChange={() => onToggleMeal(meal.id)}
                className="w-5 h-5 accent-sky-500 rounded"
              />
              <div>
                <div className="font-bold text-slate-100">{meal.name}</div>
                <div className="text-sm text-slate-400">${meal.cost}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-slate-800 border border-slate-700 px-8 py-3 rounded-xl font-bold text-lg">
          Total Cost: <span className="text-emerald-400">${mealTotal}</span>
        </div>
      </div>
    </section>
  );
}