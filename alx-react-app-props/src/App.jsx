import React from 'react';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext'; // Correct import

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider userData={userData}> {/* UserContext.Provider with value */}
      <ProfilePage /> {/* Component wrapped in context provider */}
    </UserProvider>
  );
}

export default App;