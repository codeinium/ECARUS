import { FC } from 'react';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <span className={styles.email}>info@ecorus.ru</span>
        <span className={styles.phone}>+7 (800) 880-88-88</span>
      </div>
    </footer>
  );
}; 