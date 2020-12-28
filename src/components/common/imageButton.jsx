import React, { memo, useRef, useState } from 'react';
import styles from '../../assets/css/common/imageButton.module.css';

const ImageButton = memo(({ fileName, cloudinary, onUploadFile }) => {
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef();

  const onClickBtn = () => {
    fileInputRef.current.click();
  };

  const onUpload = async (event) => {
    setIsLoading(true);
    const { original_filename, url } = await cloudinary.uploadImg(
      event.target.files[0]
    );

    setIsLoading(false);
    onUploadFile({ fileName: original_filename, fileURL: url });
  };

  return (
    <div className={styles.container}>
      {!isLoading && (
        <>
          <button
            type='button'
            onClick={onClickBtn}
            className={`${styles.button} ${
              fileName === null ? styles.grey : styles.pink
            }`}
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
        </>
      )}
      {isLoading && <div className={styles.loading}></div>}
    </div>
  );
});

export default ImageButton;
