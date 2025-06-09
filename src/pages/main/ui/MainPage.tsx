import { FC } from 'react';
import styles from './MainPage.module.scss';
import { Banner } from '../../../widgets/banner';
import { CollectionPoints } from '../../../widgets/collection-points';

export const MainPage: FC = () => {
  return (
    <div className={styles.mainPage}>
      <Banner />
      <div className={styles.sections}>
        <CollectionPoints />
      </div>
    </div>
  );
};

export default MainPage; 