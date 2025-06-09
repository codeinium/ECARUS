import { FC } from 'react';
import styles from './BannerSlide3.module.scss';
import { Button } from '../../../shared/ui/Button';

export const BannerSlide3: FC = () => (
  <div className={styles.slide}>
    <div className={styles.content}>
      <h1 className={styles.title}>Что с масками?</h1>
      <p className={styles.subtitle}>Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.</p>
      <Button size="large" variant="primary">Пункты сбора масок</Button>
    </div>
    <div className={styles.image} />
  </div>
); 