import React from 'react';

function MainContent() {
  return (
    <main style={{ 
      padding: '30px',
      backgroundColor: '#ffffff',
      minHeight: '500px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      margin: '20px auto',
      maxWidth: '800px'
    }}>
      <h2 style={{ 
        color: '#2c3e50',
        fontSize: '2.2rem',
        marginBottom: '20px',
        textAlign: 'center',
        borderBottom: '3px solid #3498db',
        paddingBottom: '10px'
      }}>
        Welcome to My Travel Blog
      </h2>
      
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
      }}>
        <div style={{ 
          backgroundColor: '#ecf0f1',
          padding: '20px',
          borderRadius: '10px',
          flex: '1 1 300px',
          minWidth: '250px'
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
            lineHeight: '1.6',
            fontSize: '1rem'
          }}>
            The City of Light captivates visitors with its romantic atmosphere, 
            world-class museums, and iconic landmarks like the Eiffel Tower.
          </p>
        </div>
        
        <div style={{ 
          backgroundColor: '#ecf0f1',
          padding: '20px',
          borderRadius: '10px',
          flex: '1 1 300px',
          minWidth: '250px'
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
            lineHeight: '1.6',
            fontSize: '1rem'
          }}>
            A fascinating blend of traditional culture and cutting-edge technology, 
            Tokyo offers incredible cuisine and unique experiences.
          </p>
        </div>
        
        <div style={{ 
          backgroundColor: '#ecf0f1',
          padding: '20px',
          borderRadius: '10px',
          flex: '1 1 300px',
          minWidth: '250px'
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
            lineHeight: '1.6',
            fontSize: '1rem'
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