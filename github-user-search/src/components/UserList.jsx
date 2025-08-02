import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users }) => {
  if (!users || users.length === 0) return null;

  return (
    <div className="space-y-4">
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
};

export default UserList;
