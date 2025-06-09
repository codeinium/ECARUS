import { FC, useEffect } from 'react';
import { useCollectionPointStore } from '../../entities/collection-point';
import styles from './CollectionPointsPage.module.scss';

export const CollectionPointsPage: FC = () => {
  const { points, isLoading, error, fetchPoints } = useCollectionPointStore();

  useEffect(() => {
    fetchPoints();
  }, [fetchPoints]);

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Пункты сбора</h2>
      {isLoading && <div>Загрузка...</div>}
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.list}>
        {points.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.name}>{p.name}</div>
            <div className={styles.address}>{p.address}</div>
            <div className={styles.city}>{p.city}</div>
            {p.schedule && <div className={styles.schedule}>Время: {p.schedule}</div>}
            {p.types && p.types.length > 0 && (
              <div className={styles.types}>Типы: {p.types.join(', ')}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}; 