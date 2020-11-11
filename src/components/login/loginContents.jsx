import React from 'react';
import styles from './login.module.css';

const LoginContents = () => {
  return (
    <>
      <div className={styles.contents}>
        <h1 className={styles.contents_h}>Login</h1>
        <p className={styles.contents_p}>Google</p>
        <p className={styles.contents_p}>Github</p>
      </div>
    </>
  );
};

export default LoginContents;
