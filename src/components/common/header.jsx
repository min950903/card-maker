import React, { memo } from 'react';
import styles from '../../assets/css/common/header.module.css';
const Header = memo(({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img
        className={styles.logo}
        src={require('../../assets/img/favicon.ico')}
        alt=''
      ></img>
      <h2 className={styles.title}>Business Card Maker</h2>
    </header>
  );
});

export default Header;
