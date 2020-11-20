import React from 'react';
import styles from '../../assets/css/common/header.module.css';
const Header = ({ onLogout }) => {
  return (
    <hedaer className={styles.header}>
      <button className={styles.logout} onLogout={onLogout}>
        Logout
      </button>
      <img
        className={styles.logo}
        src={require('../../assets/img/favicon.ico')}
        alt=''
      ></img>
      <h2 className={styles.title}>Business Card Maker</h2>
    </hedaer>
  );
};

export default Header;
