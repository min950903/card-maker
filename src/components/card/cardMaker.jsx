import React, { useCallback } from 'react';
import styles from '../../assets/css/card/maker.module.css';
import CardAddForm from './cardAddForm';
import CardMakerItem from './cardMakerItem';

const CardMaker = ({ cards, onSubmitCard, onDeleteCard, onChangeValue }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards &&
        Object.keys(cards).map((key) => (
          <CardMakerItem
            card={cards[key]}
            key={key}
            onChangeValue={onChangeValue}
            onDeleteCard={onDeleteCard}
          />
        ))}
      <CardAddForm onSubmitCard={onSubmitCard} />
    </section>
  );
};

export default CardMaker;
