import React from 'react';
import { useRef } from 'react';
import styles from '../../assets/css/card/makerItem.module.css';

const CardAddForm = ({ onSubmitCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();

    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: null,
    };
    formRef.current.reset();

    onSubmitCard(card);
  };

  return (
    <form ref={formRef} className={styles.container} onSubmit={onSubmit}>
      <input
        ref={nameRef}
        className={styles.name}
        name='name'
        placeholder='Name'
      />
      <input
        ref={companyRef}
        className={styles.company}
        name='company'
        placeholder='Company'
      />
      <select ref={themeRef} className={styles.color} name='color'>
        <option value='makerLight'>Light</option>
        <option value='makerBlack'>Black</option>
        <option value='makerColorful'>Colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.title}
        name='title'
        placeholder='Title'
      />
      <input
        ref={emailRef}
        className={styles.email}
        name='email'
        placeholder='Email'
      />
      <textarea
        ref={messageRef}
        className={styles.message}
        name='message'
        placeholder='Message'
      ></textarea>
      <button className={styles.fileBtn}>No file</button>
      <button type='submit' className={styles.addBtn}>
        Add
      </button>
    </form>
  );
};

export default CardAddForm;
