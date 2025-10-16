import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">
        React + Tailwind CSS Demo 🚀
      </h1>

      <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl w-80 flex flex-col items-center">
        <p className="text-2xl font-semibold mb-4">Count: {count}</p>

        <div className="flex gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
          >
            Decrement
          </button>
        </div>
      </div>

      <p className="mt-6 text-sm opacity-90">
        Built with ❤️ using React + TailwindCSS
      </p>
    </div>
  );
}
