import React from 'react';
import styles from '../../assets/css/card/item.module.css';

const CardItem = ({ card }) => {
  return (
    <>
      {card && (
        <form className={styles.container}>
          <input className={styles.name} placeholder='Name' value={card.name} />
          <input
            className={styles.company}
            placeholder='Company'
            value={card.company}
          />
          <select
            className={styles.color}
            defaultValue='makerLight'
            value={card.theme}
          >
            <option value='makerLight'>Light</option>
            <option value='makerBlack'>Black</option>
            <option value='makerColorful'>Colorful</option>
          </select>
          <input
            className={styles.title}
            placeholder='Title'
            value={card.title}
          />
          <input
            className={styles.email}
            placeholder='Email'
            value={card.email}
          />
          <textarea className={styles.message} placeholder='Message'>
            {card.message}
          </textarea>
          <button className={styles.fileBtn}>No file</button>
          <button className={styles.addBtn}>Add</button>
        </form>
      )}
    </>
  );
};

export default CardItem;
