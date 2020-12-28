import React, { memo, useRef, useState } from 'react';
import styles from '../../assets/css/card/makerItem.module.css';

const CardAddForm = memo(({ FileInput, onSubmitCard }) => {
  const [file, setFile] = useState({
    fileName: null,
    fileURL: null,
  });

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
      fileName: file.fileName || null,
      fileURL: file.fileURL || null,
    };

    formRef.current.reset();
    setFile({
      fileName: null,
      fileURL: null,
    });

    onSubmitCard(card);
  };

  const onUploadFile = ({ fileName, fileURL }) => {
    setFile({ fileName: fileName, fileURL: fileURL });
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
      <select ref={themeRef} className={styles.theme} name='color'>
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
      <FileInput fileName={file.fileName} onUploadFile={onUploadFile} />
      <button type='submit' className={styles.addBtn}>
        Add
      </button>
    </form>
  );
});

export default CardAddForm;
