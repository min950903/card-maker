import React, { useRef } from 'react';
import styles from '../../assets/css/common/imageButton.module.css';

const ImageButton = ({ fileName, cloudinary, onUploadFile }) => {
  const isFile = null === fileName ? styles.no : styles.yes;
  const fileInputRef = useRef();

  const onClickBtn = () => {
    fileInputRef.current.click();
  };

  const onUpload = async (event) => {
    const { original_filename, url } = await cloudinary.uploadImg(
      event.target.files[0]
    );
    onUploadFile({ fileName: original_filename, fileURL: url });
  };

  return (
    <div className={styles.container}>
      <button
        type='button'
        onClick={onClickBtn}
        className={`${styles.button} ${isFile}`}
      >
        {fileName || 'No File'}
      </button>
      <input
        ref={fileInputRef}
        type='file'
        name='fileName'
        className={styles.input}
        accept='image/*'
        onChange={onUpload}
      />
    </div>
  );
};

export default ImageButton;
