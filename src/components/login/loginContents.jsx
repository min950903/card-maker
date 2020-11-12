import React from 'react';
import styles from '../../assets/css/login/loginContents.module.css';

const LoginContents = () => {
  return (
    <>
      <div className={styles.contents}>
        <h1 className={styles.contents_h}>Login</h1>
        <p className={styles.contents_p}>
          <a>Google</a>
        </p>
        <p className={styles.contents_p}>
          <a>Github</a>
        </p>
      </div>
    </>
  );
};

export default LoginContents;
