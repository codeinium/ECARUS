import { FC, useEffect } from 'react';
import { useEcoMarketStore } from '../../entities/eco-market';
import styles from './EcoMarketPage.module.scss';

export const EcoMarketPage: FC = () => {
  const { products, isLoading, error, fetchProducts } = useEcoMarketStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>ЭкоМаркет</h2>
      {isLoading && <div>Загрузка...</div>}
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.list}>
        {products.map((p) => (
          <div key={p.id} className={styles.card}>
            {p.imageUrl && <img src={p.imageUrl} alt={p.name} className={styles.image} />}
            <div className={styles.name}>{p.name}</div>
            <div className={styles.price}>{p.price} экокоинов</div>
            {p.description && <div className={styles.description}>{p.description}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}; 