// src/App.jsx
import React from 'react';
import UserProfile from './components/UserProfile'; // Import the UserProfile component

function App() {
  return (
    <div className="App">
      {/* Use the UserProfile component and pass props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Enjoys traveling and reading" 
      />
    </div>
  );
}

export default App;
