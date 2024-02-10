import { FriendListItem } from './FriendsListItem';

export const FriendList = () => {
  return (
    <ul>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      <li>
        <FriendListItem avatar={} name={} isOnline={}/>
      </li>
    </ul>
  );
};
