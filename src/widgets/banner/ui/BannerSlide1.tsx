import { FC } from 'react';
import styles from './BannerSlide1.module.scss';
import { Button } from '../../../shared/ui/Button';

export const BannerSlide1: FC = () => (
  <div className={styles.slide}>
    <div className={styles.content}>
      <h1 className={styles.title}>Сделаем мир чище</h1>
      <p className={styles.subtitle}>Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов</p>
      <Button size="large" variant="primary">Условия сервиса</Button>
    </div>
    <div className={styles.image} />
  </div>
); 