import React from 'react';

const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <div className="flex flex-col items-center">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="w-24 h-24 rounded-full border-4 border-gray-200 mb-4"
        />
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {user.name || user.login}
          </h2>
          <p className="text-gray-600 mb-2">@{user.login}</p>
          
          {user.bio && (
            <p className="text-gray-700 mb-4 text-sm">{user.bio}</p>
          )}
          
          <div className="flex justify-center space-x-6 mb-4 text-sm">
            <div className="text-center">
              <p className="font-semibold text-gray-900">{user.public_repos}</p>
              <p className="text-gray-600">Repositories</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-900">{user.followers}</p>
              <p className="text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-900">{user.following}</p>
              <p className="text-gray-600">Following</p>
            </div>
          </div>
          
          <div className="text-sm text-gray-600 mb-4">
            {user.location && (
              <p className="mb-1">📍 {user.location}</p>
            )}
            {user.company && (
              <p className="mb-1">🏢 {user.company}</p>
            )}
            {user.blog && (
              <p className="mb-1">
                🌐 <a href={user.blog} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {user.blog}
                </a>
              </p>
            )}
          </div>
          
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;