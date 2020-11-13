import React from 'react';
import styles from '../../assets/css/card/maker.module.css';
const CardMaker = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      <form className={styles.grid}>
        <input className={styles.name} placeholder='Name' />
        <input placeholder='Company' />
        <select>
          <option value='makerLight' selected>
            Light
          </option>
          <option value='makerBlack'>Black</option>
          <option value='makerColorful'>Colorful</option>
        </select>
        <input className={styles.title} placeholder='Title' />
        <input placeholder='Email' />
        <input className={styles.message} placeholder='Message' />
        <button>No file</button>
        <button>Add</button>
      </form>
    </div>
  );
};

export default CardMaker;
