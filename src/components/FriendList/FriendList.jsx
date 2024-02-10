import { FriendListItem } from './FriendsListItem';

import styles from '../FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
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
