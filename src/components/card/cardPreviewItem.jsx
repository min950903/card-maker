import React from 'react';
import styles from '../../assets/css/card/previewItem.module.css';
const CardPreviewItem = ({ card }) => {
  const bgColor =
    card.theme === 'makerBlack'
      ? styles.makerBlack
      : 'makerColorful'
      ? styles.makerColorful
      : styles.makerLight;

  return (
    <section className={`${styles.item} ${bgColor}`}>
      <img
        src={require('../../assets/img/default.jpg')}
        alt='img'
        width='150px'
        height='150px'
        className={styles.img}
      />
      <div className={styles.contents}>
        <h1 className={styles.name}>{card.name}</h1>
        <p className={styles.company}>{card.company}</p>
        <hr className={styles.split} />
        <p className={styles.title}>{card.title}</p>
        <p className={styles.email}>{card.email}</p>
        <p className={styles.message}>{card.message}</p>
      </div>
    </section>
  );
};

export default CardPreviewItem;
