import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../assets/css/card/card.module.css';
import CardMaker from '../../components/card/cardMaker';
import CardPreview from '../../components/card/cardPreview';
import Footer from '../../components/common/footer';
import Header from '../../components/common/header';
import Cloudinary from '../../lib/api/cloudinary';

const Card = ({ FileInput, authService }) => {
  const cloudinary = new Cloudinary();
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: 'eliie',
      company: 'samsung',
      theme: 'makerBlack',
      title: 'software',
      email: 'test@gmail.com',
      message: "Don't forget to code your dream",
      fileName: null,
      fileURL: null,
    },
    2: {
      id: 2,
      name: 'minyoung',
      company: 'naver',
      theme: 'makerBlack',
      title: 'senior',
      email: 'minyount@gmail.com',
      message: 'No pain, No gain',
      fileName: null,
      fileURL: null,
    },
    3: {
      id: 3,
      name: 'Choi',
      company: 'Kakao',
      theme: 'makerColorful',
      title: 'Product Manager',
      email: 'ChoiPM@gmail.com',
      message: 'I love u',
      fileName: null,
      fileURL: null,
    },
  });

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

  const onDeleteCard = useCallback(
    (id) => {
      const deletedCards = { ...cards };
      delete deletedCards[id];
      setCards(deletedCards);
    },
    [cards]
  );

  const onCreateOrUpdateCard = (updateCard) => {
    setCards((cards) => {
      const updateCards = { ...cards };
      updateCards[updateCard.id] = updateCard;

      return updateCards;
    });
  };

  return (
    <section className={styles.container}>
      <Header onLogout={onLogout} />
      <div className={styles.card}>
        <CardMaker
          FileInput={FileInput}
          cards={cards}
          onSubmitCard={onCreateOrUpdateCard}
          onDeleteCard={onDeleteCard}
          onChangeValue={onCreateOrUpdateCard}
        />
        <hr className={styles.splite} />
        <CardPreview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Card;
