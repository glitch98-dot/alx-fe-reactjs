import React, { useState } from 'react';
import githubService from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await githubService.fetchUserData(searchTerm.trim());
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          GitHub User Search
        </h1>
        <p className="text-gray-600">Search for GitHub users and view their profiles</p>
      </div>

      <div className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
            placeholder="Enter GitHub username..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
          <button
            onClick={handleSubmit}
            disabled={loading || !searchTerm.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-8">
          <span className="text-lg text-gray-600">Loading...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <span className="text-red-700 font-medium">{error}</span>
        </div>
      )}

      {userData && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <img
              src={userData.avatar_url}
              alt={`${userData.login}'s avatar`}
              className="w-20 h-20 rounded-full border-2 border-gray-300"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {userData.name || userData.login}
              </h2>
              
              {userData.name && userData.name !== userData.login && (
                <p className="text-gray-600 mb-2">@{userData.login}</p>
              )}
              
              {userData.bio && (
                <p className="text-gray-700 mb-3">{userData.bio}</p>
              )}
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                {userData.location && (
                  <span>{userData.location}</span>
                )}
                {userData.company && (
                  <span>{userData.company}</span>
                )}
                <span>{userData.followers} followers</span>
                <span>{userData.public_repos} repos</span>
              </div>
              
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;