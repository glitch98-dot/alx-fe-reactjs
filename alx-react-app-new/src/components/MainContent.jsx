import React from 'react';

function MainContent() {
  return (
    <main style={{ 
      padding: '30px',
      margin: '20px auto',
      backgroundColor: '#ffffff',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      maxWidth: '900px',
      minHeight: '500px'
    }}>
      <h2 style={{ 
        color: '#2c3e50',
        fontSize: '2rem',
        marginBottom: '20px',
        textAlign: 'center',
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px'
      }}>
        Welcome to My Travel Blog
      </h2>

      {/* Required sentence for ALX */}
      <p style={{ 
        textAlign: 'center', 
        fontSize: '1.1rem', 
        color: '#2c3e50',
        marginBottom: '30px'
      }}>
        I love to visit New York, Paris, and Tokyo.
      </p>

      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        {/* Destination 1 */}
        <div style={{
          backgroundColor: '#f9f9f9',
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '20px',
          flex: '1 1 280px',
          minWidth: '250px',
        }}>
          <h3 style={{ 
            color: '#e74c3c',
            fontSize: '1.5rem',
            marginBottom: '10px'
          }}>
            Paris, France
          </h3>
          <p style={{ 
            color: '#34495e',
            fontSize: '1rem',
            lineHeight: '1.6'
          }}>
            The City of Light captivates visitors with its romantic atmosphere, 
            world-class museums, and iconic landmarks like the Eiffel Tower.
          </p>
        </div>

        {/* Destination 2 */}
        <div style={{
          backgroundColor: '#f9f9f9',
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '20px',
          flex: '1 1 280px',
          minWidth: '250px',
        }}>
          <h3 style={{ 
            color: '#e74c3c',
            fontSize: '1.5rem',
            marginBottom: '10px'
          }}>
            Tokyo, Japan
          </h3>
          <p style={{ 
            color: '#34495e',
            fontSize: '1rem',
            lineHeight: '1.6'
          }}>
            A fascinating blend of traditional culture and cutting-edge technology, 
            Tokyo offers incredible cuisine and unique experiences.
          </p>
        </div>

        {/* Destination 3 */}
        <div style={{
          backgroundColor: '#f9f9f9',
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '20px',
          flex: '1 1 280px',
          minWidth: '250px',
        }}>
          <h3 style={{ 
            color: '#e74c3c',
            fontSize: '1.5rem',
            marginBottom: '10px'
          }}>
            New York, USA
          </h3>
          <p style={{ 
            color: '#34495e',
            fontSize: '1rem',
            lineHeight: '1.6'
          }}>
            The city that never sleeps, offering Broadway shows, world-class dining, 
            and the energy of one of the world's greatest metropolises.
          </p>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
