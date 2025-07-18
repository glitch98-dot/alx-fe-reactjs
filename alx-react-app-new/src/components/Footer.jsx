import React from 'react';

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '30px 20px',
      marginTop: '40px',
      borderTop: '4px solid #3498db'
    }}>
      <div style={{ 
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h3 style={{ 
          fontSize: '1.5rem',
          marginBottom: '15px',
          color: '#ecf0f1'
        }}>
          Travel & Explore
        </h3>
        
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
          marginBottom: '20px'
        }}>
          <a href="#" style={{ 
            color: '#3498db',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'color 0.3s'
          }}>
            About
          </a>
          <a href="#" style={{ 
            color: '#3498db',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'color 0.3s'
          }}>
            Contact
          </a>
          <a href="#" style={{ 
            color: '#3498db',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'color 0.3s'
          }}>
            Blog
          </a>
          <a href="#" style={{ 
            color: '#3498db',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'color 0.3s'
          }}>
            Gallery
          </a>
        </div>
        
        <p style={{ 
          fontSize: '0.9rem',
          margin: '10px 0',
          opacity: '0.8'
        }}>
          Follow your dreams and explore the world, one city at a time.
        </p>
        
        <p style={{ 
          fontSize: '0.8rem',
          margin: '15px 0 0 0',
          color: '#95a5a6'
        }}>
          © 2024 My Travel Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;