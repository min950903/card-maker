import React from 'react';
import styles from './login.module.css';
const LoginHeader = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.header_img}
        src='../../../public/favicon.ico'
        alt=''
      ></img>
      <h2 className={styles.header_h}>Business Card Maker</h2>
    </div>
  );
};

export default LoginHeader;
