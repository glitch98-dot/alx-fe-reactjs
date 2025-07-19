import React from 'react';

function UserProfile() {
  return (
    <div style={{ 
      border: '2px solid #3498db', 
      padding: '20px', 
      margin: '20px auto', 
      maxWidth: '600px', 
      borderRadius: '10px', 
      backgroundColor: '#f9f9f9',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#e74c3c', fontSize: '1.8rem', marginBottom: '10px' }}>
        User Profile
      </h2>
      <span style={{ 
        color: 'blue', 
        fontSize: '1.2rem', 
        fontWeight: 'bold' 
      }}>
        Moses Kavoo
      </span>
    </div>
  );
}

export default UserProfile;
