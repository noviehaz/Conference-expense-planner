export default function LandingPage({ onGetStarted }) {
  return (
    <div 
      className="min-h-screen relative flex items-center justify-center p-6 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&q=80')`
      }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-amber-400 leading-tight">
            Conference Expense Planner
          </h1>
          <p className="text-xl text-slate-200 font-medium">
            Plan your next major event with us!
          </p>
          <button
            onClick={onGetStarted}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 text-lg"
          >
            Get Started
          </button>
        </div>

        <div className="bg-slate-800/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-slate-700/80 space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
          <p>
            Welcome to <strong className="text-amber-400">BudgetEase Solutions</strong>, your trusted partner in simplifying budget management and financial solutions. At BudgetEase, we understand the importance of effective budget planning and strive to provide intuitive, user-friendly solutions to meet the diverse needs of our clients.
          </p>
          <p>
            With a commitment to efficiency and innovation, we empower individuals and businesses to take control of their finances and achieve their goals with ease.
          </p>
          <p>
            At BudgetEase Solutions, our mission is to make budgeting effortless and accessible for everyone. Whether you're a small business owner, a busy professional, or an individual looking to manage your personal finances, we offer tailored solutions to streamline your budgeting process.
          </p>
        </div>
      </div>
    </div>
  );
}