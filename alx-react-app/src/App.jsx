// src/App.jsx
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';  // Import the new component

function App() {
  return (
    <div className="App">
      <WelcomeMessage />  {/* Include the new component here */}
    </div>
  );
}

export default App;
