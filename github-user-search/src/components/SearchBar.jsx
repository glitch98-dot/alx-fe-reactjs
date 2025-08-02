import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import UserCard from './UserCard';

const Search = () => {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setUser(null);

    try {
      const data = await fetchUserData(
        query.trim(),
        process.env.REACT_APP_GITHUB_TOKEN || null
      );
      setUser(data);
    } catch (err) {
      if (err.code === 404 || err.message === 'Not Found') {
        setError("Looks like we cant find the user");
      } else {
        setError('Something went wrong. Please try again.');
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          aria-label="GitHub username"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={loading}
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-600">Loading...</p>}

      {error && <p className="text-red-600">{error}</p>}

      {user && <UserCard user={user} />}
    </div>
  );
};

export default Search;
