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
