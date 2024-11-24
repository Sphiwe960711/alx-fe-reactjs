// src/App.jsx
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';  // Import the new component
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <MainContent />
      <Footer />
      <Header />
      <WelcomeMessage />  {/* Include the new component here */}
    </div>
  );
}

export default App;
