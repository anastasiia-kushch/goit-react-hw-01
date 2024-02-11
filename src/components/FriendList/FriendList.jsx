import { FriendListItem } from './FriendsListItem';

import styles from '../FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {  //в пропс friends прийшов масив friends
  return (
    <ul className={styles.container}>
      {friends.map((friend) => (
        <li className={styles.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

//повертаємо ul список li (на кожному елементі li має бути key!)
//мапаємо масив friends і для кожного елемента створюємо li, 
// який в собі містить компонент FriendListItem (в який із масива обʼєктів friends приходять такі дані: avatar, name, isOnline)