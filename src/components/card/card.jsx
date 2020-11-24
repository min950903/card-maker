import React from 'react';
import CardMaker from '../../components/card/cardMaker';
import CardPreview from '../../components/card/cardPreview';
import styles from '../../assets/css/card/card.module.css';
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
const Card = ({ onLogout }) => {
  return (
    <>
      <Header onLogout={onLogout} />
      <section className={styles.container}>
        <div className={styles.maker}>
          <CardMaker />
        </div>
        <div className={styles.preview}>
          <CardPreview />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Card;
