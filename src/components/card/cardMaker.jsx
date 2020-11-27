import React from 'react';
import { useCallback } from 'react';
import styles from '../../assets/css/card/maker.module.css';
import Header from '../common/header';
import CardMakerItem from './cardMakerItem';

const CardMaker = ({ cards }) => {
  const onChangeValue = useCallback((event) => {
    console.log(event.currentTarget.value);
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards &&
        cards.map((card) => (
          <CardMakerItem
            card={card}
            key={card.name}
            onChangeValue={onChangeValue}
          />
        ))}
    </section>
  );
};

export default CardMaker;
