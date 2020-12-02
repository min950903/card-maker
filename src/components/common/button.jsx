import React from 'react';
import styles from '../../assets/css/common/button.module.css';

const Button = ({ name, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
