import React, { useCallback, useEffect } from 'react';
import styles from '../../assets/css/login/login.module.css';
import Footer from '../common/footer';
import Header from '../common/header';

const Login = ({ authService, checkLogin }) => {
  const onSign = useCallback(
    (evnet) => {
      authService
        .login(evnet.currentTarget.textContent)
        .then((data) => {
          checkLogin(data.user.uid);
        })
        .catch((err) => {});
    },
    [authService, checkLogin]
  );

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && checkLogin(user.id);
    });
  }, [authService, checkLogin]);

  return (
    <section className={styles.contents}>
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
    </section>
  );
};

export default Login;
