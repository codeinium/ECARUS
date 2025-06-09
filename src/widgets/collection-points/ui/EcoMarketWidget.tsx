import { FC } from 'react';
import styles from './EcoMarketWidget.module.scss';
import { Button } from '../../../shared/ui/Button';

export const EcoMarketWidget: FC = () => (
  <div className={styles.widget}>
    <h2 className={styles.title}>ЭкоМаркет</h2>
    <Button size="large" variant="secondary">Подробнее</Button>
    <div className={styles.illustration} />
    <p className={styles.text}>Используй заработанные экокоины для покупки товаров из переработанных материалов</p>
  </div>
); 