import { useState, useEffect } from 'react';
import { searchUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const perPage = 30;

  const resetAndSearch = async () => {
    setPage(1);
    setResults([]);
    await performSearch(1, true);
  };

  const performSearch = async (targetPage = 1, replacing = false) => {
    if (!username.trim() && !location.trim() && !minRepos) {
      setError('Provide at least one search criterion.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { total: newTotal, items } = await searchUsers({
        username,
        location,
        minRepos: minRepos ? Number(minRepos) : 0,
        page: targetPage,
        per_page: perPage,
      });

      setTotal(newTotal);
      setResults((prev) => (replacing ? items : [...prev, ...items]));
      setPage(targetPage);
    } catch (err) {
      setError(err.message || 'Search failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await resetAndSearch();
  };

  const loadMore = async () => {
    if (results.length >= total) return;
    await performSearch(page + 1);
  };

  useEffect(() => {
    // optional: auto-search on mount or persisting previous query
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">GitHub User Search</h1>

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-3">
        <div className="col-span-3 sm:col-span-1">
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="e.g. octocat"
            className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="col-span-3 sm:col-span-1">
          <label htmlFor="location" className="block text-sm font-medium">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Kenya"
            className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="col-span-3 sm:col-span-1">
          <label htmlFor="minRepos" className="block text-sm font-medium">
            Min Repos
          </label>
          <input
            id="minRepos"
            type="number"
            min="0"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="e.g. 10"
            className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="col-span-3 flex items-end gap-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 disabled:opacity-50"
          >
            Search
          </button>
          <button
            type="button"
            onClick={() => {
              setUsername('');
              setLocation('');
              setMinRepos('');
              setResults([]);
              setTotal(0);
              setError(null);
              setPage(1);
            }}
            className="inline-flex items-center px-4 py-2 border rounded-md shadow hover:bg-gray-100"
          >
            Clear
          </button>
        </div>
      </form>

      <div className="mt-6">
        {loading && <p className="text-sm text-gray-600">Loading...</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}
        {!loading && !error && total > 0 && (
          <p className="text-sm mb-2">
            Showing {results.length} of {total} users
          </p>
        )}

        <ul className="space-y-4">
          {results.map((user) => (
            <li
              key={user.id}
              className="flex items-center gap-4 border rounded-lg p-4 hover:shadow-sm"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-medium truncate">
                    {user.login}
                  </div>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 hover:underline text-sm"
                  >
                    Profile
                  </a>
                </div>
                <div className="mt-1 flex flex-wrap gap-2 text-sm text-gray-600">
                  {user.type && <span className="inline-block">Type: {user.type}</span>}
                  {user.site_admin && <span className="inline-block">Admin</span>}
                  {/* Note: search API returns limited fields; for full details you'd fetch each user separately */}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {results.length > 0 && results.length < total && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={loadMore}
              disabled={loading}
              className="px-6 py-2 bg-gray-200 rounded-md shadow hover:bg-gray-300 disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Load more'}
            </button>
          </div>
        )}

        {total === 0 && !loading && !error && (
          <p className="text-sm text-gray-500 mt-4">No users match the criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
