import React from 'react';
import styles from '../../assets/css/card/makerItem.module.css';

const CardMakerItem = ({ card, onChangeValue }) => {
  return (
    <>
      {card && (
        <form className={styles.container}>
          <input
            className={styles.name}
            placeholder='Name'
            value={card.name}
            onChange={onChangeValue}
          />
          <input
            className={styles.company}
            placeholder='Company'
            value={card.company}
            onChange={onChangeValue}
          />
          <select
            className={styles.color}
            value={card.theme}
            onChange={onChangeValue}
          >
            <option value='makerLight'>Light</option>
            <option value='makerBlack'>Black</option>
            <option value='makerColorful'>Colorful</option>
          </select>
          <input
            className={styles.title}
            placeholder='Title'
            value={card.title}
            onChange={onChangeValue}
          />
          <input
            className={styles.email}
            placeholder='Email'
            value={card.email}
            onChange={onChangeValue}
          />
          <textarea
            className={styles.message}
            placeholder='Message'
            onChange={onChangeValue}
            defaultValue={card.message}
          ></textarea>
          <button className={styles.fileBtn}>No file</button>
          <button className={styles.addBtn}>Delete</button>
        </form>
      )}
    </>
  );
};

export default CardMakerItem;
