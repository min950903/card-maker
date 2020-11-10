import React from 'react';
import LoginContents from '../components/login/loginContents';
import LoginFooter from '../components/login/loginFooter';
import LoginHeader from '../components/login/loginHeader';
import styles from '../components/login/login.module.css';

const Login = () => {
  return (
    <>
      <div className={styles.login}>
        <LoginHeader />
        <LoginContents />
        <LoginFooter />
      </div>
    </>
  );
};

export default Login;
