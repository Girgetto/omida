import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './style.module.scss';

const LastSection = () => {
  const [t] = useTranslation();
  return (
    <div className={styles.lastSection} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <div>
        <h2>
          {t('home.ATradition')}
        </h2>
      </div>
      <div>
        <p>
          {t('home.WeDevelop')}
        </p>
      </div>
    </div>
  );
};

export default LastSection;
