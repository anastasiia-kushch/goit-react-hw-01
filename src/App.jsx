import { useState } from 'react';
import './App.css';
import { Profile } from './components/Profile/Profile';
import { userData } from './components/Profile/userData';

function App() {
  console.log(userData);
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}

export default App;
