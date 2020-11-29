import React from 'react';
import styles from '../../assets/css/card/previewItem.module.css';
const CardPreviewItem = ({ card }) => {
  return (
    <section className={styles.container}>
      <div className={styles.img}>
        <img
          src={require('../../assets/img/default.jpg')}
          alt='img'
          width='100px'
          height='100px'
        />
      </div>
      <div className={styles.contents}>
        <h1 className={styles.name}>{card.name}</h1>
        <p>{card.company}</p>
        <hr />
        <p>{card.title}</p>
        <p>{card.email}</p>
        <p>{card.message}</p>
      </div>
    </section>
  );
};

export default CardPreviewItem;
