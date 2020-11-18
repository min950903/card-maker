import React, { useCallback } from 'react';
import styles from '../assets/css/login/login.module.css';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import LoginContents from '../components/login/loginContents';

const Login = ({ authService }) => {
  const onSign = useCallback(
    (evnet) => {
      authService.login(evnet.currentTarget.textContent);
    },
    [authService]
  );

  return (
    <>
      <div className={styles.login}>
        <Header />
        <LoginContents onSign={onSign} />
        <Footer />
      </div>
    </>
  );
};

export default Login;
