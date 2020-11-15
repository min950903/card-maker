import React from 'react';
import styles from '../../assets/css/card/maker.module.css';
import CardItem from './cardItem';

const CardMaker = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.cardTitle}>Card Maker</h1>
      <CardItem />
    </div>
  );
};

export default CardMaker;
