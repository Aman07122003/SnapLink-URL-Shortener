function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          🎉 Tailwind is Working!
        </h1>

        <p className="mt-4 text-gray-600">
          Your React + Vite + Tailwind setup is ready.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;