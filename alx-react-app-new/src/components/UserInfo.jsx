// src/UserInfo.jsx
import { useContext } from 'react';
import { UserContext } from './UserContext';  // Import the UserContext
import UserDetails from './UserDetails';

function UserInfo() {
  const userData = useContext(UserContext);  // Consume the userData from context

  return <UserDetails userData={userData} />;  // Pass it down to UserDetails
}

export default UserInfo;
