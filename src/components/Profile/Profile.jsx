import styles from '../Profile/Profile.module.css';

export const Profile = ({    //отримуємо пропси і робимо деструктуризацію
  name,   
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarCont}>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.summary}>{'@' + tag}</p>
        <p className={styles.summary}>{location}</p>
      </div>
      <ul className={styles.info}>
        <li className={styles.infoItem}>
          <span>Followers</span>
          <span style={{ fontWeight: 800 }}>{followers}</span>
        </li>
        <li className={styles.infoItem}>
          <span>Views</span>
          <span style={{ fontWeight: 800 }}>{views}</span>
        </li>
        <li className={styles.infoItem}>
          <span>Likes</span>
          <span style={{ fontWeight: 800 }}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

//повертаємо розмітку, де дані змінюються динамічно 