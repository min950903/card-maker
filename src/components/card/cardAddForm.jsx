import React from 'react';
import styles from '../../assets/css/card/makerItem.module.css';

const CardAddForm = ({ onSubmitCard }) => {
  return (
    <>
      <form className={styles.container} onSubmit={onSubmitCard}>
        <input className={styles.name} name='name' placeholder='Name' />
        <input
          className={styles.company}
          name='company'
          placeholder='Company'
        />
        <select className={styles.color} name='color'>
          <option value='makerLight'>Light</option>
          <option value='makerBlack'>Black</option>
          <option value='makerColorful'>Colorful</option>
        </select>
        <input className={styles.title} name='title' placeholder='Title' />
        <input className={styles.email} name='email' placeholder='Email' />
        <textarea
          className={styles.message}
          name='message'
          placeholder='Message'
        ></textarea>
        <button className={styles.fileBtn}>No file</button>
        <button type='submit' className={styles.addBtn}>
          Add
        </button>
      </form>
    </>
  );
};

export default CardAddForm;
