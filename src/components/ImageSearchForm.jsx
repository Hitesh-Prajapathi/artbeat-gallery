import { useState } from "react";

function ImageSearchForm({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  };

  const quickSearches = ["dance", "music", "painting", "instruments", "theater"];

  return (
    <div className="max-w-3xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-grow">
            <input
              type="text"
              className="w-full px-6 py-4 rounded-xl bg-white border-2 border-gray-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-300 shadow-md text-gray-700 placeholder-gray-400"
              placeholder="Search for dance, music, painting, instruments..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <svg 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Search
          </button>
        </div>
      </form>

      <div className="flex flex-wrap justify-center gap-2">
        <span className="text-sm text-gray-600 self-center mr-2">Quick search:</span>
        {quickSearches.map((term) => (
          <button
            key={term}
            onClick={() => onSearch(term)}
            className="px-4 py-2 text-sm bg-white text-purple-600 border-2 border-purple-200 rounded-full hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 font-medium"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageSearchForm;
