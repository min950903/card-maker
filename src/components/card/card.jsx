import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../assets/css/card/card.module.css';
import CardMaker from '../../components/card/cardMaker';
import CardPreview from '../../components/card/cardPreview';
import Footer from '../../components/common/footer';
import Header from '../../components/common/header';

const Card = ({ FileInput, authService, dbService }) => {
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const history = useHistory();

  const onLogout = () => {
    authService.signOut();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopCards = dbService.getCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopCards();
  }, [dbService, userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
        setCards(dbService.getCards(userId));
      } else {
        history.push('/');
      }
    });
  }, [authService, dbService, history, userId]);

  const onDeleteCard = useCallback(
    (id) => {
      const deletedCards = { ...cards };
      delete deletedCards[id];
      setCards(deletedCards);

      dbService.deleteCard(userId, cards[id]);
    },
    [cards, dbService, userId]
  );

  const onCreateOrUpdateCard = (updateCard) => {
    setCards((cards) => {
      const updateCards = { ...cards };
      updateCards[updateCard.id] = updateCard;

      return updateCards;
    });
    dbService.addOrUpdateCard(userId, updateCard);
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
