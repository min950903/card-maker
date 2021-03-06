import React from 'react';
import styles from '../../assets/css/card/preview.module.css';
import CardPreviewItem from './cardPreviewItem';

const CardPreview = ({ cards }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Card Review</h1>
      <div className={styles.preview}>
        {cards &&
          Object.keys(cards).map((key) => (
            <CardPreviewItem card={cards[key]} key={key} />
          ))}
      </div>
    </section>
  );
};

export default CardPreview;
