import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(query.trim());
      setUser(data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("Looks like we cant find the user");
      } else {
        setError("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="GitHub username"
          style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
        />
        <button type="submit" disabled={loading} style={{ padding: '8px 12px' }}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div
          style={{
            border: '1px solid #ccc',
            borderRadius: 8,
            padding: 12,
            marginTop: 12,
            textAlign: 'center',
          }}
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            width={100}
            height={100}
            style={{ borderRadius: '50%' }}
          />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
