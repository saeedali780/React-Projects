import React from 'react';
import styles from './Message.module.css';

const avatars = {
  user: '🧑',
  ai: '🤖',
};
const names = {
  user: 'You',
  ai: "Saeed's GPT",
};

const Message = ({ role, text, loading }) => (
  <div className={styles[role + 'Msg']}>
    <div className={styles.avatar}>{avatars[role]}</div>
    <div className={styles.bubble}>
      <div className={styles.name}>{names[role]}</div>
      <div className={styles.text}>
        {loading ? <span className={styles.loadingDot}>...</span> : text}
      </div>
    </div>
  </div>
);

export default Message; 