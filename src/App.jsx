import { useState } from 'react';
import './App.css';
import { Profile } from './components/Profile/Profile';
import { userData } from './data/userData';
import { friends } from './data/friendsData';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import { transactions } from './data/transaktions';


function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <hr/>
      <FriendList friends={friends} /> 
      <hr />
      <TransactionHistory items={transactions}/>
    </>
  );
}

export default App;
