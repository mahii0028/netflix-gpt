import React from "react";

const GptMovieSuggestion = () => {
  return (
    <div className="w-full max-w-4xl mt-8 px-4 z-10">
      <p className="text-lg text-gray-200">
        Start typing to see suggestions...
      </p>

      {/* Example suggestion box */}
      {/* You can replace this with actual dynamic content */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Sample movie cards */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-neutral-800 rounded p-4 h-48 flex items-center justify-center text-white"
          >
            Movie {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
