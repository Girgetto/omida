import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './style.module.scss';
import view1 from '../../../../assets/img/view1.jpg';
import view2 from '../../../../assets/img/view2.jpg';

const FirstSquares = () => {
  const [t] = useTranslation();
  return (
    <div className={styles.squares}>
      <div className={styles.square}>
        <img className={styles.image} src={view1} alt="view1" />
      </div>
      <div className={styles.square}>
        {t('home.WhenBeing')}
        {t('home.InThree')}
      </div>
      <div className={styles.square}>
        <img className={styles.image} src={view2} alt="view2" />
      </div>
    </div>
  );
};

export default FirstSquares;
