import React from 'react';
import styles from '../../assets/css/common/header.module.css';
const Header = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.header_img}
        src={require('../../assets/img/favicon.ico')}
        alt=''
      ></img>
      <h2 className={styles.header_h}>Business Card Maker</h2>
    </div>
  );
};

export default Header;
