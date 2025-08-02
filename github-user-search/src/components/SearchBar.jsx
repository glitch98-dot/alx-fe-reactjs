import React, { useState } from 'react';

const SearchBar = ({ onSearch, disabled }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        aria-label="GitHub username"
        placeholder="Enter GitHub username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow border rounded px-3 py-2"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={disabled}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
