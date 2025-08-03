import React, { useState } from 'react';

const SearchForm = ({ onSearch, loading }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
            GitHub Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleInputChange}
            placeholder="Enter GitHub username (e.g., octocat)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !username.trim()}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Searching...' : 'Search User'}
        </button>
      </form>
    </div>
  );
};

export default SearchForm;