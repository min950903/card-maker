import React from 'react';
import CardMaker from '../../components/card/cardMaker';
import CardPreview from '../../components/card/cardPreview';
import styles from '../../assets/css/card/card.module.css';
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
const Card = ({ authService }) => {
  const cards = [
    {
      name: 'eliie',
      company: 'samsung',
      theme: 'makerBlack',
      title: 'software',
      email: 'test@gmail.com',
      message: "Don't forget to code your dream",
    },
    {
      name: 'min young',
      company: 'naver',
      theme: 'makerBlack',
      title: 'senior',
      email: 'minyount@gmail.com',
      message: 'No pain, No gain',
    },
    {
      name: 'Choi',
      company: 'Kakao',
      theme: 'makerColorful',
      title: 'Product Manager',
      email: 'ChoiPM@gmail.com',
      message: 'I love u',
    },
    {},
  ];
  const history = useHistory();

  const onLogout = () => {
    authService.signOut();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  }, [authService, history]);

  return (
    <section className={styles.container}>
      <Header onLogout={onLogout} />
      <div className={styles.card}>
        <CardMaker cards={cards} />
        <hr className={styles.splite} />
        <CardPreview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Card;
