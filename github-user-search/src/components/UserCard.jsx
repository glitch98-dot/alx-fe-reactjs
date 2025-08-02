import React from 'react';

const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="border rounded p-4 flex gap-4 items-center">
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
        <p className="text-sm text-gray-500">@{user.login}</p>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline text-sm"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default UserCard;
