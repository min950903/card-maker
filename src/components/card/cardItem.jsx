import React from 'react';
import styles from '../../assets/css/card/item.module.css';

const CardItem = () => {
  return (
    <form className={styles.container}>
      <input className={styles.name} placeholder='Name' />
      <input className={styles.company} placeholder='Company' />
      <select className={styles.color} defaultValue='makerLight'>
        <option value='makerLight'>Light</option>
        <option value='makerBlack'>Black</option>
        <option value='makerColorful'>Colorful</option>
      </select>
      <input className={styles.title} placeholder='Title' />
      <input className={styles.email} placeholder='Email' />
      <textarea className={styles.message} placeholder='Message' />
      <button className={styles.fileBtn}>No file</button>
      <button className={styles.addBtn}>Add</button>
    </form>
  );
};

export default CardItem;
