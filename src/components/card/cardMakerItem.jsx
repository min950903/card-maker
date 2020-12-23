import React from 'react';
import styles from '../../assets/css/card/makerItem.module.css';

const CardMakerItem = ({ card, onChangeValue, onDeleteCard }) => {
  const onDelete = (event) => {
    onDeleteCard(card.id);
  };

  const onChange = (event) => {
    if (null === event.target) {
      return;
    }
    event.preventDefault();

    const { name, value } = event.target;
    onChangeValue({ ...card, [name]: value });
  };

  return (
    <>
      {card && (
        <form className={styles.container}>
          <input
            className={styles.name}
            placeholder='Name'
            value={card.name}
            name='name'
            onChange={onChange}
          />
          <input
            className={styles.company}
            placeholder='Company'
            name='company'
            value={card.company}
            onChange={onChange}
          />
          <select
            className={styles.theme}
            value={card.theme}
            name='theme'
            onChange={onChange}
          >
            <option value='makerLight'>Light</option>
            <option value='makerBlack'>Black</option>
            <option value='makerColorful'>Colorful</option>
          </select>
          <input
            className={styles.title}
            placeholder='Title'
            name='title'
            value={card.title}
            onChange={onChange}
          />
          <input
            className={styles.email}
            placeholder='Email'
            name='email'
            value={card.email}
            onChange={onChange}
          />
          <textarea
            className={styles.message}
            placeholder='Message'
            name='message'
            onChange={onChange}
            defaultValue={card.message}
          ></textarea>
          <button className={styles.fileBtn}>No file</button>
          <button type='button' className={styles.addBtn} onClick={onDelete}>
            Delete
          </button>
        </form>
      )}
    </>
  );
};

export default CardMakerItem;
