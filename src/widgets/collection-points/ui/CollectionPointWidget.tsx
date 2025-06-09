import { FC } from 'react';
import styles from './CollectionPointWidget.module.scss';
import { Button } from '../../../shared/ui/Button';

export const CollectionPointWidget: FC = () => (
  <div className={styles.widget}>
    <h2 className={styles.title}>Пункты сбора</h2>
    <Button size="large" variant="secondary">Подробнее</Button>
    <div className={styles.illustration} />
    <p className={styles.text}>Посмотри, где в твоем городе можно сдать вторсырье на переработку</p>
  </div>
); 