import React, { useCallback } from 'react';
import styles from '../../assets/css/card/maker.module.css';
import CardAddForm from './cardAddForm';
import CardMakerItem from './cardMakerItem';

const CardMaker = ({ cards, onSubmitCard }) => {
  const onChangeValue = useCallback((event) => {
    console.log(event.currentTarget.value);
  }, []);

  console.log(cards);
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards &&
        cards.map((card) => (
          <CardMakerItem
            card={card}
            key={card.id}
            onChangeValue={onChangeValue}
          />
        ))}
      <CardAddForm onSubmitCard={onSubmitCard} />
    </section>
  );
};

export default CardMaker;
