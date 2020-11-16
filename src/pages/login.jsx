import React from 'react';
import LoginContents from '../components/login/loginContents';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import styles from '../assets/css/login/login.module.css';
import {
  googleSignPopup,
  signGoogleRedirect,
  getRedirectResult,
} from '../lib/api/authentication';
import { useEffect } from 'react';
import { useCallback } from 'react';

const Login = () => {
  const onClickGoogle = useCallback(() => {
    googleSignPopup();
    signGoogleRedirect();
    getRedirectResult();
  }, []);

  return (
    <>
      <div className={styles.login}>
        <Header />
        <LoginContents onClickGoogle={onClickGoogle} />
        <Footer />
      </div>
    </>
  );
};

export default Login;
