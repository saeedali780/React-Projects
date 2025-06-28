import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <span className={styles.logo}>🤖</span>
    <span className={styles.title}>Saeed's GPT</span>
  </header>
);

export default Header; 