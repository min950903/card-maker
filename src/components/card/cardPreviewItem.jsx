import React from 'react';
import styles from '../../assets/css/card/previewItem.moudule.css';
const CardPreviewItem = ({ card }) => {
  return (
    <section className={styles.container}>
      <h1>{card.name}</h1>
      <p>{card.company}</p>
      <hr />
      <p>{card.title}</p>
      <p>{card.email}</p>
      <p>{card.message}</p>
    </section>
  );
};

export default CardPreviewItem;
