import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from '../ProfilePage'; // Or your main component
import { UserProvider } from './UserContext'; // Import UserProvider

// Define the user data
const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

// Render the component tree with UserProvider
ReactDOM.render(
  <UserProvider userData={userData}>
    <ProfilePage /> {/* Main component */}
  </UserProvider>,
  document.getElementById('root')
);