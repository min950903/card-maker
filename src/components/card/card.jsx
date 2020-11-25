import React from 'react';
import CardMaker from '../../components/card/cardMaker';
import CardPreview from '../../components/card/cardPreview';
import styles from '../../assets/css/card/card.module.css';
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const Card = ({ authService }) => {
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
  });

  return (
    <section className={styles.container}>
      <Header onLogout={onLogout} />
      <div className={styles.card}>
        <CardMaker />
        <hr className={styles.splite} />
        <CardPreview />
      </div>
      <Footer />
    </section>
  );
};

export default Card;
