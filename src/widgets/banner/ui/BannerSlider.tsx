import { FC, useState } from 'react';
import styles from './BannerSlider.module.scss';
import { BannerSlide1 } from './BannerSlide1';
import { BannerSlide2 } from './BannerSlide2';
import { BannerSlide3 } from './BannerSlide3';

const slides = [
  <BannerSlide1 key={0} />, 
  <BannerSlide2 key={1} />, 
  <BannerSlide3 key={2} />
];

export const BannerSlider: FC = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <div className={styles.slider}>
      <button className={styles.arrow} onClick={prev} aria-label="Назад">&#8592;</button>
      <div className={styles.slide}>{slides[index]}</div>
      <button className={styles.arrow} onClick={next} aria-label="Вперёд">&#8594;</button>
    </div>
  );
}; 