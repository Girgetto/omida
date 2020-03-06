import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './style.module.scss';

const FirstSquares = () => {
  const [t] = useTranslation();
  return (
    <div className={styles.squares}>
      <div className={styles.square}>
        {t('description.title5')}
        {t('description.part5')}
      </div>
      <div className={styles.square}>image</div>
      <div className={styles.square}>
        {t('description.title6')}
        {t('description.part6')}
      </div>
    </div>
  );
};

export default FirstSquares;
