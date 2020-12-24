import React from 'react';
import styles from '../../assets/css/card/maker.module.css';
import CardAddForm from './cardAddForm';
import CardMakerItem from './cardMakerItem';

const CardMaker = ({
  FileInput,
  cards,
  onSubmitCard,
  onDeleteCard,
  onChangeValue,
  onUploadImg,
}) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards &&
        Object.keys(cards).map((key) => (
          <CardMakerItem
            FileInput={FileInput}
            card={cards[key]}
            key={key}
            onChangeValue={onChangeValue}
            onDeleteCard={onDeleteCard}
          />
        ))}
      <CardAddForm FileInput={FileInput} onSubmitCard={onSubmitCard} />
    </section>
  );
};

export default CardMaker;
