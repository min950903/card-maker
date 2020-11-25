import React from 'react';
import styles from '../../assets/css/card/maker.module.css';
import CardItem from './cardItem';

const CardMaker = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      <CardItem />
    </section>
  );
};

export default CardMaker;
