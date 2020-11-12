import React from 'react';
import CardMaker from '../components/card/cardMaker';
import CardPreview from '../components/card/cardPreview';
import styles from '../assets/css/card/card.module.css';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
const CardApp = () => {
  return (
    <>
      <Header />
      <div className={styles.card}>
        <div className={styles.maker}>
          <CardMaker />
        </div>
        <div className={styles.preview}>
          <CardPreview />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardApp;
