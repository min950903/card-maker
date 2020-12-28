import React, { memo } from 'react';
import styles from '../../assets/css/common/footer.module.css';

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>Have a dream!</p>
    </footer>
  );
});

export default Footer;
