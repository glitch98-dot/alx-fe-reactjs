import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      <Header />
      
      <div style={{ 
        padding: '0 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <UserProfile 
          name="Alice Johnson" 
          age="28" 
          bio="Passionate traveler and photographer who loves exploring new cultures and capturing beautiful moments around the world."
        />
        
        <MainContent />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;