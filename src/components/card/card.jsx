import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../assets/css/card/card.module.css';
import CardMaker from '../../components/card/cardMaker';
import CardPreview from '../../components/card/cardPreview';
import Footer from '../../components/common/footer';
import Header from '../../components/common/header';
const Card = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'eliie',
      company: 'samsung',
      theme: 'makerBlack',
      title: 'software',
      email: 'test@gmail.com',
      message: "Don't forget to code your dream",
      fileName: 'ellie',
      fileURL: 'ellie.png',
    },
    {
      id: 2,
      name: 'minyoung',
      company: 'naver',
      theme: 'makerBlack',
      title: 'senior',
      email: 'minyount@gmail.com',
      message: 'No pain, No gain',
      fileName: 'minyoung',
      fileURL: null,
    },
    {
      id: 3,
      name: 'Choi',
      company: 'Kakao',
      theme: 'makerColorful',
      title: 'Product Manager',
      email: 'ChoiPM@gmail.com',
      message: 'I love u',
      fileName: 'Choi',
      fileURL: null,
    },
  ]);
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

  const onSubmitCard = useCallback(
    (card) => {
      const updateCard = [...cards, card];
      setCards(updateCard);
    },
    [cards]
  );

  return (
    <section className={styles.container}>
      <Header onLogout={onLogout} />
      <div className={styles.card}>
        <CardMaker cards={cards} onSubmitCard={onSubmitCard} />
        <hr className={styles.splite} />
        <CardPreview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Card;
