<<<<<<< HEAD
import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f4f6f8',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        color: '#2c3e50',
        fontSize: '2.5rem',
        marginBottom: '20px'
      }}>
        Welcome to My React App
      </h1>
      <Counter />
    </div>
  );
}

=======
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Moses Kavoo" age={25} bio="React enthusiast from Kenya." />
      <Footer />
    </div>
  );
}
>>>>>>> eca049cd9b1982261e074b3d95b0653909908f9a
export default App;
