import React from 'react';
import LoginContents from '../components/login/loginContents';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import styles from '../assets/css/login/login.module.css';

const Login = () => {
  return (
    <>
      <div className={styles.login}>
        <Header />
        <LoginContents />
        <Footer />
      </div>
    </>
  );
};

export default Login;
