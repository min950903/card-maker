import React from 'react';
import styles from '../../assets/css/card/preview.module.css';
import CardPreviewItem from './cardPreviewItem';

const CardPreview = ({ cards }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Card Review</h1>
      {cards &&
        cards.map((card) => <CardPreviewItem card={card} key={card.id} />)}
    </section>
  );
};

export default CardPreview;
