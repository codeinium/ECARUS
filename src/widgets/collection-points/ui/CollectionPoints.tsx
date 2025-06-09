import { FC } from 'react';
import styles from './CollectionPoints.module.scss';
import { CollectionPointWidget } from './CollectionPointWidget';
import { EcoMarketWidget } from './EcoMarketWidget';

export const CollectionPoints: FC = () => {
  return (
    <section className={styles.collectionPoints}>
      <CollectionPointWidget />
      <EcoMarketWidget />
    </section>
  );
}; 