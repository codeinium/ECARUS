import { FC } from 'react';
import styles from './MainPage.module.scss';
import { Header } from '../../../widgets/header';
import { Banner } from '../../../widgets/banner';
import { CollectionPoints } from '../../../widgets/collection-points';
import { Footer } from '../../../widgets/footer';

export const MainPage: FC = () => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <Banner />
      <div className={styles.sections}>
        <CollectionPoints />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage; 