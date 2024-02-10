import styles from '../FriendList/FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={styles.icon} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      {isOnline ? (
        <p className={styles.online}>Online</p>
      ) : (
        <p className={styles.offline}>Offline</p>
      )}
    </div>
  );
};
