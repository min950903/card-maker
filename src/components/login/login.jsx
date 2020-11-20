import React, { useCallback } from 'react';
import styles from '../../assets/css/login/login.module.css';
import Footer from '../common/footer';
import Header from '../common/header';

const Login = ({ authService, checkLogin }) => {
  const onSign = useCallback(
    (evnet) => {
      authService
        .login(evnet.currentTarget.textContent)
        .then((result) => {
          checkLogin();
        })
        .catch((err) => {});
    },
    [authService, checkLogin]
  );

  return (
    <>
      <setion className={styles.contents}>
        <Header />
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onSign}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.button} onClick={onSign}>
              Github
            </button>
          </li>
        </ul>
        <Footer />
      </setion>
    </>
  );
};

export default Login;
