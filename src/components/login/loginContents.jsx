import React from 'react';
import styles from '../../assets/css/login/loginContents.module.css';

const LoginContents = ({ onSign }) => {
  return (
    <>
      <div className={styles.contents}>
        <h1 className={styles.title}>Login</h1>
        <section>
          <button className={styles.button} onClick={onSign}>
            Google
          </button>
          <button className={styles.button} onClick={onSign}>
            Github
          </button>
        </section>
      </div>
    </>
  );
};

export default LoginContents;
