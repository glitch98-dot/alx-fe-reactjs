import React, { useState } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import UserCard from './components/UserCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import githubService from './services/githubService';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUser(null);
    setSearchPerformed(true);

    try {
      const userData = await githubService.fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setError(null);
    setSearchPerformed(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <SearchForm onSearch={handleSearch} loading={loading} />
          
          {loading && <LoadingSpinner />}
          
          {error && (
            <ErrorMessage message={error} onRetry={handleRetry} />
          )}
          
          {user && !loading && !error && (
            <UserCard user={user} />
          )}
          
          {!user && !loading && !error && searchPerformed && (
            <div className="text-center text-gray-600 py-8">
              <p>Looks like we can't find the user</p>
            </div>
          )}
          
          {!searchPerformed && !loading && (
            <div className="text-center text-gray-600 py-8">
              <p>Enter a GitHub username above to get started!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;