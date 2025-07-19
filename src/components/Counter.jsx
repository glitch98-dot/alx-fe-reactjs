import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '50px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      width: '300px',
      marginLeft: 'auto',
      marginRight: 'auto',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ color: '#2c3e50' }}>Counter App</h2>
      <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>
        Current Count: <strong>{count}</strong>
      </p>
      <div>
        <button 
          onClick={() => setCount(count + 1)} 
          style={buttonStyle}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)} 
          style={buttonStyle}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)} 
          style={buttonStyle}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
const buttonStyle = {
  margin: '0 5px',
  padding: '10px 15px',
  fontSize: '1rem',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#3498db',
  color: '#fff'
};

export default Counter;
