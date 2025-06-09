import { FC } from 'react';
import styles from './BannerSlide2.module.scss';
import { Button } from '../../../shared/ui/Button';

export const BannerSlide2: FC = () => (
  <div className={styles.slide}>
    <div className={styles.content}>
      <h1 className={styles.title}>А вы знали...</h1>
      <p className={styles.subtitle}>что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет?</p>
      <Button size="large" variant="primary">Узнать больше</Button>
    </div>
    <div className={styles.image} />
  </div>
); 