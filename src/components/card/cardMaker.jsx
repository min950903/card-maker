import React from 'react';
import styles from '../../assets/css/card/maker.module.css';
import Header from '../common/header';
import CardItem from './cardItem';

const CardMaker = ({ cards }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards && cards.map((card) => <CardItem card={card} />)}
    </section>
  );
};

export default CardMaker;
